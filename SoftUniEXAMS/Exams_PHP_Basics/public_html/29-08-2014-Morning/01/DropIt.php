<?php

$text = $_GET['text'];
$minFontSize = $_GET['minFontSize'] + 0;
$maxFontSize = $_GET['maxFontSize'] + 0;
$step = $_GET['step'] + 0;

$fontSize = $minFontSize;

$textArray = str_split($text);
$output = '';
$isInc = true;
foreach ($textArray as $key=>$ch) {

    $output .= '<span style=\'font-size:' . $fontSize . ';';
    $output .= ord($ch) % 2 == 0 ? 'text-decoration:line-through;' :  '';
    $output .= '\'>';
    $output .= htmlspecialchars($ch);
    $output .= '</span>';

    if(ctype_alpha($ch)) {

        if($isInc) {
            $fontSize += $step;
        } else {
            $fontSize -= $step;
        }

        if($fontSize >= $maxFontSize) {
            $isInc = false;
        } else  if ($fontSize <= $minFontSize) {
            $isInc = true;
        }
    }
}

echo $output;

//var_dump(ctype_alpha(4));
