<?php

$text = $_GET['text'];
$red = str_pad(dechex(trim($_GET['red'])), 2, '0', STR_PAD_LEFT);
$green = str_pad(dechex(trim($_GET['green'])), 2, '0', STR_PAD_LEFT);
$blue = str_pad(dechex(trim($_GET['blue'])), 2, '0', STR_PAD_LEFT);
$nth = $_GET['nth'];


$rgb = $red . $green . $blue;

$output = '<p>';
for ($key = 0; $key < strlen($text); $key++) {

    $letter = htmlspecialchars($text[$key]);

    ($key + 1) % $nth ? $output .= $letter : $output .= '<span style="color: #' . $rgb . '">' . $letter . '</span>';
}
$output .= '</p>';

echo($output);
