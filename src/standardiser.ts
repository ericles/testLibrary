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
    console.log("keyMapping =======", keyMapping);

    const standardizedData = replaceKeys(data, keyMapping);
    console.log("standardizedData =======", standardizedData);

    const result: Record<string, any> = {};
    for (const key in standardizedData) {
      if (key !== keyMapping[key]) {
        result[key] = standardizedData[key];
      }
    }
    console.log("result =======", result);
    return result;
}


function replaceKeys(obj: Record<string, any>, keyMapping: Record<string, string>): Record<string, any> {
  const newData: Record<string, any> = {};

  for (const key in obj) {
    const newKey = keyMapping[key] || key; // Use the mapped key if available, otherwise keep the key as is

    if (Array.isArray(obj[key])) {
      // If the value is an array, recursively process each element
      newData[newKey] = obj[key].map((item: any) => {
        if (typeof item === 'object' && item !== null) {
          return replaceKeys(item, keyMapping);
        } else {
          return item;
        }
      });
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      // If the value is an object, recursively process it
      newData[newKey] = replaceKeys(obj[key], keyMapping);
    } else {
      newData[newKey] = obj[key];
    }
  }

  return newData;
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

