<?php
//var_dump($_GET);

$jsonTable = json_decode($_GET['jsonTable']);

$matrix = $jsonTable[0];
$k = $jsonTable[1][0];
$s = $jsonTable[1][1];

//var_dump($k);
//var_dump($s);
//var_dump($matrix);
$result = [];
$maxColLength = 0;
foreach ($matrix as $kLine => $line) {
    $line = str_split($line);
    $result[$kLine] = [];
    foreach ($line as $kCell => $cell) {
//var_dump((ord(strtolower($cell)) - 97));
        if(((ord(strtolower($cell)) - 97) >=0) && (ord(strtolower($cell)) - 97) <= 25) {
            $eX = (($k * (ord(strtolower($cell)) - 97) + $s) % 26);
            $result[$kLine][$kCell] = chr($eX + 65);
        } else {
            $eX = $cell;
            $result[$kLine][$kCell] = $cell;
        }
    }

    if ($maxColLength < count($line)) {
        $maxColLength = count($line);
    }
}

$output = "<table border='1' cellpadding='5'>";
for ($row = 0; $row < count($matrix); $row++) {
    $output .= '<tr>';
    for ($col = 0; $col < $maxColLength; $col++) {
        if($result[$row][$col] != '') {
            $output .= "<td style='background:#CCC'>" . $result[$row][$col] . "</td>";
        } else {
            $output .= "<td></td>";
        }
    }
    $output .= '</tr>';
}
$output .= '</table>';
echo $output;
//var_dump($maxColLength);
//var_dump($k);
//var_dump($s);
//var_dump($result);
