function solve(input) {
    var regex = /<a\s+([^>]*)href( *)=\s*(\'|\")([^ >]*)(\'|\")/g,
        match,
        html;
    html =(input.join(''))
    while (match = regex.exec(html)) {
        console.log(match[4]);
    }
}


solve([ '<a href="http://softuni.bg" class="new"></a>' ]);
console.log();
solve([ '<p>This text has no links</p>' ]);
console.log();
solve([ '<!DOCTYPE html>',
        '<html>',
        '<head>',
        '  <title>Hyperlinks</title>',
        '  <link href="theme.css" rel="stylesheet" />',
        '</head>',
        '<body>',
        '<ul><li><a   href="/"  id="home">Home</a></li><li><a',
        ' class="selected" href="/courses">Courses</a>',
        '</li><li><a href = ',
        '\'/forum\' >Forum</a></li><li><a class="href"',
        'onclick="go()" href= "#">Forum</a></li>',
        '<li><a id="js" href =',
        '"javascript:alert(\'hi\')" class="new">click</a></li>',
        '<li><a id=\'nakov\' href =',
        '\'http://www.nakov.com\' class=\'new\'>nak</a></li></ul>',
        '<a href="#"></a>',
        '<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif\' ',
        'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
        '<!-- This code is commented:',
        '  <a href="#commented">commentex hyperlink</a> -->',
        '</body>' ]
);