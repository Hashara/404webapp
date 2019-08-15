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
        alert ("please enter a username!");
        return false;
    }
    if (Fname==""){
        alert ("please enter a first name!");
        return false;
    }
    if (Lname==""){
        alert ("please enter a last name!");
        return false;
    }
    if (email==""){
        alert ("please enter a email!");
        return false;
    }
    if (pw==""){
        alert ("please enter a password!");
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

function Rides_page(){
    var Pickup=document.rides.Pick.value;
    var Dropoff=document.rides.Drop.value;
    var Dtntm=document.rides.dt.value;
    var type=document.rides.mode.value;
    
    if (Pickup==""){
        alert ("please enter a pickup location!");
        return false;
    }
    if (Dropoff==""){
        alert ("please enter a drop off location!!");
        return false;
    }
    if (Dtntm==""){
        alert ("please enter a booking time!");
        return false;
    }
    if (type=="Select your vehicle type..."){
        alert ("please enter the vehicle type");
        return false;
    }
    if (Dtntm==""){
        alert ("please enter a booking time!");
        return false;
    }
    else{
        return true;
    }
}

function myMap() {
    var mapProp= {center:new google.maps.LatLng(51.508742,-0.120850),zoom:5,};
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}