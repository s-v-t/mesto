import '../pages/index.css';

import {
    FormValidator
} from '../components/FormValidator.js'

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
} from '../utils/constants.js'

import {
    Card
} from '../components/Card.js'

import{
    UserInfo
} from '../components/UserInfo.js'

import {
    Section 
} from '../components/Section.js'

import { PopupWithForm } from '../components/PopupWithForm.js'

import { PopupWithImage } from '../components/PopupWithImage.js'

const userDate = new UserInfo(userNameSelector, userAboutSelector);

//функция создания новой карточки
function createNewCard(currentItem, cardTemplateSelector, handleCardClick){
    const newCard = new Card(currentItem, cardTemplateSelector, handleCardClick);
    const cardElement = newCard.createCard();
    return cardElement
}

// отрисовка основных карточек мест
const newSection = new Section({
    items: initialCards,
    renderer: function(currentItem){
        const cardElement = createNewCard(currentItem, cardTemplateSelector, handleCardClick);
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
const popupFormProfile = new PopupWithForm (popupProfileSelector, (inputsValue)=>{
    userDate.setUserInfo(inputsValue);
    popupFormProfile.close();
})
popupFormProfile.setEventListeners();

//создание объекта - попап формы карточек мест
const popupFormPlace = new PopupWithForm (popupPlaceSelector, (inputsValue)=>{
    const newCardElement = createNewCard({
        name: inputsValue.titlePlace,
        link: inputsValue.imagePlaceUrl
    }, cardTemplateSelector, handleCardClick);

    newSection.addItem(newCardElement);
    popupFormPlace.close();
})
popupFormPlace.setEventListeners();


//создание объекта - попап просмотра изображения
const maxImagePopup = new PopupWithImage(imageViewSelector);
maxImagePopup.setEventListeners();

// открытие попапа с картинкой при клике на карточке
function handleCardClick(imageSrc, imageTitle){
    maxImagePopup.open(imageSrc, imageTitle);
}

//открытие попапа профиля
function openPopupProfile() {
    editFormValidator.resetErrorMessage();
    const userNewDate = userDate.getUserInfo();
    nameInput.value = userNewDate.name;
    jobInput.value = userNewDate.about;
    editFormValidator.toggleButton();
    popupFormProfile.open();
}

//открытие попапа места
function openPopupPlace() {
    addCardFormValidator.resetErrorMessage();
    formPlaceElement.reset();
    addCardFormValidator.toggleButton();
    popupFormPlace.open();
}
//установка слушателей кнопкам открытия попапов
popupOpenButton.addEventListener('click', openPopupProfile);
popupPlaceOpenButton.addEventListener('click', openPopupPlace);