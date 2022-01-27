//Popup редактирования профиля
const popupOpenButton = document.querySelector('.profile__button-edit');
const popupCloseButton = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#name');
let jobInput = formElement.querySelector('#job');
let profileName = document.querySelector('.profile__info-name');
let profileJob = document.querySelector('.profile__info-about');
//Popup редактирования карточки места
const popupPlaceOpenButton = document.querySelector('.profile__button-add');
const popupPlaceCloseButton = document.querySelector('.popup-place__close');
const formPlaceElement = document.querySelector('.popup-place__form');
const popupPlace = document.querySelector('.popup-place');
let PlaceTitleInput = formPlaceElement.querySelector('#title-place');
let PlaceImageUrlInput = formPlaceElement.querySelector('#image-place-url');
//Просмотр изображения
const imageView = document.querySelector('.image-view');
let imageMax = document.querySelector('.image-view__max');
let captionMax = document.querySelector('.image-view__caption');
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
const cardEl = cardTemplate.cloneNode(true);
const cardCaption = cardEl.querySelector('.elements__element-title');

function deleteCard (evt){
     evt.target.closest('.elements__element').remove();
 }

function likePlace (evt){
    let likeImgActive = evt.target.closest('.elements__like-button-img');
    if (evt.target.closest('.elements__like-button').classList.contains('elements__like-button-active')) {
        likeImgActive.src = "./images/like.svg";
    } else {
        likeImgActive.src = "./images/like_active.svg";
    }
    evt.target.closest('.elements__like-button').classList.toggle('elements__like-button-active');
}

function createCard (cardDate){
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.elements__element-photo');
    const cardTitle = cardElement.querySelector('.elements__element-title');
    const deleteButton = cardElement.querySelector('.elements__thash-button');
    const likeButton = cardElement.querySelector('.elements__like-button');
    cardTitle.textContent = cardDate.name;
    cardImage.src = cardDate.link;
    sectionEl.prepend(cardElement);
    
    deleteButton.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', openImageView);
    likeButton.addEventListener('click', likePlace);

    function openImageView(){
        imageMax.src = cardImage.src;
        captionMax.textContent = cardTitle.textContent;
        openClosePopup(imageView);
    }
}

initialCards.forEach(createCard);

function openClosePopup (PopUpActive){
    PopUpActive.classList.toggle('popup_active');
}

function openpopup() {
    openClosePopup(popup);
    if (popup.classList.contains('popup_active')) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileJob.textContent;
    }
}

function openPopupPlace(){
    openClosePopup(popupPlace);
    formPlaceElement.reset();
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    openpopup();
}

function formPlaceSubmit(evt){
    evt.preventDefault();
    createCard({
        name: PlaceTitleInput.value,
        link: PlaceImageUrlInput.value
    })
        openPopupPlace();
}

popupOpenButton.addEventListener('click', openpopup);
popupCloseButton.addEventListener('click', openpopup);
formElement.addEventListener('submit', formSubmitHandler);

popupPlaceOpenButton.addEventListener('click',openPopupPlace);
popupPlaceCloseButton.addEventListener('click', openPopupPlace);
formPlaceElement.addEventListener('submit', formPlaceSubmit);

imageViewClose.addEventListener('click', function(){openClosePopup(imageView)});