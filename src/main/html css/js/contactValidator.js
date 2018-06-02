handleContactPage();

var w;
function handleContactPage() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("./js/contactWebWorker.js");
        }
        w.onmessage = function(event) {
            validateUserName();
            validateEmail();
            if (isValidUserName() && isValidEmail()) {
                document.getElementById("submit-btn").disabled = false;
            } else {
                document.getElementById("submit-btn").disabled = true;
            }
        };
    }
}


/*
    User
*/

function validateUserName() {
    if (isEmptyUserName()) {
        handleEmptyUserName();
    } else if (isValidUserName()) {
        handleValidUserName();
    } else {
        handleInvalidUserName();
    }
}

function isEmptyUserName() {
    var regex = /^$/;
    return regex.test(document.getElementById("username").value)
}

function handleEmptyUserName() {
    document.getElementById("username").style.backgroundColor = "Azure";
}

function isValidUserName() {
    var regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    return regex.test(document.getElementById("username").value);
}

function handleValidUserName() {
    document.getElementById("username").style.backgroundColor = "#ADFF2F";
}

function handleInvalidUserName() {
    document.getElementById("username").style.backgroundColor = "#ff5959";
}


/*
    Email
*/

function validateEmail() {
    if (isEmptyEmail()) {
        handleEmptyEmail();
    } else if (isValidEmail()) {
        handleValidEmail();
    } else {
        handleInvalidEmail();
    }
}

function isEmptyEmail() {
    var regex = /^$/;
    return regex.test(document.getElementById("email").value)
}

function handleEmptyEmail() {
    document.getElementById("email").style.backgroundColor = "Azure";
}

function isValidEmail() {
    var regex = /^[a-zA-Z0-9.-]+@[a-zA-Z]+[.][a-zA-Z]+$/;
    return regex.test(document.getElementById("email").value);
}

function handleValidEmail() {
    document.getElementById("email").style.backgroundColor = "#ADFF2F";
}

function handleInvalidEmail() {
    document.getElementById("email").style.backgroundColor = "#ff5959";
}