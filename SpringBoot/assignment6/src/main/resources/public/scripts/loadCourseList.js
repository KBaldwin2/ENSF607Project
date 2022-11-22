console.log('loadCourseList');

//Function to load list and iterate through specific column from getFetch
async function load_course_list(api, courseName) {
    let courseList = await getFetch(api);
    idList = [];
    courseList.forEach(course => idList.push(course[courseName]));
    console.log(idList);
    return idList;
}




