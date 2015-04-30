function solve(input) {
    "use strict";
    var field,
        value,
        result = {},
        output,
        regex = /([^\&\=\?]+)=([^\&\=\?]+)/g,
        match;

    input.forEach(function (line) {
        line = line.replace(/%20|\+/g, ' ').replace(/\s+/g, ' ');
        result = {};
        output = '';
        while (match = regex.exec(line)) {
            field = match[1].trim();
            value = match[2].trim();
            if (!result[field]) {
                result[field] = [];
            }
            result[field].push(value);
        }
        Object.keys(result).forEach(function (keys) {
            output += keys + '=[' + result[keys].join(', ') + ']';
        });
        console.log(output);
        output = '';
    });
}
//
//solve([
//    'foo=%20foo&value=+val&foo+=5+%20+203',
//    'foo=poo%20&value=valley&dog=wow+',
//    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
//    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
//]);
//console.log();
//solve([
//    'field=value1&field=value2&field=value3',
//    'http://example.com/over/there?name=ferret'
//]);