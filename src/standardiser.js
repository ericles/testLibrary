"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.standardiseRubric = exports.standardiseAssignment = exports.standardiseCourse = exports.standardiseTeacher = void 0;
function standardiseStudent(lms, data) {
    var canvasKeyMapping = {
        id: 'canvasID',
        name: 'name',
        created_at: 'createdAt',
        // Add more Canvas key mappings 
    };
    var moodleKeyMapping = {
        id: 'moodleID',
        userame: 'userName',
        fullname: 'name',
        // Add more Moodle-specific key mappings here
    };
    var keyMapping = lms === 'canvas' ? canvasKeyMapping : moodleKeyMapping;
    var replaceKeys = function (obj) {
        var newData = {};
        for (var key in obj) {
            var newKey = keyMapping[key] || key; // Use the mapped key if available, otherwise keep the key as is
            if (Array.isArray(obj[key])) {
                // If the value is an array, recursively process each element
                newData[newKey] = obj[key].map(function (item) { return replaceKeys(item); });
            }
            else if (typeof obj[key] === 'object' && obj[key] !== null) {
                // If the value is an object, recursively process it
                newData[newKey] = replaceKeys(obj[key]);
            }
            else {
                newData[newKey] = obj[key];
            }
        }
        return newData;
    };
    return replaceKeys(data);
}
// Example usage with the provided data
var data = {
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
    roles: [{ roleid: 5, name: '', shortname: 'student', sortorder: 0 }],
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
var canvasData = standardiseStudent('canvas', data);
var moodleData = standardiseStudent('moodle', data);
console.log('Canvas Data:', canvasData);
console.log('Moodle Data:', moodleData);
function standardiseTeacher() {
}
exports.standardiseTeacher = standardiseTeacher;
function standardiseCourse() {
}
exports.standardiseCourse = standardiseCourse;
function standardiseAssignment() {
}
exports.standardiseAssignment = standardiseAssignment;
function standardiseRubric() {
}
exports.standardiseRubric = standardiseRubric;
