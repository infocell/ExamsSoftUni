function solve(input) {
    //"use strict";

    var sortCriteria,
        students = [],
        trainers = [],
        result = {};

    sortCriteria = input.shift();

    input.forEach(function (line) {
        var obj, sum = 0;

        obj = JSON.parse(line);

        if (obj.role === 'student') {
            obj.grades.forEach(function(elem) {
                sum += Number(elem);
            });

            students.push({
                id: obj.id,
                firstname: obj.firstname,
                lastname: obj.lastname,
                averageGrade: (sum / obj.grades.length).toFixed(2),
                certificate: obj.certificate,
                level: obj.level
            });
        }

        if (obj.role === 'trainer') {
            trainers.push({
                id: obj.id,
                firstname: obj.firstname,
                lastname: obj.lastname,
                courses: obj.courses,
                lecturesPerDay: obj.lecturesPerDay
            });
        }
    });

    sortCriteria = sortCriteria.split('^');

    if (sortCriteria[0] === 'name') {
        students.sort(function (a, b) {
            return a.firstname === b.firstname ? a.lastname.localeCompare(b.lastname) : a.firstname.localeCompare(b.firstname);
        });
    } else if (sortCriteria[0] === 'level') {
        students.sort(function (a, b) {
            return a.level === b.level ? a.id - b.id : a.level - b.level;
        });
    }

    students.forEach(function (elem) {
        delete elem.level;
    });

    if (sortCriteria[1] === 'courses') {
        trainers.sort(function (a, b) {
            return a.courses.length === b.courses.length ? a.lecturesPerDay - b.lecturesPerDay : a.courses.length - b.courses.length;
        });
    }
    result = {students: students, trainers: trainers};
    console.log(JSON.stringify(result));
}
//
//solve([
//    'level^courses',
//    '{"id":0,"firstname":"Angel","lastname":"Ivanov","town":"Plovdiv","role":"student","grades":["5.89"],"level":4,"certificate":false}',
//    '{"id":1,"firstname":"Mitko","lastname":"Nakova","town":"Dimitrovgrad","role":"trainer","courses":["PHP","Unity Basics"],"lecturesPerDay":6}',
//    '{"id":2,"firstname":"Bobi","lastname":"Georgiev","town":"Varna","role":"student","grades":["5.59","3.50","4.54","5.05","3.45"],"level":4,"certificate":false}',
//    '{"id":3,"firstname":"Ivan","lastname":"Ivanova","town":"Vidin","role":"trainer","courses":["JS","Java","JS OOP","Database","OOP","C#"],"lecturesPerDay":7}',
//    '{"id":4,"firstname":"Mitko","lastname":"Petrova","town":"Sofia","role":"trainer","courses":["Database","JS Apps","Java"],"lecturesPerDay":2}'
//])