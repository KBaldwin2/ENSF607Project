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

  //if no blank fields were found - save values for student
  let name = loginForm.name.value;
  let password = loginForm.password.value;
  let studentId = loginForm.studentId.value;
  //Search each ID for a matching ID

  if(searchStudent(studentId)===true) {
    console.log(studentId);
    console.log("student found");
    //load_page("menu.html");
    return name, studentId;
  }

  else {
    console.log(studentId);
    console.log("NO STUDENT FOUND");
    alert("Invalid Credentials. Please try again or register if you are a new student.");
    return -1;
  }
  
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
    let name = registerForm.name.value;
    let password = registerForm.password.value;
    let studentId = registerForm.studentId.value;

    if(searchStudent(studentId) == true) {
      console.log("STUDENT FOUND");
      alert("We found a profile matching this information. Please login.");
      return -1;
    }

    else {
      postFetch(addStudentAPI, {"username": name, "password": password, "ucid": studentId});
      console.log("Student added");
      // load_page("menu.html");
    }
  
    });
