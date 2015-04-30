function solve(input) {
    //"use strict";
    var teams = {},
        sortedTeams = {},
        homeTeam, awayTeam, homeGoals, awayGoals;

    input.forEach(function (line) {
        line = line.replace(/\/|:|-/g, '*').split('*');
        homeTeam = line[0].trim();
        awayTeam = line[1].trim();
        homeGoals = Number(line[2]);
        awayGoals = Number(line[3]);
        //console.log(line)

        pushInTeams(homeTeam, awayTeam, homeGoals, awayGoals);
        pushInTeams(awayTeam, homeTeam, awayGoals, homeGoals);

    });

    Object.keys(teams).sort().forEach(function(key) {
        teams[key].matchesPlayedWith.sort();
        sortedTeams[key] = teams[key];
    });

    //console.log(teams)

    console.log(JSON.stringify(sortedTeams));

    function pushInTeams(team1, team2, goals1, goals2) {
        if (!teams[team1]) {
            teams[team1] = {
                goalsScored: 0,
                goalsConceded: 0,
                matchesPlayedWith: []
            };
        }

        //console.log(team1 + ' ' + team2 + ' ' + goals1 + ' ' + goals2);
        teams[team1].goalsScored += goals1;
        teams[team1].goalsConceded += goals2;
        if (teams[team1].matchesPlayedWith.indexOf(team2) === -1) {
            teams[team1].matchesPlayedWith.push(team2);
        }
    }
}

//solve([
//    'Germany / Argentina: 1-0',
//    'Brazil / Netherlands: 0-3',
//    'Netherlands / Argentina: 0-0',
//    'Brazil / Germany: 1-7',
//    'Argentina / Belgium: 1-0',
//    'Netherlands / Costa Rica: 0-0',
//    'France / Germany: 0-1',
//    'Brazil / Colombia: 2-1'
//]);