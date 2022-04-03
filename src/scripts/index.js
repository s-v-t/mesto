import '../pages/index.css';

import {
    FormValidator
} from './FormValidator.js'

import {
    param,
    initialCards,
    cardTemplateSelector,
    popupOpenButton,
    formProfileElement,
    nameInput,
    jobInput,
    userNameSelector,
    userAboutSelector,
    popupPlaceOpenButton,
    formPlaceElement,
    placeTitleInput,
    placeImageUrlInput,
    popupProfileSelector,
    popupPlaceSelector,
    sectionSelector,
    imageViewSelector
} from './constants.js'

import {
    Card
} from './Card.js'

import{
    UserInfo
} from './UserInfo.js'

import {
    Section 
} from './Section.js'

import { PopupWithForm } from './PopupWithForm.js'

import { PopupWithImage } from './PopupWithImage.js'

const getUserDate = new UserInfo(userNameSelector, userAboutSelector);

// отрисовка основных карточек мест
const newSection = new Section({
    items: initialCards,
    renderer: function(currentItem){
        const newCard = new Card(currentItem, cardTemplateSelector, handleCardClick);
        const cardElement = newCard.createCard();
        newSection.addItem(cardElement);
    }
}, sectionSelector);

newSection.renderAllElement();

//включение валидации форм
const editFormValidator = new FormValidator(param, formProfileElement);
const addCardFormValidator = new FormValidator(param, formPlaceElement);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();

//создание объекта - попап формы профиля
const popupFormProfile = new PopupWithForm (popupProfileSelector, (evt)=>{
    evt.preventDefault();
    getUserDate.setUserInfo(nameInput.value, jobInput.value);
    popupFormProfile.close();
})

//создание объекта - попап формы карточек мест
const popupFormPlace = new PopupWithForm (popupPlaceSelector, (evt)=>{
    evt.preventDefault();
    const newElement = new Card({
                name: placeTitleInput.value,
                link: placeImageUrlInput.value
            }, cardTemplateSelector, handleCardClick);
        
    const newCardElement = newElement.createCard();
    newSection.addItem(newCardElement);
    popupFormPlace.close();
})

//создание объекта - попап просмотра изображения
const maxImagePopup = new PopupWithImage(imageViewSelector);

// открытие попапа с картинкой при клике на карточке
function handleCardClick(evt){
    maxImagePopup.open(evt);
}

//открытие попапа профиля
function openPopupProfile() {
    editFormValidator.resetErrorMessage();
    popupFormProfile.open();
    popupFormProfile.setEventListeners();
    nameInput.value = getUserDate.getUserInfo().name;
    jobInput.value = getUserDate.getUserInfo().about;
    editFormValidator.toggleButton();
}

//открытие попапа места
function openPopupPlace() {
    addCardFormValidator.resetErrorMessage();
    popupFormPlace.open();
    popupFormPlace.setEventListeners();
    formPlaceElement.reset();
    addCardFormValidator.toggleButton();
}
//установка слушателей кнопкам открытия попапов
popupOpenButton.addEventListener('click', openPopupProfile);
popupPlaceOpenButton.addEventListener('click', openPopupPlace);