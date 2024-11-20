// [ FORM ]
const form = document.querySelector('.form')
const inputs = form.querySelectorAll('input');
const textArea = form.querySelector('textarea')

//red bottom border of active input
inputs.forEach(function (input) {
    input.addEventListener('focus', function () {
        //remove other active input
        removeAllActiveInput();

        //add the active input
        this.classList.add('active-input')
    })
})

textArea.addEventListener('focus', function () {
    removeAllActiveInput();
    textArea.classList.add('active-input');
    form.querySelector('label').style.color = '#222222';
})

function removeAllActiveInput() {
    inputs.forEach((input) => input.classList.remove('active-input'));
    textArea.classList.remove('active-input');
    form.querySelector('label').style.color = 'inherit';
}


//telephone mask
const maskPattern = {
    mask: '(00) 00000-0000'
};
const mask = IMask(document.querySelector('#tel'), maskPattern);

document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('blur', function () {

        this.checkValidity();
        // invalido
        if (!this.validity.valid) {
            this.parentNode.classList.remove('form__input--accepted');
            this.parentNode.classList.add('form__input--error');

            // valido
        } else {
            this.parentNode.classList.remove('form__input--error');
            this.parentNode.classList.add('form__input--accepted');
        }
    })

    input.addEventListener('invalid', function () {
        this.setCustomValidity('');
        if (!this.validity.valid) {
            this.setCustomValidity(this.dataset.requiredMessage);
            this.parentNode.classList.add('form__input--error');

        } else {
            this.parentNode.classList.replace('form__input--error', 'form__input--accepted');
        }
    })
})

