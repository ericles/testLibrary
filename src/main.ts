import * as canvas from "./canvas";
import * as moodle from "./moodle";
import * as standardiser from "./standardiser";

//check pipeline comment


// Function to set the canvas token
export function setCanvasToken(token: string) {
  canvas.setToken(token);
}
// Function to set the moodle token
export function setMoodleToken(token: string) {
  moodle.setToken(token);
}

export function setMoodleURL(url: string){
  moodle.setApiURL(url);
}


export async function getStudentList(lms: string, courseId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getStudentList(courseId);
        // console.log("getStudentListCanvas", data);
      } catch (error) {
        console.error("Error in getStudentListCanvas:", error);
      }
      break;
    case 'moodle':
      try {
        data = await moodle.getStudentList(courseId);
        //console.log("getStudentListMoodle", data);
      } catch (error) {
        console.error("Error in getStudentListMoodle:", error);
      }
      break;
    default:
      break;
  }

  return standardiser.standardiseStudent(lms, data);
}

export async function getStudentById(lms: string, courseId: string, studentId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getStudentById(courseId, studentId);
        // console.log("getStudentByIdCanvas", data);
      } catch (error) {
        console.error("Error in getStudentByIdCanvas:", error);
      }
      break;
    case 'moodle':
      try {
        data = await moodle.getStudentById(courseId, studentId);
      } catch (error) {
        console.error("Error in getStudentByIdMoodle:", error);
      }
      break;
    default:
      break;
  }

  return standardiser.standardiseStudent(lms, data);
}

export async function getTeacherList(lms: string, courseId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getTeacherList(courseId);
        // console.log("getTeacherListCanvas", data);
      } catch (error) {
        console.error("Error in getTeacherListCanvas:", error);
      }
      break;
    case 'moodle':
      try {
        data = await moodle.getTeacherList(courseId);
        // console.log("getTeacherListMoodle", data);
      } catch (error) {
        console.error("Error in getTeacherListMoodle:", error);
      }
      break;
    default:
      break;
  }

  return standardiser.standardiseTeacher(lms, data);
}

export async function getTeacherById(lms: string, courseId: string, teacherId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getTeacherById(courseId, teacherId);
        // console.log("getTeacherByIdCanvas", data);
      } catch (error) {
        console.error("Error in getTeacherByIdCanvas:", error);
      }
      break;
      case 'moodle':
      try {
        data = await moodle.getTeacherById(courseId, teacherId);
        // console.log("getTeacherByIdMoodle", data);
      } catch (error) {
        console.error("Error in getTeacherByIdMoodle:", error);
      }
      break;
    default:
      break;
  }

  return standardiser.standardiseTeacher(lms, data);
}

export async function getCourseList(lms: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getCourseList();
        //console.log("getCourseListCanvas", data);
      } catch (error) {
        console.error("Error in getCourseListCanvas:", error);
      }
      break;
      case 'moodle':
      try {
        data = await moodle.getCourseList();
        //console.log("API getCourseListMoodle", data);
      } catch (error) {
        console.error("Error in getCourseListMoodle:", error);
      }
      break;
    default:
      break;
  }

  return standardiser.standardiseCourse(lms, data);
}


export async function getCourseById(lms: string, courseId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getCourseById(courseId);
        // console.log("getCourseByIdCanvas", data);
      } catch (error) {
        console.error("Error in getCourseByIdCanvas:", error);
      }
      break;
      case 'moodle':
      try {
        data = await moodle.getCourseById(courseId);
        //console.log("getCourseByIdMoodle", data);
      } catch (error) {
        console.error("Error in getCourseByIdMoodle:", error);
      }
      break;
    default:
      break;
  }

  return standardiser.standardiseCourse(lms, data);
}

export async function getAssignmentList(lms: string, courseId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getAssignmentList(courseId);
        // console.log("getAssignmentListCanvas", data);
      } catch (error) {
        console.error("Error in getAssignmentListCanvas:", error);
      }
      break;
    case 'moodle':
      try{
        data = await moodle.getAssignmentList(); 
        console.log("XXXXXXXXXXXX APIgetAssignmentListMoodle", data);
      } catch (error) {
        console.error("Error in getAssignmentListMoodle:", error);
      }
      break;
      default:
      break;
  }

  return standardiser.standardiseAssignment(lms, data);
}

export async function getAssignmentById(lms: string, courseId: string, assignmentId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getAssignmentById(courseId, assignmentId);
        // console.log("getAssignmentByIdCanvas", data);
      } catch (error) {
        console.error("Error in getAssignmentByIdMoodle:", error);
      }
      break;
      case 'moodle':
        try{
          data = await moodle.getAssignmentById(assignmentId); //just for testing
          //console.log("getAssignmentListMoodle", data);
        } catch (error) {
          console.error("Error in getAssignmentListMoodle:", error);
        }
      break;
      default:
      break;
  }

  return standardiser.standardiseAssignment(lms, data);;
}

export async function getRubricList(lms: string, courseId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getRubricList(courseId);
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

export async function getRubricById(lms: string, courseId: string, rubricId: string) {
  let data;

  switch (lms) {
    case 'canvas':
      try {
        data = await canvas.getRubricById(courseId, rubricId);
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