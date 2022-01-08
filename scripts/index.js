const popupOpenButton = document.querySelector ('.profile__button-edit');
const popupCloseButton = document.querySelector ('.popup__close');
const popup = document.querySelector ('.popup');

function togglePopup() {
    popup.classList.toggle('popup_opened');
}

function closePopupOnOverlayClick(event){
    if (event.target === event.currentTarget) {
        popup.classList.remove('popup_opened');
    }
}

popupOpenButton.addEventListener('click', togglePopup);
popupCloseButton.addEventListener('click', togglePopup);
popup.addEventListener('click', closePopupOnOverlayClick);