// import { testCanvas } from '../index';
import * as main from "../src/main";

const canvasToken= '7~HaO4qXhlfhquEAircCxGAE68LUIho1kmJ3JcYviNHh8j7OjJpdcmwHX6hgJAcA4n';
const canvasCourseId = "7809929";
const canvasStudentId = "109412431";
const canvasTeacherId = "109412162";
const canvasAssignmentId = "40873657";
const canvasRubricId = "1743469";

const moodleToken = "moodle";
const moodleCourseId = "moodle";
const moodleStudentId = "moodle";
const moodleTeacherId = "moodle";
const moodleAssignmentId = "moodle";
const moodleRubricId = "moodle";



describe('getStudentList', () => {

  // getstudentlistcanvas
  it('should return a list of students for Canvas', async () => {
    const canvasStudentList = await main.getStudentList('canvas', canvasCourseId, canvasToken);
    // is canvasStudentList defined?
    expect(canvasStudentList).toBeDefined();
    // is it array?
    expect(Array.isArray(canvasStudentList)).toBe(true);
    // save first object in array to firstStudent
    const firstStudent = canvasStudentList[0];
    // does the first student have these properties?
    expect(firstStudent).toHaveProperty('id');
    expect(firstStudent).toHaveProperty('name');
    expect(firstStudent).toHaveProperty('created_at');
    expect(firstStudent).toHaveProperty('sortable_name');
    expect(firstStudent).toHaveProperty('short_name');
    expect(firstStudent).toHaveProperty('sis_user_id');
    expect(firstStudent).toHaveProperty('integration_id');
  });
  

  it('should return a list of students for Moodle', async () => {
    const moodleStudentList = await main.getStudentList('moodle', moodleCourseId, moodleToken);
    expect(moodleStudentList).toBeDefined();
  });
});

//getstudentbyID
describe('getStudentById', () => {
  it('should return a student object for Canvas', async () => {
    const canvasStudent = await main.getStudentById('canvas', canvasCourseId, canvasToken, canvasStudentId);
    //is canvasStudent defined?
    expect(canvasStudent).toBeDefined();
    // specific assertions for Canvas:
    expect(canvasStudent).toHaveProperty('id');
    expect(canvasStudent).toHaveProperty('name');
    expect(canvasStudent).toHaveProperty('created_at');
    expect(canvasStudent).toHaveProperty('sortable_name');
    expect(canvasStudent).toHaveProperty('short_name');
    expect(canvasStudent).toHaveProperty('sis_user_id');
    expect(canvasStudent).toHaveProperty('integration_id');
    expect(canvasStudent).toHaveProperty('root_account');

  });

  it('should return a student object for Moodle', async () => {
    const moodleStudent = await main.getStudentById('moodle', moodleCourseId, moodleToken, moodleStudentId);
    //is moodleStudent defined?
    expect(moodleStudent).toBeDefined();
  });
});

describe('getTeacherList', () => {
  it('should return a list of teachers for Canvas', async () => {
    const canvasTeacherList = await main.getTeacherList('canvas', canvasCourseId, canvasToken);
    expect(canvasTeacherList).toBeDefined();
    expect(Array.isArray(canvasTeacherList)).toBe(true);
    const firstTeacher = canvasTeacherList[0];
    expect(firstTeacher).toHaveProperty('id');
    expect(firstTeacher).toHaveProperty('name');
    expect(firstTeacher).toHaveProperty('created_at');
    expect(firstTeacher).toHaveProperty('sortable_name');
    expect(firstTeacher).toHaveProperty('short_name');
    expect(firstTeacher).toHaveProperty('sis_user_id');
    expect(firstTeacher).toHaveProperty('integration_id');
    expect(firstTeacher).toHaveProperty('root_account');
    expect(firstTeacher).toHaveProperty('login_id');
    expect(firstTeacher).toHaveProperty('email');
  });

  it('should return a list of teachers for Moodle', async () => {
    const moodleTeacherList = await main.getTeacherList('moodle', moodleCourseId, moodleToken);
    expect(moodleTeacherList).toBeDefined();
  });
});

describe('getTeacherById', () => {
  it('should return a teacher object for Canvas', async () => {
    const canvasTeacher = await main.getTeacherById('canvas', canvasCourseId, canvasToken, canvasTeacherId);
    expect(canvasTeacher).toBeDefined();
    expect(canvasTeacher).toHaveProperty('id');
    expect(canvasTeacher).toHaveProperty('name');
    expect(canvasTeacher).toHaveProperty('created_at');
    expect(canvasTeacher).toHaveProperty('sortable_name');
    expect(canvasTeacher).toHaveProperty('short_name');
    expect(canvasTeacher).toHaveProperty('sis_user_id');
    expect(canvasTeacher).toHaveProperty('integration_id');
    expect(canvasTeacher).toHaveProperty('root_account');
    expect(canvasTeacher).toHaveProperty('login_id');
    // expect(canvasTeacher).toHaveProperty('email');
  });

  it('should return a teacher object for Moodle', async () => {
    const moodleTeacher = await main.getTeacherById('moodle', moodleCourseId, moodleToken, moodleTeacherId);
    expect(moodleTeacher).toBeDefined();
  });
});

describe('getAssignmentList', () => {
  it('should return a list of assignments for Canvas', async () => {
    const canvasAssignmentList = await main.getAssignmentList('canvas', canvasToken, canvasCourseId);
//     console.log("getAssignmentList CANVAS" + JSON.stringify(assignmentListData));
    expect(Array.isArray(canvasAssignmentList)).toBe(true);
  });

  it('should return a list of assignments for Moodle', async () => {
    const moodleAssignmentList = await main.getAssignmentList('moodle', moodleCourseId, moodleToken);
    expect(moodleAssignmentList).toBeDefined();
  });
});

describe('getAssignmentById', () => {
  it('should return an assignment object for Canvas', async () => {
    const canvasAssignment = await main.getAssignmentById('canvas', canvasCourseId, canvasToken, canvasAssignmentId);
    expect(canvasAssignment).toBeDefined();
  });


  it('should return an assignment object for Moodle', async () => {
    const moodleAssignment = await  main.getAssignmentById('moodle', moodleCourseId, moodleToken, moodleAssignmentId);
    expect(moodleAssignment).toBeDefined();
  });
});

describe('getRubricList', () => {
  it('should return a list of rubrics for Canvas', async () => {
    const canvasRubricList = await main.getRubricList('canvas', canvasCourseId, canvasToken);
    expect(canvasRubricList).toBeDefined();
    expect(Array.isArray(canvasRubricList)).toBe(true);
  });

  it('should return a list of rubrics for Moodle', async () => {
    const moodleRubricList = await main.getRubricList('moodle', moodleCourseId, moodleToken);
    expect(moodleRubricList).toBeDefined();
  });
});

describe('getRubricById', () => {
  it('should return a rubric object for Canvas', async () => {
    const canvasRubric = await main.getRubricById('canvas', canvasCourseId, canvasToken, canvasRubricId);
    expect(canvasRubric).toBeDefined();
  });

  it('should return a rubric object for Moodle', async () => {
    const moodleRubric = await main.getRubricById('moodle', moodleCourseId, moodleToken, moodleRubricId);
    expect(moodleRubric).toBeDefined();
  });
});

