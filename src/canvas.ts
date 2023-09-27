export function getStudentList(){

}

export function getStudentById(){

}

export function getTeacherList(){

}

export function getTeacherById(){

}

export async function getCourseList(token: string){
    const header = new Headers();
    header.append('authorization', 'Bearer ' + token);

    const options: RequestInit = {
        method: 'GET',
        headers: header
    };

    const data = await fetch('https://canvas.instructure.com/api/v1/courses', options);

    return data;
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