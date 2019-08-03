function signin(){
    var name=document.signinform.name.value;
    var pw=document.signinform.passwd.value;
    
    if (name==""){
        alert ("Please enter the username!");
        return false;
    }
    if (pw==""){
        alert("Please enter the Password!");
        return false;
    }
    else{
        return true;   
    }
}

function signup(){
    var Uname=document.sign_up.Username.value;
    var Fname=document.sign_up.First_Name.value;
    var Lname=document.sign_up.Last_Name.value;
    var email=document.sign_up.Email.value;
    var pw=document.sign_up.passwd.value;
    var re_pw=document.sign_up.re_passwd.value;
    
    
    if (Uname==""){
        alert ("Please enter a username!");
        return false;
    }
    if (Fname==""){
        alert ("Please enter a first name!");
        return false;
    }
    if (Lname==""){
        alert ("Please enter a last name!");
        return false;
    }
    if (email==""){
        alert ("Please enter a email!");
        return false;
    }
    if (pw==""){
        alert ("Please enter a password!");
        return false;
    }
    if(pw!=re_pw){
        alert("Passwords Doesn't Match. Please Re-Enter");
        return false;
    }
    else{
        return true;
    }
}