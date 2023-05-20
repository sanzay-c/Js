// this code is for the login form
document.getElementById('lbtn').onclick = function(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
  
    let getEmail = localStorage.getItem('userEmail');
    let getPassword = localStorage.getItem('userPassword');
  
    if (email === getEmail && password === getPassword){
        window.location.assign("landingpage.html");
        alert("you are logging in...");
    } else if(email == '' && password == ''){
        alert("you must enter email and password");
    } else {
        alert("Invalid entry");
    }
}


// this code is for registration of form 
document.getElementById('btn_reg').onclick = function(){
    let fullName = document.getElementById('reg_name').value;
    let email = document.getElementById('reg_email').value;
    let password = document.getElementById('reg_password').value;
  
    if (fullName === "" || email === "" || password === ""){
      alert("You must enter fullName, email and password");
    }
  
    localStorage.setItem('userName', fullName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    
    window.location.assign("landingpage.html"); 
    alert("Registration successful");
}
  
  
// this is for logout
document.getElementById("l_out_btn").onclick = function(){

    window.location.assign("login.html");
}
