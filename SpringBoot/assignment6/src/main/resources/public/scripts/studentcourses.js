console.log("studentCourses.js");

var currentStudent = 2;
var api = "http://localhost:8080/api/v1/student/";

//Get Text Box Form Element
let enrollments = document.getElementById('studentcourseinfo');

async function fetchStudentEnrollments(api) {
    const response = await getFetch(api);
    return response.json();
}

window.addEventListener('load', async function (evt) {
    evt.preventDefault();
    console.log('Student courses page selected');
    if (currentStudent == null) {
        console.log("Login potentially by-passed");
        return -1;
    }
    //if no blank fields were found - get values and send to server
    console.log("test fetch");
    var apiString = api.concat(currentStudent);
    var apiResponse = await fetchStudentEnrollments("http://localhost:8080/api/v1/student/2");
    if (apiResponse == -1)
        return -1;
    var formattedOutput = ""
    for (var i = 0; i < apiResponse.length; i++) {
        formattedOutput += i + 1 + ") " + apiResponse[i] + "\n";
    }
    enrollments.value = formattedOutput;
});

let submitButton = document.getElementById('BackMenu');

submitButton.addEventListener('click', function (evt) {
    console.log("Button Clicked!")
    load_page("Menu.html");
});