function solve(input) {

    var start = Number(input[0]),
        end = Number(input[1]);

    var output = '<ul>\n';
    for (var i = start; i <= end; i++) {
        output += '<li>' + checkDoubleRakiya(i) + '</li>\n'
    }
    output += '</ul>';
    console.log(output);

    function checkDoubleRakiya(number){
        var str = number.toString();

        for (var j = 0; j < str.length; j++) {
            var firstSubStr = str.substr(j,2);
            if(firstSubStr.length == 2);
            for (var k = j+2; k < str.length; k++) {
                if(firstSubStr == str.substr(k,2)) {
                    //console.log(firstSubStr + ' ' + str.substr(k,2) + ' ' + str);
                    return '<span class=\'rakiya\'>' + i + '<\/span><a href=\"view.php?id=' + str + '>View<\/a>';
                }
            }
        }

        return '<span class=\'num\'>' + i + '<\/span>';
    }
}

solve(['11210', '11215']);
