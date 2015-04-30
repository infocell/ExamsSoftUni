/**
 * Created by infocell on 3/23/15.
 */

function solve(input) {

    var courses = {},
        output = {},
        student,
        course,
        grade,
        visits;

    input.forEach(function(currentLine){
        currentLine = currentLine.split('|');
        student = currentLine[0].trim();
        course = currentLine[1].trim();
        grade = parseFloat(currentLine[2].trim());
        visits = parseFloat(currentLine[3].trim());

        if(!courses[course]) {
            courses[course] = {grade : 0, visits : 0, students : [], counter: 0};
        }

        courses[course].grade += grade;
        courses[course].visits += visits;
        if(courses[course].students.indexOf(student) == -1) {
            courses[course].students.push(student);
        }
        courses[course].counter +=1;

    });



    Object.keys(courses).sort().forEach(function(key){



        output[key] = {
            avgGrade : parseFloat((courses[key].grade / courses[key].counter).toFixed(2)),
            avgVisits : parseFloat((courses[key].visits / courses[key].counter).toFixed(2)),
            students: courses[key].students.sort()
        }


    });


    console.log(JSON.stringify(output));
    //console.log(courses);
}

solve([
'    Milen Georgiev|PHP|2.02|2',
'    Ivan Petrov | C# Basics | 3.20 | 22',
'Peter Nikolov | C# | 5.522 | 18',
'Maria Kirova | C# Basics | 5.40 | 4.5',
'Stanislav Peev | C# | 4.012 | 15',
'Ivan Petrov |    PHP Basics     |     5.120 |6',
'Ivan Goranov | SQL | 5.926 | 12',
'Todor Kirov | Databases | 5.50 |0.0000',
'Maria Ivanova | Java | 5.83 | 37',
'Milena Ivanova |    C# |   1.823 | 4.5',
'Stanislav Peev   |    C#|   4.122    |    15',
'Kiril Petrov |PHP| 5.10 | 6',
'Ivan Petrov|SQL|5.926|3',
'Peter Nikolov   |    Java  |   5.9996    |    9',
'Stefan Nikolov | Java | 4.00 | 9.5',
'Ivan Goranov | SQL | 5.926 | 12.5',
'Todor Kirov | Databases | 5.150 |0.0000',
'Kiril Ivanov | Java | 5.083 | 327',
'Diana Ivanova |    C# |   1.823 | 4',
'Stanislav Peev   |    C#|   4.122    |    15',
'Kiril Petrov |PHP| 5.10 | 6'
]);