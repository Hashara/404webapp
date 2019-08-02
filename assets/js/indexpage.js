// Below function Executes on click of login button.
function userlogin(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  window.alert(username);

  if ( username == "Formget" && password == "formget#123"){
    alert ("Login successfully");
    window.location = "success.html"; // Redirecting to other page.
    return false;
  }
  else{
    alert("INVALID username or password! check your username and password");
  }
}
