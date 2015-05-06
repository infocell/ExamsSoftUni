function solve(input) {
    var arr,
        hex,
        str = input[0];
    str = str.replace(/([^0-9]+)/g,' ').trim();

    arr = str.split(/\s+/g);

    arr = arr.map(function(elem){
        hex = Number(elem).toString(16).toUpperCase();
        return '0x' + Array(5-hex.length).join('0') + hex;
    });
    console.log(arr.join('-'));
}

solve([
    '5tffwj(//*7837xzc2---34rlxXP%$”.'
]);

solve([
    '482vMWo(*&^%$213;k!@41341((()&^>><///]42344p;e312'
]);

solve([
    '20'
]);
