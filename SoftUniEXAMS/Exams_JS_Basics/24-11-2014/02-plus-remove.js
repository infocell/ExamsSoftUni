
function solve(input) {
    String.prototype.replaceAt=function(index, character) {
        return this.substr(0, index) + character + this.substr(index+character.length);
    }
    var output = '',
        i,
        j,
        matrix = [];

    for (i = 0; i < input.length; i++) {
        matrix[i] = [];
        for (j = 0; j < input[i].length; j++) {
            matrix[i][j] = true;
        }
    }

    for (i = 1; i < input.length-1; i++) {
        var row1Length = input[i-1].length;
        var row3Length = input[i+1].length;

        for (var j = 1; j < input[i].length-1; j++) {
            if(j < row1Length && j < row3Length) {
                if (input[i].charAt(j).toUpperCase() == input[i][j+1].toUpperCase() &&
                    input[i].charAt(j).toUpperCase() == input[i][j-1].toUpperCase() &&
                    input[i].charAt(j).toUpperCase() == input[i+1][j].toUpperCase() &&
                    input[i].charAt(j).toUpperCase() == input[i-1][j].toUpperCase()) {

                    matrix[i][j] = false;
                    matrix[i][j+1] = false;
                    matrix[i][j-1] = false;
                    matrix[i-1][j] = false;
                    matrix[i+1][j] = false;
                }
            }
        }
    }

    for(var i in matrix) {
        output = '';
        for(var j in matrix[i]) {
            if(matrix[i][j]) {
                output += input[i][j];
            }
        }
        console.log(output);
    }

    //console.log();
    //console.log(matrix);
}

solve(
    [
            '@s@a@p@una',
            'p@@@@@@@@dna',
            '@6@t@*@*ego',
            'vdig*****ne6',
            'li??^*^*'
    ]
);

solve(
    [
        'a**l',
        '*',
        'as*',
        'tt',
        'ttt'
    ]
);

solve([

    '888**t*',
    '8888ttt',
    '888ttt<<',
    '*8*0t>>hi'

]);
