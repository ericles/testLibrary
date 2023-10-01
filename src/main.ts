import * as canvas from "./canvas";
import * as moodle from "./moodle";
import * as standardiser from "./standardiser";


export function getStudentList(){
    
}

export function getStudentById(){

}

export function getTeacherList(){

}

export function getTeacherById(){

}

export async function getCourseList(lms: string, token: string){
    let data;

    switch(lms){
        case 'canvas':
            data = await canvas.getCourseList(token);
            console.log("GetCourseListCanvas" + data);
            break;
        default:
            break;
    }

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