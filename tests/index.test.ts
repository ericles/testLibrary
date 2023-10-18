// impsort { testCanvas } from '../index';
import { getCourseList } from "../src/canvas";
import * as main from "../src/main";

const canvasToken = '7~HaO4qXhlfhquEAircCxGAE68LUIho1kmJ3JcYviNHh8j7OjJpdcmwHX6hgJAcA4n';
const canvasCourseId = "7809929";
const canvasStudentId = "109412431";
const canvasTeacherId = "109412162";
const canvasAssignmentId = "40873657";
const canvasRubricId = "1743469";

const moodleToken = "73f5455ea3cff11ee966f6d19550e0e2";
const moodleCourseId = "10";
const moodleStudentId = "5";
const moodleTeacherId = "4";
const moodleAssignmentId = "9"; //test
const moodleRubricId = "moodle";



describe('getStudentList', () => {

  // getstudentlistcanvas
  it('should return a list of students for Canvas', async () => {
    const canvasStudentList = await main.getStudentList('canvas', canvasCourseId, canvasToken);
    console.log("canvasStudentList ====================== " + JSON.stringify(canvasStudentList));
    // is canvasStudentList defined?
    expect(canvasStudentList).toBeDefined();
    // is it array?
    expect(Array.isArray(canvasStudentList)).toBe(true);
    // save first object in array to firstStudent
    const firstStudent = canvasStudentList[0];
    // does the first student have these properties?
    expect(firstStudent).toHaveProperty('StudentID');
    expect(firstStudent).toHaveProperty('FullName');
    expect(firstStudent).toHaveProperty('LastName');
    expect(firstStudent).toHaveProperty('FirstName');
    expect(firstStudent).toHaveProperty('Email');
  });


  it('should return a list of students for Moodle', async () => {
    const moodleStudentList = await main.getStudentList('moodle', moodleCourseId);
    console.log("moodleStudentList ====================== " + JSON.stringify(moodleStudentList));
    // is moodleStudentList defined?
    expect(moodleStudentList).toBeDefined();
    // is it array?
    expect(Array.isArray(moodleStudentList)).toBe(true);
    // save first object in array to firstStudent
    const firstStudent = moodleStudentList[0];
    // // does the first student have these properties?
    expect(firstStudent).toHaveProperty('StudentID');
    expect(firstStudent).toHaveProperty('FullName');
    expect(firstStudent).toHaveProperty('LastName');
    expect(firstStudent).toHaveProperty('FirstName');
    expect(firstStudent).toHaveProperty('Email');
  });
});

 //getstudentbyID
 describe('getStudentById', () => {
   it('should return a student object for Canvas', async () => {
     const canvasStudent = await main.getStudentById('canvas', canvasCourseId, canvasToken, canvasStudentId);
     //is canvasStudent defined?
     expect(canvasStudent).toBeDefined();
     // specific assertions for Canvas:
    expect(canvasStudent).toHaveProperty('StudentID');
    expect(canvasStudent).toHaveProperty('FullName');
    expect(canvasStudent).toHaveProperty('LastName');
    expect(canvasStudent).toHaveProperty('FirstName');
    expect(canvasStudent).toHaveProperty('Email');
   });
   it('should return a student object for Moodle', async () => {
     const moodleStudent = await main.getStudentById('moodle', moodleCourseId, moodleToken, moodleStudentId);
     //is moodleStudent defined?    
     expect(moodleStudent).toBeDefined();
     // specific assertions for moodle:
     // console.log(moodleStudent);
    expect(moodleStudent).toHaveProperty('StudentID');
    expect(moodleStudent).toHaveProperty('FullName');
    expect(moodleStudent).toHaveProperty('LastName');
    expect(moodleStudent).toHaveProperty('FirstName');
    expect(moodleStudent).toHaveProperty('Email');
   });
 });
 describe('getTeacherList', () => {
   it('should return a list of teachers for Canvas', async () => {
     const canvasTeacherList = await main.getTeacherList('canvas', canvasCourseId, canvasToken);
     expect(canvasTeacherList).toBeDefined();
     expect(Array.isArray(canvasTeacherList)).toBe(true);
     const firstTeacher = canvasTeacherList[0];
     expect(firstTeacher).toHaveProperty('TeacherID');
     expect(firstTeacher).toHaveProperty('FullName'); // Check the correct property name
     expect(firstTeacher).toHaveProperty('LastName');
     expect(firstTeacher).toHaveProperty('FirstName');
     expect(firstTeacher).toHaveProperty('Email');
   });
   it('should return a teacher object for Moodle', async () => {
     const moodleTeacher = await main.getTeacherById('moodle', moodleCourseId, moodleToken, moodleTeacherId);
     // Check if moodleTeacher is defined
     expect(moodleTeacher).toBeDefined();
     // Specific assertions for moodleTeacher properties
     expect(moodleTeacher).toHaveProperty('TeacherID');
     expect(moodleTeacher).toHaveProperty('FullName'); // Check the correct property name
     expect(moodleTeacher).toHaveProperty('LastName');
     expect(moodleTeacher).toHaveProperty('FirstName');
     expect(moodleTeacher).toHaveProperty('Email');
     });
   });




 describe('getTeacherById', () => {
   it('should return a teacher object for Canvas', async () => {
     const canvasTeacher = await main.getTeacherById('canvas', canvasCourseId, canvasToken, canvasTeacherId);
     expect(canvasTeacher).toBeDefined();
     expect(canvasTeacher).toHaveProperty('TeacherID');
     expect(canvasTeacher).toHaveProperty('FullName');
     expect(canvasTeacher).toHaveProperty('LastName');
     expect(canvasTeacher).toHaveProperty('FirstName');
     expect(canvasTeacher).toHaveProperty('Email');
   });
   it('should return a teacher object for Moodle', async () => {
     const moodleTeacher = await main.getTeacherById('moodle', moodleCourseId, moodleToken, moodleTeacherId);
     // Check if moodleTeacher is defined
     expect(moodleTeacher).toBeDefined();
     // Specific assertions for moodleTeacher properties
     expect(moodleTeacher).toHaveProperty('TeacherID');
     expect(moodleTeacher).toHaveProperty('FullName');
     expect(moodleTeacher).toHaveProperty('LastName');
     expect(moodleTeacher).toHaveProperty('FirstName');
     expect(moodleTeacher).toHaveProperty('Email');
     });
 });

 
 describe('getAssignmentList', () => {
   it('should return a list of assignments for Canvas', async () => {
     const canvasAssignmentList = await main.getAssignmentList('canvas', canvasToken, canvasCourseId);
     expect(canvasAssignmentList).toBeDefined();
     expect(Array.isArray(canvasAssignmentList)).toBe(true);
     const firstAssignment = canvasAssignmentList[0];
     expect(firstAssignment).toHaveProperty('AssignmentID');
     expect(firstAssignment).toHaveProperty('CourseID');
     expect(firstAssignment).toHaveProperty('AssignmentName');
     expect(firstAssignment).toHaveProperty('DueDate');
     expect(firstAssignment).toHaveProperty('Intro');
      });
   it('should return a list of assignments for Moodle', async () => {
     const moodleAssignmentList = await main.getAssignmentList('moodle', moodleToken, moodleCourseId);
     expect(moodleAssignmentList).toBeDefined();
     expect(Array.isArray(moodleAssignmentList)).toBe(true);
     const firstAssignment = moodleAssignmentList[0];
     expect(firstAssignment).toHaveProperty('AssignmentID');
     expect(firstAssignment).toHaveProperty('CourseID');
     expect(firstAssignment).toHaveProperty('AssignmentName');
     expect(firstAssignment).toHaveProperty('DueDate');
     expect(firstAssignment).toHaveProperty('Intro');
   });
 });
 describe('getAssignmentById', () => {
   it('should return an assignment object for Canvas', async () => {
     const canvasAssignment = await main.getAssignmentById('canvas', canvasToken, canvasCourseId, canvasAssignmentId);
     expect(canvasAssignment).toHaveProperty('AssignmentID');
     expect(canvasAssignment).toHaveProperty('CourseID');
     expect(canvasAssignment).toHaveProperty('AssignmentName');
     expect(canvasAssignment).toHaveProperty('DueDate');
     expect(canvasAssignment).toHaveProperty('Intro');
     });
   it('should return an assignment object for Moodle', async () => {
     const moodleAssignment = await main.getAssignmentById('moodle', moodleCourseId, moodleToken, moodleAssignmentId);
     expect(moodleAssignment).toBeDefined();
     expect(moodleAssignment).toHaveProperty('AssignmentID');
     expect(moodleAssignment).toHaveProperty('CourseID');
     expect(moodleAssignment).toHaveProperty('AssignmentName');
     expect(moodleAssignment).toHaveProperty('DueDate');
     expect(moodleAssignment).toHaveProperty('Intro');
   });
 });
 describe('getRubricList', () => {
   it.skip('should return a list of rubrics for Canvas', async () => {
     const canvasRubricList = await main.getRubricList('canvas', canvasToken, canvasCourseId);
     expect(canvasRubricList).toBeDefined();
     expect(Array.isArray(canvasRubricList)).toBe(true);
     const firstRubric = canvasRubricList[0];
     expect(firstRubric).toHaveProperty('id');
     expect(firstRubric).toHaveProperty('context_id');
     expect(firstRubric).toHaveProperty('context_type');
     expect(firstRubric).toHaveProperty('data');
     expect(firstRubric).toHaveProperty('points_possible');
     expect(firstRubric).toHaveProperty('title');
     expect(firstRubric).toHaveProperty('reusable');
     expect(firstRubric).toHaveProperty('public');
     expect(firstRubric).toHaveProperty('read_only');
     expect(firstRubric).toHaveProperty('free_form_criterion_comments');
     expect(firstRubric).toHaveProperty('hide_score_total');
   });
   it.skip('should return a list of rubrics for Moodle', async () => {
     const moodleRubricList = await main.getRubricList('moodle', moodleToken, moodleCourseId);
     expect(moodleRubricList).toBeDefined();
   });
 });
 describe('getRubricById', () => {
   it.skip('should return a rubric object for Canvas', async () => {
     const canvasRubric = await main.getRubricById('canvas', canvasToken, canvasCourseId, canvasRubricId);
     expect(canvasRubric).toBeDefined();
     expect(canvasRubric).toHaveProperty('id');
     expect(canvasRubric).toHaveProperty('context_id');
     expect(canvasRubric).toHaveProperty('context_type');
     expect(canvasRubric).toHaveProperty('data');
     expect(canvasRubric).toHaveProperty('points_possible');
     expect(canvasRubric).toHaveProperty('title');
     expect(canvasRubric).toHaveProperty('reusable');
     expect(canvasRubric).toHaveProperty('public');
     expect(canvasRubric).toHaveProperty('read_only');
     expect(canvasRubric).toHaveProperty('free_form_criterion_comments');
     expect(canvasRubric).toHaveProperty('hide_score_total');
   });
   it.skip('should return a rubric object for Moodle', async () => {
     const moodleRubric = await main.getRubricById('moodle', moodleCourseId, moodleToken, moodleRubricId);
     expect(moodleRubric).toBeDefined();
   });
 });
 describe("getCourseList", () => {
   it('should return a course list object for Canvas', async () => {
     const canvasCourseList = await main.getCourseList('canvas', canvasToken);
     expect(Array.isArray(canvasCourseList)).toBe(true);
     const firstCourse = canvasCourseList[0];
     //console.log("CAfNVAS COURSE LIST" + JSON.stringify(canvasCourseList));
     expect(firstCourse).toBeDefined();
     expect(firstCourse).toHaveProperty('CourseID');
     expect(firstCourse).toHaveProperty('CourseName');
     expect(firstCourse).toHaveProperty('StartDate');
     expect(firstCourse).toHaveProperty('EndDate');
     expect(firstCourse).toHaveProperty('Summary');
     expect(firstCourse).toHaveProperty('CreatedAt');
   });
   it('should return a course object for Moodle', async () => {
     const moodleCourseList = await main.getCourseList('moodle', moodleToken);
     expect(Array.isArray(moodleCourseList)).toBe(true);
     const firstMoodle = moodleCourseList[0];
     //console.log("MOODLE COURSE LIST" + JSON.stringify(moodleCourseList));
     expect(firstMoodle).toBeDefined();
     expect(firstMoodle).toHaveProperty('CourseID');
     expect(firstMoodle).toHaveProperty('CourseName');
     expect(firstMoodle).toHaveProperty('StartDate');
     expect(firstMoodle).toHaveProperty('EndDate');
     expect(firstMoodle).toHaveProperty('Summary');
     expect(firstMoodle).toHaveProperty('CreatedAt');
   });
 });
 describe("getCourseById", () => {
   it('should return a course by id object for Canvas', async () => {
     const canvasCourseList = await main.getCourseById('canvas', canvasToken, canvasCourseId);
     //console.log("CANVAS COURSE LIST" + JSON.stringify(canvasCourseList));
     expect(canvasCourseList).toBeDefined();
     expect(canvasCourseList).toHaveProperty('CourseID');
     expect(canvasCourseList).toHaveProperty('CourseName');
     expect(canvasCourseList).toHaveProperty('StartDate');
     expect(canvasCourseList).toHaveProperty('EndDate');
     expect(canvasCourseList).toHaveProperty('Summary');
     expect(canvasCourseList).toHaveProperty('CreatedAt');
   });
   it('should return a course object for Moodle', async () => {
     const moodleCourseList = await main.getCourseById('moodle', moodleToken, moodleCourseId);
     //console.log("MOODLE COURSE LIST" + JSON.stringify(moodleCourseList));
     expect(moodleCourseList).toBeDefined();
     expect(moodleCourseList).toHaveProperty('CourseID');
     expect(moodleCourseList).toHaveProperty('CourseName');
     expect(moodleCourseList).toHaveProperty('StartDate');
     expect(moodleCourseList).toHaveProperty('EndDate');
     expect(moodleCourseList).toHaveProperty('Summary');
     expect(moodleCourseList).toHaveProperty('CreatedAt');
   });
 });

