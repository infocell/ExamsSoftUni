function solve(input) {
    //"use strict";
    var regex = /<tr><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/g,
        products = [];

    input.forEach(function (line) {
        var match,
            product,
            price,
            votes;

        while (match = regex.exec(line)) {
            products.push({product: match[1], price: match[2], votes: match[3]});
        }

        products.sort(function(a, b) {
            return a.price === b.price ? a.product.localeCompare(b.product) : a.price - b.price;
        });

    });
    console.log(input[0]);
    console.log(input[1]);

    products.forEach(function (obj) {
        console.log('<tr><td>' + obj.product + '</td><td>' + obj.price + '</td><td>' + obj.votes + '</td></tr>');
    })

    console.log(input[input.length-1]);

}


//solve([
//    '<table>',
//    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
//    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
//    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
//    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
//    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
//    '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
//    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
//    '</table>'
//])