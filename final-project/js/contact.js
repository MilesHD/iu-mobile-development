$(document).ready(function() {
    'use strict';
    var storedName = $.localStorage.get("name");
    var storedEmail = $.localStorage.get("email");

    if (storedName) {
        $('input[name=name]').val(storedName);
    }

    if (storedEmail) {
        $('input[name=email]').val(storedEmail);
    }

    function submitContactForm(evt) {
        evt.preventDefault();

        var emailRegex = /[A-Z0-9]+@[A-Z0-9]+\.[A-Z]{2,4}/gi;

        var nameInput = $('input[name=name]').val().trim();
        var emailInput = $('input[name=email]').val().trim();
        var commentsInput = $('textarea[name=comments]').val().trim();

        var validEmail = emailRegex.test(emailInput);

        if (!nameInput || nameInput === "") {
            $('label[for=name] span').addClass('invalid');
            return false;
        } else {
            $('label[for=name] span').removeClass('invalid');
        }

        if (!validEmail) {
            $('label[for=email] span').addClass('invalid');
            return false;
        } else {
            $('label[for=email] span').removeClass('invalid');
        }

        if (!commentsInput || commentsInput === "") {
            $('label[for=comments] span').addClass('invalid');
            return false;
        } else {
            $('label[for=comments] span').removeClass('invalid');
        }

        alert("Message Received! We will be in touch shortly!");

        // Save user details in localStorage
        $.localStorage.set("name", nameInput);
        $.localStorage.set("email", emailInput);

        // Clear comments 
        $('textarea[name=comments]').val('');

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
