document.addEventListener("DOMContentLoaded", () => {
  const mail = 'kontakt@kasiaizak.pl';
  const subject = 'Zapytanie ze strony CV';
  const userElements = document.querySelectorAll('.mailusz');
  userElements.forEach(el => {
    const a = document.createElement('a');
    a.href = `mailto:${mail}?subject=${encodeURIComponent(subject)}`;
    a.textContent = ` ${mail} `;
    el.textContent = '';
    el.appendChild(a);
  });
});
