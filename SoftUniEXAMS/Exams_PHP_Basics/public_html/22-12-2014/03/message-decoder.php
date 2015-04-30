<?php
$jTable = json_decode($_GET['jsonTable']);

//var_dump($_GET);
//var_dump($jTable);


$columns = $jTable[0];
$numbersOfSymbols = [];

foreach ($jTable[1] as $line) {
    $x = preg_match('/time=(\d+)ms/', $line, $match);
    if ($x) {
        $numbersOfSymbols[] = intval($match[1]);
    }
}

$matrix = [];
$row = 0;
$col = 0;

foreach ($numbersOfSymbols as $numberOfChar) {

    if ($col >= $columns || $numberOfChar == 42) {
        $row++;
        $col = 0;
        if ($numberOfChar == 42) {
            continue;
        }
    }
    if ($numberOfChar != 32) {
        $matrix[$row][$col] = $numberOfChar;
    }

//    echo $matrix[$row][$col] . ' ' . $row . ' ' . $col . ' <br>';
    $col++;
}

//var_dump($numbersOfSymbols);
//var_dump($matrix);

echo "<table border='1' cellpadding='5'>";

for ($row = 0; $row < count($matrix); $row++) {
    echo '<tr>';
    for ($col = 0; $col < $columns; $col++) {
        if (isset($matrix[$row][$col])) {
            echo "<td style='background:#CAF'>" . htmlentities(chr($matrix[$row][$col])) . "</td>";


        } else {
            echo '<td></td>';
        }
    }
    echo '</tr>';
}
echo '</table>';


//var_dump($matrix);