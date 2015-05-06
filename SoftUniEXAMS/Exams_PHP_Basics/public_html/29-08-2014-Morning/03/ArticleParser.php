<?php

$text = $_GET['text'];

//$text = preg_split('[\r\n]', $text, -1, PREG_SPLIT_NO_EMPTY);

$countMatch = preg_match_all('/\s*([a-zA-Z\s-]+)\s*%\s*([a-zA-Z\s.-]+)\s*;\s*(\d{2}-\d{2}-\d{4})\s*-\s*([^\r\n]{0,100})/', $text, $match);
//var_dump($match);

//$countMatch = count($match[0]);
//var_dump($match);
for ($i = 0; $i < $countMatch; $i++) {

    echo "<div>\n";
    echo "<b>Topic:</b> ";
    echo "<span>" . htmlspecialchars(trim($match[1][$i])) . "</span>\n";
    echo "<b>Author:</b> ";
    echo "<span>" . htmlspecialchars(trim($match[2][$i])) . "</span>\n";
    echo "<b>When:</b> ";

    $date = trim($match[3][$i]);
    $date = preg_split('/-/', $date, -1, PREG_SPLIT_NO_EMPTY);
    $date = array_reverse($date);
    $date = implode("-", $date);
    $d = new DateTime($date, new DateTimeZone("Europe/Sofia"));
    echo  "<span>" . htmlspecialchars($d->format('F')) . "</span>\n";

    echo "<b>Summary:</b> ";
    $summary = trim($match[4][$i]);
//    var_dump($summary);
//    if(strlen($summary) == 100) {
        $summary .= '...';
//    }
    echo "<span>" . htmlspecialchars($summary) . "</span>\n";

    echo "</div>\n";
}
