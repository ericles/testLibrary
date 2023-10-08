import * as canvas from "./canvas";
import * as moodle from "./moodle";
import * as standardiser from "./standardiser";


export async function getStudentList(lms: string, courseId: string, token: string = ""){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getStudentList(token, courseId);
        // console.log("getStudentListCanvas", data);
      } catch (error) {
        console.error("Error in getStudentListCanvas:", error);
      }
      break;
      case 'moodle':
      try {
        data = await moodle.getStudentList(courseId);
        console.log("getStudentListMoodle", data);
      } catch (error) {
        console.error("Error in getStudentListMoodle:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export async function getStudentById(lms: string, courseId: string, token: string, studentId: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getStudentById(token, courseId, studentId);
        // console.log("getStudentByIdCanvas", data);
      } catch (error) {
        console.error("Error in getStudentByIdCanvas:", error);
      }
      break;

      case 'moodle':
      try {
        data = await moodle.getStudentById(courseId, studentId);
        // console.log("getStudentByIdMoodle", data);
      } catch (error) {
        console.error("Error in getStudentByIdMoodle:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export async function getTeacherList(lms: string, courseId: string, token: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getTeacherList(token, courseId);
        // console.log("getTeacherListCanvas", data);
      } catch (error) {
        console.error("Error in getTeacherListCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export async function getTeacherById(lms: string, courseId: string, token: string, teacherId: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getTeacherById(token, courseId, teacherId);
        // console.log("getTeacherByIdCanvas", data);
      } catch (error) {
        console.error("Error in getTeacherByIdCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export async function getCourseList(lms: string, token: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getCourseList(token);
        // console.log("getCourseListCanvas", data);
      } catch (error) {
        console.error("Error in getCourseListCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}
  

export async function getCourseById(lms: string, token: string, courseId: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getCourseById(token, courseId);
        // console.log("getCourseByIdCanvas", data);
      } catch (error) {
        console.error("Error in getCourseByIdCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export async function getAssignmentList(lms: string, token: string, courseId: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getAssignmentList(token, courseId);
        // console.log("getAssignmentListCanvas", data);
      } catch (error) {
        console.error("Error in getAssignmentListCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export async function getAssignmentById(lms: string, token: string, courseId: string, assignmentId: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getAssignmentById(token, courseId, assignmentId);
        // console.log("getAssignmentByIdCanvas", data);
      } catch (error) {
        console.error("Error in getAssignmentByIdCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export async function getRubricList(lms: string, token: string, courseId: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getRubricList(token, courseId);
        // console.log("getRubricListCanvas", data);
      } catch (error) {
        console.error("Error in getRubricListCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}

export async function getRubricById(lms: string, token: string, courseId: string, rubricId: string){
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getRubricById(token, courseId, rubricId);
        // console.log("getRubricByIdCanvas", data);
      } catch (error) {
        console.error("Error in getRubricByIdCanvas:", error);
      }
      break;
    default:
      break;
  }

  return data;
}