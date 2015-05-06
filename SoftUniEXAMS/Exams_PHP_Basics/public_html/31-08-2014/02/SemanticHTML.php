<?php
$html = $_GET['html'];

$html = preg_split('/[\n]+/', $html, -1, PREG_SPLIT_NO_EMPTY);

$semanticHTML = array('main', 'header', 'nav', 'article', 'section', 'aside', 'footer');
//var_dump($html);

foreach ($html as $key=>$line) {
//    var_dump($line);
    $isMatchStart = preg_match('/\s*<div\s*[\w\W]*((id|class)\s*=\s*"([^"]*)").*>\s*/', $line, $matchStart);
    $isMatchEnd = preg_match('/(\s*)<\/div>\s*<!--\s*([a-zA-Z]+)\s*-->/', $line, $matchEnd);
    if($isMatchStart) {
//        var_dump($matchStart);
        $line = preg_replace('/div/', $matchStart[3], $line);
        $line = preg_replace('/\s*'.$matchStart[1].'\s*/', ' ', $line);
        $line = preg_replace('/\s+>/', '>', $line);
        $line = preg_replace('/\s+/', ' ', $line);
        $html[$key] = $line;
    }
    if($isMatchEnd) {
        if(in_array($matchEnd[2], $semanticHTML)) {
            $html[$key] = $matchEnd[1] . '</' . $matchEnd[2] . '>';
        }
    }

}

//var_dump($html);
//echo (implode(PHP_EOL, $html));
foreach ($html as $line) {
    echo $line . "\n";
}
