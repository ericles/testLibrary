const axios = require('axios'); // Use require instead of import

const API_URL = 'https://edlibrary.moodlecloud.com/webservice/rest/server.php';
const WS_TOKEN = 'b272fd552b8ecf4292a1e0613acf2546';

function getStudentList(){
    
}

function getStudentById(){

}

function getTeacherList(){

}

function getTeacherById(){

}

async function getCourseList(){

    try {
        const response = await axios.get(API_URL, {
          params: {
            wstoken: WS_TOKEN,
            wsfunction: 'core_course_get_courses',
            moodlewsrestformat: 'json',
          },
        });
    
        if (response.status === 200) {
          const data = response.data;
          // Process the data as needed here
          console.log('Courses:', data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error:');
      }

}

function getCourseById(){

}

function getAssignmentList(){

}

function getAssignmentById(){

}

function getRubricList(){

}

function getRubricById(){

}

getCourseList()
