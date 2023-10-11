// import { testCanvas } from '../index';
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
const moodleAssignmentId = "9";
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
    const moodleStudentList = await main.getStudentList('moodle', moodleCourseId);
    // is moodleStudentList defined?
    expect(moodleStudentList).toBeDefined();
    // is it array?
    expect(Array.isArray(moodleStudentList)).toBe(true);
    // save first object in array to firstStudent
    const firstStudent = moodleStudentList[0];
    // // does the first student have these properties?
    expect(firstStudent).toHaveProperty('id');
    expect(firstStudent).toHaveProperty('username');
    expect(firstStudent).toHaveProperty('firstname');
    expect(firstStudent).toHaveProperty('lastname');
    expect(firstStudent).toHaveProperty('fullname');
    expect(firstStudent).toHaveProperty('email');
    expect(firstStudent).toHaveProperty('department');
    expect(firstStudent).toHaveProperty('firstaccess');
    expect(firstStudent).toHaveProperty('lastaccess');
    expect(firstStudent).toHaveProperty('lastcourseaccess');
    expect(firstStudent).toHaveProperty('description');
    expect(firstStudent).toHaveProperty('descriptionformat');
    expect(firstStudent).toHaveProperty('city');
    expect(firstStudent).toHaveProperty('country');
    expect(firstStudent).toHaveProperty('profileimageurlsmall');
    expect(firstStudent).toHaveProperty('profileimageurl');
    expect(firstStudent).toHaveProperty('groups');
    //check the group property
    expect(firstStudent.groups).toBeInstanceOf(Array);
    expect(firstStudent.groups[0]).toHaveProperty('id');
    expect(firstStudent.groups[0]).toHaveProperty('name');
    expect(firstStudent.groups[0]).toHaveProperty('description');
    expect(firstStudent.groups[0]).toHaveProperty('descriptionformat');
    // Check the 'roles' property
    expect(firstStudent).toHaveProperty('roles');
    expect(firstStudent.roles).toBeInstanceOf(Array);
    expect(firstStudent.roles[0]).toHaveProperty('roleid');
    expect(firstStudent.roles[0]).toHaveProperty('shortname');
    expect(firstStudent.roles[0]).toHaveProperty('sortorder');
    // Check the 'enrolledcourses' property
    expect(firstStudent).toHaveProperty('enrolledcourses');
    expect(firstStudent.enrolledcourses).toBeInstanceOf(Array);
    expect(firstStudent.enrolledcourses[0]).toHaveProperty('id');
    expect(firstStudent.enrolledcourses[0]).toHaveProperty('fullname');
    expect(firstStudent.enrolledcourses[0]).toHaveProperty('shortname');
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

  fit('should return a student object for Moodle', async () => {
    const moodleStudent = await main.getStudentById('moodle', moodleCourseId, moodleToken, moodleStudentId);
    //is moodleStudent defined?    
    expect(moodleStudent).toBeDefined();
    // specific assertions for moodle:
    console.log(moodleStudent);
    expect(moodleStudent).toHaveProperty('username');
    expect(moodleStudent).toHaveProperty('firstaccess');
    expect(moodleStudent).toHaveProperty('fullname');
    // expect(moodleStudent).toHaveProperty('short_name');
    // expect(moodleStudent).toHaveProperty('sis_user_id');
    // expect(moodleStudent).toHaveProperty('integration_id');
    // expect(moodleStudent).toHaveProperty('root_account');
  });
});

