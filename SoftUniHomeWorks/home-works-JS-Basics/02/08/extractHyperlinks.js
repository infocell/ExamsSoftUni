function solve(input) {

    var html = input.join('\n');
    //var regex = /<a\s+([^>]+\s+)*href\s*=\s*('([^']*)'|"([^"]*)|([^\s>]+))[^>]*>/g;
    var regex = /<a([^>]*)href\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]*))/g;
    var match;

    //match = regex.exec(html);
    //
    //console.log(match.length);
    //for (var i = 0; i < match.length; i++) {
    //    console.log(match[i]);
    //
    //}

    while(match = regex.exec(html)) {
        var hrefValue = match[3];
        var pos = 3;
        if(hrefValue == undefined) {
            hrefValue=match[4];
            pos=4;
        }
        if(hrefValue == undefined) {
            hrefValue = match[5];
            pos=5;
        }

        //console.log(pos +' ; ' + hrefValue + ' ; ' +match[0] + ' ; ' + match[1] + ' ; ' + match[2] + ' ; ' + match[3] + ' ; ' + match[4] + ' ; ' + match[5]);
        console.log(hrefValue);
    }
}

solve(['<!DOCTYPE html>'+
'<html>\n'+
'<head>\n'+
'<title>Hyperlinks</title>\n'+
'<link href="theme.css" rel="stylesheet" />\n'+
'</head>'+
'<body>'+
'<ul><li><a   href="/"  id="home">Home</a></li><li><a'+
'class="selected" href=/courses>Courses</a>'+
'</li><li><a href ='+
'    \'/forum\' >Forum</a></li><li><a class="href"'+
'onclick="go()" href= "#">Forum</a></li>'+
'<li><a id="js" href ='+
'    "javascript:alert(\'hi yo\')" class="new">click</a></li>'+
'<li><a id=\'nakov\' href ='+
'    http://www.nakov.com class=\'new\'>nak</a></li></ul>'+
'<a href="#empty"></a>'+
'<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif'+
'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>'+
'<!-- This code is commented:'+
'    <a href="#commented">commentex hyperlink</a> -->'+
'</body>']);

console.log();
console.log();

solve(["test"]);

console.log();
console.log();
solve(["<p>This text has no links</p>"]);

console.log();
console.log();
solve(['<a href="http://softuni.bg" class="new"></a>']);

console.log(Math.max());
