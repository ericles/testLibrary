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
const canvas = require("./canvas");
const moodle = require("./moodle");
function getStudentList(lms, courseId, token = "") {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getStudentList(token, courseId);
                    // console.log("getStudentListCanvas", data);
                }
                catch (error) {
                    console.error("Error in getStudentListCanvas:", error);
                }
                break;
            case 'moodle':
                try {
                    data = yield moodle.getStudentList(courseId);
                    //console.log("getStudentListMoodle", data);
                }
                catch (error) {
                    console.error("Error in getStudentListMoodle:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getStudentList = getStudentList;
function getStudentById(lms, courseId, token, studentId) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getStudentById(token, courseId, studentId);
                    // console.log("getStudentByIdCanvas", data);
                }
                catch (error) {
                    console.error("Error in getStudentByIdCanvas:", error);
                }
                break;
            case 'moodle':
                try {
                    data = yield moodle.getStudentById(courseId, studentId);
                }
                catch (error) {
                    console.error("Error in getStudentByIdMoodle:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getStudentById = getStudentById;
function getTeacherList(lms, courseId, token) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getTeacherList(token, courseId);
                    // console.log("getTeacherListCanvas", data);
                }
                catch (error) {
                    console.error("Error in getTeacherListCanvas:", error);
                }
                break;
            case 'moodle':
                try {
                    data = yield moodle.getTeacherList(courseId);
                    // console.log("getTeacherListMoodle", data);
                }
                catch (error) {
                    console.error("Error in getTeacherListMoodle:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getTeacherList = getTeacherList;
function getTeacherById(lms, courseId, token, teacherId) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getTeacherById(token, courseId, teacherId);
                    // console.log("getTeacherByIdCanvas", data);
                }
                catch (error) {
                    console.error("Error in getTeacherByIdCanvas:", error);
                }
                break;
            case 'moodle':
                try {
                    data = yield moodle.getTeacherById(courseId, teacherId);
                    // console.log("getTeacherByIdMoodle", data);
                }
                catch (error) {
                    console.error("Error in getTeacherByIdMoodle:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getTeacherById = getTeacherById;
function getCourseList(lms, token) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getCourseList(token);
                    console.log("getCourseListCanvas", data);
                }
                catch (error) {
                    console.error("Error in getCourseListCanvas:", error);
                }
                break;
            case 'moodle':
                try {
                    data = yield moodle.getCourseList();
                    console.log("API getCourseListMoodle", data);
                }
                catch (error) {
                    console.error("Error in getCourseListMoodle:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getCourseList = getCourseList;
function getCourseById(lms, token, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getCourseById(token, courseId);
                    // console.log("getCourseByIdCanvas", data);
                }
                catch (error) {
                    console.error("Error in getCourseByIdCanvas:", error);
                }
                break;
            case 'moodle':
                try {
                    data = yield moodle.getCourseById(courseId);
                    console.log("getCourseByIdMoodle", data);
                }
                catch (error) {
                    console.error("Error in getCourseByIdMoodle:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getCourseById = getCourseById;
function getAssignmentList(lms, token, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getAssignmentList(token, courseId);
                    // console.log("getAssignmentListCanvas", data);
                }
                catch (error) {
                    console.error("Error in getAssignmentListCanvas:", error);
                }
                break;
            case 'moodle':
                try {
                    data = yield moodle.getAssignmentList(); //just for testing
                    console.log("APIgetAssignmentListMoodle", data);
                }
                catch (error) {
                    console.error("Error in getAssignmentListMoodle:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getAssignmentList = getAssignmentList;
function getAssignmentById(lms, token, courseId, assignmentId) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getAssignmentById(token, courseId, assignmentId);
                    // console.log("getAssignmentByIdCanvas", data);
                }
                catch (error) {
                    console.error("Error in getAssignmentByIdMoodle:", error);
                }
                break;
            case 'moodle':
                try {
                    data = yield moodle.getAssignmentById(assignmentId); //just for testing
                    console.log("getAssignmentListMoodle", data);
                }
                catch (error) {
                    console.error("Error in getAssignmentListMoodle:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getAssignmentById = getAssignmentById;
function getRubricList(lms, token, courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getRubricList(token, courseId);
                    // console.log("getRubricListCanvas", data);
                }
                catch (error) {
                    console.error("Error in getRubricListCanvas:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getRubricList = getRubricList;
function getRubricById(lms, token, courseId, rubricId) {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        switch (lms) {
            case 'canvas':
                try {
                    data = yield canvas.getRubricById(token, courseId, rubricId);
                    // console.log("getRubricByIdCanvas", data);
                }
                catch (error) {
                    console.error("Error in getRubricByIdCanvas:", error);
                }
                break;
            default:
                break;
        }
        return data;
    });
}
exports.getRubricById = getRubricById;
