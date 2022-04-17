export class FormValidator {
    constructor(settings, form) {
        this._form = form;
        this._settings = settings;
        this.currentButtonSubmit = this._form.querySelector(this._settings.submitButtonSelector);
    }

    //функции включения и отключения ошибки
    _onError(currentInput, errorMessage) {
        const {
            errorInputClass,
            errorVisibleClass
        } = this._settings;

        currentInput.classList.add(errorInputClass);
        errorMessage.classList.add(errorVisibleClass);
        errorMessage.textContent = currentInput.validationMessage;
    }

    _offError(currentInput, errorMessage) {
        const {
            errorInputClass,
            errorVisibleClass
        } = this._settings;

        currentInput.classList.remove(errorInputClass);
        errorMessage.classList.remove(errorVisibleClass);
        errorMessage.textContent = '';
    }

    toggleButton() {
        const {
            submitButtonSelector,
            inactiveButtonClass
        } = this._settings;

        // const currentButtonSubmit = this._form.querySelector(submitButtonSelector);
        const formValid = this._form.checkValidity();
        if (formValid) {
            this.currentButtonSubmit.classList.remove(inactiveButtonClass);
            this.currentButtonSubmit.removeAttribute('disabled');
        } else {
            this.currentButtonSubmit.classList.add(inactiveButtonClass);
            this.currentButtonSubmit.setAttribute('disabled', 'disabled');
        }
    }

    // валидация инпутов
    _validateInput(currentInput) {
        const errorMessage = this._form.querySelector(`#${currentInput.id}-error`);
        if (!currentInput.validity.valid) {
            this._onError(currentInput, errorMessage);
        } else {
            this._offError(currentInput, errorMessage);
        }
    }

    _addInputListeners(currentInput) {
        currentInput.addEventListener('input', () => {
            this._validateInput(currentInput);
            this.toggleButton();
        });
    }

    enableValidation() {
        const {
            inputSelector
        } = this._settings;

        this._inputList = Array.from(this._form.querySelectorAll(inputSelector));
        this._inputList.forEach(currentInput => {
            this._addInputListeners(currentInput);
        });
        this.toggleButton();
    }

    // функция сброса ошибок валидации при закрытии попапа - ПРОВЕРИТЬ
    resetErrorMessage() {
        this._inputList.forEach((inputElement) => {
            const errorMessage = this._form.querySelector(`#${inputElement.id}-error`); 
            this._offError(inputElement, errorMessage) ; 
         }) 
    }
}