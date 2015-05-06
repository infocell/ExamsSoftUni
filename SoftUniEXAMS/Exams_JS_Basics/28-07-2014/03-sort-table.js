function solve(input) {
    input = input.join('\n');

    var reg = new RegExp(/\<tr\>\<td\>([^<]+)\<\/td\>\<td>([\d\.\d]+)\<\/td\>\<td>.*\<\/td\>\<\/tr\>/g);
    var result;

    var obj = [];
    while ((result = reg.exec(input))) {
        obj.push({'price': result[2], 'product' : result[1], 'row': result[0]});
        //console.log(result[0] + ' ' + result[1] + ' ' + result[2] + ' ');
    }

    obj.sort(function(a,b) {
        return (parseFloat(a.price) - parseFloat(b.price)) || (a.product > b.product);
    });

    console.log('<table>\n<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');

    obj.forEach(function(value, key){
        console.log(obj[key].row);
    },obj);

    console.log('</table>');
}

solve(['<table>',
'<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
'<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
'<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
'<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
'<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
'<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
'</table>']);
