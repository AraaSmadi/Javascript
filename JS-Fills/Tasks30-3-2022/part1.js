function validname() {
    let namePatteren = /^[a-z]+$/gi;
    if (!fname.match(namePatteren) && lname.match(namePatteren)) {
        if (!fname.value.match(namePatteren)) {
            alert("First Name have a number or symbole");
        }
        if (!lname.value.match(namePatteren)) {
            alert("last Name have a number or symbole");
        }
    }
}

function validemail() {

    let emailPattern = /^[a-zA-Z0-9._ -]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.test(emailPattern) && !emcon.test(emailPattern)) {

        if (!email.value.test(emailPattern)) {
            alert("email fieled");

        }
        if (!emailconf.value.test(emailPattern)) {
            alert("email fieled");
        }

    } else {
        if (email.value !== emcon.value) {
            alert("email does not match");
        }
    }
}

function validpass() {

    let passPattern = /[A-Z]{1,2}[a-zA-Z0-9]{6,10}/
    if (!pas.value.match(passPattern && !pascon.value.match(passPattern))) {
        if (!pas.value.match(passPattern)) {
            pascon.innerHTML = "password should have start with capital letter having at least two numbers at least one special character or symbol"
        }
        if (!pascon.value.match(passPattern)) {
            pascon.innerHTML = "password should have start with capital letter having at least two numbers at least one special character or symbol"
        }
    } else {
        if (pas.value !== pascon.value) {
            pascon.innerHTML = "Password does not match "
        }
    }

}

function sub() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    validname();
    let email = document.getElementById("email");
    let emailconf = document.getElementById("emailconf");
    validemail();
    let pass = document.getElementById("pass");
    let passconf = document.getElementById("passconf");
    validpass();
}