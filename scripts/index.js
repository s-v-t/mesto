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


const newSection = new Section({
    items: initialCards,
    renderer: function(currentItem){
        const newCard = new Card(currentItem, cardTemplateSelector);
        const cardElement = newCard.createCard();
        newSection.addItem(cardElement);
    }
}, sectionSelector);

newSection.renderAllElement();

const getUserDate = new UserInfo(userNameSelector, userAboutSelector);

const editFormValidator = new FormValidator(param, formProfileElement);
const addCardFormValidator = new FormValidator(param, formPlaceElement);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();


const popupFormProfile = new PopupWithForm (popupProfileSelector, (evt)=>{
    evt.preventDefault();
    getUserDate.setUserInfo(nameInput.value, jobInput.value);
    popupFormProfile.close();
})

const popupFormPlace = new PopupWithForm (popupPlaceSelector, (evt)=>{
    evt.preventDefault();
    const newElement = new Card({
                name: placeTitleInput.value,
                link: placeImageUrlInput.value
            }, cardTemplateSelector);
        
    const newCardElement = newElement.createCard();
    newSection.addItem(newCardElement);
    popupFormPlace.close();
})

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

popupOpenButton.addEventListener('click', openPopupProfile);

popupPlaceOpenButton.addEventListener('click', openPopupPlace);