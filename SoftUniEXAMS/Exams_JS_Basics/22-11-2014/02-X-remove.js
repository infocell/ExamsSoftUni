function solve(input) {

    var matrix = [],
        matrixBool = [],
        currentLine = [],
        output;

    input.forEach(function(line){
        currentLine = line.split('');
        matrix.push(currentLine);
    });

    for (var i in matrix){
        matrixBool[i] = [];
        for (var j in matrix[i]) {
            matrixBool[i].push(true);
        }
    }

    for (var i = 1; i < matrix.length-1; i++) {
        for (var j = 1; j < matrix[i].length; j++) {
            if(j+1 < matrix[i-1].length && j+1 < matrix[i+1].length){
                if(matrix[i][j].toUpperCase() == matrix[i-1][j-1].toUpperCase() &&
                    matrix[i][j].toUpperCase() == matrix[i-1][j+1].toUpperCase() &&
                    matrix[i][j].toUpperCase() == matrix[i+1][j-1].toUpperCase() &&
                    matrix[i][j].toUpperCase() == matrix[i+1][j+1].toUpperCase()) {

                    matrixBool[i][j] = false;
                    matrixBool[i-1][j-1] = false;
                    matrixBool[i-1][j+1] = false;
                    matrixBool[i+1][j-1] = false;
                    matrixBool[i+1][j+1] = false;
                }
            }
        }
    }

    for (var i in matrix) {
        output = '';
        for( var j in matrix[i]) {
            if(matrixBool[i][j]) {
                output += matrix[i][j];
            }
        }
        console.log(output);
    }
    //console.log(matrix);
    //console.log(matrixBool);
}

//solve([
//    'abnbjs',
//    'xoBab',
//    'Abmbh',
//    'aa bab',
//    'ababvvvv'
//])
//
solve([
    '8888888',
    '08*8*80',
    '808*888',
    '0**8*8?'
]);



solve([
    'puoUdai',
    'miU',
    'ausupirina',
    '8n8i8',
    'm8o8a',
    '8l8o860',
    'M8i8',
    '8e8!8?!'

])