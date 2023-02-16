const mainPW=document.getElementById("main-pw");
const confPW=document.getElementById("conf-pw");

function checkPassword(form){
    pw1=form.password.value;
    pw2=form.conf_password.value;

    if (pw1 == '')
                   { 
                    alert ("Please enter Password");
                    return false;
                }
                // If confirm password not entered
                else if (pw2 == ''){
                    alert ("Please enter confirm password");
                    return false;
                }
                // If Not same return False.    
                else if (pw1 != pw2) {
                    alert ("\nPassword did not match: Please try again...")
                    return false;
                }
  
                // If same return True.
                else{
                    alert("Password Match!")
                    return true;
                }
}