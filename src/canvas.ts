export function getStudentList(){

}

export function getStudentById(){

}

export function getTeacherList(){

}

export function getTeacherById(){

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

export function getAssignmentById(){

}

export function getRubricList(){

}

export function getRubricById(){

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
    console.log(data);
    return data;
  } 
  catch (error) {
    console.error('Error getting data', error);
    throw error; 
  }
}