describe('getTeacherList', () => {
  it('should return a list of teachers for Canvas', async () => {
    const canvasTeacherList = await main.getTeacherList('canvas', canvasCourseId, canvasToken);
    expect(canvasTeacherList).toBeDefined();
    expect(Array.isArray(canvasTeacherList)).toBe(true);
    const firstTeacher = canvasTeacherList[0];
    expect(firstTeacher).toHaveProperty('id');
    expect(firstTeacher).toHaveProperty('name'); // Check the correct property name
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
    
    // Check if moodleTeacherList is defined
    expect(moodleTeacherList).toBeDefined();
    
    // Check if it's an array
    expect(Array.isArray(moodleTeacherList)).toBe(true);
    const firstTeacher = moodleTeacherList[0];
    // Check that each teacher object in the list has these properties
    expect(firstTeacher).toHaveProperty('id');
        // You can add more properties as needed
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
    // Check if moodleTeacher is defined
    expect(moodleTeacher).toBeDefined();
    // Specific assertions for moodleTeacher properties
    expect(moodleTeacher).toHaveProperty('id');
    expect(moodleTeacher).toHaveProperty('username');
    expect(moodleTeacher).toHaveProperty('firstname');
    expect(moodleTeacher).toHaveProperty('lastname');
    expect(moodleTeacher).toHaveProperty('fullname');
    expect(moodleTeacher).toHaveProperty('email');
    expect(moodleTeacher).toHaveProperty('address');
    expect(moodleTeacher).toHaveProperty('phone1');
    expect(moodleTeacher).toHaveProperty('department');
    expect(moodleTeacher).toHaveProperty('institution');
    expect(moodleTeacher).toHaveProperty('idnumber');
    expect(moodleTeacher).toHaveProperty('firstaccess');
    expect(moodleTeacher).toHaveProperty('lastaccess');
    expect(moodleTeacher).toHaveProperty('lastcourseaccess');
    expect(moodleTeacher).toHaveProperty('description');
    expect(moodleTeacher).toHaveProperty('descriptionformat');
    expect(moodleTeacher).toHaveProperty('city');
    expect(moodleTeacher).toHaveProperty('country');
    expect(moodleTeacher).toHaveProperty('profileimageurlsmall');
    expect(moodleTeacher).toHaveProperty('profileimageurl');
    // Check the 'roles' property
    expect(moodleTeacher).toHaveProperty('roles');
    expect(moodleTeacher.roles).toBeInstanceOf(Array);
    expect(moodleTeacher.roles[0]).toHaveProperty('roleid');
    expect(moodleTeacher.roles[0]).toHaveProperty('shortname');
    // Check the 'enrolledcourses' property
    expect(moodleTeacher).toHaveProperty('enrolledcourses');
    expect(moodleTeacher.enrolledcourses).toBeInstanceOf(Array);
    expect(moodleTeacher.enrolledcourses[0]).toHaveProperty('id');
    expect(moodleTeacher.enrolledcourses[0]).toHaveProperty('fullname');
    expect(moodleTeacher.enrolledcourses[0]).toHaveProperty('shortname');
    // You can add similar checks for the other enrolled courses.
});
});


describe('getAssignmentList', () => {
  it('should return a list of assignments for Canvas', async () => {
    const canvasAssignmentList = await main.getAssignmentList('canvas', canvasToken, canvasCourseId);
    expect(canvasAssignmentList).toBeDefined();
    expect(Array.isArray(canvasAssignmentList)).toBe(true);
    const firstAssignment = canvasAssignmentList[0];
    expect(firstAssignment).toHaveProperty('id');
    expect(firstAssignment).toHaveProperty('description');
    expect(firstAssignment).toHaveProperty('due_at');
    expect(firstAssignment).toHaveProperty('unlock_at');
    expect(firstAssignment).toHaveProperty('lock_at');
    expect(firstAssignment).toHaveProperty('points_possible');
    expect(firstAssignment).toHaveProperty('grading_type');
    expect(firstAssignment).toHaveProperty('assignment_group_id');
    expect(firstAssignment).toHaveProperty('grading_standard_id');
    expect(firstAssignment).toHaveProperty('created_at');
    expect(firstAssignment).toHaveProperty('updated_at');
    expect(firstAssignment).toHaveProperty('peer_reviews');
    expect(firstAssignment).toHaveProperty('automatic_peer_reviews');
    expect(firstAssignment).toHaveProperty('position');
    expect(firstAssignment).toHaveProperty('grade_group_students_individually');
    expect(firstAssignment).toHaveProperty('anonymous_peer_reviews');
    expect(firstAssignment).toHaveProperty('group_category_id');
    expect(firstAssignment).toHaveProperty('post_to_sis');
    expect(firstAssignment).toHaveProperty('moderated_grading');
    expect(firstAssignment).toHaveProperty('omit_from_final_grade');
    expect(firstAssignment).toHaveProperty('intra_group_peer_reviews');
    expect(firstAssignment).toHaveProperty('anonymous_instructor_annotations');
    expect(firstAssignment).toHaveProperty('anonymous_grading');
    expect(firstAssignment).toHaveProperty('graders_anonymous_to_graders');
    expect(firstAssignment).toHaveProperty('grader_count');
    expect(firstAssignment).toHaveProperty('grader_comments_visible_to_graders');
    expect(firstAssignment).toHaveProperty('final_grader_id');
    expect(firstAssignment).toHaveProperty('grader_names_visible_to_final_grader');
    expect(firstAssignment).toHaveProperty('allowed_attempts');
    expect(firstAssignment).toHaveProperty('annotatable_attachment_id');
    expect(firstAssignment).toHaveProperty('hide_in_gradebook');
    expect(firstAssignment).toHaveProperty('secure_params');
    expect(firstAssignment).toHaveProperty('lti_context_id');
    expect(firstAssignment).toHaveProperty('course_id');
    expect(firstAssignment).toHaveProperty('name');
    expect(firstAssignment).toHaveProperty('submission_types');
    expect(firstAssignment).toHaveProperty('has_submitted_submissions');
    expect(firstAssignment).toHaveProperty('due_date_required');
    expect(firstAssignment).toHaveProperty('max_name_length');
    expect(firstAssignment).toHaveProperty('in_closed_grading_period');
    expect(firstAssignment).toHaveProperty('graded_submissions_exist');
    expect(firstAssignment).toHaveProperty('is_quiz_assignment');
    expect(firstAssignment).toHaveProperty('can_duplicate');
    expect(firstAssignment).toHaveProperty('original_course_id');
    expect(firstAssignment).toHaveProperty('original_assignment_id');
    expect(firstAssignment).toHaveProperty('original_lti_resource_link_id');
    expect(firstAssignment).toHaveProperty('original_assignment_name');
    expect(firstAssignment).toHaveProperty('original_quiz_id');
    expect(firstAssignment).toHaveProperty('workflow_state');
    expect(firstAssignment).toHaveProperty('important_dates');
    expect(firstAssignment).toHaveProperty('muted');
    expect(firstAssignment).toHaveProperty('html_url');
    expect(firstAssignment).toHaveProperty('has_overrides');
    expect(firstAssignment).toHaveProperty('needs_grading_count');
    expect(firstAssignment).toHaveProperty('sis_assignment_id');
    expect(firstAssignment).toHaveProperty('integration_id');
    expect(firstAssignment).toHaveProperty('integration_data');
    expect(firstAssignment).toHaveProperty('use_rubric_for_grading');
    expect(firstAssignment).toHaveProperty('free_form_criterion_comments');
    expect(firstAssignment).toHaveProperty('rubric');
    expect(firstAssignment).toHaveProperty('rubric_settings');
    expect(firstAssignment).toHaveProperty('published');
    expect(firstAssignment).toHaveProperty('unpublishable');
    expect(firstAssignment).toHaveProperty('only_visible_to_overrides');
    expect(firstAssignment).toHaveProperty('locked_for_user');
    expect(firstAssignment).toHaveProperty('submissions_download_url');
    expect(firstAssignment).toHaveProperty('post_manually');
    expect(firstAssignment).toHaveProperty('anonymize_students');
    expect(firstAssignment).toHaveProperty('require_lockdown_browser');
    expect(firstAssignment).toHaveProperty('restrict_quantitative_data');
  });

  it('should return a list of assignments for Moodle', async () => {
    const moodleAssignmentList = await main.getAssignmentList('moodle', moodleToken, moodleCourseId);
    expect(moodleAssignmentList).toBeDefined();
  });
});

