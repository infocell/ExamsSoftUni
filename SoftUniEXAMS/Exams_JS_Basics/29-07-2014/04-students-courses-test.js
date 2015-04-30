function solve(input) {
    //"use strict";
    var courses = {}, sortedCourses = {}

    input.forEach(function (line) {
        var studentName, course, grade, visits;
        line = line.split('|');
        studentName = line[0].trim();
        course = line[1].trim();
        grade = line[2].trim();
        visits = line[3].trim();

        if (!courses[course]) {
            courses[course] = {
                grades: [],
                visits: [],
                students: []
            };
        }
        courses[course].grades.push(grade);
        courses[course].visits.push(visits);
        if (courses[course].students.indexOf(studentName) === -1) {
            courses[course].students.push(studentName);
        }
    });

    Object.keys(courses).sort().forEach(function (key) {
        var sumGrades = 0,
            sumVisits = 0;

        courses[key].grades.forEach(function (elem) {
            sumGrades += parseFloat(elem);
        });

        courses[key].visits.forEach(function (elem) {
            sumVisits += parseFloat(elem);
        });

        sortedCourses[key] = {
            avgGrade: Number((sumGrades / courses[key].grades.length).toFixed(2)),
            avgVisits: Number((sumVisits / courses[key].visits.length).toFixed(2)),
            students: courses[key].students.sort()
        }
    });
    console.log(JSON.stringify(sortedCourses));
}


solve([
    'Peter Nikolov | PHP  | 5.50 | 8',
    'Maria Ivanova | Java | 5.83 | 7',
    'Ivan Petrov   | PHP  | 3.00 | 2',
    'Ivan Petrov   | C#   | 3.00 | 2',
    'Peter Nikolov | C#   | 5.50 | 8',
    'Maria Ivanova | C#   | 5.83 | 7',
    'Ivan Petrov   | C#   | 4.12 | 5',
    'Ivan Petrov   | PHP  | 3.10 | 2',
    'Peter Nikolov | Java | 6.00 | 9'

]);