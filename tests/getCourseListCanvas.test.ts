
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



(global.fetch as jest.Mock) = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]), // Return an empty array 
  })
);

describe('getCourseList', () => {
  it('should return an array of courses with expected keys', async () => {
    const token = '7~HaO4qXhlfhquEAircCxGAE68LUIho1kmJ3JcYviNHh8j7OjJpdcmwHX6hgJAcA4n'; 

    const courses = await getCourseList('canvas', token);

    // Expect that the courses is an array
    expect(Array.isArray(courses)).toBe(true);

    // array of expected keys
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

  
    courses.forEach((course: course) => {
      expectedKeys.forEach((key) => {
        expect(course).toHaveProperty(key);
      });
    });
  });
});