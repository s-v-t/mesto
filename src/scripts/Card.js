export class Card {
    constructor(cardDate, cardTemplateSelector, handleCardClick) {
        this._cardDate = cardDate;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplateSelector).content.cloneNode(true);
        return cardElement;
      }

    createCard() {
        this._cardElement = this._getTemplate();

        const cardImage = this._cardElement.querySelector('.elements__element-photo');
        const cardTitle = this._cardElement.querySelector('.elements__element-title');
        const deleteButton = this._cardElement.querySelector('.elements__thash-button');
        const likeButton = this._cardElement.querySelector('.elements__like-button');
        cardTitle.textContent = this._cardDate.name;
        cardImage.src = this._cardDate.link;
        cardImage.alt = this._cardDate.name;

        deleteButton.addEventListener('click', this._deleteCard);
        cardImage.addEventListener('click', this._handleCardClick);
        likeButton.addEventListener('click', this._likePlace);
        return this._cardElement;
    }

    _likePlace(evt) {
        const likeImgActive = evt.target.closest('.elements__like-button-img');
        evt.target.classList.toggle('elements__like-button-active');
    }

    _deleteCard(evt) {
        evt.target.closest('.elements__element').remove();
    }
}