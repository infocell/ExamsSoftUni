<?php

/*
 * @var DateTime[] $validDatesArr
 */

$tz = new DateTimeZone('Europe/Sofia');
$currDate = new DateTime($_GET['currDate'], $tz);

$list = preg_split('/[\r\n]/',$_GET['list'], -1, PREG_SPLIT_NO_EMPTY);

$validDatesArr = array();
foreach ($list as $elem) {
    if(is_valid_date($elem)) {
        $validDatesArr[] = new DateTime($elem, $tz);
    }
}

//var_dump($validDatesArr);

sort($validDatesArr);
echo "<ul>";

foreach ($validDatesArr as $d) {
/* @var DateTime $d */
    if($currDate > $d) {
        echo "<li><em>{$d->format('d/m/Y')}</em></li>";
    } else {
        echo "<li>{$d->format('d/m/Y')}</li>";
    }
}

echo "</ul>";

function is_valid_date($date)
{
    try {
        global $tz;

        $f = new DateTime($date, $tz);
        $valid = DateTime::getLastErrors();

        return ($valid['warning_count'] == 0 and $valid['error_count'] == 0);

    } catch(Exception $e) {
        return false;
    }
}
