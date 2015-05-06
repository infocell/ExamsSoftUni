function solve(input) {
    "use strict";
    var matrix = [], i, j, output;

    for (i = 0; i < input.length; i += 1) {
        matrix[i] = [];
        for (j = 0; j < input[i].length; j += 1) {
            matrix[i][j] = true;
        }
    }

    for (i = 1; i < input.length - 1; i += 1) {
        for (j = 1; j < input[i].length - 1; j += 1) {
            if (j < input[i + 1].length && j < input[i - 1].length) {
                if (input[i][j].toUpperCase() === input[i - 1][j].toUpperCase() &&
                    input[i][j].toUpperCase() === input[i + 1][j].toUpperCase() &&
                    input[i][j].toUpperCase() === input[i][j - 1].toUpperCase() &&
                    input[i][j].toUpperCase() === input[i][j + 1].toUpperCase()) {
                    matrix[i][j] = false;
                    matrix[i - 1][j] = false;
                    matrix[i + 1][j] = false;
                    matrix[i][j - 1] = false;
                    matrix[i][j + 1] = false;
                }
            }
        }
    }

    for (i = 0; i < input.length; i += 1) {
        output = '';
        for (j = 0; j < input[i].length; j += 1) {
            if (matrix[i][j]) {
                output += input[i][j];
            }
        }
        console.log(output);
    }
    //console.log(input);
}

//solve([
//    'ab**l5',
//    'bBb*555',
//    'absh*5',
//    'ttHHH',
//    'ttth'
//]);
//
//solve([
//    '888**t*',
//    '8888ttt',
//    '888ttt<<',
//    '*8*0t>>hi'
//]);
//
//solve([
//    '@s@a@p@una',
//    'p@@@@@@@@dna',
//    '@6@t@*@*ego',
//    'vdig*****ne6',
//    'li??^*^*'
//]);
