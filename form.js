


function validation() {
    alert("Your Response has been submitted")

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const organization = document.getElementById('organization').value ;


    if (user==" "){

        document.getElementById('un').innerHTML = 'please Enter the username!';
    }

    if((user.length < 3 ) || (user.length > 20)){

        document.getElementById('un').innerHTML = 'username must have altleast 3 characters';
    }


    if (pass==" "){
        document.getElementById('password').innerHTML = 'please Enter the passowrd!';
    }


    if((pass.length < 8 ) || (pass.length > 20)){

        document.getElementById('password').innerHTML = 'password must have altleast 8 characters';
    }



    if (email==" "){

        document.getElementById('em').innerHTML = 'please Enter the Email!';
    }


    if((email.length < 3 ) || (email.length > 70)){

        document.getElementById('em').innerHTML = 'Please enter a valid email address';
    }



    if (mobile==" "){

        document.getElementById('mn').innerHTML = 'please Enter the mobile Number!';
    }



    if((mobile.length < 11 ) || (mobile.length > 13)){
        document.getElementById('mn').innerHTML = 'Enter a valid mobile number';
    }


   
}

