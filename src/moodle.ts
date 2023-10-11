const axios = require('axios'); // Use require instead of import

const API_URL = 'https://edlibrary.moodlecloud.com/webservice/rest/server.php?';
const WS_TOKEN = '73f5455ea3cff11ee966f6d19550e0e2';

export async function getStudentList(courseId: string) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        wstoken: WS_TOKEN,
        wsfunction: 'core_enrol_get_enrolled_users',
        moodlewsrestformat: 'json',
        courseid: courseId
      },
    });
    if (response.status === 200) {
      const data = response.data;
      let studentList: Array<any> = [];
      data?.forEach(function (element: any) {
        const roles = element["roles"];
        if (roles.length > 0 && roles[0]["shortname"] == "student") {
          studentList.push(element);
        }
      });
      // Process the data as needed here
      return studentList;
    } else {
      console.error('Failed to fetch data:', response.statusText);
    }
  } catch (error) {
    console.log('Error:', error);
  }
  return null;
}

export async function getStudentById(courseId: string, studentId: string) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        wstoken: WS_TOKEN,
        wsfunction: 'core_enrol_get_enrolled_users',
        moodlewsrestformat: 'json',
        courseid: courseId
      },
    });
    let studentData = null;

    if (response.status === 200) {
      const data = response.data;

      data?.forEach(function (element: any) {
        if (element["id"] == studentId) {
          studentData = element;
          return studentData;
        }
      });
    } else {
      console.error('Failed to fetch data:', response.statusText);
    }
    return studentData;

  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}


export async function getTeacherList(courseId: string) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        wstoken: WS_TOKEN,
        wsfunction: 'core_enrol_get_enrolled_users',
        moodlewsrestformat: 'json',
        courseid: courseId
      },
    });
    let teacherList: Array<any> = [];

    if (response.status === 200) {
      const data = response.data;
      if (Array.isArray(data)) {
        data.forEach(function (element: any) {
          const roles = element["roles"];
          if (roles.length > 0 && roles[0]["shortname"] == "teacher" && "editingteacher") {
            teacherList.push(element);
          }
          else {
            console.log('Failed to fetch data:', response.statusText);
          }
        });
      }
      // Process the data as needed here
      // console.log('TeacherList:', teacherList);
    } else {
      console.error('Failed to fetch data:', response.statusText);
    }
    return teacherList;

  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}

export async function getTeacherById(courseId: string, teacherId: string) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        wstoken: WS_TOKEN,
        wsfunction: 'core_enrol_get_enrolled_users',
        moodlewsrestformat: 'json',
        courseid: courseId
      },
    });
    let teacherData = null;

    if (response.status === 200) {
      const data = response.data;
      data?.forEach(function (element: any) {
        if (element["id"] == teacherId) {
          teacherData = element;
          return teacherData;
        }
      });
    } else {
      console.error('Failed to fetch data:', response.statusText);
    }
    return teacherData;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}

export async function getCourseList() {

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

export function getCourseById() {

}

export function getAssignmentList() {

}

export function getAssignmentById() {

}

export function getRubricList() {

}

export function getRubricById() {

}

// getCourseList()
