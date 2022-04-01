import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupSelector, submitCurrentForm){
        super(popupSelector);
        this.popupCurrentForm = document.querySelector(popupSelector).querySelector('.popup__form');
        this.Inputs = this.popupCurrentForm.querySelectorAll('.popup__form-input-style');
        this.submitCurrentForm = submitCurrentForm;
    }
    getInputValues(){
        const arrInputValues = {};
        this.Inputs.forEach((currentInputs) =>{
            arrInputValues[currentInputs.name] = currentInputs.value; 
        })
        console.log (arrInputValues);
        return arrInputValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this.popupCurrentForm.addEventListener('submit', this.submitCurrentForm);
    }

    close(){
        super.close();
        this.popupCurrentForm.reset();
    }
}