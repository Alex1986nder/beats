(function () {
  const formWrap = document.querySelector("#formWrap");
  const form__btn = document.querySelector(".form__btn");
  const form = document.querySelector(".section.form");

  form__btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (validateForm(formWrap)) {
      const data = {
        name: formWrap.elements.name.value,
        phone: formWrap.elements.phone.value,
        comment: formWrap.elements.comment.value,
        to: formWrap.elements.to.value,
      };
      const xhr = new XMLHttpRequest();
      xhr.responseType = "json";
      xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.send(JSON.stringify(data));
      xhr.addEventListener("load", () => {
        if (xhr.status > 400) {
          openModal("Ошибка, попробуйте еще раз!");
        } else {
          openModal("Сообщение отправлено!");
        }
      });
    }
  });

  function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
      valid = false;
    }

    if (!validateField(form.elements.phone)) {
      valid = false;
    }

    if (!validateField(form.elements.comment)) {
      valid = false;
    }

    if (!validateField(form.elements.to)) {
      valid = false;
    }

    return valid;
  }

  function validateField(form__input) {
    form__input.placeholder = "Заполните поле!";
    return form__input.checkValidity();
  }

  function openModal(text) {
    document.body.classList.toggle("locked");
    const overlay = document.createElement("div");
    overlay.classList.add("form__overlay");

    const window = document.createElement("div");
    window.classList.add("form__overlay-window");
    window.textContent = text;

    const link = document.createElement("a");
    link.classList.add("button");
    link.textContent = "закрыть";

    link.addEventListener("click", function () {
      document.body.classList.toggle("locked");
      form.removeChild(overlay);
    });

    window.appendChild(link);
    overlay.appendChild(window);
    form.appendChild(overlay);

    if (form.appendChild(overlay)) {
      document.addEventListener("wheel", prevent, { passive: false });
    }
  }
})();
