(function() {
    'use strict';

    function submitContactForm(evt) {
        evt.preventDefault();

        var emailRegex = new RegExp('[A-Z0-9]+@[A-Z0-9]+\.[A-Z]{2,4}', 'gi');
        var phoneRegex = /(ddd)-ddd-dddd/;
        var emailInput = document.querySelector('input[name=email]').value;
        var phoneInput = document.querySelector('input[name=phone]').value;

        console.log(emailInput);
        console.log(emailRegex);
        console.log(emailRegex.test(emailInput));

        if (!emailRegex.test(emailInput)) {
            console.log("Invalid Email");
        }
    }

    document.querySelector('button[type=submit]').addEventListener('click', submitContactForm, false);



}());
