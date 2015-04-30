function solve(input) {
    "use strict";
    var regex = /([A-Za-z]+\s*[A-Za-z]+)\s*vs.\s*([A-Za-z]+\s*[A-Za-z]+)\s*:\s*([\d-\s]*)/g,
        players = {},
        output = [];

    input.forEach(function (line, key) {
        var match,
            playerName1,
            playerName2,
            results,
            arrResults,
            sumL = 0,
            sumR = 0,
            countL = 0,
            countR = 0;

        while (match = regex.exec(line)) {
            playerName1 = match[1].replace(/\s+/g, ' ').trim();
            playerName2 = match[2].replace(/\s+/g, ' ').trim();
            results = match[3].trim().split(/\s+/g);

            if (!players[playerName1]) {
                players[playerName1] = {
                    matchesWon: 0,
                    matchesLost: 0,
                    setsWon: 0,
                    setsLost: 0,
                    gamesWon: 0,
                    gamesLost: 0
                }
            }
            if (!players[playerName2]) {
                players[playerName2] = {
                    matchesWon: 0,
                    matchesLost: 0,
                    setsWon: 0,
                    setsLost: 0,
                    gamesWon: 0,
                    gamesLost: 0
                }
            }

            results.forEach(function (elem) {

                arrResults = elem.split('-');
                sumL += parseInt(arrResults[0]);
                sumR += parseInt(arrResults[1]);

                arrResults[0] > arrResults[1] ? players[playerName1].setsWon += 1 : players[playerName1].setsLost += 1;
                arrResults[1] > arrResults[0] ? players[playerName2].setsWon += 1 : players[playerName2].setsLost += 1;

                arrResults[0] > arrResults[1] ? countL++ : countR++;
                //arrResults[1] > arrResults[0] ? players[playerName2].setsWon += 1 : players[playerName2].setsLost += 1;

            });

            countL > countR ? players[playerName1].matchesWon += 1 : players[playerName2].matchesWon += 1;
            countL > countR ? players[playerName2].matchesLost += 1 : players[playerName1].matchesLost += 1;


            players[playerName1].gamesWon += sumL;
            players[playerName1].gamesLost += sumR;
            players[playerName2].gamesWon += sumR;
            players[playerName2].gamesLost += sumL;
        }
    });

    //console.log(players);

    Object.keys(players).forEach(function (key) {
        output.push({
            name: key,
            matchesWon: players[key].matchesWon,
            matchesLost: players[key].matchesLost,
            setsWon: players[key].setsWon,
            setsLost: players[key].setsLost,
            gamesWon: players[key].gamesWon,
            gamesLost: players[key].gamesLost
        });
    });

    output = output.sort(function (a, b) {

        if (a.matchesWon !== b.matchesWon) {
            return b.matchesWon - a.matchesWon;
        } else if (a.setsWon !== b.setsWon) {
            return b.setsWon - a.setsWon;
        } else if (a.gamesWon !== b.gamesWon) {
            return b.gamesWon - a.gamesWon;
        } else {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        }
    });


    console.log(JSON.stringify(output));
}

solve([
    'Novak Djokovic vs. Roger Federer : 6-3 6-3',
    'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
    'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
    'Andy Murray vs. David Ferrer : 6-4 7-6',
    'Tomas Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
    'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
    'Pete Sampras vs. Andre Agassi : 2-1',
    'Boris Beckervs.Andre                       Agassi:2-1'
]);