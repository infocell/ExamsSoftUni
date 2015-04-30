<?php

$text = trim($_GET['text']);
$artist = trim($_GET['artist']);
$property = trim($_GET['property']);
$order = trim($_GET['order']);

$songsArr = array();


$textArr = preg_split('/[\r\n]/', $text, -1, PREG_SPLIT_NO_EMPTY);


foreach ($textArr as $line) {
    $line = trim($line);
    $lineArr = preg_split('/\s*\|\s*/', $line, -1, PREG_SPLIT_NO_EMPTY);
    $currentSong = new stdClass();
    $currentSong->name = $lineArr[0];
    $currentSong->genre = $lineArr[1];
    $artists = preg_split('/\s*\,\s*/', trim($lineArr[2]), -1, PREG_SPLIT_NO_EMPTY);
    sort($artists);
    $currentSong->artists = $artists;
    $currentSong->downloads = $lineArr[3] + 0;
    $currentSong->rating = floatval(trim($lineArr[4]));

    if(in_array($artist, $currentSong->artists)) {
        $songsArr[] = $currentSong;
    }
}

usort($songsArr, function($a, $b) use ($property, $order) {
    if(strcmp($a->$property,$b->$property) == 0) {
        return strcmp($a->name, $b->name);
    }
    return ($order == 'ascending' ^ $a->$property < $b->$property) ?  1: -1;
});


echo "<table>\n";
echo "<tr><th>Name</th><th>Genre</th><th>Artists</th><th>Downloads</th><th>Rating</th></tr>\n";

foreach ($songsArr as $lineObj) {
    echo "<tr>";

    echo "<td>" . htmlspecialchars($lineObj->name) . "</td>";
    echo "<td>" . htmlspecialchars($lineObj->genre) . "</td>";
    echo "<td>" . htmlspecialchars(implode(', ', $lineObj->artists)) . "</td>";
    echo "<td>" . htmlspecialchars($lineObj->downloads) . "</td>";
    echo "<td>" . htmlspecialchars($lineObj->rating) . "</td>";

    echo "</tr>\n";
}

echo "</table>";