console.log("remove.js");

let currentStudent = sessionStorage.getItem("studentId");
console.log(currentStudent);

window.addEventListener('load', async function (evt) {
    evt.preventDefault();

    idList = await load_course_list(getStudentEnrollments.concat(currentStudent));

    if(idList.length == 0) {
        this.document.getElementById("noCourses").innerHTML = "Hmm.. Looks like you are not registered in any courses! Unfortunately you can quit before you even start."
    }

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
    //TO DO: HARDCODED TILL WE GET SECTIONS
    idList = ["1", "2", "3"]

    //Remove old sections from dropdown
    let oldSections = document.getElementById('courseSectionList').options;
    for(i=oldSections.length; i>0; i--) {
        oldSections.remove(i);
    }

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
    console.log("submit button pressed");

    //Send selected section and selected course and current student to enroll student api
    let selectedSection = document.getElementById("courseSectionList").value;
    let selectedCourse = sessionStorage.getItem("selectedCourse");
    alert("Course Succesfully removed!");
    
    //TO DO: Send to API
});