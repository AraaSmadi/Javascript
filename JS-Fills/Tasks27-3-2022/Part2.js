let Subject = document.getElementById('Subject');
let Description = document.getElementById('Description');
let ut = document.getElementById('ut');
let tu = document.getElementById('tu');
let image = document.getElementById('image');

function sub() {
    sessionStorage.clear();
    sessionStorage.setItem('Subject', `${Subject.value}`);
    sessionStorage.setItem('Description', `${Description.value}`);
    sessionStorage.setItem('User_Types', `${ut.value}`);
    sessionStorage.setItem('Technology_used', `${tu.value}`);
    sessionStorage.setItem('your_image', `${image.value}`);

    sessionStorage.setItem("display", "block")

}


document.getElementById('p').innerHTML = "Subject:   " + sessionStorage.getItem('Subject') + "<br>" + "Description:   " + sessionStorage.getItem('Description') + "<br>" +
    "User_Types:   " + sessionStorage.getItem('User_Types') + "<br>" + "Technology_used:   " + sessionStorage.getItem('Technology_used') + "<br>" +
    "image:  " + sessionStorage.getItem('your_image');