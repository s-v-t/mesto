//Popup редактирования профиля
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.popup-profile');
const popupCloseProfileButton = document.querySelector('.popup-profile__close');
const formElement = popupProfile.querySelector('.popup-profile__form');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#job');
const profileName = document.querySelector('.profile__info-name');
const profileJob = document.querySelector('.profile__info-about');
//Popup редактирования карточки места
const popupPlaceOpenButton = document.querySelector('.profile__button-add');
const popupPlace = document.querySelector('.popup-place');
const popupPlaceCloseButton = document.querySelector('.popup-place__close');
const formPlaceElement = document.querySelector('.popup-place__form');
const placeTitleInput = formPlaceElement.querySelector('#title-place');
const placeImageUrlInput = formPlaceElement.querySelector('#image-place-url');
//Просмотр изображения
const imageView = document.querySelector('.image-view');
const imageMax = document.querySelector('.image-view__max');
const captionMax = document.querySelector('.image-view__caption');
const imageViewClose = document.querySelector('.image-view__close');

//Создание новых карточек
const initialCards = [
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
const sectionEl = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;

function deleteCard(evt) {
    evt.target.closest('.elements__element').remove();
}

function likePlace(evt) {
    const likeImgActive = evt.target.closest('.elements__like-button-img');
    if (evt.target.closest('.elements__like-button').classList.contains('elements__like-button-active')) {
        likeImgActive.src = "./images/like.svg";
    } else {
        likeImgActive.src = "./images/like_active.svg";
    }
    evt.target.closest('.elements__like-button').classList.toggle('elements__like-button-active');
}

function openImageView(evt) {
    const currentImage = evt.target.closest('.elements__element-photo');
    const currentElement = evt.target.closest('.elements__element');
    const currentCaption = currentElement.querySelector('.elements__element-title');
    imageMax.src = currentImage.src;
    imageMax.alt = currentImage.alt;
    captionMax.textContent = currentCaption.textContent;
    openPopup(imageView);
}

function createCard(cardDate) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.elements__element-photo');
    const cardTitle = cardElement.querySelector('.elements__element-title');
    const deleteButton = cardElement.querySelector('.elements__thash-button');
    const likeButton = cardElement.querySelector('.elements__like-button');
    cardTitle.textContent = cardDate.name;
    cardImage.src = cardDate.link;
    cardImage.alt = cardDate.name;

    deleteButton.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', openImageView);
    likeButton.addEventListener('click', likePlace);
    return cardElement;
}

function prependNewCard(inCardDate) {
    sectionEl.prepend(createCard(inCardDate));
}

initialCards.forEach(prependNewCard);

function openPopup(popUpActive) {
    popUpActive.classList.add('popup_active');
}

function closePopup(popUpActive) {
    popUpActive.classList.remove('popup_active');
}

function openPopupProfile() {
    openPopup(popupProfile);
    if (popupProfile.classList.contains('popup_active')) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
}

function openPopupPlace() {
    openPopup(popupPlace);
    formPlaceElement.reset();
}

function submitFormHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupProfile);
}

function submitformPlace(evt) {
    evt.preventDefault();
    const NewElement = createCard({
        name: placeTitleInput.value,
        link: placeImageUrlInput.value
    })
    sectionEl.prepend(NewElement);
    closePopup(popupPlace);
}

popupOpenButton.addEventListener('click', openPopupProfile);
popupCloseProfileButton.addEventListener('click', function () { closePopup(popupProfile) });
formElement.addEventListener('submit', submitFormHandler);

popupPlaceOpenButton.addEventListener('click', openPopupPlace);
popupPlaceCloseButton.addEventListener('click', function () { closePopup(popupPlace) });
formPlaceElement.addEventListener('submit', submitformPlace);

imageViewClose.addEventListener('click', function () { closePopup(imageView) });