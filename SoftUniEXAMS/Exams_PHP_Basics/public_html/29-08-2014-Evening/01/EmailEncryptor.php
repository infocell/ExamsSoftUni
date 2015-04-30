<?php
$recipient = $_GET['recipient'];
$subject = $_GET['subject'];
$body = $_GET['body'];
$key = $_GET['key'];

$output = "<p class='recipient'>{$recipient}</p>";
$output .= "<p class='subject'>" . htmlspecialchars($subject) . "</p>";
$output .= "<p class='message'>" . htmlspecialchars($body) . "</p>";

$keyCounter = 0;
echo "|";
for($i = 0; $i<strlen($output); $i++) {
    if($keyCounter == strlen($key)) {
        $keyCounter = 0;
    }
    $hex = ord($output[$i]) * ord($key[$keyCounter]);
    echo dechex($hex) . '|';
    $keyCounter++;
}
