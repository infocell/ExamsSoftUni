<?php
$text = $_GET['text'];
$lineLength = intval($_GET['lineLength']);

$isEndText = false;
$row = 0;
$counter = 0;

while (!$isEndText) {
    for ($col = 0; $col < $lineLength; $col++) {
        $matrix[$row][$col] = isset($text[$counter]) ? htmlspecialchars($text[$counter]) : ' ';
        $counter++;
    }

    if ($counter >= strlen($text)) {
        $isEndText = true;
    } else {
        $row++;
    }
}

for ($col = 0; $col < $lineLength; $col++) {
    for ($row = count($matrix) - 1; $row >= 1; $row--) {
        if ($matrix[$row][$col] == ' ') {

            for ($vRow = $row - 1; $vRow >= 0; $vRow--) {
                if ($matrix[$vRow][$col] != ' ') {
                    $matrix[$row][$col] = $matrix[$vRow][$col];
                    $matrix[$vRow][$col] = ' ';
                    break;
                }
            }
        }
    }
}

//var_dump($matrix);

$output = '<table>';
for ($row = 0; $row < count($matrix); $row++) {
    $output .= '<tr>';
    for ($col = 0; $col < $lineLength; $col++) {
        $cell = $matrix[$row][$col];
        $output .= "<td>{$cell}</td>";
    }
    $output .= '</tr>';
}
$output .= '<table>';
echo $output;
