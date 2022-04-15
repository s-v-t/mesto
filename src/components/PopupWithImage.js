import { Popup } from './Popup.js';

export class PopupWithImage  extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this.imageMax = this.popupActive.querySelector('.image-view__max');
        this.captionMax = this.popupActive.querySelector('.image-view__caption');
    }

    open(imageSrc, imageTitle){
        this.imageMax.src = imageSrc;
        this.imageMax.alt = imageTitle;
        this.captionMax.textContent = imageTitle;
        super.open();
    }
}