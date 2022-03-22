import {
    openPopup
} from './index.js'
import {
    imageView,
    imageMax,
    captionMax
} from './constants.js'


export class Card {
    constructor(cardDate, cardTemplateSelector) {
        this.cardTemplate = document.querySelector(cardTemplateSelector).content;
        this._cardDate = cardDate;
    }

    createCard() {
        this._cardElement = this.cardTemplate.cloneNode(true);

        const cardImage = this._cardElement.querySelector('.elements__element-photo');
        const cardTitle = this._cardElement.querySelector('.elements__element-title');
        const deleteButton = this._cardElement.querySelector('.elements__thash-button');
        const likeButton = this._cardElement.querySelector('.elements__like-button');

        cardTitle.textContent = this._cardDate.name;
        cardImage.src = this._cardDate.link;
        cardImage.alt = this._cardDate.name;

        deleteButton.addEventListener('click', this._deleteCard);
        cardImage.addEventListener('click', this._openImageView);
        likeButton.addEventListener('click', this._likePlace);
        return this._cardElement;
    }

    _likePlace(evt) {
        const likeImgActive = evt.target.closest('.elements__like-button-img');
        if (evt.target.closest('.elements__like-button').classList.contains('elements__like-button-active')) {
            likeImgActive.src = "./images/like.svg";
        } else {
            likeImgActive.src = "./images/like_active.svg";
        }
        evt.target.closest('.elements__like-button').classList.toggle('elements__like-button-active');
    }

    _deleteCard(evt) {
        evt.target.closest('.elements__element').remove();
        // this._cardElement.closest('.elements__element').remove();
    }

    _openImageView(evt) {
        const currentImage = evt.target.closest('.elements__element-photo');
        const currentElement = evt.target.closest('.elements__element');
        const currentCaption = currentElement.querySelector('.elements__element-title');
        imageMax.src = currentImage.src;
        imageMax.alt = currentImage.alt;
        captionMax.textContent = currentCaption.textContent;
        openPopup(imageView);
    }
}