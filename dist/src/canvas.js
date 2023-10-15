"use strict";
// export function getStudentList(token: string, courseId: string){
//     let url = 'https://canvas.instructure.com/api/v1/courses/'
//     +  courseId + "users?enrollment_type=student";
//   return getData(url, token);
// }
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
function getStudentList(token, courseId) {
    const url = `https://canvas.instructure.com/api/v1/courses/${courseId}/users?enrollment_type=student`;
    return getData(url, token);
}
exports.getStudentList = getStudentList;
function getStudentById(token, courseId, userId) {
    let url = 'https://canvas.instructure.com/api/v1/courses/'
        + courseId + "/users/" + userId;
    return getData(url, token);
}
exports.getStudentById = getStudentById;
function getTeacherList(token, courseId) {
    let url = 'https://canvas.instructure.com/api/v1/courses/'
        + courseId + "/users?enrollment_type=teacher";
    return getData(url, token);
}
exports.getTeacherList = getTeacherList;
function getTeacherById(token, courseId, userId) {
    let url = 'https://canvas.instructure.com/api/v1/courses/'
        + courseId + "/users/" + userId;
    return getData(url, token);
}
exports.getTeacherById = getTeacherById;
function getCourseList(token) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = 'https://canvas.instructure.com/api/v1/courses';
        return getData(url, token);
    });
}
exports.getCourseList = getCourseList;
function getCourseById(token, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId;
        return getData(url, token);
    });
}
exports.getCourseById = getCourseById;
function getAssignmentList(token, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId + '/assignments';
        return getData(url, token);
    });
}
exports.getAssignmentList = getAssignmentList;
function getAssignmentById(token, courseId, assignmentId) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId + '/assignments/' + assignmentId;
        return getData(url, token);
    });
}
exports.getAssignmentById = getAssignmentById;
function getRubricList(token, courseId) {
    let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId + '/rubrics';
    return getData(url, token);
}
exports.getRubricList = getRubricList;
function getRubricById(token, courseId, rubricId) {
    let url = 'https://canvas.instructure.com/api/v1/courses/' + courseId + '/rubrics/' + rubricId;
    return getData(url, token);
}
exports.getRubricById = getRubricById;
function getData(url, token) {
    return __awaiter(this, void 0, void 0, function* () {
        const header = new Headers();
        header.append('authorization', 'Bearer ' + token);
        const options = {
            method: 'GET',
            headers: header,
        };
        try {
            const response = yield fetch(url, options);
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error('Error getting data ' + url, error);
            throw error;
        }
    });
}
