function solve(input) {

    var regex = /([^=&?]+)=([^&?=]+)/g,
        match,
        field,
        value,
        lineObj = {},
        output = '';

    input.forEach(function(elem){
        elem = elem.replace(/(\+|%20)+/g, ' ').trim();
        lineObj = {};

        while(match = regex.exec(elem)){
            field = match[1].trim();
            value = match[2].trim();

            if(!lineObj[field]){
                lineObj[field] = [];
            }
            lineObj[field].push(value);
        }

       // console.log(lineObj);

        output = '';
        Object.keys(lineObj).forEach(function(key){
            output += key + '=['+lineObj[key].join(', ')+']';
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
