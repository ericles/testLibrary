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

// Define the course type
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
  grade_passback_setting: any | null;
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
  enrollments: any[][];
  hide_final_grades: boolean;
  workflow_state: string;
  restrict_enrollments_to_course_dates: boolean;
}



describe('greet function', () => {
  it('should return an array of courses with the expected structure', async () => {
    const result = await greet();

    expect(Array.isArray(result)).toBe(true);

    result.forEach((course: course) => {
      expect(course).toMatchObject<course>({
        id: expect.any(Number),
        name: expect.any(String),
        account_id: expect.any(Number),
        uuid: expect.any(String),
        start_at: expect.any(String),
        grading_standard_id: expect.any(Number),
        is_public: expect.any(Boolean),
        created_at: expect.any(String),
        course_code: expect.any(String),
        default_view: expect.any(String),
        root_account_id: expect.any(Number),
        enrollment_term_id: expect.any(Number),
        license: expect.any(String),
        grade_passback_setting: expect.anything(), // Allow any value, as it can be null
        end_at: expect.anything(), // Allow any value, as it can be null
        public_syllabus: expect.any(Boolean),
        public_syllabus_to_auth: expect.any(Boolean),
        storage_quota_mb: expect.any(Number),
        is_public_to_auth_users: expect.any(Boolean),
        homeroom_course: expect.any(Boolean),
        course_color: expect.anything(), // Allow any value, as it can be null
        friendly_name: expect.anything(), // Allow any value, as it can be null
        apply_assignment_group_weights: expect.any(Boolean),
        calendar: {
          ics: expect.any(String),
        },
        time_zone: expect.any(String),
        blueprint: expect.any(Boolean),
        template: expect.any(Boolean),
        sis_course_id: expect.anything(), // Allow any value, as it can be null
        integration_id: expect.anything(), // Allow any value, as it can be null
        enrollments: expect.any(Array), // Allow any array
        hide_final_grades: expect.any(Boolean),
        workflow_state: expect.any(String),
        restrict_enrollments_to_course_dates: expect.any(Boolean),
      });
    });
  });
});
