function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Information must be filled out");
        return false;
    }
}