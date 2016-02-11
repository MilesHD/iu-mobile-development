$(document).ready(function() {
    'use strict';

    function submitContactForm(evt) {
        evt.preventDefault();

        var emailRegex = /[A-Z0-9]+@[A-Z0-9]+\.[A-Z]{2,4}/gi;
        var phoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}/g;

        var emailInput = document.querySelector('input[name=email]').value;
        var phoneInput = document.querySelector('input[name=phone]').value;

        var validEmail = emailRegex.test(emailInput);
        var validPhone = phoneRegex.test(phoneInput);

        if (!validEmail) {
            $('label[for=email] span').addClass('invalid-email');
        } else {
            $('label[for=email] span').removeClass('invalid-email');
        }

        if (!validPhone) {
            $('label[for=phone] span').addClass('invalid-phone');
        } else {
            $('label[for=phone] span').removeClass('invalid-phone');
        }
    }

    function displayContactMethod(selectedMethod) {
        $('.contact-method').removeClass('visible');
        $('.' + selectedMethod).addClass('visible');
    }

    $('.contact-method').change(function onContactMethodChange() {
        if (this.selectedIndex > -1) {
            displayContactMethod(this.options[this.selectedIndex].value);
        }
    });

    $('#submit-contact-form').click(submitContactForm);

});
