function solve(input) {

    var regex = /([^=&?]+)=([^=&?]+)/g,
        match,
        field,
        value,
        result = {},
        output = '';

    input.forEach(function(line){
        result = {};
        line = line.replace(/%20|\+/g,' ').replace(/\s+/g, ' ');
        while (match = regex.exec(line)) {
            field = match[1].trim();
            value = match[2].trim();
            //console.log(field + ' = ' + value);
            if(!result[field]) {
                result[field] = [];
            }
            result[field].push(value);
        }
        //console.log(result)

        output = '';
        Object.keys(result).forEach(function(key){
            output += (key + '=[' + result[key].join(', ') + ']');
        });
        console.log(output);
    });
    //console.log(result)
}

solve([
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]);
