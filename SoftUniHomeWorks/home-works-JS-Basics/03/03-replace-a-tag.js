'use strict';
function solve(input) {
    var output = input.map(replaceATag);
    console.log(output);

    function replaceATag(elem) {
        if (elem.search(/\<a[^\<]+\<\/a\>/g) != -1) {
            elem = elem.replace('<a', '[URL');
            elem = elem.replace('</a>', '[/URL]');
            elem = elem.replace('>', ']');
        }

        return elem;

    }
}

solve([
    '<ul>',
    '<li>',
    '<a href=http://softuni.bg>SoftUni</a>',
    '</li>',
    '</ul>'
    ]);