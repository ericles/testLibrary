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
  it('should return a list of students for Canvas', async () => {
    const canvasStudentList = await main.getStudentList('canvas', canvasCourseId, canvasToken);
    expect(canvasStudentList).toBeDefined();
    expect(Array.isArray(canvasStudentList)).toBe(true);
    // specific assertions for Canvas:
    expect(canvasStudentList.length).toBeGreaterThan(0); // Check that there are students.
    const firstStudent = canvasStudentList[0];
    expect(firstStudent).toHaveProperty('id', 109412431); // Check for specific values.
    expect(firstStudent).toHaveProperty('name', 'Student');
    expect(firstStudent).toHaveProperty('created_at', '2023-09-18T02:49:42-06:00');
    expect(firstStudent).toHaveProperty('sortable_name', 'Student');
    expect(firstStudent).toHaveProperty('short_name', 'Student');
    expect(firstStudent).toHaveProperty('sis_user_id', null);
    expect(firstStudent).toHaveProperty('integration_id', null);
    console.log(canvasStudentList); 
  });
  

  it('should return a list of students for Moodle', async () => {
    const moodleStudentList = await main.getStudentList('moodle', moodleCourseId, moodleToken);
    expect(moodleStudentList).toBeDefined();
    // Add more specific assertions for Moodle if needed.
  });

  it('should handle errors for Canvas', async () => {
    const invalidCanvasToken = 'invalid-canvas-token';
    const invalidCanvasCourseId = 'invalid-canvas-courseId';

    try {
      await main.getStudentList('canvas', invalidCanvasCourseId, invalidCanvasToken);
    } catch (error) {
      expect(error).toBeDefined();
      // Add more specific error handling assertions for Canvas if needed.
    }
  });

  it('should handle errors for Moodle', async () => {
    const invalidMoodleToken = 'invalid-moodle-token';
    const invalidMoodleCourseId = 'invalid-moodle-courseId';

    try {
      await main.getStudentList('moodle', invalidMoodleCourseId, invalidMoodleToken);
    } catch (error) {
      expect(error).toBeDefined();
      // Add more specific error handling assertions for Moodle if needed.
    }
  });
});


