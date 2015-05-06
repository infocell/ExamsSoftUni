<?php

$numbersString = $_GET['numbersString'];
$dateString = $_GET['dateString'];

preg_match_all('/[^a-zA-Z0-9]+?([0-9]+)[^a-zA-Z0-9]+?/', $numbersString, $outNumbers);

$sum = 0;

foreach ($outNumbers[1] as $key => $number) {
    $sum += intval($number);
}

$sum = strrev($sum);
//var_dump($sum);

preg_match_all('/\d{4}-\d{2}-\d{2}/', $dateString, $outDates);

$addDays = "+{$sum} days";
//var_dump($addDays);
//var_dump($outDates[0]);
if(!empty($outDates[0])) {
    $output = '<ul>';
    foreach ($outDates[0] as $date) {
        $date = date_create($date, timezone_open("Europe/Sofia"));
//        var_dump($date);
        date_add($date, date_interval_create_from_date_string($addDays));
        $output .= '<li>' . date_format($date, 'Y-m-d') . '</li>';
//        var_dump($output);
    }
    $output .= '</ul>';
} else {
    $output = "<p>No dates</p>";
}

//var_dump($output);

echo htmlspecialchars($output);

