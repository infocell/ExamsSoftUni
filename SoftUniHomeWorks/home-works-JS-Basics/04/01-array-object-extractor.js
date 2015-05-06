'use strict';
function extractObjects(array) {

    var outputArray = [];
    array.forEach(function(elem){
       if(typeof elem === 'object' && !Array.isArray(elem)) {
           outputArray.push(elem);
       }
    });

    console.log(outputArray);

}

extractObjects([
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
]);