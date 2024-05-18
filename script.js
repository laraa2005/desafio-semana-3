document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('card-number');
    const cardNameInput = document.getElementById('cardholder-name');
    const expiryDateInput = document.getElementById('expiry-date');
    const cvcInput = document.getElementById('cvc');
    const cardNumberDisplay = document.querySelector('.card-number');
    const cardNameDisplay = document.querySelector('.card-name');
    const cardExpiryDisplay = document.querySelector('.card-expiry');
    const cardCvcDisplay = document.querySelector('.card-cvc');
    const form = document.getElementById('card-form');

    cardNumberInput.addEventListener('input', function() {
        cardNumberDisplay.textContent = this.value || '0000 0000 0000 0000';
    });

    cardNameInput.addEventListener('input', function() {
        cardNameDisplay.textContent = this.value || 'JANE APPLESEED';
    });

    expiryDateInput.addEventListener('input', function() {
        cardExpiryDisplay.textContent = this.value || '00/00';
    });

    cvcInput.addEventListener('input', function() {
        cardCvcDisplay.textContent = this.value || '000';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

        // Validate cardholder name
        if (cardNameInput.value.trim() === '') {
            isValid = false;
            document.getElementById('name-error').textContent = 'Nome do titular é obrigatório';
            document.getElementById('name-error').style.display = 'block';
        }

        // Validate card number
        const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
        if (!cardNumberPattern.test(cardNumberInput.value)) {
            isValid = false;
            document.getElementById('number-error').textContent = 'Número do cartão inválido';
            document.getElementById('number-error').style.display = 'block';
        }

        // Validate expiry date
        const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expiryDatePattern.test(expiryDateInput.value)) {
            isValid = false;
            document.getElementById('expiry-error').textContent = 'Data de validade inválida';
            document.getElementById('expiry-error').style.display = 'block';
        }

        // Validate CVC
        const cvcPattern = /^\d{3}$/;
        if (!cvcPattern.test(cvcInput.value)) {
            isValid = false;
            document.getElementById('cvc-error').textContent = 'CVC inválido';
            document.getElementById('cvc-error').style.display = 'block';
        }

        if (isValid) {
            alert('Formulário enviado com sucesso!');
            form.reset();
            cardNumberDisplay.textContent = '0000 0000 0000 0000';
            cardNameDisplay.textContent = 'JANE APPLESEED';
            cardExpiryDisplay.textContent = '00/00';
            cardCvcDisplay.textContent = '000';
        }
    });
});
