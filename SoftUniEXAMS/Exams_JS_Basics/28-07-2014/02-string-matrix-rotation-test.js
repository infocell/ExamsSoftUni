function solve(input) {

    var maxLength = -Infinity,
        output = {};
        degree = Number((/\d+/g).exec(input.shift())[0]) % 360;

    input.forEach(function(line) {
        if (maxLength < line.length) {
            maxLength = line.length;
        }
    });

    input.forEach(function (line, key){
        input[key] = line + Array(maxLength - line.length + 1).join(' ');
    });

    switch (degree) {
        case 0:
            console.log(input.join('\n'));
            break;
        case 90:
            rotate(90);
            break;
        case 180:
            input.reverse().forEach(function (line) {
                console.log(line.split('').reverse().join(''));
            })
            break;
        case 270:
            rotate(270);
            break;
        default:
            console.log(input.join('\n'));
            break;
    }

    //console.log(degree)

    function rotate(deg) {
        input.reverse().forEach(function (line, key) {
            line.split('').forEach(function (elem, innerKey) {
                if(!output[innerKey]) {
                    output[innerKey] = [];
                }
                output[innerKey].push(elem);
            });

        });

        if (deg === 90) {
            Object.keys(output).forEach(function (key) {
                console.log(output[key].join(''));
            });
        } else if (deg === 270) {
            Object.keys(output).reverse().forEach(function (key) {
                console.log(output[key].reverse().join(''));
            });
            //console.log(output)
        }
    }
}

//solve([
//    'Rotate(270)',
//    'hello',
//    'softuni',
//    'exam'
//]);

