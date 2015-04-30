<?php
$dateOne = $_GET['dateOne'];
$dateTwo = $_GET['dateTwo'];
$holidays = preg_split('/\s+/', $_GET['holidays']);
$timezone = new DateTimeZone('UTC');
$dateOne = DateTime::createFromFormat('d-m-Y H:i:s', $dateOne . ' 00:00:00', $timezone);
$dateTwo = DateTime::createFromFormat('d-m-Y H:i:s', $dateTwo . ' 00:00:00', $timezone);

foreach ($holidays as $key => $h) {
    $holidays[$key] = DateTime::createFromFormat('d-m-Y H:i:s', $h . ' 00:00:00', $timezone);
}

//var_dump($dateOne);
//var_dump($dateTwo);
//var_dump($holidays);
//
//var_dump($dateOne->add(new DateInterval(P0D)));
//var_dump($dateOne->format('N'));


while ($dateOne <= $dateTwo) {
    if($dateOne->format('N') != '6' && $dateOne->format('N') != '7' && !in_array($dateOne, $holidays)) {
        $output .= '<li>'.$dateOne->format('d-m-Y') . '</li>';
    }
    $dateOne->add(new DateInterval(P1D));
}

if(isset($output)){
    $output ="<ol>$output</ol>";
} else {
    $output = '<h2>No workdays</h2>';
}

echo $output;