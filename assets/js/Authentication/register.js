document.getElementById("MaxC-Obscure-Password-Link").addEventListener("click", function () {

    // -- >> Get the password input
    var password_input = document.getElementById("MaxC-Authentication-Login-Form_Password_Input");

    // -- >> Get Button element
    var obscure_button = document.getElementById("MaxC-Obscure-Password-Link");

    // -- >> check the type of the input
    if (password_input.type == "password") {
        password_input.type = "text"; // show the password
        obscure_button.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    } else {
        password_input.type = "password"; // hide the password
        obscure_button.innerHTML = `<i class="bi bi-eye-fill"></i>`;
    }

});

document.getElementById("MaxC-Obscure-Password1-Link").addEventListener("click", function () {

    // -- >> Get the password input
    var password_input = document.getElementById("MaxC-Authentication-Login-Form_Password1_Input");

    // -- >> Get Button element
    var obscure_button = document.getElementById("MaxC-Obscure-Password1-Link");

    // -- >> check the type of the input
    if (password_input.type == "password") {
        password_input.type = "text"; // show the password
        obscure_button.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
    } else {
        password_input.type = "password"; // hide the password
        obscure_button.innerHTML = `<i class="bi bi-eye-fill"></i>`;
    }

});