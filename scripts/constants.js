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
        link: './images/mezmay.jpg'
    },
    {
        name: 'Кубань',
        link: './images/kuban.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Сочи',
        link: './images/sochi.jpg'
    }
];

export const sectionEl = document.querySelector('.elements');

export const cardTemplateSelector = '.card-template';

//Просмотр изображения
export const imageView = document.querySelector('.image-view');
export const imageMax = document.querySelector('.image-view__max');
export const captionMax = document.querySelector('.image-view__caption');


//Popup редактирования профиля
export const popupOpenButton = document.querySelector('.profile__button-edit');
export const popupProfile = document.querySelector('.popup-profile');
export const formProfileElement = popupProfile.querySelector('.popup-profile__form');
export const nameInput = formProfileElement.querySelector('#name');
export const jobInput = formProfileElement.querySelector('#job');
export const profileName = document.querySelector('.profile__info-name');
export const profileJob = document.querySelector('.profile__info-about');
export const profileButtonSubmit = document.querySelector('#profile-button-save');

//Popup редактирования карточки места
export const popupPlaceOpenButton = document.querySelector('.profile__button-add');
export const popupPlace = document.querySelector('.popup-place');
export const formPlaceElement = document.querySelector('.popup-place__form');
export const placeTitleInput = formPlaceElement.querySelector('#title-place');
export const placeImageUrlInput = formPlaceElement.querySelector('#image-place-url');