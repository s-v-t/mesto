import {
    FormValidator
} from './FormValidator.js'

import {
    param,
    initialCards,
    sectionEl,
    cardTemplateSelector,
    popupOpenButton,
    popupProfile,
    formProfileElement,
    nameInput,
    jobInput,
    profileName,
    profileJob,
    profileButtonSubmit,
    popupPlaceOpenButton,
    popupPlace,
    formPlaceElement,
    placeTitleInput,
    placeImageUrlInput
} from './constants.js'

import {
    Card
} from './Card.js'


const editFormValidator = new FormValidator(param, formProfileElement);
const addCardFormValidator = new FormValidator(param, formPlaceElement);

editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

initialCards.forEach((inCardDate) => {
    const newCard = new Card(inCardDate, cardTemplateSelector);
    const cardElement = newCard.createCard();
    sectionEl.prepend(cardElement);

});

//открытие попапа
export function openPopup(popUpActive) {
    popUpActive.classList.add('popup_active');
    document.addEventListener('keydown', closePressEsc);
}

//открытие попапа профиля
function openPopupProfile() {
    editFormValidator.resetErrorMessage();
    openPopup(popupProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    editFormValidator.toggleButton();
}

//открытие попапа места
function openPopupPlace() {
    addCardFormValidator.resetErrorMessage();
    openPopup(popupPlace);
    formPlaceElement.reset();
    addCardFormValidator.toggleButton();
}

//закрытие попапа
function closePopup(popUpActive) {
    popUpActive.classList.remove('popup_active');
    document.removeEventListener('keydown', closePressEsc);
}

//универсальная функция закрытия и закрытия по оверлею
function closeAllpopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach((selectPopup) => {
        selectPopup.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
                closePopup(selectPopup);
            }
        });
    });
}
closeAllpopup();

function submitFormHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function submitformPlace(evt) {
    evt.preventDefault();
    const newElement = new Card({
        name: placeTitleInput.value,
        link: placeImageUrlInput.value
    }, cardTemplateSelector);

    const newCardElement = newElement.createCard();

    sectionEl.prepend(newCardElement);
    closePopup(popupPlace);
}

// Закрытие окна при нажатии Esc
function closePressEsc(evt) {
    if (evt.key == 'Escape') {
        const currentActivePopup = document.querySelector('.popup_active');
        closePopup(currentActivePopup);
    }
}

popupOpenButton.addEventListener('click', openPopupProfile);
formProfileElement.addEventListener('submit', submitFormHandler);

popupPlaceOpenButton.addEventListener('click', openPopupPlace);
formPlaceElement.addEventListener('submit', submitformPlace);