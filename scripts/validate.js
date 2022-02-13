//функции включения и отключения ошибки
function onError(currentInput, errorMessage, errorInputClass, errorVisibleClass) {
    currentInput.classList.add(errorInputClass);
    errorMessage.classList.add(errorVisibleClass);
    errorMessage.textContent = currentInput.validationMessage;
};

function offError(currentInput, errorMessage, errorInputClass, errorVisibleClass) {
    currentInput.classList.remove(errorInputClass);
    errorMessage.classList.remove(errorVisibleClass);
    errorMessage.textContent = '';
}

function toggleButton(currentForm, { submitButtonSelector, inactiveButtonClass }) {
    const currentButtonSubmit = currentForm.querySelector(submitButtonSelector);
    const formValid = currentForm.checkValidity();
    if (formValid) {
        // console.log ('форма валидна - кнопку включить');
        currentButtonSubmit.classList.remove(inactiveButtonClass);
        currentButtonSubmit.removeAttribute('disabled');
    } else {
        // console.log ('форма невалидна - кнопку отключить');
        currentButtonSubmit.classList.add(inactiveButtonClass);
        currentButtonSubmit.setAttribute('disabled', 'disabled');
    }
}

// валидация инпутов
function validateInput(currentForm, currentInput, { errorInputClass, errorVisibleClass }) {
    // console.log ('запуск валидации инпутов');
    const errorMessage = currentForm.querySelector(`#${currentInput.id}-error`);
    if (!currentInput.validity.valid) {
        onError(currentInput, errorMessage, errorInputClass, errorVisibleClass);
    } else {
        offError(currentInput, errorMessage, errorInputClass, errorVisibleClass);
    }
}

function addInputListeners(currentPopupForm, currentInput, rest) {
    currentInput.addEventListener('input', function () {
        // console.log (currentInput);
        validateInput(currentPopupForm, currentInput, rest);
        toggleButton(currentPopupForm, rest);
    })
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
    console.log ('enableValidation - я первый');
    const popupForms = Array.from(document.querySelectorAll(formSelector));
    // console.log(popupForms);
    popupForms.forEach(currentPopupForm => {
        const popupInputs = Array.from(currentPopupForm.querySelectorAll(inputSelector));
        // console.log(popupInputs);
        popupInputs.forEach(currentInput => {
            addInputListeners(currentPopupForm, currentInput, rest);
        });
        toggleButton(currentPopupForm, rest);
    });
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input-style',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save-disabled',
    errorInputClass: 'popup__input-type-error',
    errorVisibleClass: 'popup__error-visible',
});