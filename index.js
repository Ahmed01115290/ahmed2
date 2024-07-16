function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var error = document.getElementById("error");
    var text = "";

    // Reset error message
    error.innerHTML = "";

    // Validate name
    if (name.length < 6) {
        text = "Please enter a valid Name (at least 6 characters)";
        error.innerHTML = text;
        return false;
    }

    // Validate email
    if (email.length < 10 || email.indexOf("@") === -1) {
        text = "Please enter a valid Email";
        error.innerHTML = text;
        return false;
    }

    // Validate phone (if needed)

    // If all validations pass
    text = " valid Email";
    error.innerHTML = text;
    alert('creat account')
    return true;
}
