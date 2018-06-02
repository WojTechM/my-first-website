function sendMessage() {
    showAlert();
    clearUserName();
    clearEmail();
    resetMessage();
}

function showAlert() {
    alert("Message sent!");
}

function clearUserName() {
    document.getElementById("username").value = "";
}

function clearEmail() {
    document.getElementById("email").value = "";
}

function resetMessage() {
    document.getElementById("message").value = "Add your message here";
}