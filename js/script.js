const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const birthday = document.getElementById("birthday");
const gender = document.getElementById("gender");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("confirm-password");
const resetButton = document.querySelector(".btn-reset");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const firstnameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const birthdayValue = birthday.value;
    const genderValue = gender.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (firstnameValue === "") {
        setErrorFor(firstname, "Por favor insira seu nome");
    } else {
        setSuccessFor(firstname, "Preenchido Corretamente");
    }

    if (lastnameValue === "") {
        setErrorFor(lastname, "Por favor insira seu sobrenome");
    } else {
        setSuccessFor(lastname, "Preenchido Corretamente");
    }

    if (emailValue === "") {
        setErrorFor(email, "Por favor insira seu email");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Digite um email válido");
    } else {
        setSuccessFor(email, "Preenchido Corretamente");
    }

    if (phoneValue === "") {
        setErrorFor(phone, "Por favor insira seu número de telefone");
    } else if (!checkPhoneNumber(phoneValue)) {
        setErrorFor(phone, "Digite um número válido Ex: (12) 12345-1234");
    } else {
        setSuccessFor(phone, "Preenchido Corretamente");
    }

    if (birthdayValue === "") {
        setErrorFor(birthday, "Por favor insira sua data de nascimento");
    } else {
        setSuccessFor(birthday, "Preenchido Corretamente");
    }

    if (genderValue === "select") {
        setErrorFor(gender, "Por favor selecione seu gênero");
    } else {
        setSuccessFor(gender, "Preenchido Corretamente");
    }

    if (passwordValue === "") {
        setErrorFor(password, "Por favor insira sua senha");
    } else if (passwordValue.length < 10) {
        setErrorFor(password, "A senha deve conter no mínimo 10 caracteres");
    } else {
        setSuccessFor(password, "Preenchido Corretamente");
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "Confirmação de senha obrigatória");
    } else if (passwordConfirmationValue !== passwordValue) {
        setErrorFor(passwordConfirmation, "Senhas não conferem");
    } else {
        setSuccessFor(passwordConfirmation, "Preenchido Corretamente");
    }

    const formInputs = form.querySelectorAll(".input-container");
    const formIsValid = [...formInputs].every((inputcontainer) => {
        return inputcontainer.className === "input-container success";
    });

    if (formIsValid) {
        alert("Cadastro Realizado com Sucesso!");
    }
}

function setErrorFor(input, messageError) {
    const inputContainer = input.parentElement;
    const span = inputContainer.querySelector("span");
    span.innerText = messageError;
    inputContainer.className = "input-container error";
}

function setSuccessFor(input, messageSuccess) {
    const inputContainer = input.parentElement;
    const span = inputContainer.querySelector("span");
    span.innerText = messageSuccess;
    inputContainer.className = "input-container success";
}

function checkPhoneNumber(phoneNumberValidator) {
    const regexPhone = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    return regexPhone.test(phoneNumberValidator);
}

function checkEmail(emailValidator) {
    const regexEmail = /^[a-z0-9._-]+@[a-z]+\.[a-z]{3,3}(?:\.br)?$/;
    return regexEmail.test(emailValidator);
}

resetButton.addEventListener("click", () => {
    firstname.value = "";
    lastname.value = "";
    email.value = "";
    phone.value = "";
    birthday.value = "";
    gender.value = "select";
    password.value = "";
    passwordConfirmation.value = "";

    const inputContainers = document.querySelectorAll(".input-container");
    inputContainers.forEach(container => {
        container.classList.remove("success", "error");
        container.querySelector("span").innerText = "input status message";
    });
});
