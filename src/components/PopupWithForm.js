import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupSelector, submitCurrentForm){
        super(popupSelector);
        this.popupCurrentForm = this.popupActive.querySelector('.popup__form');
        this.inputs = this.popupCurrentForm.querySelectorAll('.popup__form-input-style');
        this.submitCurrentForm = submitCurrentForm;

    }
    _getInputValues(){
        const arrInputValues = {};
        this.inputs.forEach((currentInputs) =>{
            arrInputValues[currentInputs.id] = currentInputs.value; 
        })
        return arrInputValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this.popupActive.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this.submitCurrentForm(this._getInputValues());
          });
        }

    close(){
        super.close();
        this.popupCurrentForm.reset();
    }
}