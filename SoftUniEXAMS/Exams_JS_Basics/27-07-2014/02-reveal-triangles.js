function solve(input) {
    var matrix = [];

    input.forEach(function (line, key) {
        matrix[key] = Array.apply(null, new Array(line.length))
            .map(String.prototype.valueOf, 'true')
            .map(function(elem){
                return Boolean(elem);
            });
    });


    for (var i = 1; i < input.length; i++) {
        for (var j = 1; j < input[i].length-1; j++) {

            if (j < input[i-1].length) {
                if(input[i].charAt(j) === input[i-1].charAt(j) &&
                    input[i].charAt(j) === input[i].charAt(j-1) &&
                    input[i].charAt(j) === input[i].charAt(j+1)) {
                    matrix[i][j] = false;
                    matrix[i][j-1] = false;
                    matrix[i][j+1] = false;
                    matrix[i-1][j] = false;
                }
            }
        }
    }

    matrix.forEach(function (line, key) {
        var output = '';
        line.forEach(function(elem, innerKey){
            //console.log(elem + ' ' + key);
            elem ? output += input[key].charAt(innerKey) : output += '*';
        });
        console.log(output)
    });
}



//solve([
//    'abcdexgh',
//    'bbbdxxxh',
//    'abcxxxxx'
//]);
//console.log();
//solve([
//    'aa',
//    'aaa',
//    'aaaa',
//    'aaaaa'
//]);
//console.log();
//solve([
//    'ax',
//    'xxx',
//    'b',
//    'bbb',
//    'bbbb'
//]);
//console.log();
//solve([
//    'dffdsgyefg',
//    'ffffeyeee',
//    'jbfffays',
//    'dagfffdsss',
//    'dfdfa',
//    'dadaaadddf',
//    'sdaaaaa',
//    'daaaaaaasf'
//]);