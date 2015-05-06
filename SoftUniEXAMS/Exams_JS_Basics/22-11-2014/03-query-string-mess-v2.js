function solve(input) {

    var field,
        value,
        output,
        regex = /([^=&?]+)=([^&?=]+)/g;
        lineObj = {};
    input.forEach(function(line){
       line = line.replace(/(%20|\+)+/g, ' ');
        //console.log(line);

        lineObj = {};
        while(match = regex.exec(line)) {
            field = match[1].trim();
            value = match[2].trim();
            //console.log(value);

            if(!lineObj[field]) {
                lineObj[field] = [];
            }
            lineObj[field].push(value);
        }

        output = '';
        Object.keys(lineObj).forEach(function(key){
            output += key + '=[' + lineObj[key].join(', ') + ']';
        });
        console.log(output);
    });
}

solve([
    'foo=%20foo&value=+val&foo+=5+%20+203',
    'foo=poo%20&value=valley&dog=wow+',
    'url=https://softuni.bg/trainings/coursesinstances/details/1070',
    'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php'
]);
