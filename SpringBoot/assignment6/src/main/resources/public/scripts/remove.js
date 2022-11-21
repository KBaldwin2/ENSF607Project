console.log('removalDropDown');

//TODO Pull all courses from server
function load_course_list() {
    //the purpose of this function will be to pull all the courses from the database 
    //format them as a dictionary {courseId1: [section1, section2], courseId2: [sec1, 2, 3], courseId3: [1]}
    course_list = { "ENE612": [1, 2, 4], "ENG311": [1, 2], "ENSF609": [1, 2, 3, 4], "ENE222": [1] };
    return course_list;
}

//Create list of course Ids
function create_course_list() {
    let idList = [];

    for (key in load_course_list()) {
        idList.push(key);
    }

    console.log(idList);
    return idList;
}

function create_section_list(courseId) {
    let courseSections = load_course_list()[courseId];
    return courseSections;
}

//Format dropdown menus with courseIds

idList = create_course_list();
let courseIds = document.getElementById('courseIdList'), id = idList;

//Iterate through courseIds list and add each as an option in form
for (let i = 0; i < idList.length; i++) {
    let option = document.createElement("OPTION"),
        txt = document.createTextNode(idList[i]);
    option.appendChild(txt);
    courseIds.insertBefore(option, courseIds.lastChild);
}

//Filter to the sections offered for specific course
//TODO: Use add.js action event handler to read what course was selected **hardcoded for testing
sectionList = create_section_list("ENSF609");
console.log(sectionList);

let courseSections = document.getElementById('courseSectionList'), section = sectionList;

//Format sections dropdown to only have sections for that course
for (let i = 0; i < sectionList.length; i++) {
    let option = document.createElement("OPTION"),
        txt = document.createTextNode(sectionList[i]);
    option.appendChild(txt);
    courseSections.insertBefore(option, courseSections.lastChild);
}