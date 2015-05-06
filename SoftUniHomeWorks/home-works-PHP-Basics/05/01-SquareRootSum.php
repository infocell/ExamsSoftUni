<?php
$total = 0;

$output = '<table border="2">';
$output .= '<tr><th>Number</th><th>Square</th></tr>';

for ($i = 0; $i <= 100; $i += 2) {
    $square = number_format(sqrt($i), 2, '.', '');
    $total += floatval($square);
    $output .= "<tr><td>{$i}</td><td>{$square}</td></tr>";
}

$output .= "<tr><td>Total:</td><td>{$total}</td></tr>";
$output .= '</table>';

echo $output;

