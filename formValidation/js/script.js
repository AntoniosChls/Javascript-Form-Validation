// Name field check
function testName() {
    var text = document.getElementById("Name").value;
    var pattern = /^[a-zA-Z]+$/;
    var checkString = pattern.test(text);
    //tests if the field is correct
    if (checkString == true && text.length > 2) {
        document.getElementById("NameError").innerHTML = ""
    }
    //tests if the field is not filled
    else if (text == "") {
        document.getElementById("NameError").innerHTML = "Please fill the field"
    }
    //Error message
    else {
        document.getElementById("NameError").innerHTML = "Invalid Name"
    }
}
//Email field check
function testEmail() {
    var text = document.getElementById("Email").value;
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkString = pattern.test(text);
    //tests if the field is correct
    if (checkString == true) {
        document.getElementById("EmailError").innerHTML = ""
    } else if (text == "") {
        document.getElementById("EmailError").innerHTML = "Please fill the field"
    }
    //Error message 
    else {
        document.getElementById("EmailError").innerHTML = "Invalid Email"

    }
}
//email validation check
function testReEmail() {
    email = document.getElementById("Email").value;
    reemail = document.getElementById("ReEmail").value;
    //checks if emails match
    if (email == reemail) {
        document.getElementById("ReEmailError").innerHTML = ""
    }
    //error message
    else if (reemail == "") {
        document.getElementById("ReEmailError").innerHTML = "Please fill the field"
    } else if (email != reemail) {
        document.getElementById("ReEmailError").innerHTML = "Emails doesn't match"
    }

}


//Phone field check
function testPhone() {
    var text = document.getElementById("Phone").value;
    var pattern = /^[0-9]+$/;
    var checkString = pattern.test(text);
    if (checkString == true && text.length == 10) {
        document.getElementById("PhoneError").innerHTML = ""
            //Tests if the field is not filled
    } else if (text == "") {
        document.getElementById("PhoneError").innerHTML = "Please fill the field"
    }
    //Error message
    else {
        document.getElementById("PhoneError").innerHTML = "Invalid Phone"
    }
}
//password check
function testPassword() {
    var text = document.getElementById("Password").value;
    var pattern = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    var checkString = pattern.test(text);
    //tests if password is strong
    if (checkString == true) {
        document.getElementById("PasswordError").innerHTML = ""
            //error messages
    } else if (text == "") {
        document.getElementById("PasswordError").innerHTML = "Please fill the field"
    } else {
        document.getElementById("PasswordError").innerHTML = "Weak Password"
    }
}




//Address field check

function testAddress() {
    var text = document.getElementById("Address").value;
    var pattern = /^(?=.*[A-Za-z])(?=.*\s)(?=.*\d)/;
    var checkString = pattern.test(text);
    //tests if the field is correct
    if (checkString == true && text.length > 2) {
        document.getElementById("AddressError").innerHTML = ""
    }
    //tests if the field is not filled
    else if (text == "") {
        document.getElementById("AddressError").innerHTML = "Please fill the field"
    }
    //Error message
    else {
        document.getElementById("AddressError").innerHTML = "Invalid Address"
    }
}