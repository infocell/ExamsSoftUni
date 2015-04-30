function solve(input) {
    var length,
        type,
        application,
        blade;

    console.log('<table border="1">');
    console.log('<thead>');
    console.log('<tr><th colspan="3">Blades</th></tr>');
    console.log('<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>');
    console.log('</thead>');
    console.log('<tbody>');

    input.forEach(function(elem){
        length = parseInt(elem);

        if(length > 10) {
            if (length > 40) {
                type = 'sword';
            } else {
                type = 'dagger';
            }

            blade = (length % 5).toString();
            //console.log(blade.toString());
            switch (blade) {
                case '1': application = 'blade';
                    break;
                case '2': application = 'quite a blade';
                    break;
                case '3': application = 'pants-scraper';
                    break;
                case '4': application = 'frog-butcher';
                    break;
                case '0': application = '*rap-poker';
                    break;
            }
                console.log('<tr><td>' + length + '</td><td>' + type + '</td><td>' + application + '</td></tr>');

        }
    });


    console.log('</tbody>');
    console.log('</table>');
}

solve([

    '17.8',
    '19.4',
    '13',
    '55.8',
    '126.96541651',
    '3',
    '150'

])