<?php
$currentDate = trim($_GET['currentDate']);
$messages = trim($_GET['messages']);

$currentTimeFull = DateTime::createFromFormat('d-m-Y H:i:s', $currentDate, new DateTimeZone('Europe/Sofia'));
$cTime = preg_replace('/\d{0,2}:\d{0,2}:\d{0,2}/', '00:00:00', $currentDate);
$currentTime = DateTime::createFromFormat('d-m-Y H:i:s', $cTime, new DateTimeZone('Europe/Sofia'));
$pattern = '/\s*(.*)\s*\/\s*((\d{0,2}-\d{0,2}-\d{0,4})\s*(\d{2}:\d{0,2}:\d{0,2}))\s*/';

$countMatches = preg_match_all($pattern, $messages, $matches);
$messagesArr = array();

//var_dump($matches);

for ($i = 0; $i < $countMatches; $i++) {
    $m = new stdClass();
    $m->message = trim($matches[1][$i]);
    $m->dateFull = DateTime::createFromFormat('d-m-Y H:i:s', $matches[2][$i], new DateTimeZone('Europe/Sofia'));
    $m->date = DateTime::createFromFormat('d-m-Y H:i:s', $matches[3][$i] . ' 00:00:00', new DateTimeZone('Europe/Sofia'));
    $messagesArr[] = $m;
}
//var_dump($messagesArr);

usort($messagesArr, function ($a, $b) {
    return $a->dateFull > $b->dateFull;
});
//var_dump($currentTimeFull);
//var_dump($messagesArr[$countMatches - 1]);


$intervalFull = $currentTimeFull->diff($messagesArr[$countMatches - 1]->dateFull);
$intervalFull = $messagesArr[$countMatches - 1]->dateFull->diff($currentTimeFull);
$interval = $messagesArr[$countMatches-1]->date->diff($currentTime);
//var_dump($messagesArr);
//var_dump($intervalFull);
$lastActivity = '';




if ($interval->days > 1) {
    $lastActivity = $messagesArr[$countMatches - 1]->date->format('d-m-Y');
} else if($interval->days == 1) {
    $lastActivity = 'yesterday';
} else if ($intervalFull->days == 0 &&  $intervalFull->h >= 1) {
    $lastActivity =  $intervalFull->h . ' hour(s) ago';
} else if($intervalFull->days == 0 && $intervalFull->h == 0 &&  $intervalFull->i>= 1) {
    $lastActivity = $intervalFull->i . ' minute(s) ago';
} else if($intervalFull->days == 0 && $intervalFull->h == 0 &&  $intervalFull->i == 0 && $intervalFull->s < 60) {
    $lastActivity = 'a few moments ago';
}


foreach ($messagesArr as $m) {
    echo "<div>". htmlspecialchars($m->message) . "</div>\n";
}
echo "<p>Last active: <time>{$lastActivity}</time></p>";


//echo $lastActivity;