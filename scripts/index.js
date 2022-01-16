const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form-name-input');
let jobInput = formElement.querySelector('.popup__form-job-input');
let profile_name = document.querySelector('.profile__info-name');
let profile_job = document.querySelector('.profile__info-about');


function OpenPopup() {
    if (popup.classList.contains ('popup_opened') === false){
        popup.classList.toggle('popup_opened');
    }
}

function ClosePopup() {
    if (popup.classList.contains ('popup_opened') === true){
        popup.classList.toggle('popup_opened');
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profile_name.textContent = nameInput.value;
    profile_job.textContent = jobInput.value;
    ClosePopup();
}
popupOpenButton.addEventListener('click', OpenPopup);
popupCloseButton.addEventListener('click', ClosePopup);
formElement.addEventListener('submit', formSubmitHandler); 
