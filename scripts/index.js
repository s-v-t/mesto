const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let profile_name = document.querySelector('.profile__info-name');
let profile_job = document.querySelector('.profile__info-about');


function openpopup() {
    if (popup.classList.contains ('popup_opened') === false){
        popup.classList.toggle('popup_opened');
        nameInput.value = profile_name.textContent;
        jobInput.value = profile_job.textContent;

    }
}

function closepopup() {
    if (popup.classList.contains ('popup_opened') === true){
        popup.classList.remove('popup_opened');
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();

    profile_name.textContent = nameInput.value;
    profile_job.textContent = jobInput.value;
    closepopup();
}
popupOpenButton.addEventListener('click', openpopup);
popupCloseButton.addEventListener('click', closepopup);
formElement.addEventListener('submit', formSubmitHandler); 