describe('getAssignmentById', () => {
  it('should return an assignment object for Canvas', async () => {
    const canvasAssignment = await main.getAssignmentById('canvas', canvasToken, canvasCourseId, canvasAssignmentId);

    expect(canvasAssignment).toHaveProperty('id');
    expect(canvasAssignment).toHaveProperty('description');
    expect(canvasAssignment).toHaveProperty('due_at');
    expect(canvasAssignment).toHaveProperty('unlock_at');
    expect(canvasAssignment).toHaveProperty('lock_at');
    expect(canvasAssignment).toHaveProperty('points_possible');
    expect(canvasAssignment).toHaveProperty('grading_type');
    expect(canvasAssignment).toHaveProperty('assignment_group_id');
    expect(canvasAssignment).toHaveProperty('grading_standard_id');
    expect(canvasAssignment).toHaveProperty('created_at');
    expect(canvasAssignment).toHaveProperty('updated_at');
    expect(canvasAssignment).toHaveProperty('peer_reviews');
    expect(canvasAssignment).toHaveProperty('automatic_peer_reviews');
    expect(canvasAssignment).toHaveProperty('position');
    expect(canvasAssignment).toHaveProperty('grade_group_students_individually');
    expect(canvasAssignment).toHaveProperty('anonymous_peer_reviews');
    expect(canvasAssignment).toHaveProperty('group_category_id');
    expect(canvasAssignment).toHaveProperty('post_to_sis');
    expect(canvasAssignment).toHaveProperty('moderated_grading');
    expect(canvasAssignment).toHaveProperty('omit_from_final_grade');
    expect(canvasAssignment).toHaveProperty('intra_group_peer_reviews');
    expect(canvasAssignment).toHaveProperty('anonymous_instructor_annotations');
    expect(canvasAssignment).toHaveProperty('anonymous_grading');
    expect(canvasAssignment).toHaveProperty('graders_anonymous_to_graders');
    expect(canvasAssignment).toHaveProperty('grader_count');
    expect(canvasAssignment).toHaveProperty('grader_comments_visible_to_graders');
    expect(canvasAssignment).toHaveProperty('final_grader_id');
    expect(canvasAssignment).toHaveProperty('grader_names_visible_to_final_grader');
    expect(canvasAssignment).toHaveProperty('allowed_attempts');
    expect(canvasAssignment).toHaveProperty('annotatable_attachment_id');
    expect(canvasAssignment).toHaveProperty('hide_in_gradebook');
    expect(canvasAssignment).toHaveProperty('secure_params');
    expect(canvasAssignment).toHaveProperty('lti_context_id');
    expect(canvasAssignment).toHaveProperty('course_id');
    expect(canvasAssignment).toHaveProperty('name');
    expect(canvasAssignment).toHaveProperty('submission_types');
    expect(canvasAssignment).toHaveProperty('has_submitted_submissions');
    expect(canvasAssignment).toHaveProperty('due_date_required');
    expect(canvasAssignment).toHaveProperty('max_name_length');
    expect(canvasAssignment).toHaveProperty('in_closed_grading_period');
    expect(canvasAssignment).toHaveProperty('graded_submissions_exist');
    expect(canvasAssignment).toHaveProperty('is_quiz_assignment');
    expect(canvasAssignment).toHaveProperty('can_duplicate');
    expect(canvasAssignment).toHaveProperty('original_course_id');
    expect(canvasAssignment).toHaveProperty('original_assignment_id');
    expect(canvasAssignment).toHaveProperty('original_lti_resource_link_id');
    expect(canvasAssignment).toHaveProperty('original_assignment_name');
    expect(canvasAssignment).toHaveProperty('original_quiz_id');
    expect(canvasAssignment).toHaveProperty('workflow_state');
    expect(canvasAssignment).toHaveProperty('important_dates');
    expect(canvasAssignment).toHaveProperty('muted');
    expect(canvasAssignment).toHaveProperty('html_url');
    expect(canvasAssignment).toHaveProperty('has_overrides');
    expect(canvasAssignment).toHaveProperty('needs_grading_count');
    expect(canvasAssignment).toHaveProperty('sis_assignment_id');
    expect(canvasAssignment).toHaveProperty('integration_id');
    expect(canvasAssignment).toHaveProperty('integration_data');
    expect(canvasAssignment).toHaveProperty('use_rubric_for_grading');
    expect(canvasAssignment).toHaveProperty('free_form_criterion_comments');
    expect(canvasAssignment).toHaveProperty('rubric');
    expect(canvasAssignment).toHaveProperty('rubric_settings');
    expect(canvasAssignment).toHaveProperty('published');
    expect(canvasAssignment).toHaveProperty('unpublishable');
    expect(canvasAssignment).toHaveProperty('only_visible_to_overrides');
    expect(canvasAssignment).toHaveProperty('locked_for_user');
    expect(canvasAssignment).toHaveProperty('submissions_download_url');
    expect(canvasAssignment).toHaveProperty('post_manually');
    expect(canvasAssignment).toHaveProperty('anonymize_students');
    expect(canvasAssignment).toHaveProperty('require_lockdown_browser');
    expect(canvasAssignment).toHaveProperty('restrict_quantitative_data');
  });

  it('should return an assignment object for Moodle', async () => {
    const moodleAssignment = await main.getAssignmentById('moodle', moodleCourseId, moodleToken, moodleAssignmentId);
    expect(moodleAssignment).toBeDefined();
  });
});

describe('getRubricList', () => {
  it('should return a list of rubrics for Canvas', async () => {
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

  it('should return a list of rubrics for Moodle', async () => {
    const moodleRubricList = await main.getRubricList('moodle', moodleToken, moodleCourseId);
    expect(moodleRubricList).toBeDefined();
  });
});

describe('getRubricById', () => {
  it('should return a rubric object for Canvas', async () => {
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

  it('should return a rubric object for Moodle', async () => {
    const moodleRubric = await main.getRubricById('moodle', moodleCourseId, moodleToken, moodleRubricId);
    expect(moodleRubric).toBeDefined();
  });
});

describe("getCourseList", () => {
  it('should return a course list object for Canvas', async () => {
    const canvasCourseList = await main.getCourseList('canvas', canvasToken);
    console.log("CAfNVAS COURSE LIST" + JSON.stringify(canvasCourseList));
    expect(canvasCourseList).toBeDefined();
  });
  it('should return a course object for Moodle', async () => {
    const moodleCourseList = await main.getCourseList('moodle', moodleToken);
    console.log("MOODLE COURSE LIST" + JSON.stringify(moodleCourseList));
    expect(moodleCourseList).toBeDefined();
  });
});


