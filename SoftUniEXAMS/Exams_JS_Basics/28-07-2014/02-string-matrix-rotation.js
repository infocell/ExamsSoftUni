function solve(input) {

    var regex = /[\d]+/g,
        degree = Number(regex.exec(input[0])[0]),
        i,
        matrix = [],
        maxLength = -Infinity,
        len,
        output ='';

    input.shift()

    for (var i = 0; i < input.length; i++) {
        matrix[i] = input[i].split('');
    }

    for (var i = 0; i < input.length; i++) {
        if(maxLength < input[i].length) {
            maxLength = input[i].length;
        }
    }

    degree = degree % 360;

    switch (degree) {
        case 0:
            for (i = 0; i < matrix.length; i++) {
                console.log(matrix[i].join(''));
            }
            break;
        case 90:
            //for (var i = 0; i < matrix.length; i++) {
                for (var col = 0; col < maxLength; col++) {
                    output ='';
                    for (var row = matrix.length-1; row >= 0; row--) {
                        if(matrix[row][col] == undefined) {
                            matrix[row][col] = ' ';
                        }
                            output += matrix[row][col];
                    }
                    console.log(output)
                }
            //}

            break;
        case 180:
            for (i = matrix.length-1; i>=0 ; i--) {
                len = maxLength - matrix[i].length;

                console.log((Array(len + 1)).join(' ') + matrix[i].reverse().join(''));
            }
            break;
        case 270:
            for (var col = maxLength-1; col >= 0; col--) {
                output ='';
                for (var row = 0; row < matrix.length; row++) {
                    if(matrix[row][col] == undefined) {
                        matrix[row][col] = ' ';
                    }
                    output += matrix[row][col];
                }
                console.log(output)
            }
            break;
    }
}

solve(
    [
    'Rotate(270)',
    'hello',
    'softuni',
    'exam'
]
);


