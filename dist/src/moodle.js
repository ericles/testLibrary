"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRubricById = exports.getRubricList = exports.getAssignmentById = exports.getAssignmentList = exports.getCourseById = exports.getCourseList = exports.getTeacherById = exports.getTeacherList = exports.getStudentById = exports.getStudentList = void 0;
const axios = require('axios'); // Use require instead of import
const API_URL = 'https://edlibrary.moodlecloud.com/webservice/rest/server.php?';
const WS_TOKEN = '73f5455ea3cff11ee966f6d19550e0e2';
function getStudentList(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get(API_URL, {
                params: {
                    wstoken: WS_TOKEN,
                    wsfunction: 'core_enrol_get_enrolled_users',
                    moodlewsrestformat: 'json',
                    courseid: courseId
                },
            });
            if (response.status === 200) {
                const data = response.data;
                let studentList = [];
                data === null || data === void 0 ? void 0 : data.forEach(function (element) {
                    const roles = element["roles"];
                    if (roles.length > 0 && roles[0]["shortname"] == "student") {
                        studentList.push(element);
                    }
                });
                // Process the data as needed here
                return studentList;
            }
            else {
                console.error('Failed to fetch data:', response.statusText);
            }
        }
        catch (error) {
            console.log('Error:', error);
        }
        return null;
    });
}
exports.getStudentList = getStudentList;
function getStudentById(courseId, studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get(API_URL, {
                params: {
                    wstoken: WS_TOKEN,
                    wsfunction: 'core_enrol_get_enrolled_users',
                    moodlewsrestformat: 'json',
                    courseid: courseId
                },
            });
            let studentData = null;
            if (response.status === 200) {
                const data = response.data;
                data === null || data === void 0 ? void 0 : data.forEach(function (element) {
                    if (element["id"] == studentId) {
                        studentData = element;
                        return studentData;
                    }
                });
            }
            else {
                console.error('Failed to fetch data:', response.statusText);
            }
            return studentData;
        }
        catch (error) {
            console.log('Error:', error);
            return null;
        }
    });
}
exports.getStudentById = getStudentById;
function getTeacherList(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get(API_URL, {
                params: {
                    wstoken: WS_TOKEN,
                    wsfunction: 'core_enrol_get_enrolled_users',
                    moodlewsrestformat: 'json',
                    courseid: courseId
                },
            });
            let teacherList = [];
            if (response.status === 200) {
                const data = response.data;
                if (Array.isArray(data)) {
                    data.forEach(function (element) {
                        const roles = element["roles"];
                        if (roles.length > 0 && roles[0]["shortname"] == "teacher" && "editingteacher") {
                            teacherList.push(element);
                        }
                        else {
                            console.log('Failed to fetch data:', response.statusText);
                        }
                    });
                }
                // Process the data as needed here
                // console.log('TeacherList:', teacherList);
            }
            else {
                console.error('Failed to fetch data:', response.statusText);
            }
            return teacherList;
        }
        catch (error) {
            console.log('Error:', error);
            return null;
        }
    });
}
exports.getTeacherList = getTeacherList;
function getTeacherById(courseId, teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get(API_URL, {
                params: {
                    wstoken: WS_TOKEN,
                    wsfunction: 'core_enrol_get_enrolled_users',
                    moodlewsrestformat: 'json',
                    courseid: courseId
                },
            });
            let teacherData = null;
            if (response.status === 200) {
                const data = response.data;
                data === null || data === void 0 ? void 0 : data.forEach(function (element) {
                    if (element["id"] == teacherId) {
                        teacherData = element;
                        return teacherData;
                    }
                });
            }
            else {
                console.error('Failed to fetch data:', response.statusText);
            }
            return teacherData;
        }
        catch (error) {
            console.log('Error:', error);
            return null;
        }
    });
}
exports.getTeacherById = getTeacherById;
function getCourseList() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get(API_URL, {
                params: {
                    wstoken: WS_TOKEN,
                    wsfunction: 'core_course_get_courses',
                    moodlewsrestformat: 'json',
                },
            });
            if (response.status === 200) {
                const data = response.data;
                // Process the data as needed here
                console.log('Courses data from API:', data);
                return data;
            }
            else {
                console.error('Failed to fetch data from course:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error:');
        }
    });
}
exports.getCourseList = getCourseList;
function getCourseById(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const options = {
                ids: [courseId], // Aqui você pode adicionar os IDs desejados
            };
            const response = yield axios.get(API_URL, {
                params: {
                    wstoken: WS_TOKEN,
                    wsfunction: 'core_course_get_courses',
                    moodlewsrestformat: 'json',
                    options: JSON.stringify(options),
                },
            });
            if (response.status === 200) {
                const data = response.data;
                // Process the data as needed here
                console.log('Courses data from API:', data);
                return data;
            }
            else {
                console.error('Failed to fetch data from course:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error:');
        }
    });
}
exports.getCourseById = getCourseById;
function getAssignmentList() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get(API_URL, {
                params: {
                    wstoken: WS_TOKEN,
                    wsfunction: 'mod_assign_get_assignments',
                    moodlewsrestformat: 'json',
                },
            });
            if (response.status === 200) {
                const data = response.data;
                // Process the data as needed here
                return data;
            }
            else {
                console.error('Failed to fetch data for assignments:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error:');
        }
    });
}
exports.getAssignmentList = getAssignmentList;
function getAssignmentById(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get(API_URL, {
                params: {
                    wstoken: WS_TOKEN,
                    wsfunction: 'mod_assign_get_assignments',
                    moodlewsrestformat: 'json',
                    courseids: [courseId],
                },
            });
            if (response.status === 200) {
                const data = response.data;
                // Process the data as needed here
                return data;
            }
            else {
                console.error('Failed to fetch data:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error:');
        }
    });
}
exports.getAssignmentById = getAssignmentById;
function getRubricList() {
}
exports.getRubricList = getRubricList;
function getRubricById() {
}
exports.getRubricById = getRubricById;
