function solve(input) {

    var matrix = [],
        row,
        col,
        result = {I:0, L:0, J:0, O:0, Z:0, S:0, T:0};

    Object.keys(input).forEach(function(currentLineKey){
       matrix[currentLineKey] = input[currentLineKey].split('');
    });

    Object.keys(matrix).forEach(function(i){
        Object.keys(matrix[i]).forEach(function(j){

            row = Number(i);
            col = Number(j);

            if(row+1 < matrix.length) {
                if (matrix[row][col] == 'o' && matrix[row + 1][col] == 'o') {

                    if(col+1 < matrix[row].length) {
                        if(matrix[row][col+1] == 'o' && matrix[row+1][col+1] == 'o') {
                            result.O += 1;
                        }

                        if(row+2 < matrix.length && matrix[row+2][col] == 'o' && matrix[row+2][col+1] == 'o') {
                            result.L +=1;
                        }
                        if(col-1 >= 0) {
                            if (matrix[row][col-1] == 'o' && matrix[row+1][col+1] == 'o') {
                                result.Z += 1;
                            }
                            if(matrix[row][col-1] == 'o' && matrix[row][col+1] == 'o') {
                                result.T +=1;
                            }
                            if(matrix[row][col+1] == 'o' && matrix[row+1][col-1] == 'o'){
                                result.S +=1;
                            }
                        }


                    }

                    if(row+2 < matrix.length && col-1 >= 0) {
                        if(matrix[row+2][col] == 'o' && matrix[row+2][col-1] == 'o'){
                            result.J += 1;
                        }
                    }
                    if(row+3 < matrix.length) {
                        if(matrix[row+2][col] == 'o' &&  matrix[row+3][col] == 'o') {
                            result.I +=1;
                        }
                    }
                }
            }
        });
    });
    console.log(JSON.stringify(result));

}

solve([

    '--oooo-',
    '--ooooo',

]);

solve([
    'ooo',
    'ooo',
    'ooo'
])