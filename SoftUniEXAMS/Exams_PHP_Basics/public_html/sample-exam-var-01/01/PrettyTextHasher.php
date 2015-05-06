<?php

$text = $_GET['text'];
$hashValue = intval($_GET['hashValue']);
$fontSize = $_GET['fontSize'];
$fontStyle = $_GET['fontStyle'];

($hashValue % 2 == 0) ? $even = true : $even = false;

$stringInArr = str_split($text);
$textModification = '';

foreach ($stringInArr as $key => $ch) {
    $textModification .= ($key % 2 == 0) ? (chr(ord($ch) + $hashValue)) : (chr(ord($ch) - $hashValue));
}

$style = "style=\"font-size:$fontSize;";
$style .= ($fontStyle == 'bold') ? "font-weight:$fontStyle;\"": "font-style:$fontStyle;\"";

//var_dump($text);
//var_dump($hashValue);
//var_dump($fontSize);
//var_dump($fontStyle);
//var_dump($style);

echo "<p $style>" . $textModification . '</p>';

