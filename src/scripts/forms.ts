// Client-side validation and confirmation for forms marked [data-validate].
// Submissions are not sent anywhere yet: connect `submit()` to a booking
// service (OpenTable, Resy, SevenRooms) or a form endpoint before launch.
//
// Each field's error element is #<field id>-error. A [data-success] panel
// next to the form is shown after a valid submit; elements inside it with
// [data-echo="<field name>"] are filled with the submitted values.

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function message(field: Field): string {
  const v = field.validity;
  const label = field.dataset.label ?? 'This field';
  if (v.valueMissing) return field.dataset.msgRequired ?? `Enter ${label.toLowerCase()}.`;
  if (v.typeMismatch && field.type === 'email') return 'Enter an email address like name@example.com.';
  if (v.patternMismatch) return field.dataset.msgPattern ?? `Check the format of ${label.toLowerCase()}.`;
  if (v.rangeUnderflow || v.rangeOverflow) return field.dataset.msgRange ?? `Choose a valid ${label.toLowerCase()}.`;
  if (v.customError) return field.validationMessage;
  return '';
}

function check(field: Field) {
  const err = document.getElementById(`${field.id}-error`);
  const text = field.validity.valid ? '' : message(field);
  field.setAttribute('aria-invalid', String(!!text));
  if (err) err.textContent = text;
  return !text;
}

async function submit(_data: FormData) {
  // Placeholder for the real request.
  await new Promise((r) => setTimeout(r, 700));
}

export function initForms(extraChecks: (form: HTMLFormElement) => void = () => {}) {
  document.querySelectorAll<HTMLFormElement>('form[data-validate]').forEach((form) => {
    form.noValidate = true;
    const fields = [...form.querySelectorAll<Field>('input, select, textarea')].filter((f) => f.name);
    const touched = new WeakSet<Field>();

    fields.forEach((f) => {
      f.addEventListener('blur', () => {
        touched.add(f);
        extraChecks(form);
        check(f);
      });
      f.addEventListener('input', () => {
        if (!touched.has(f)) return;
        extraChecks(form);
        check(f);
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      extraChecks(form);
      const results = fields.map((f) => check(f));
      const firstBad = fields[results.indexOf(false)];
      if (firstBad) {
        firstBad.focus();
        return;
      }

      const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
      const label = button.textContent;
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      button.textContent = button.dataset.busy ?? 'Sending…';

      const data = new FormData(form);
      await submit(data);

      const success = form.parentElement?.querySelector<HTMLElement>('[data-success]');
      if (success) {
        success.querySelectorAll<HTMLElement>('[data-echo]').forEach((el) => {
          const field = form.elements.namedItem(el.dataset.echo!) as Field | null;
          let value = String(data.get(el.dataset.echo!) ?? '');
          if (field instanceof HTMLSelectElement) value = field.selectedOptions[0]?.text ?? value;
          if (field instanceof HTMLInputElement && field.type === 'date' && value) {
            value = new Date(`${value}T12:00`).toLocaleDateString('en-US', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            });
          }
          el.textContent = value;
        });
        form.hidden = true;
        success.hidden = false;
        success.querySelector<HTMLElement>('[tabindex="-1"]')?.focus();
        success.scrollIntoView({ block: 'center' });
      }
      button.disabled = false;
      button.removeAttribute('aria-busy');
      button.textContent = label;
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-reset-form]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const success = btn.closest<HTMLElement>('[data-success]')!;
      const form = success.parentElement!.querySelector<HTMLFormElement>('form[data-validate]')!;
      form.reset();
      form.querySelectorAll('[aria-invalid]').forEach((f) => f.removeAttribute('aria-invalid'));
      success.hidden = true;
      form.hidden = false;
      form.querySelector<Field>('input, select, textarea')?.focus();
    });
  });
}
