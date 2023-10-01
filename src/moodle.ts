const axios = require('axios'); // Use require instead of import

const API_URL = 'https://edlibrary.moodlecloud.com/webservice/rest/server.php';
const WS_TOKEN = 'b272fd552b8ecf4292a1e0613acf2546';

export function getStudentList(){
    endpoint - https://edlibrary.moodlecloud.com/webservice/rest/server.php?wstoken=73f5455ea3cff11ee966f6d19550e0e2&wsfunction=core_enrol_get_enrolled_users&moodlewsrestformat=json&courseid=10
}

export function getStudentById(){

}

export function getTeacherList(){

}

export function getTeacherById(){

}

export function getCourseList(){
    endpoint - https://edlibrary.moodlecloud.com/webservice/rest/server.php?wstoken=b272fd552b8ecf4292a1e0613acf2546&wsfunction=core_course_get_courses&moodlewsrestformat=json
}

export function getCourseById(){
    end point - https://edlibrary.moodlecloud.com/webservice/rest/server.php?wstoken=b272fd552b8ecf4292a1e0613acf2546&wsfunction=core_course_get_courses_by_field&moodlewsrestformat=json&field=id&value=8
}

export function getAssignmentList(){

}

export function getAssignmentById(){

}

export function getRubricList(){

}

export function getRubricById(){

}
