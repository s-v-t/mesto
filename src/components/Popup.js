export class Popup{
    constructor(popupSelector){
        this.popupActive = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open(){
    //открытие попапа
        document.addEventListener('keydown', this._handleEscClose);
        this.popupActive.classList.add('popup_active');
    }
    close(){
    //закрытие попапа
        document.removeEventListener('keydown', this._handleEscClose);
        this.popupActive.classList.remove('popup_active');
    }
    _handleEscClose(evt){
    // Закрытие окна при нажатии Esc
        if (evt.key == 'Escape') {
            this.close();
        }
    }

    setEventListeners(){
    //Установка слушателя событий на клик по оверлею и на кнопку закрытия
            this.popupActive.addEventListener('click', (evt) => {
                if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
                    this.close();
                }
            })
    }
}