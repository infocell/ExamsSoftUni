<?php

$childName = $_GET['childName'];
$wantedPresent = $_GET['wantedPresent'];
$riddles = preg_split('/;/', $_GET['riddles']);
$riddlesNumber = strlen($childName) % count($riddles);

$riddlesNumber ? $riddlesNumber-- : $riddlesNumber = count($riddles) - 1;

//echo $riddlesNumber;

$childName = preg_replace('/\s+/', '-', $childName);

$output = '$giftOf' . $childName . ' = $[wasChildGood] ? \'' . $wantedPresent . '\' : \''.$riddles[$riddlesNumber].'\';';

echo htmlspecialchars($output);