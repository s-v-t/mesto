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
        currentButtonSubmit.classList.remove(inactiveButtonClass);
        currentButtonSubmit.removeAttribute('disabled');
    } else {
        currentButtonSubmit.classList.add(inactiveButtonClass);
        currentButtonSubmit.setAttribute('disabled', 'disabled');
    }
}

// валидация инпутов
function validateInput(currentForm, currentInput, { errorInputClass, errorVisibleClass }) {
    const errorMessage = currentForm.querySelector(`#${currentInput.id}-error`);
    if (!currentInput.validity.valid) {
        onError(currentInput, errorMessage, errorInputClass, errorVisibleClass);
    } else {
        offError(currentInput, errorMessage, errorInputClass, errorVisibleClass);
    }
}

function addInputListeners(currentPopupForm, currentInput, rest) {
    currentInput.addEventListener('input', function () {
        validateInput(currentPopupForm, currentInput, rest);
        toggleButton(currentPopupForm, rest);
    })
}

function enableValidation({ formSelector, inputSelector, ...rest }) {
    const popupForms = Array.from(document.querySelectorAll(formSelector));
    popupForms.forEach(currentPopupForm => {
        const popupInputs = Array.from(currentPopupForm.querySelectorAll(inputSelector));
        popupInputs.forEach(currentInput => {
            addInputListeners(currentPopupForm, currentInput, rest);
        });
        toggleButton(currentPopupForm, rest);
    });
}

const param = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input-style',
    submitButtonSelector: '.popup__button-save',
    inactiveButtonClass: 'popup__button-save-disabled',
    errorInputClass: 'popup__input-type-error',
    errorVisibleClass: 'popup__error-visible',
}
// enableValidation(param);

// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__form-input-style',
//     submitButtonSelector: '.popup__button-save',
//     inactiveButtonClass: 'popup__button-save-disabled',
//     errorInputClass: 'popup__input-type-error',
//     errorVisibleClass: 'popup__error-visible',
// });