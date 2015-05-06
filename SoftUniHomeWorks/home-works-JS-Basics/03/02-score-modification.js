'use strict';
function solve(input) {
    var validExam = input.filter(function(elem){
       return elem >=0 && elem <= 400;
    });

    //console.log(validExam);

    var scale = validExam.map(function(elem) {
       return elem*1 - elem*0.2;
    });

    scale.sort(function(a, b){
       return a-b;
    });

    console.log(scale);
}


solve([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);