<?php
date_default_timezone_set('UTC');

function getSundays($month, $year) {
//    print_r($month . ' ' . $year);
    return new DatePeriod(new DateTime("first Sunday of $year-$month"), DateInterval::createFromDateString('next Sunday'), new DateTime("last day of $year-$month"));
}

foreach(getSundays(date("M"), date("Y")) as $Sundays) {
    /* var DatePeriod $Sundays  */
    echo $Sundays->format("jS F, Y\n");
}
