export function getStudentList(){

}

export function getStudentById(){

}

export function getTeacherList(){

}

export function getTeacherById(){

}

export async function getCourseList(token: string) {
    const header = new Headers();
    header.append('authorization', 'Bearer ' + token);
  
    const options: RequestInit = {
      method: 'GET',
      headers: header,
    };
  
    try {
      const response = await fetch('https://canvas.instructure.com/api/v1/courses', options);
  
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error fetching course list:', error);
      throw error; 
    }
  }
  

export function getCourseById(){

}

export function getAssignmentList(){

}

export function getAssignmentById(){

}

export function getRubricList(){

}

export function getRubricById(){

}