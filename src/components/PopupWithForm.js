import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(popupSelector, submitCurrentForm){
        super(popupSelector);
        this.popupCurrentForm = this.popupActive.querySelector('.popup__form');
        this.Inputs = this.popupCurrentForm.querySelectorAll('.popup__form-input-style');
        this.submitCurrentForm = submitCurrentForm;

    }
    _getInputValues(){
        const arrInputValues = {};
        this.Inputs.forEach((currentInputs) =>{
            arrInputValues[currentInputs.id] = currentInputs.value; 
        })
        console.log(arrInputValues);

        return arrInputValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this.popupActive.addEventListener("submit", (evt) => {
            evt.preventDefault();
            console.log(this.submitCurrentForm);
            this.submitCurrentForm(this._getInputValues());
          });
        }

    close(){
        super.close();
        this.popupCurrentForm.reset();
    }
}