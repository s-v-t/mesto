export class Card {
    constructor(cardDate, cardTemplateSelector, handleCardClick, openPopupConfirm, handleLikeClick) {
        this._cardDate = cardDate;
        this._id = cardDate.id;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
        this._openPopupConfirm = openPopupConfirm;
        this._userId = cardDate.userId;
        this._ownerId = cardDate.ownerId;
        this._handleLikeClick = handleLikeClick;
        this._likes = cardDate.likes
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
        this.likeButton = this._cardElement.querySelector('.elements__like-button');
        this.likeCount = this._cardElement.querySelector('.elements__like-button-text');
        this.mainCardElement = this._cardElement.querySelector('.elements__element');

        cardTitle.textContent = this._cardDate.name;
        cardImage.src = this._cardDate.link;
        cardImage.alt = this._cardDate.name;
        this.likeCount.textContent = this._cardDate.likes.length;

        if (this._ownerId !== this._userId){
            deleteButton.style.display = 'none';
        };

        deleteButton.addEventListener('click', ()=>{this._openPopupConfirm(this._id);});
        cardImage.addEventListener('click', ()=>{this._handleCardClick(cardImage.src, cardTitle.textContent);});
        this.likeButton.addEventListener('click', ()=>{
            this._handleLikeClick(this._id);
        });
        
        if (this.isLiked()) {this.likePlace()};

        return this._cardElement;
    }

    isLiked(){
        const userLiked = this._likes.find(user => user._id === this._userId);
        return userLiked
    }
    
    setLikes(newLikes){
        this._likes = newLikes;
        this.likeCount.textContent = this._likes.length;
        this.likeButton.classList.toggle('elements__like-button-active');
    }

    likePlace() {
        this.likeButton.classList.toggle('elements__like-button-active');
    }

    deleteCard() {
        this.mainCardElement.remove();
    }
}