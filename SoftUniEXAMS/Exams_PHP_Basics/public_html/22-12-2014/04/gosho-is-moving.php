<?php

$luggage = preg_split('/C\|_\|/', $_GET['luggage'], -1, PREG_SPLIT_NO_EMPTY);
$fTypeLuggage = $_GET['typeLuggage'];
$fRoom = $_GET['room'];
$fMinWeight = intval($_GET['minWeight']);
$fMaxWeight = intval($_GET['maxWeight']);
//var_dump($fTypeLuggage);

$orderedLugages = [];
foreach ($luggage as $row => $line) {

    $line = preg_split('/;/', $line, -1, PREG_SPLIT_NO_EMPTY);

    $typeLuggage = $line[0];
    $room = $line[1];
    $listOfNamesame = $line[2];
    preg_match('/(\d+\.\d+)/', $line[3], $weight);
    $weight = intval($weight[0]);

    if (in_array($typeLuggage, $fTypeLuggage) && $fRoom == $room) {
        if (!isset($orderedLugages[$typeLuggage])) {
            $orderedLugages[$typeLuggage] = [];
        }
        if (!isset($orderedLugages[$typeLuggage][$room])) {
            $orderedLugages[$typeLuggage][$room] = [];
        }
        if (!isset($orderedLugages[$typeLuggage][$room][$listOfNamesame])) {
            $orderedLugages[$typeLuggage][$room][$listOfNamesame] = 0;
        }
        $orderedLugages[$typeLuggage][$room][$listOfNamesame] += $weight;
    }
}

echo '<ul>';
if (!empty($orderedLugages)) {
    ksort($orderedLugages);
    foreach ($orderedLugages as $kTypeL => $typeL) {
        ksort($orderedLugages[$kTypeL]);

        $listOfNames = '';
        $sumKg = 0;
        foreach ($typeL as $kRoom => $typeR) {
            ksort($orderedLugages[$kTypeL][$kRoom]);
            foreach ($typeR as $kName => $kg) {
                $sumKg += $kg;
            }
            $listOfNames = implode(', ', array_keys($orderedLugages[$kTypeL][$kRoom]));
            $listOfNames = $listOfNames . ' - ' . $sumKg . 'kg';

            $orderedLugages[$kTypeL][$kRoom]['name'] = $listOfNames;

        }
        if($sumKg >= $fMinWeight && $sumKg <= $fMaxWeight) {
            echo '<li><p>' . htmlentities($kTypeL) . '</p>';
            echo '<ul><li><p>' . htmlentities($kRoom) . '</p>';
            echo '<ul><li><p>' . $listOfNames . '</p></li></ul>';
            echo '</li></ul></li>';
        }
    }
}
echo '</ul>';
//var_dump($orderedLugages);

