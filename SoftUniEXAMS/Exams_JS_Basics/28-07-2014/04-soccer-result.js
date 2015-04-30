function solve(input) {

    var teamHome,
        teamAway,
        goalsHome,
        goalsAway,
        lineArr,
        result = {};

    input.forEach(function(line){
        lineArr = line.split(/[\/\:\-]/g);
        teamHome = lineArr[0].trim();
        teamAway = lineArr[1].trim();
        goalsHome = parseInt(lineArr[2].trim());
        goalsAway = parseInt(lineArr[3].trim());
        //console.log(teamHome + ' ' + teamAway+ ' '+goalsHome + ' '  + goalsAway)

        putTeamsInObj(teamHome, goalsHome, teamAway, goalsAway);
        putTeamsInObj(teamAway, goalsAway, teamHome, goalsHome);

        result = sortedObj(result);

        Object.keys(result).forEach(function(elem){
           result[elem].matchesPlayedWith.sort();
        });


    });

    function putTeamsInObj(teamH, goalsH, teamA, goalsA){
       if(!result[teamH]) {

           result[teamH] = {
               goalsScored : 0,
               goalsConceded : 0,
               matchesPlayedWith : []
           };

       }

        result[teamH].goalsScored += goalsH;
        result[teamH].goalsConceded += goalsA;


        if(result[teamH].matchesPlayedWith.indexOf(teamA) == -1) {
            result[teamH].matchesPlayedWith.push(teamA);
        }
    }

    function sortedObj(obj){
        var sorted = {};
        Object.keys(obj).sort().forEach(function(key){
           sorted[key] = obj[key];
        });
        //console.log(sorted)
        return sorted;
    }

    console.log(JSON.stringify(result));

}

solve([
    'Germany / Argentina: 1-0',
    'germany / argentina: 1-0',
    'germany / argentina: 1-0'
]);