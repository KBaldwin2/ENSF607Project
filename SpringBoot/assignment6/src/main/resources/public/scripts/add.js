console.log("add.js");

let currentStudent = sessionStorage.getItem("studentId");
console.log(currentStudent);

//Disable section until course chosen

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
const sectionForm = document.getElementById("CourseSection");

courseForm.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    //save value that was selected in dropdown
    let selectedCourse = document.getElementById("courseIdList");
    sessionStorage.setItem("selectedCourse", selectedCourse.value);

    // idList = await loadSectionList(api);
    //HARDCODED TILL WE GET SECTIONS
    idList = ["1", "2", "3"]

    //Populate section list dropdown

    let sections = document.getElementById('courseSectionList'), id=idList;

    document.getElementById('defaultSection').innerHTML = "Please choose the section";
    for(let i = 0; i < idList.length; i++) {
        let option = document.createElement("OPTION"),
                    txt = document.createTextNode(idList[i]);
        option.appendChild(txt);
        sections.insertBefore(option, sections.lastChild);
    }
});

//When section is selected and submitted
sectionForm.addEventListener('submit', async function(evt) {
    //Enroll student to section on submit
    let selectedSection = document.getElementById("courseSectionList");
    sessionStorage.getItem("selectedCourse");
    postFetch(addNewCourse.concat('/', "3", "/students/", 1), {'test': "test"});
    //let studentEnrollmentsCheck = await getFetch(getStudentEnrollments.concat(currentStudent));
});