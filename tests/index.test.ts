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
    expect(canvasStudentList).toBeDefined();
    expect(Array.isArray(canvasStudentList)).toBe(true);
    // specific assertions for Canvas:
    const firstStudent = canvasStudentList[0];
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

  it('should handle errors for Canvas', async () => {
    const invalidCanvasToken = 'invalid-canvas-token';
    const invalidCanvasCourseId = 'invalid-canvas-courseId';

    try {
      await main.getStudentList('canvas', invalidCanvasCourseId, invalidCanvasToken);
    } catch (error) {
      expect(error).toBeDefined();
      
    }
  });

  it('should handle errors for Moodle', async () => {
    const invalidMoodleToken = 'invalid-moodle-token';
    const invalidMoodleCourseId = 'invalid-moodle-courseId';

    try {
      await main.getStudentList('moodle', invalidMoodleCourseId, invalidMoodleToken);
    } catch (error) {
      expect(error).toBeDefined();
      
    }
  });
});

//getstudentbyID
describe('getStudentById', () => {
  it('should return a student object for Canvas', async () => {
    const canvasStudent = await main.getStudentById('canvas', canvasCourseId, canvasToken, canvasStudentId);
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
});