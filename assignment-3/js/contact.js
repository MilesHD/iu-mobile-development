(function() {
    'use strict';

    function submitContactForm(evt) {
        evt.preventDefault();

        var emailRegex = /[A-Z0-9]+@[A-Z0-9]+\.[A-Z]{2,4}/gi;
        var phoneRegex = /\([0-9]{3}\)-[0-9]{3}-[0-9]{4}/g;

        var emailInput = document.querySelector('input[name=email]').value;
        var phoneInput = document.querySelector('input[name=phone]').value;

        var validEmail = emailRegex.test(emailInput);
        var validPhone = phoneRegex.test(phoneInput);

        if (!validEmail) {
            document.querySelector('label[for=email] span').className = 'invalid-email';
        } else {
            document.querySelector('label[for=email] span').className = '';
        }

        if (!validPhone) {
            document.querySelector('label[for=phone] span').className = 'invalid-phone';
        } else {
            document.querySelector('label[for=phone] span').className = '';
        }
    }

    function displayContactMethod(selectedMethod) {
        $('.contact-method').removeClass('visible');
        $('.' + selectedMethod).addClass('visible');
    }

    document.querySelector('#contact-method').addEventListener('change', function onContactMethodChange() {
        if (this.selectedIndex > -1) {
            displayContactMethod(this.options[this.selectedIndex].value);
        }
    }, false);

    document.querySelector('button[type=submit]').addEventListener('click', submitContactForm, false);

}());
