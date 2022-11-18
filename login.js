console.log("login.js");

//Check to see if any of the elements in the form are blank 
function blankFieldAlert(formName) {
  //alert user if try to submit with any blank fields
  let elements = formName.elements;
  for(let i = 0; i<elements.length; i++) {
    if(elements[i].value == "") {
      alert("Please fill out all fields!");
      return true;
    }
  }
  return false;
} 

//LoginButton handler
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  console.log('login button clicked');

    //check to see if any fields are blank
  if(blankFieldAlert(loginForm)==true) {
    console.log("Blank fields found");
    return -1;
  }

    //if no blank fields were found - get values and send to server
  const fname = loginForm.fname.value;
  const lname = loginForm.lname.value;
  const studentId = loginForm.studentId.value;

    //TODO: send these back to the server as a LOGIN
    //SQL searches database for student ID:
      //IF NOT FOUND: returns alert message saying student not found plz register then returns -1
      //IF FOUND: redirects to menu page via load_page function

  //I am not sure if this is as simple as this??
  load_page("menu.html");

  });


registerForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log('register button clicked');
  
      //check to see if any fields are blank
    if(blankFieldAlert(registerForm)==true) {
      console.log("Blank fields found");
      return -1;
    }
  
      //if no blank fields were found - get values and send to server
    const fname = registerForm.fname.value;
    const lname = registerForm.lname.value;
    const studentId = registerForm.studentId.value;
  
      //TODO: send these back to the server as a REGISTER
      //SQL searches database for student ID:
        //IF NOT FOUND: inserts new student into database
        //IF FOUND: posts an alert saying student exists and do retry or login
  
    //I am not sure if this is as simple as this??
    load_page("menu.html");
  
    });
