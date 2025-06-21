import { validateForms } from "./../functions/validate-forms.js";

const checks1 = [
  {
    selector: ".form__agree",
    errorMessage: "Выберите чекбоксы",
  },
];

const rules1 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const checks2 = [
  {
    selector: ".form__agree",
    errorMessage: "Выберите чекбоксы",
  },
];

const rules2 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const checks3 = [
  {
    selector: ".form__agree",
    errorMessage: "Выберите чекбоксы",
  },
];

const rules3 = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
];

const afterForm1 = () => {
  const form = document.querySelector("#modalFormCta");
  const parent = form.closest(".modal-cta__body");
  const title = parent.querySelector(".modal-cta__title");
  const desc = parent.querySelector(".modal-cta__subtitle");

  form.remove();
  title.textContent = "Сообщение отправлено";
  desc.textContent =
    "Спасибо за обращениее в шану компанию. В течение получаса с Вами свяжется наш специалист для уточнения всех вопросв.";
};

const afterForm2 = () => {
  const form = document.querySelector("#ctaForm");
  const parent = form.closest(".cta__content ");
  const title = parent.querySelector(".cta__title");
  const desc = parent.querySelector(".cta__subtitle");

  form.remove();
  title.textContent = "Сообщение отправлено";
  desc.textContent =
    "Спасибо за обращениее в шану компанию. В течение получаса с Вами свяжется наш специалист для уточнения всех вопросв.";
};

const afterForm3 = () => {
  const form = document.querySelector("#buildForm");
  const parent = form.closest(".mb-form__header ");
  const title = parent.querySelector(".mb-form__title");
  const desc = parent.querySelector(".mb-form__subtitle");

  form.remove();
  title.textContent = "Сообщение отправлено";
  desc.textContent =
    "Спасибо за обращениее в шану компанию. В течение получаса с Вами свяжется наш специалист для уточнения всех вопросв.";
};

validateForms("#modalFormCta", rules1, checks1, afterForm1);
validateForms("#ctaForm", rules2, checks2, afterForm2);
validateForms("#buildForm", rules3, checks3, afterForm3);
