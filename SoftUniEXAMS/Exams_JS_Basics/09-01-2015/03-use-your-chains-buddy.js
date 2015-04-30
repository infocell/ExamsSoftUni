function solve(input) {
    'use strict';
    var regex = /<p>(.*?)<\/p>/g,
        match,
        str = '',
        output = '';
    while(match = regex.exec(input[0])){
        str += match[1];
    }
    str = str.replace(/([^a-z0-9]+)/g, ' ');

    for (var key in str) {
        if(str[key] >= 'a' && str[key]<= 'm') {
            output += String.fromCharCode(str[key].charCodeAt(0) + 13);
            //tempSTR += str[key]  + ' ';
        } else if (str[key] >= 'n' && str[key] <= 'z') {
            output += String.fromCharCode(str[key].charCodeAt(0) - 13);
        } else {
            output+= str[key];
        }
    }
    console.log(output);
}

solve([
'<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>'
]);