import '../pages/index.css';

import {
    FormValidator
} from '../components/FormValidator.js'

import {
    param,
    cardTemplateSelector,
    popupOpenButton,
    formProfileElement,
    nameInput,
    jobInput,
    userNameSelector,
    userAboutSelector,
    popupPlaceOpenButton,
    formPlaceElement,
    popupProfileSelector,
    popupPlaceSelector,
    popupConfirmSelector,
    sectionSelector,
    avatarImgSelector,
    popupAvatarSelector,
    avatarOpenPopup,
    avatarFormElement,
    imageViewSelector
} from '../utils/constants.js'

import {
    Card
} from '../components/Card.js'

import {
    UserInfo
} from '../components/UserInfo.js'

import {
    Section
} from '../components/Section.js'

import {
    PopupWithForm
} from '../components/PopupWithForm.js'

import {
    PopupWithImage
} from '../components/PopupWithImage.js'

import {
    api
} from '../components/Api.js'

let userId;

// отрисовка основных карточек мест
const newSection = new Section({
    renderer: function (currentItem) {
        const cardElement = createNewCard(currentItem);
        newSection.addItem(cardElement);
    }
}, sectionSelector);

// newSection.renderAllElement();

Promise.all([api.getProfile(), api.getInitialCards()])
.then(([resProfile, resCardDate]) => {
    userDate.setUserInfo(resProfile);
    userDate.setAvatar(resProfile);
    userId = resProfile._id;

    newSection.renderAllElement(resCardDate);
})
.catch((error) => {
    console.log(error);})

const userDate = new UserInfo(userNameSelector, userAboutSelector, avatarImgSelector);

//создание объекта - попап подтверждения удаления карточки
const popupConfirm = new PopupWithForm(popupConfirmSelector);

popupConfirm.setEventListeners();

//открытие попапа Подтверждения удаления
function openPopupConfirm(){
    popupConfirm.open();
}

//функция создания новой карточки
function createNewCard(currentItem) {
    const newCard = new Card(
        currentItem, 
        userId,
        cardTemplateSelector,
        handleCardClick,
        () => {
            popupConfirm.open();
            popupConfirm.changeSubmit(() => {
                api.deleteCard(currentItem._id)
                    .then(res => {
                        console.log(res);
                        newCard.deleteCard();
                        popupConfirm.close();
                    })
                    .catch(() => {
                        console.log('Ошибка удаления')
                    })
            })
        },
        (id) => {
            if (newCard.isLiked()) {
                api.deleteLike(id)
                    .then(res => {
                        console.log(res);
                        newCard.setLikes(res.likes);
                    })
                    .catch((error) => {
                        console.log(error);})
            } else {
                api.addLike(id)
                    .then(res => {
                        console.log(res);
                        newCard.setLikes(res.likes);
                    })
                    .catch((error) => {
                        console.log(error);})
            };
        }
    );
    const cardElement = newCard.createCard();
    return cardElement
}

//включение валидации форм
const editFormValidator = new FormValidator(param, formProfileElement);
const addCardFormValidator = new FormValidator(param, formPlaceElement);
const addAvatarFormValidator = new FormValidator(param, avatarFormElement);
editFormValidator.enableValidation();
addCardFormValidator.enableValidation();
addAvatarFormValidator.enableValidation();

//создание объекта - попап формы профиля
const popupFormProfile = new PopupWithForm(popupProfileSelector, (inputsValue) => {
    popupFormProfile.changeButtonLoadText(true);
    api.editProfile(inputsValue.name, inputsValue.about)
        .then(res => {
            console.log('res', res);
            userDate.setUserInfo(inputsValue);
            popupFormProfile.close();
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            popupFormProfile.changeButtonLoadText(false);
        })
})
popupFormProfile.setEventListeners();

//создание объекта - попап формы карточек мест
const popupFormPlace = new PopupWithForm(popupPlaceSelector, (inputsValue) => {
    popupFormPlace.changeButtonLoadText(true)
    api.addCard(inputsValue.titlePlace, inputsValue.imagePlaceUrl)
        .then(res => {
            // console.log ('res', res);
            const newCardElement = createNewCard({
                name: res.name,
                link: res.link,
                likes: res.likes,
                id: res._id,
                userId: userId,
                ownerId: res.owner._id
            });

            newSection.addItem(newCardElement);
            popupFormPlace.close();
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            popupFormPlace.changeButtonLoadText(false)
        })
})
popupFormPlace.setEventListeners();

//создание объекта - попап просмотра изображения
const maxImagePopup = new PopupWithImage(imageViewSelector);
maxImagePopup.setEventListeners();

//создание объекта - попап изменения аватара
const avatarPopup = new PopupWithForm(popupAvatarSelector, (inputsValue) => {
    avatarPopup.changeButtonLoadText(true);
    api.avatarChange(inputsValue.avatar)
        .then(res => {
            console.log('res', res);
            userDate.setAvatar(inputsValue);
            avatarPopup.close();
        })
        .catch((error) => {
            console.error(error)
        })
        .finally(() => {
            avatarPopup.changeButtonLoadText(false)
        })
})
avatarPopup.setEventListeners();

// открытие попапа с картинкой при клике на карточке
function handleCardClick(imageSrc, imageTitle) {
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

//открытие попапа изменения аватара
function openAvatarPopup() {
    addAvatarFormValidator.resetErrorMessage();
    avatarFormElement.reset();
    addAvatarFormValidator.toggleButton();
    avatarPopup.open();
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
avatarOpenPopup.addEventListener('click', openAvatarPopup);