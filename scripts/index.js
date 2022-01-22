const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let profileName = document.querySelector('.profile__info-name');
let profileJob = document.querySelector('.profile__info-about');

function openpopup() {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains ('popup_opened')){
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    openpopup();
}

popupOpenButton.addEventListener('click', openpopup);
popupCloseButton.addEventListener('click', openpopup);
formElement.addEventListener('submit', formSubmitHandler);