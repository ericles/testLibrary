// // index.test.ts
// import { greet } from '../index'; 

// // describe all tests i test suite with string
// describe('greet function', () => {
// //it defines an individual test. it takes a description string
// // and a callback function
//   it('should return "Hello, World!"', () => {
//     const result = greet();
//     //expect().toBe
//     expect(result).toBe('Hello, World!');
//     //will pass or fail
//   });
// });



import { greet } from '../index'; 
import { getCourseList } from '../src/main';

interface course {
  id: number;
  name: string;
  account_id: number;
  uuid: string;
  start_at: string | null;
  grading_standard_id: number | null;
  is_public: boolean;
  created_at: string;
  course_code: string;
  default_view: string;
  root_account_id: number;
  enrollment_term_id: number;
  license: string | null;
  grade_passback_setting: any | null; // You may specify a more specific type here if known
  end_at: string | null;
  public_syllabus: boolean;
  public_syllabus_to_auth: boolean;
  storage_quota_mb: number;
  is_public_to_auth_users: boolean;
  homeroom_course: boolean;
  course_color: string | null;
  friendly_name: string | null;
  apply_assignment_group_weights: boolean;
  calendar: {
    ics: string;
  };
  time_zone: string;
  blueprint: boolean;
  template: boolean;
  sis_course_id: string | null;
  integration_id: string | null;
  enrollments: any[][]; // You may specify a more specific type here if known
  hide_final_grades: boolean;
  workflow_state: string;
  restrict_enrollments_to_course_dates: boolean;
}



(global.fetch as jest.Mock) = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]), // Return an empty array for simplicity
  })
);

describe('getCourseList', () => {
  it('should return an array of courses with expected keys', async () => {
    const token = 'your-access-token'; // Replace with a valid access token

    const courses = await getCourseList('canvas', token);

    // Expect that the courses variable is an array
    expect(Array.isArray(courses)).toBe(true);

    // Define an array of expected keys that should be present in each course item
    const expectedKeys = [
      'id',
      'name',
      'account_id',
      'uuid',
      'start_at',
      'grading_standard_id',
      'is_public',
      'created_at',
      'course_code',
      'default_view',
      'root_account_id',
      'enrollment_term_id',
      'license',
      'grade_passback_setting',
      'end_at',
      'public_syllabus',
      'public_syllabus_to_auth',
      'storage_quota_mb',
      'is_public_to_auth_users',
      'homeroom_course',
      'course_color',
      'friendly_name',
      'apply_assignment_group_weights',
      'calendar',
      'time_zone',
      'blueprint',
      'template',
      'sis_course_id',
      'integration_id',
      'enrollments',
      'hide_final_grades',
      'workflow_state',
      'restrict_enrollments_to_course_dates',
    ];

    // Iterate through each course and check if it contains all the expected keys
    courses.forEach((course: course) => {
      expectedKeys.forEach((key) => {
        expect(course).toHaveProperty(key);
      });
    });
  });
});