var buttonContactUs = document.querySelector(".contact-us-button");
var modalContactUs = document.querySelector(".modal-contact-us");
var modalContactUsClose = document.querySelector(".modal-contact-us__close");
var modalContactUsForm = document.querySelector(".modal-contact-us__form");
var modalContactUsNameInput = document.querySelector(".modal-contact-us__name-input");
var modalContactUsEmailInput = document.querySelector(".modal-contact-us__email-input");
var modalContactUsTextarea = document.querySelector(".modal-contact-us__textarea");


var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

buttonContactUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContactUs.classList.add("modal-show");

  if (storageName) {
    modalContactUsNameInput.value = storageName;
    if (storageEmail) {
      modalContactUsEmailInput.value = storageEmail;
      modalContactUsTextarea.focus();
    }
    else {
      modalContactUsEmailInput.focus();
    }
  }
  else {
    modalContactUsNameInput.focus();
  }
});

modalContactUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContactUs.classList.remove("modal-show");
  modalContactUs.classList.remove("modal-error");
});

modalContactUsForm.addEventListener("submit", function(evt) {
  if (!modalContactUsNameInput.value || !modalContactUsEmailInput.value || !modalContactUsTextarea.value) {
    evt.preventDefault();
    modalContactUs.classList.remove("modal-error");
    modalContactUs.offsetWidth = modalContactUs.offsetWidth;
    modalContactUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", modalContactUsNameInput.value);
      localStorage.setItem("email", modalContactUsEmailInput.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalContactUs.classList.contains("modal-show")) {
      evt.preventDefault();
      modalContactUs.classList.remove("modal-show");
      modalContactUs.classList.remove("modal-error");
    }
  }
});
