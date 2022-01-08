const popupOpenButton = document.querySelector ('.profile__button-edit');
const popupCloseButton = document.querySelector ('.popup__close');
const popup = document.querySelector ('.popup');

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

function closePopupOnOverlayClick(event){
    if (event.target === event.currentTarget) {
        popup.classList.remove('popup_opened');
    }
}

popupOpenButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
popup.addEventListener('click', closePopupOnOverlayClick);


let formElement = document.querySelector ('.popup__form');
let nameInput = formElement.querySelector ('.popup__form-name-input');
let jobInput = formElement.querySelector ('.popup__form-job-input');

function formSubmitHandler (evt) {
    evt.preventDefault();

    let profile_name = document.querySelector ('.profile__info-name');
    let profile_job = document.querySelector ('.profile__info-about');

    profile_name.textContent = nameInput.value;
    profile_job.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler); 
