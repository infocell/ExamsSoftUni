function solve(input) {
    //"use strict";

    var arrDirection = input.shift().split(', '),
        pos = {x: 0, y: 0},
        matrix = [],
        res,
        isChangePos = false,
        output = '',
        outputObj = '',
        result = {'&':0, '*': 0, '#': 0, '!': 0, 'wall hits': 0};

    input.forEach(function (line, key) {
        matrix[key] = line.split(', ');
    });
    //console.log(matrix);

    arrDirection.forEach(function (direction) {
        isChangePos = true;
        switch (direction) {
            case 'right':
                pos.y++;
                break;
            case 'up':
                pos.x--;
                break;
            case 'left':
                pos.y--;
                break;
            case 'down':
                pos.x++;
                break;
        }

        if (pos.x < 0) {
            result['wall hits'] += 1;
            pos.x = 0;
            isChangePos = false;
        }
        if (pos.y < 0) {
            result['wall hits'] += 1;
            pos.y = 0;
            isChangePos = false;
        }

        if (pos.x >= matrix.length) {
            pos.x--;
            result['wall hits'] += 1;
            isChangePos = false;
        }
        if (pos.y >= matrix[pos.x].length) {
            pos.y--;
            result['wall hits'] += 1;
            isChangePos = false;
        }

        res = matrix[pos.x][pos.y].match(/\{\!\}|\{\*\}|\{\&\}|\{\#\}/g);
	//console.log('fdadfasfdas' + res );
        if (isChangePos && res !== null) {
            output += matrix[pos.x][pos.y].replace(res, '@') + '|';
            switch (res[0].substring(1, 2)) {
                case '!' :
                    result['!'] += 1;
                    break;
                case '*' :
                    result['*'] += 1;
                    break;
                case '&' :
                    result['&'] += 1;
                    break;
                case '#' :
                    result['#'] += 1;
                    break;
            }
        }
        //console.log(pos.x + ' ' + pos.y + ' ' + res)
    });

    Object.keys(result).forEach(function (key) {
        outputObj += '\"' +key + '\"' + ': ' + result[key] + ',';
    });

    console.log('{' + outputObj.substring(0,outputObj.length - 1) + '}');
    output !== '' ? console.log(output.substring(0, output.length - 1)) : console.log('no');
}

//solve(['right, up, up, down','asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj','tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip','poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne']);
console.log();
solve(['up, right, left, down', 'as{!}xnk']);
