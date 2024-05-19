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
        cardNumberDisplay.textContent = cardNumberInput.value || '0000 0000 0000 0000';
    });

    cardHolderInput.addEventListener('input', () => {
        cardHolderDisplay.textContent = cardHolderInput.value || 'Jane Appleseed';
    });

    expMonthInput.addEventListener('input', () => {
        updateExpiry();
    });

    expYearInput.addEventListener('input', () => {
        updateExpiry();
    });

    cvcInput.addEventListener('input', () => {
        cardCvcDisplay.textContent = cvcInput.value || '000';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        clearErrorMessages();

        if (cardHolderInput.value.trim() === '') {
            showError(cardHolderInput, 'Cardholder name is required');
            isValid = false;
        }

        if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumberInput.value)) {
            showError(cardNumberInput, 'Invalid card number');
            isValid = false;
        }

        if (!/^\d{2}$/.test(expMonthInput.value) || !/^\d{2}$/.test(expYearInput.value)) {
            showError(expMonthInput.parentElement, 'Invalid expiry date');
            isValid = false;
        }

        if (!/^\d{3}$/.test(cvcInput.value)) {
            showError(cvcInput, 'Invalid CVC');
            isValid = false;
        }

        if (isValid) {
            alert('Card details submitted successfully!');
        }
    });

    function updateExpiry() {
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
