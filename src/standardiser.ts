export function standardiseStudent(lms: string, data: Record<string, any>): Record<string, any> {
  console.log("LMS =======", lms);
  console.log("original =======", data);
    const canvasKeyMapping: Record<string, string> = {
        id: 'StudentID',
        name: 'FullName',
	      last_name: 'LastName',
	      first_name:'FirstName',
        email: 'Email',
      // Add more Canvas key mappings 
    };
  
    const moodleKeyMapping: Record<string, string> = {
        id: 'StudentID',
	      fullname: 'FullName',
	      lastname:'LastName',
	      firstname:'FirstName',
        email:'Email',
      // Add more Moodle-specific key mappings here
    };
  
    const keyMapping = lms === 'canvas' ? canvasKeyMapping : moodleKeyMapping;
    
      const replaceKeys = (obj: Record<string, any>): Record<string, any> => {
      const newData: Record<string, any> = {};
  
      for (const key in obj) {
        const newKey = keyMapping[key]; // Use the mapped key if available, otherwise skip the field
        console.log("keyMapping[key] =======", keyMapping[key]);  
        console.log("newKey =======", newKey);  

        if (newKey) {
          if (Array.isArray(obj[key])) {
            // If the value is an array, recursively process each element
            newData[newKey] = obj[key].map((item: any) => replaceKeys(item));
          } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // If the value is an object, recursively process it
            newData[newKey] = replaceKeys(obj[key]);
          } else {
            newData[newKey] = obj[key];
          }
        }
      }

      console.log("newData =======", newData);  
      return newData;
    };
  
    const standardizedData = replaceKeys(data);
    console.log("standardizedData =======", standardizedData);  
    return standardizedData;
  }



export function standardiseTeacher(lms: string, data: Record<string, any>): Record<string, any> {
  const canvasKeyMapping: Record<string, string> = {
    id: 'TeacherID',
    name: 'FullName',
last_name: 'LastName',
first_name:'FirstName',
    email: 'Email',
  // Add more Canvas key mappings 
};

const moodleKeyMapping: Record<string, string> = {
    id: 'TeacherID',
fullname: 'FullName',
lastname:'LastName',
firstname:'FirstName',
    email:'Email',
  // Add more Moodle-specific key mappings here
};

const keyMapping = lms === 'canvas' ? canvasKeyMapping : moodleKeyMapping;

const replaceKeys = (obj: Record<string, any>): Record<string, any> => {
  const newData: Record<string, any> = {};

  for (const key in obj) {
    const newKey = keyMapping[key] || key; // Use the mapped key if available, otherwise keep the key as is

    if (Array.isArray(obj[key])) {
      // If the value is an array, recursively process each element
      newData[newKey] = obj[key].map((item: any) => replaceKeys(item));
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is an object, recursively process it
      newData[newKey] = replaceKeys(obj[key]);
    } else {
      newData[newKey] = obj[key];
    }
  }

  return newData;
};

const standardizedData = replaceKeys(data);
const result: Record<string, any> = {};
for (const key in standardizedData) {
    if (key !== keyMapping[key]) {
      result[key] = standardizedData[key];
    }
  }

  return result;
}

export function standardiseCourse(lms: string, data: Record<string, any>): Record<string, any> {
  const canvasKeyMapping: Record<string, string> = {
    id: 'CourseID',
    name: 'CourseName',
    start_at: 'StartDate',
    end_at:'EndDate',
    public_description: 'Summary',
    created_at: 'CreatedAt',
  // Add more Canvas key mappings 
};

const moodleKeyMapping: Record<string, string> = {
    id: 'CourseID',
    fullname: 'CourseName',
    startdate: 'StartDate',
    enddate:'EndDate',
    summary: 'Summary',
    timecreated: 'CreatedAt',
  // Add more Moodle-specific key mappings here
};

const keyMapping = lms === 'canvas' ? canvasKeyMapping : moodleKeyMapping;

const replaceKeys = (obj: Record<string, any>): Record<string, any> => {
  const newData: Record<string, any> = {};

  for (const key in obj) {
    const newKey = keyMapping[key] || key; // Use the mapped key if available, otherwise keep the key as is

    if (Array.isArray(obj[key])) {
      // If the value is an array, recursively process each element
      newData[newKey] = obj[key].map((item: any) => replaceKeys(item));
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is an object, recursively process it
      newData[newKey] = replaceKeys(obj[key]);
    } else {
      newData[newKey] = obj[key];
    }
  }

  return newData;
};

const standardizedData = replaceKeys(data);
const result: Record<string, any> = {};
for (const key in standardizedData) {
    if (key !== keyMapping[key]) {
      result[key] = standardizedData[key];
    }
  }

  return result;
}

export function standardiseAssignment(lms: string, data: Record<string, any>): Record<string, any> {
  const canvasKeyMapping: Record<string, string> = {
    id: 'AssignmentID',
    course_id: 'CourseID',
    name: 'AssignmentName',
    due_at: 'DueDate',
    description:'Intro',
  // Add more Canvas key mappings 
};

const moodleKeyMapping: Record<string, string> = {
  id: 'AssignmentID',
  course: 'CourseID',
  name: 'AssignmentName',
  duedate: 'DueDate',
  description:'Intro',
  // Add more Moodle-specific key mappings here
};

const keyMapping = lms === 'canvas' ? canvasKeyMapping : moodleKeyMapping;

const replaceKeys = (obj: Record<string, any>): Record<string, any> => {
  const newData: Record<string, any> = {};

  for (const key in obj) {
    const newKey = keyMapping[key] || key; // Use the mapped key if available, otherwise keep the key as is

    if (Array.isArray(obj[key])) {
      // If the value is an array, recursively process each element
      newData[newKey] = obj[key].map((item: any) => replaceKeys(item));
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is an object, recursively process it
      newData[newKey] = replaceKeys(obj[key]);
    } else {
      newData[newKey] = obj[key];
    }
  }

  return newData;
};

const standardizedData = replaceKeys(data);
const result: Record<string, any> = {};
for (const key in standardizedData) {
    if (key !== keyMapping[key]) {
      result[key] = standardizedData[key];
    }
  }

  return result;
}

export function standardiseRubric(){

}
