function sortLetters(string, boolean) {
    var stringArray = [];
    for (var i in string) {
        stringArray.push(string[i]);
    }
    if (boolean === true) {
        stringArray.sort(function (a, b) {
            return a.toLowerCase() > b.toLowerCase();
        });
        console.log(stringArray.join('').toString().replace(',', ''));
    } else {
        stringArray.sort(function (a, b) {
            return a.toLowerCase() < b.toLowerCase();
        });
        console.log(stringArray.join('').toString().replace(',', ''));
    }
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);