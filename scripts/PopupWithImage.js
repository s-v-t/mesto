import { Popup } from './Popup.js';

export class PopupWithImage  extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this.imageMax = document.querySelector('.image-view__max');
        this.captionMax = document.querySelector('.image-view__caption');
        this.open = this.open.bind(this);
    }

    open(evt){
        super.open();
        const currentImage = evt.target.closest('.elements__element-photo');
        const currentElement = evt.target.closest('.elements__element');
        const currentCaption = currentElement.querySelector('.elements__element-title');
        this.imageMax.src = currentImage.src;
        this.imageMax.alt = currentImage.alt;
        this.captionMax.textContent = currentCaption.textContent;
        super.setEventListeners();
    }
}