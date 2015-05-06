function solve(matrix) {

    var row = parseInt(positionParachute().row),
        col = parseInt(positionParachute().col),
        isFlying = true,
        wind,
        nextLine,
        output;

    while(isFlying) {
        nextLine = matrix[row + 1];
        wind = 0;
        for (var i in nextLine) {
            if (nextLine[i] == '>') wind += 1;
            if (nextLine[i] == '<') wind -= 1;
        }

        if (matrix[row + 1][col + wind] != '>' &&
            matrix[row + 1][col + wind] != '<' &&
            matrix[row + 1][col + wind] != '-') {
            isFlying = false;
        }
        row+=1;
        col+=wind;
    }

    switch (matrix[row][col]) {
        case '~' :output = 'Drowned in the water like a cat!';
            break;
        case '/' :
        case '\\':
        case '|':
            output = 'Got smacked on the rock like a dog!';
            break;
        case '_':
            output = 'Landed on the ground like a boss!';
            break;
    }

    console.log(output);
    console.log(row + ' ' + col)

    function positionParachute(){
        for(var i in matrix) {
            for(var j in matrix[i]) {
                if(matrix[i][j] == 'o') {
                    return {row : i, col : j};
                }
            }
        }
    }
}

solve(
    [
        '--o----------------------',
        '>------------------------',
        '>------------------------',
        '>-----------------/\\-----',
        '-----------------/--\\----',
        '>---------/\\----/----\\---',
        '---------/--\\--/------\\--',
        '<-------/----\\/--------\\-',
        '\\------/----------------\\',
        '-\\____/------------------'

    ]);

solve(
    [ '-------------o-<<--------',
    '-------->>>>>------------',
    '---------------->-<---<--',
    '------<<<<<-------/\\--<--',
    '--------------<--/-<\\----',
    '>>--------/\\----/<-<-\\---',
    '---------/<-\\--/------\\--',
    '<-------/----\\/--------\\-',
    '\\------/--------------<-\\',
    '-\\___~/------<-----------'
    ]);
