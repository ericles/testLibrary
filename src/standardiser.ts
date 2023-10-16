export function standardiseStudent(lms: string, data: Record<string, any>): Record<string, any> {
    const canvasKeyMapping: Record<string, string> = {
        id: 'Student ID',
        name: 'Full Name',
	      last_name: 'Last Name',
	      first_name:'First Name',
        email: 'Email',
      // Add more Canvas key mappings 
    };
  
    const moodleKeyMapping: Record<string, string> = {
        id: 'Student ID',
	      fullname: 'Full Name',
	      lastname:'Last Name',
	      firstname:'First Name',
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
    /* return replaceKeys(data); */
  }



export function standardiseTeacher(lms: string, data: Record<string, any>): Record<string, any> {
  const canvasKeyMapping: Record<string, string> = {
    id: 'Teacher ID',
    name: 'Full Name',
last_name: 'Last Name',
first_name:'First Name',
    email: 'Email',
  // Add more Canvas key mappings 
};

const moodleKeyMapping: Record<string, string> = {
    id: 'Teacher ID',
fullname: 'Full Name',
lastname:'Last Name',
firstname:'First Name',
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
    id: 'Course ID',
    name: 'Course Name',
    start_at: 'Start Date',
    end_at:'End Date',
    public_description: 'Summary',
    created_at: 'Created At',
  // Add more Canvas key mappings 
};

const moodleKeyMapping: Record<string, string> = {
    id: 'Course ID',
    fullname: 'Course Name',
    startdate: 'Start Date',
    enddate:'End Date',
    summary: 'Summary',
    timecreated: 'Created At',
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
    id: 'Assignment ID',
    course_id: 'Course ID',
    name: 'Assignment Name',
    due_at: 'Due Date',
    description:'Intro',
  // Add more Canvas key mappings 
};

const moodleKeyMapping: Record<string, string> = {
  id: 'Assignment ID',
  course: 'Course ID',
  name: 'Assignment Name',
  duedate: 'Due Date',
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
