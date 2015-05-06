'use strict';
function solve(input) {


    input = input.map(function (value, key) {
        value.score += value.score * 0.10;
        return value;
    }, input);

    input = input.map(function(value, key){
        value.score >= 100 ? value.hasPassed = true : value.hasPassed = false;
        return value;
    }, input);

    var output = input.filter(function(elem){
        return elem.hasPassed;
    });

    output.sort(function (a,b) {
        return a.name > b.name;
    });

    output = JSON.stringify(output);
    console.log(output);
}


solve([
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
]);