import * as main from "./src/main";
const token= '7~HaO4qXhlfhquEAircCxGAE68LUIho1kmJ3JcYviNHh8j7OjJpdcmwHX6hgJAcA4n';
const courseId = "7809868";

export async function testCanvas() {
  try {
    // Call and log the results of Canvas-related methods
    const courseListData = await main.getCourseList('canvas', token);
    console.log("getCourseList CANVAS" + JSON.stringify(courseListData));

    const courseIdData = await main.getCourseById('canvas', token, courseId);
    console.log("getCourseById CANVAS" + JSON.stringify(courseIdData));

    const courseStudentList = await main.getStudentList('canvas', courseId, token);
    console.log("getStudentList CANVAS" + JSON.stringify(courseStudentList));

    const studentByIdData = await main.getStudentById('canvas', courseId, token, 'studentId');
    console.log("getStudentById CANVAS" + JSON.stringify(studentByIdData));

    const teacherListData = await main.getTeacherList('canvas', courseId, token);
    console.log("getTeacherList CANVAS" + JSON.stringify(teacherListData));

    const teacherByIdData = await main.getTeacherById('canvas', courseId, token, 'teacherId');
    console.log("getTeacherById CANVAS" + JSON.stringify(teacherByIdData));

    const assignmentListData = await main.getAssignmentList('canvas', token, courseId);
    console.log("getAssignmentList CANVAS" + JSON.stringify(assignmentListData));

    const assignmentByIdData = await main.getAssignmentById('canvas', token, courseId, 'assignmentId');
    console.log("getAssignmentById CANVAS" + JSON.stringify(assignmentByIdData));

    const rubricListData = await main.getRubricList('canvas', token, courseId);
    console.log("getRubricList CANVAS" + JSON.stringify(rubricListData));

    const rubricByIdData = await main.getRubricById('canvas', token, courseId, 'rubricId');
    console.log("getRubricById CANVAS" + JSON.stringify(rubricByIdData));

    return courseStudentList;
  } catch (error) {
    console.error("Error in testCanvas:", error);
    throw error;
  }
}