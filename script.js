
      document.addEventListener('DOMContentLoaded', () => {
    const cardNumberInput = document.getElementById('card-number');
    const cardHolderInput = document.getElementById('cardholder-name');
    const expMonthInput = document.getElementById('exp-month');
    const expYearInput = document.getElementById('exp-year');
    const cvcInput = document.getElementById('cvc');
    const cardNumberDisplay = document.querySelector('.card-number');
    const cardHolderDisplay = document.querySelector('.card-holder');
    const cardExpiryDisplay = document.querySelector('.card-expiry');
    const cardCvcDisplay = document.querySelector('.card-cvc');
    const form = document.getElementById('card-form');
    const errorMessages = document.querySelectorAll('.error-message');

    cardNumberInput.addEventListener('input', () => {
        cardNumberDisplay.textContent = formatCardNumber(cardNumberInput.value);
    });

    cardHolderInput.addEventListener('input', () => {
        cardHolderDisplay.textContent = cardHolderInput.value;
    });

    expMonthInput.addEventListener('input', updateExpiryDate);
    expYearInput.addEventListener('input', updateExpiryDate);

    cvcInput.addEventListener('input', () => {
        cardCvcDisplay.textContent = cvcInput.value;
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        clearErrorMessages();
        let valid = true;

        if (!cardHolderInput.value) {
            valid = false;
            showError(cardHolderInput, 'Cardholder name is required');
        }

        if (!cardNumberInput.value || !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumberInput.value)) {
            valid = false;
            showError(cardNumberInput, 'Card number is required and must be in the format 1234 5678 9123 0000');
        }

        if (!expMonthInput.value || !/^\d{2}$/.test(expMonthInput.value) || !expYearInput.value || !/^\d{2}$/.test(expYearInput.value)) {
            valid = false;
            showError(expMonthInput, 'Expiry date is required and must be in the format MM/YY');
        }

        if (!cvcInput.value || !/^\d{3}$/.test(cvcInput.value)) {
            valid = false;
            showError(cvcInput, 'CVC is required and must be a 3-digit number');
        }

        if (valid) {
            alert('Card details submitted successfully!');
        }
    });

    function formatCardNumber(number) {
        return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }

    function updateExpiryDate() {
        cardExpiryDisplay.textContent = `${expMonthInput.value || '00'}/${expYearInput.value || '00'}`;
    }

    function clearErrorMessages() {
        errorMessages.forEach(error => error.textContent = '');
    }

    function showError(input, message) {
        const error = input.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.textContent = message;
        }
    }
});
