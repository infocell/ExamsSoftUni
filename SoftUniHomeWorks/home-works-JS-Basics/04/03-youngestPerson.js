'use strict';

(function(){

    function findYoungestPerson(array) {
        if(array.length == 0) {
            return;
        }

        var ageMin = Number.MAX_VALUE;

        array.forEach(function(value, key){
            if(array[key].hasSmartphone) {
                if(ageMin > array[key].age) {
                    ageMin = array[key].age;
                }
            }
        }, array);

        array.forEach(function(value, key){
            if(array[key].age == ageMin && array[key].hasSmartphone){
                console.log('The youngest person is ' + array[key].firstname + ' ' + array[key].lastname);
            }
        })
    }

    var people = [
        { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
        { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
        { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
        { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
    ];

    findYoungestPerson(people);

})();