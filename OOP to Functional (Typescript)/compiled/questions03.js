"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (id) {
    return {
        userId: id,
        questions: []
    };
};
var cloneOjb = function (obj) {
    return JSON.parse(JSON.stringify(obj));
};
var addQuestion = function (qID, response, result, weight, user) {
    var questions = cloneOjb(user.questions);
    var newQuestion = {
        qID: qID,
        response: response,
        result: result,
        weight: weight,
    };
    return {
        userId: user.userId,
        questions: __spreadArrays(questions, [newQuestion]),
    };
};
var calcScore = function (user) {
    return user.questions.reduce(function (total, question) {
        return total + (question.result ? question.weight : 0);
    }, 0);
};
var calcProssible = function (user) {
};
