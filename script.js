//your JS code here. If required.
let btn = document.getElementById("btn");

btn.addEventListener("click", fetchValues);

function fetchValues() {
    let firstName = document.getElementById("first-name");
    let lastName = document.getElementById("last-name");
    let phoneNumber = document.getElementById("number");
    let email = document.getElementById("email");

    alert(`First Name: ${firstName.value} Last Name: ${lastName.value} Phone Number: ${phoneNumber.value} Email ID: ${email.value}`);

    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    email.value = "";
}