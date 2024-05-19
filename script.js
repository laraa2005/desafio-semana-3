document.addEventListener('DOMContentLoaded', () => {
    const cardNumberDisplay = document.getElementById('card-number');
    const cardNameDisplay = document.getElementById('card-name');
    const cardExpiryDisplay = document.getElementById('card-expiry');
    const cardCvcDisplay = document.getElementById('card-cvc');
    
    const form = document.getElementById('card-form');
    const nameInput = document.getElementById('cardholder-name');
    const numberInput = document.getElementById('card-number-input');
    const expiryInput = document.getElementById('expiry-date');
    const cvcInput = document.getElementById('cvc');

    nameInput.addEventListener('input', () => {
        cardNameDisplay.textContent = nameInput.value || 'JANE APPLESEED';
    });

    numberInput.addEventListener('input', () => {
        cardNumberDisplay.textContent = numberInput.value || '0000 0000 0000 0000';
    });

    expiryInput.addEventListener('input', () => {
        cardExpiryDisplay.textContent = expiryInput.value || '00/00';
    });

    cvcInput.addEventListener('input', () => {
        cardCvcDisplay.textContent = cvcInput.value || '000';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

        // Validate name
        if (nameInput.value.trim() === '') {
            isValid = false;
            document.getElementById('name-error').textContent = 'Name cannot be blank';
            document.getElementById('name-error').style.display = 'block';
        }

        // Validate card number
        const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
        if (!cardNumberPattern.test(numberInput.value)) {
            isValid = false;
            document.getElementById('number-error').textContent = 'Invalid card number';
            document.getElementById('number-error').style.display = 'block';
        }

        // Validate expiry date
        const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expiryPattern.test(expiryInput.value)) {
            isValid = false;
            document.getElementById('expiry-error').textContent = 'Invalid expiry date';
            document.getElementById('expiry-error').style.display = 'block';
        }

        // Validate CVC
        const cvcPattern = /^\d{3}$/;
        if (!cvcPattern.test(cvcInput.value)) {
            isValid = false;
            document.getElementById('cvc-error').textContent = 'Invalid CVC';
            document.getElementById('cvc-error').style.display = 'block';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
            cardNumberDisplay.textContent = '0000 0000 0000 0000';
            cardNameDisplay.textContent = 'JANE APPLESEED';
            cardExpiryDisplay.textContent = '00/00';
            cardCvcDisplay.textContent = '000';
        }
    });
});
