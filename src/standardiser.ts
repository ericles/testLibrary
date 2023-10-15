// Example data object
const data = {
    id: 5,
    username: 'jordan',
    firstname: 'Jordan',
    lastname: 'Junior',
    fullname: 'Jordan Junior',
    email: 'jordan1234@gmail.co.in.invalid',
    department: '',
    firstaccess: 1695791340,
    lastaccess: 1696245102,
    lastcourseaccess: 1696245108,
    description: '',
    descriptionformat: 1,
    city: 'Melbourne',
    country: 'AU',
    profileimageurlsmall: 'https://secure.gravatar.com/avatar/e965915045aa1e554ad27c8e408b969c?s=35&d=mm',
    profileimageurl: 'https://secure.gravatar.com/avatar/e965915045aa1e554ad27c8e408b969c?s=100&d=mm',
    groups: [
      {
        id: 2,
        name: 'MADS-Group2',
        description: '<p>Group 2</p>',
        descriptionformat: 1
      }
    ],
    roles: [ { roleid: 5, name: '', shortname: 'student', sortorder: 0 } ],
    enrolledcourses: [
      {
        id: 10,
        fullname: 'Masters of IT (Data Science)',
        shortname: 'MADS'
      },
      { id: 9, fullname: 'Masters of IT ', shortname: 'MAIT' },
      {
        id: 11,
        fullname: 'Bachelors of Cloud Computing',
        shortname: 'BCC'
      }
    ]
};

const canvasData = standardiseStudent('canvas', data);
const moodleData = standardiseStudent('moodle', data);

function standardiseStudent(lms: string, data: Record<string, any>): Record<string, any> {
    const canvasKeyMapping: Record<string, string> = {
        id: 'canvasID',
        name: 'name',
        created_at: 'createdAt',
      // Add more Canvas key mappings 
    };
  
    const moodleKeyMapping: Record<string, string> = {
        id: 'moodleID',
        userame: 'userName',
        fullname:'name',
      // Add more Moodle key mappings 
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
    //return only changed key name data
    const standardizedData = replaceKeys(data);
    const result: Record<string, any> = {};
    for (const key in standardizedData) {
        if (key !== keyMapping[key]) {
          result[key] = standardizedData[key];
        }
      }
    
    return result;

    //if want to return all dara
    /* return replaceKeys(data); */
  }

//Testing return data
console.log('Canvas Data:', canvasData);
console.log('Moodle Data:', moodleData);


export function standardiseTeacher(){

}

export function standardiseCourse(){

}

export function standardiseAssignment(){

}

export function standardiseRubric(){

}
