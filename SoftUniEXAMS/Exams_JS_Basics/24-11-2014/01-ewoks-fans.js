function solve(input) {
    var dates = [];

    input.forEach(function(value,key){

        var temp = input[key].split('.');
        temp.reverse();
        temp = temp.join('-');
  //      console.log(temp);
        dates.push(new Date(temp));
    });

    dates.sort(function(a,b){
        return a.getTime()> b.getTime() ;
    })

    var hasFan = false,
        hasHater = false,
        outputFan = '',
        outputHater = '',
        dateArr = [];

    for(var i in dates) {

        if(dates[i] > new Date('1900.01.02') && dates[i] < new Date('2015.01.01')) {
            if(dates[i] >= new Date('1973.05.25')){
                hasFan = true;
            }
            if(dates[i] < new Date('1973.05.25')) {
                hasHater = true;
            }

            dateArr.push(dates[i]);
        }

        //if ((dates[i] < new Date('1973.05.25')) && (dates[i] > new Date('1900.01.01'))){
        //    if(hasHater == false) {
        //        hasHater = true;
        //        outputHater = 'The biggest hater of ewoks was born on ' + dates[i].toDateString();
        //    }
        //} else if ((dates[i] >= new Date('1973.05.25')) && (dates[i] < new Date('2015.01.01'))) {
        //
        //        hasFan = true;
        //        outputFan = 'The biggest fan of ewoks was born on ' + dates[i].toDateString();
        //
        //}

    }

    dateArr.sort(function(a,b){
        return a.getTime() - b.getTime();
    })
    if(hasFan == true) {
        console.log('The biggest fan of ewoks was born on ' + dateArr[dateArr.length-1].toDateString());
    }
    if(hasHater == true) {
        console.log('The biggest hater of ewoks was born on ' + dateArr[0].toDateString());
    }

    if(!hasFan && !hasHater) {
        console.log('No result');
    }

    //console.log(dateArr)

}
//solve(
//    [
//        '01.01.1900',
//        '01.02.1900',
//        '01.03.1900',
//        '01.04.1900',
//        '01.05.1900',
//        '01.06.1900',
//        '31.12.2014',
//        '15.11.2456'
//
//    ]
//
//);