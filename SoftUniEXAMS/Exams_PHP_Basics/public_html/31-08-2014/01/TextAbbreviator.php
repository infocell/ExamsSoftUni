<?php

$list = trim($_GET['list']);
$maxSize = intval($_GET['maxSize']);
$list = preg_split('/\s*[\r\n]\s*/', $list, -1, PREG_SPLIT_NO_EMPTY);

$output = '<ul>';
foreach ($list as $line) {
    preg_match('/[\W\w]{0,' . $maxSize . '}/', $line, $lineMatch);
    $lineMatch = $lineMatch[0];
    $line = strcmp($line, $lineMatch) == 0 ? $line : $lineMatch . '...';
    $line = htmlspecialchars($line);
    $output .= "<li>{$line}</li>";
}

$output .= '</ul>';

echo $output;