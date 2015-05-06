'use strict';
function solve(input) {

    var numbers = input.filter(function(elem){
       return !isNaN(elem);
    });

    if (numbers.length == 0) {
        return;
    }

    var minNumber = Math.min.apply(Math, numbers);
    var maxNumber = Math.max.apply(Math, numbers);
    console.log('Min number: ' + minNumber);
    console.log('Max number: ' + maxNumber);

    getMostFrequentNumber();

    numbers.sort(function(a, b) {
        return a - b;
    });
    console.log(numbers);

    function getMostFrequentNumber(){
        var obj = {},
            count = 0;

        numbers.forEach(function(value) {
            if(obj[value] == null){
                obj[value] = 1;
            }
            else {
                obj[value]++;
                if (obj[value] > count) {
                    count = obj[value];
                }
            }
        });

//    console.log(obj);

        for(var keyValue in obj) {
            if(obj[keyValue] === count) {
                console.log('Most frequent number: ' + keyValue);
            }
        }
    }
}


solve([

        "Pesho",
        -1,
        2,
        2,
        "Gosho",
        12,
        2,
        5555,
        5,
        5,
        5,
        5,
        "true",
        9,
        undefined,
        0,
        "Penka",
        {bunniesCount: 10},
        [10, 20, 30, 40]

    ]
);

solve([]);