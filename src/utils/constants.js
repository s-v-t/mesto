export const param = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input-style',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save-disabled',
    errorInputClass: 'popup__input-type-error',
    errorVisibleClass: 'popup__error-visible',
    errorMessageSelector: '.popup__error-message'
}


//Создание новых карточек

import mezmayImg from '../images/mezmay.jpg'
import kubanImg from '../images/kuban.jpg'
import sochiImg from '../images/sochi.jpg'

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Мезмай',
        link: mezmayImg
    },
    {
        name: 'Кубань',
        link: kubanImg
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Сочи',
        link: sochiImg
    }
];

export const cardTemplateSelector = '.card-template';
export const popupProfileSelector = '.popup-profile';
export const popupPlaceSelector = '.popup-place';
export const imageViewSelector = '.image-view';
export const sectionSelector = '.elements';
export const userNameSelector = '.profile__info-name';
export const userAboutSelector = '.profile__info-about';
export const popupConfirmSelector = '.popup-confirm';
export const popupAvatarSelector = '.popup-avatar-change';
export const avatarImgSelector = '.profile__avatar-image';

//Popup редактирования профиля
export const popupOpenButton = document.querySelector('.profile__button-edit');
export const formProfileElement = document.querySelector('.popup-profile__form');
export const nameInput = formProfileElement.querySelector('#name');
export const jobInput = formProfileElement.querySelector('#about');
export const profileButtonSubmit = document.querySelector('#profile-button-save');

//Popup редактирования карточки места
export const popupPlaceOpenButton = document.querySelector('.profile__button-add');
export const formPlaceElement = document.querySelector('.popup-place__form');
export const placeTitleInput = formPlaceElement.querySelector('#titlePlace');
export const placeImageUrlInput = formPlaceElement.querySelector('#imagePlaceUrl');

export const avatarOpenPopup = document.querySelector('.profile__avatar-overlay');
export const avatarFormElement = document.querySelector('.popup-avatar-form');