console.log("menu.js");

const menuForm = document.getElementById('menu');
let studentsMenu = getFetch("http://localhost:8080/api/v1/student");

menuForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    console.log('register button pressed');

    //Creates a [key,value] for each radio button and pulls the value on submit
    const data = new FormData(menuForm);
    let menuOption = "";
    for(let output of data) {
        //prints output as [key, value]
        //so output[1] = name of selected option
        console.log(output[1]);
        menuOption = output[1];
    }

    switch(menuOption) {
        case "add_course":
            load_page("addCourse.html");
            break;
        case "remove_course" :
            load_page("deleteCourse.html");
            break;
        case "search_course":
            load_page("search.html");
            break;
        case "view_registrations":
            load_page("displayStudent.html");
            break;
        case "view_course_catalogue":
            load_page("displayCatalogue.html");
            break;
        case "quit_command":
            alert("Thanks for registering! You will be logged out now");
            load_page("login.html");
            break;
        default:
            console.log("nothing");
    }
});

