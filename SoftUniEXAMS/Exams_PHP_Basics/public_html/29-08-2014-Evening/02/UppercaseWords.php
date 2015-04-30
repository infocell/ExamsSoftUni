<?php
$text = htmlspecialchars($_GET['text']);

$countMatches = preg_match_all('/\b([A-Z]+)\b|[^A-Za-z]*([A-Z]+)[^A-Za-z]/', $text, $matches);

for($i = 0; $i < $countMatches; $i++) {
    $wordOld = !empty($matches[1][$i]) ? $matches[1][$i] : $matches[2][$i];
    $wordRev = strrev($wordOld);

    $wordNew = (strcmp($wordOld,$wordRev) != 0) ? $wordRev : addSymbols($wordOld);

    $text = preg_replace('/(\b)'.$wordOld.'(\b)|([^A-Za-z])'.$wordOld.'([^A-Za-z])/', '$1$3'.$wordNew.'$2$4', $text);
}

echo '<p>' . $text . '</p>';

function addSymbols($w) {
    $wArr = str_split($w);
    $res = '';
    foreach ($wArr as $ch) {
        $res .= $ch . $ch;
    }
    return $res;
}