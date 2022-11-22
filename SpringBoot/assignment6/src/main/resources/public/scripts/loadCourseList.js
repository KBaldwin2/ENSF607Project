console.log('loadCourseList');

//Function to load list and iterate through specific column from getFetch
async function load_course_list(api) {
    let courseList = await getFetch(api);
    idList = [];
    courseList.forEach(course => idList.push(course['ucid']));
    console.log(idList);
    return idList;
}




