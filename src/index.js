import Inputmask from 'inputmask';

const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
const bodyRef = document.querySelector('body');

menuBtnRef.addEventListener('click', () => {
  const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  menuBtnRef.classList.toggle('is-open');
  menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
  bodyRef.classList.toggle('no-scroll');
});

//input mask
const form = document.querySelector('.registration__form');
const telselector = form.querySelector('input[type="tel"]');

const inputmask = new Inputmask('+38 099 999 99 99');
inputmask.mask(telselector);

new window.JustValidate('.registration__form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telselector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 9;
      },
    },
  },
  colorWrong: 'red',
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов',
    },
    tel: {
      required: 'Введите номер телефона',
      function: 'Здесь должно быть 9 символов без +38 0',
    },
  },
  submitHandler: function (thisForm) {},
});
