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

//Просмотр изображения
// export const imageView = document.querySelector('.image-view');
// export const imageMax = document.querySelector('.image-view__max');
// export const captionMax = document.querySelector('.image-view__caption');


//Popup редактирования профиля
export const popupOpenButton = document.querySelector('.profile__button-edit');
// export const popupProfile = document.querySelector('.popup-profile');
export const formProfileElement = document.querySelector('.popup-profile__form');
export const nameInput = formProfileElement.querySelector('#name');
export const jobInput = formProfileElement.querySelector('#job');
export const profileButtonSubmit = document.querySelector('#profile-button-save');

//Popup редактирования карточки места
export const popupPlaceOpenButton = document.querySelector('.profile__button-add');
// export const popupPlace = document.querySelector('.popup-place');
export const formPlaceElement = document.querySelector('.popup-place__form');
export const placeTitleInput = formPlaceElement.querySelector('#title-place');
export const placeImageUrlInput = formPlaceElement.querySelector('#image-place-url');