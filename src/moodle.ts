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
    end point -https://edlibrary.moodlecloud.com/webservice/rest/server.php?wstoken=73f5455ea3cff11ee966f6d19550e0e2&wsfunction=mod_assign_get_assignments&moodlewsrestformat=json&courseids[0]=9
}

export function getAssignmentById(){

}

export function getRubricList(){

}

export function getRubricById(){
    end point - https://edlibrary.moodlecloud.com/webservice/rest/server.php?wstoken=73f5455ea3cff11ee966f6d19550e0e2&wsfunction=mod_assign_get_submission_status&moodlewsrestformat=json&assignid=3&userid=5
}
