export function getStudentList(token: string, courseId: string){
    let url = 'https://canvas.instructure.com/api/v1/courses/'
    +  courseId + "users?enrollment_type=student";
  return getData(url, token);
}

export function getStudentById(token: string, courseId: string, userId: string){
    let url = 'https://canvas.instructure.com/api/v1/courses/'
    +  courseId + "/users/" + userId;
  return getData(url, token);
}

export function getTeacherList(token: string, courseId: string){
    let url = 'https://canvas.instructure.com/api/v1/courses/'
    +  courseId + "users?enrollment_type=teacher";
  return getData(url, token);
}

export function getTeacherById(token: string, courseId: string, userId: string){
    let url = 'https://canvas.instructure.com/api/v1/courses/'
    +  courseId + "/users/" + userId;
  return getData(url, token);
}

export async function getCourseList(token: string) {
  let url = 'https://canvas.instructure.com/api/v1/courses';

  return getData(url, token);
}
  

export async function getCourseById(token: string, courseId: string){
  let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId;

  return getData(url, token);
}

export async function getAssignmentList(token: string, courseId: string){
  let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId + '/assignments';

  return getData(url, token);
}

export async function getAssignmentById(token: string, courseId: string, assignmentId: string){
  let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId + '/assignments/' + assignmentId;

  return getData(url, token);
}

export function getRubricList(token: string, courseId: string){
  let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId + '/rubrics';

  return getData(url, token);
}

export function getRubricById(token: string, courseId: string, rubricId: string){
  let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId + '/rubrics/' + rubricId;

  return getData(url, token);
}

async function getData(url: string, token: string){
  const header = new Headers();
  header.append('authorization', 'Bearer ' + token);

  const options: RequestInit = {
    method: 'GET',
    headers: header,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } 
  catch (error) {
    console.error('Error getting data', error);
    throw error; 
  }
}