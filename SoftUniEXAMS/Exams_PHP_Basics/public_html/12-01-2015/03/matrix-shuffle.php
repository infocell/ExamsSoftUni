<?php

$size = $_GET['size'] + 0;
$text = $_GET['text'];

$rowTop = 0;
$rowBottom = $size;
$colLeft = 0;
$colRight = $size;

$matrix = array();
$matrix[] = array();
$pos = 0;

$text = $text . str_repeat(' ', $size * $size - strlen($text));
//var_dump($text);

while ($pos < strlen($text)) {
    $row = $rowTop;
    for ($col = $colLeft; $col < $colRight; $col++) {
        $matrix[$row][$col] = $text[$pos];
        $pos++;
    }
    $rowTop++;

    $col = $colRight - 1;
    for ($row = $rowTop; $row < $rowBottom; $row++) {
        $matrix[$row][$col] = $text[$pos];
        $pos++;
    }
    $colRight--;

    $row = $rowBottom - 1;
    for ($col = $colRight - 1; $col >= $colLeft; $col--) {
        $matrix[$row][$col] = $text[$pos];
        $pos++;
    }
    $rowBottom--;

    $col = $colLeft;
    for ($row = $rowBottom - 1; $row >= $rowTop; $row--) {
        $matrix[$row][$col] = $text[$pos];
        $pos++;
    }
    $colLeft++;
}

$text1 = '';
$text2 = '';

//echo "<table border='1' cellpadding='15'>";
for ($row = 0; $row < $size; $row++) {
//    echo "<tr>";
    for ($col = 0; $col < $size; $col++) {
//        echo "<td>";
//        echo $matrix[$row][$col];
//        echo "</td>";

        if (($row % 2 == 0 && $col % 2 == 0) || $row % 2 != 0 && $col %2 != 0) {
            $text1 .= $matrix[$row][$col];
        } else {
            $text2 .= $matrix[$row][$col];
        }
    }
//    echo "</tr>";
}
//echo "</table>";
//var_dump($matrix);
//echo "$text1";
//echo $text2;

$text = $text1 . $text2;

function is_palindrome($string)
{
    $a = strtolower(preg_replace("/[^A-Za-z0-9]/","",$string));
    return $a==strrev($a);
}

if(!is_palindrome($text)) {
    echo "<div style='background-color:#E0000F'>" . $text . "</div>";
} else {
    echo "<div style='background-color:#4FE000'>" . $text . "</div>";
}