let newpass = document.getElementById('pass');
let confirmpass = document.getElementById('confpass');


function password() {
    let pass = document.getElementById('pWord').value;

    if (pass.length < 6) {
        x.innerHTML = 'Too Short'
        x.style.color = 'red';
    } else {
        x.innerHTML = ''
    }
}

function repeatPasswor() {
    let pass = document.getElementById('pWord').value
    let repeatPass = document.getElementById('rPWord').value;
    if (pass != repeatPass) {
        y.innerHTML = "The Two Password don't match"
        y.style.color = 'red';
    } else {
        y.innerHTML = ""
        document.getElementById('submit').style.display = 'block'
    }

}