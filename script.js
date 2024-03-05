/*Scipt to provide validation for contact page */

/*Form is valid by default, and is then set to false if any of the three forms are empty or invalid in the case of email, alert messages are then shown for the respective errors*/
function validateForm() {
    let isValid = true;
    let name = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["email"].value;
    let message = document.forms["myForm"]["message"].value;

    // Validate Name
    if (name == "") {
        alert("Name must be filled out");
        isValid = false;
    }

    // Validate Email
    if (email == "") {
        alert("Email must be filled out");
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Simple email format validation
        alert("Email is invalid");
        isValid = false;
    }

    // Validate Message
    if (message == "") {
        alert("Message must be filled out");
        isValid = false;
    }

    return isValid;
}