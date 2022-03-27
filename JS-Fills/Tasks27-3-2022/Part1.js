function sub() {
    localStorage.clear();
    let name = document.getElementById('name');
    localStorage.setItem('name', name.value);


    let age = document.getElementById('age');
    localStorage.setItem('age', age.value);


    if (document.getElementById('Male').checked) {
        let Male = document.getElementById('Male');
        localStorage.setItem('gender', Male.value);

    } else {
        let Female = document.getElementById('Female');
        localStorage.setItem('gender', Female.value);

    }




    let brief = document.getElementById('brief');
    localStorage.setItem('Brief_Description', brief.value);


    let mu = document.getElementById('mu');
    localStorage.setItem('Your_major_and_university', mu.value);



    let bd = document.getElementById('bd');
    localStorage.setItem('Birth_Date ', bd.value);



    let proglang = document.getElementById('proglang');
    localStorage.setItem('Programming_Language ', proglang.value);



    let image = document.getElementById('image');
    localStorage.setItem('your_image', image.value);



    let Fmembers = document.getElementById('Fmembers');
    localStorage.setItem('Family_member_numbers', Fmembers.value);




    let BDM1 = document.getElementById('BDM1');
    localStorage.setItem('Family_member_1', BDM1.value);




    let member1 = document.getElementById('member1');
    localStorage.setItem('member1', member1.value);



    let BDM2 = document.getElementById('BDM2');
    localStorage.setItem('Family_member_2', BDM2.value);



    let member2 = document.getElementById('member2');
    localStorage.setItem('member2', member2.value);



}

document.getElementById('par').innerHTML = "Your name:   " + localStorage.getItem('name') + "<br>" + "Your Age:   " + localStorage.getItem('age') + "<br>" +
    "gender:   " + localStorage.getItem('gender') + "<br>" + "Brief_Description:   " + localStorage.getItem('Brief_Description') + "<br>" +
    "Your_major_and_university:  " + localStorage.getItem('Your_major_and_university') + "<br>" + "Birth Date:   " + localStorage.getItem('Birth_Date') + "<br>" +
    "Programming_Language:  " + localStorage.getItem('Programming_Language') + "<br>" + "your image:  " + localStorage.getItem('your_image') + "<br>" + "Family_member_numbers:  " +
    localStorage.getItem('Family_member_numbers') + "<br>" + "Family_member_1:  " + localStorage.getItem('Family_member_1') + "<br>" +
    "member1  " + localStorage.getItem('member1') + "<br>" + "Family_member_2  " + localStorage.getItem('Family_member_2') + "<br>" +
    "member2  " + localStorage.getItem('member2') + "<br>";