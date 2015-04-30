function solve(input) {
    'use strict';
    //console.log(input);
    var dateArr = [],
        bornAfter = new Date('1900-01-02'),
        bornBefore = new Date('2015-01-01'),
        born = new Date('1973-05-25');
        //output = '';

    input.forEach(function (elem) {
        dateArr.push(new Date(elem.split('.').reverse().join('-')));
    });
    dateArr = dateArr.filter(function (elem) {
        //console.log(elem);
        return (elem.getTime() > bornAfter.getTime() && elem.getTime() < bornBefore.getTime());
    }).sort(function (a, b) {
        return a.getTime() - b.getTime();
    });

    if (dateArr.length === 0) {
        console.log('No result');
    } else {
        if (dateArr[dateArr.length - 1].getTime() > born.getTime()) {
            console.log('The biggest fan of ewoks was born on ' + dateArr[dateArr.length - 1].toDateString())
        }
        if(dateArr[0].getTime() < born.getTime()) {
            console.log('The biggest hater of ewoks was born on ' + dateArr[0].toDateString());
        }
    }
}
//
//solve([
//    '22.03.2014',
//    '17.05.1933',
//    '10.10.1954'
//]);
//
//solve([
//    '22.03.2000',
//]);
//
//solve([
//    '22.03.1700',
//    '10.10.2020'
//]);