var domains = ['gmail.com', 'hotmail.com', 'aol.com', 'live.com', 'yahoo.com', 'icloud.com'];
var secondLevelDomains = ['hotmail', 'outlook', 'gmail', 'live', 'yahoo', 'icloud'];
var topLevelDomains = ["com", "net", "org", "br"];

var emailInput = document.querySelector('#email');
var emailSuggestion = document.querySelector('#email-suggestion');


emailInput.addEventListener('blur', function () {
    Mailcheck.run({
        email: emailInput.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function (suggestion) {
            // callback code
            emailSuggestion.innerHTML = `Você quis dizer: <a href='javascript:void(0);' class='email-correction'>${suggestion.full}</a>?`;

            document.querySelector('.email-correction').addEventListener('click', function() {
                emailInput.value = suggestion.full;
                emailInput.parentNode.classList.add('form__input--accepted');
                emailSuggestion.innerHTML = '';
            })
        },
    });
});