'use strict';

function countDivs(html) {

    console.log(html.match(/<\/div/g).length);

}

countDivs('<!DOCTYPE html>'+
'<html>'+
'<head lang="en">'+
'<meta charset="UTF-8">'+
'<title>index</title>'+
'<script src="/yourScript.js" defer></script>'+
'</head>'+
'<body>'+
'<div id="outerDiv">'+
'<div'+
'class="first">'+
'<div><div>hello</div></div>'+
'</div>'+
'<div>hi<div></div></div>'+
'<div>I am a div</div>'+
'</div>'+
'</body>'+
'</html>');