function solve(input) {
    //"use strict";
    var regex = /([^=&?]+)=([^=&?]+)/g;

    input.forEach(function (line) {
        var match, field, value, arrMatch,
        result = {}, output = '';

        line = line.replace(/%20|\+/g, ' ').replace(/\s+/g, ' ');
        while(match = regex.exec(line)) {
            arrMatch = match[0].split('=');
            field = arrMatch[0].trim();
            value = arrMatch[1].trim();

            if(!result[field]) {
                result[field] = [];
            }
            result[field].push(value);
        }

        Object.keys(result).forEach(function (key) {
            output += (key + '=[' + result[key].join(', ') + ']');
        });
        console.log(output);
    });
}

//solve([
//    'foo=%20foo&value=+val&foo+=5+%20+203',
//    'foo=poo%20&value=valley&dog=wow+',
//    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
//    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
//]);