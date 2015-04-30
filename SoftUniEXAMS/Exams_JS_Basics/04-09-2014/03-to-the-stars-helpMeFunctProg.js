function solve(input) {
    var starOne = input[0].split(/\s+/g);
    var starTwo = input[1].split(/\s+/g);
    var starThree = input[2].split(/\s+/g);
    var nInfo = input[3].split(/\s+/g);
    var nX = parseFloat(nInfo[0]);
    var nY = parseFloat(nInfo[1]);
    var turns = parseInt(input[4]);
    var foundStar;



    //console.log(starNames);
    var starNames = [starOne[0], starTwo[0], starThree[0]];
    var starX = [parseFloat(starOne[1]), parseFloat(starTwo[1]), parseFloat(starThree[1])];
    var starY = [parseFloat(starOne[2]), parseFloat(starTwo[2]), parseFloat(starThree[2])]


    for (var i = 0; i <= turns; i++) {
        foundStar = false;
        for (var j = 0; j < starNames.length; j++) {
            if(isInsideStar(nX, nY, starX[j], starY[j])) {
                console.log(starNames[j].toLowerCase());
                foundStar = true
            }
        }
        if(!foundStar) {
            console.log('space');
        }
        nY++;
        
    }

    function isInsideStar(nX, nY, sX, sY) {
        return (sX <= nX+1 && sX >= nX-1) && (sY <= nY+1 && sY>= nY-1);
    }
    
}

solve([

    'Terra-Nova 16 2',
    'Perseus 2.6 4.8',
    'Virgo 1.6 7',
    '2 5',
    '4'


]);
console.log()
solve([
    'starScorpius 2.3 10',
    'starAltair 23.0 4',
    'starAquarius 17.6 3.3',
    '1.8 10.9',
    '14'
])