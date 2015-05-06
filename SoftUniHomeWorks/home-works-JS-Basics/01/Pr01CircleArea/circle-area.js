"use strict";

function calcCircleArea(r) {
    var area;
    area = (Math.PI * Math.pow(r, 2)).toString();
    var result =  'r = ' + r + '; area = ' + area;
    var text = document.createTextNode(result);
    var node = document.createElement('p');
    node.appendChild(text);
    node.style.margin = 0;
    document.getElementById('container').appendChild(node);
}

function repeat() {
    var r = [7, 1.5, 20];
    for (var i = 0; i < r.length; i++) {
        calcCircleArea(r[i]);
    }
}

repeat();
