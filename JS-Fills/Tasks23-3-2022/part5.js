<<<<<<< HEAD
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
=======

        
       
        let x =  document.getElementsByClassName('warning')[0];
        let y = document.getElementsByClassName('warning')[1];
        
        
        function password(){
                let pass=document.getElementById('pWord').value;
                
                if(pass.length<6){
                    x.innerHTML = 'Too Short'
                    x.style.color = 'red';
                }else{
                    x.innerHTML = ''
                }
            }

        function repeatPasswor(){
            let pass=document.getElementById('pWord').value
            let repeatPass = document.getElementById('rPWord').value;
            if(pass!=repeatPass){
                    y.innerHTML = "The Two Password don't match"
                    y.style.color = 'red';
                }else{
                    y.innerHTML = ""
                    document.getElementById('submit').style.display='block'
                }
                
        }
  
>>>>>>> 871489d2765bfb22bde1ba125aa4a6fac39c3c22
