/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder = "Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.*/

const validationInput = document.getElementById('validation-input');
    const requiredLength = parseInt(validationInput.getAttribute('data-length'));
    validationInput.addEventListener('blur', () => {
      const inputValue = validationInput.value.trim();
      const inputLength = inputValue.length;
      if (inputLength === requiredLength) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
      } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
      }
    });
