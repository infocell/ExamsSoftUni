<?php
$text  = $_GET['text'];
$red   = $_GET['red'];
$green = $_GET['green'];
$blue  = $_GET['blue'];
$nth   = $_GET['nth'];

$red   = str_pad(dechex(trim($red)), 2, "0", STR_PAD_LEFT);
$green = str_pad(dechex(trim($green)), 2, "0", STR_PAD_LEFT);
$blue  = str_pad(dechex(trim($blue)), 2, "0", STR_PAD_LEFT);

$nth = $_GET['nth'];
$rgb = $red.$green.$blue;

$output = '<p>';
for ($i = 0; $i < strlen($text); $i++) {
    $letter  = htmlspecialchars($text[$i]);
    $output .= (($i + 1) % $nth === 0) ? $letter : '<span style="color: #'.$rgb.'">'.$letter.'</span>';
}

$output .= '</p>';

echo $output;
