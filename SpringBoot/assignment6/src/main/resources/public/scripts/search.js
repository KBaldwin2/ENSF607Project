console.log("search.js");

let currentStudent = sessionStorage.getItem("studentId");
console.log(currentStudent);

window.addEventListener('load', async function (evt) {
    evt.preventDefault();

    idList = await load_course_list(getAllCoursesAPI);
    let courseIds = document.getElementById('courseIdList'), id=idList;
    //Iterate through courseIds list and add each as an option in form
    for(let i = 0; i < idList.length; i++) {
        let option = document.createElement("OPTION"),
                    txt = document.createTextNode(idList[i]);
        option.appendChild(txt);
        courseIds.insertBefore(option, courseIds.lastChild);
    }
});

const courseForm = document.getElementById("CourseList");

courseForm.addEventListener('submit', async function(evt) {
    console.log("searchbutton pressed");
    //Need a way to search by only one course
    let courseList = await getFetch(getAllCoursesAPI);
    console.log(courseList);
    document.getElementById("courseinfo").innerHTML = "Here you go";

});