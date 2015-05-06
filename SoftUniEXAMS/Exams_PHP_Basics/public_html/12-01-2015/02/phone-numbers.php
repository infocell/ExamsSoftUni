<?php
$numbersString = trim($_GET['numbersString']);

$pattern = '/\s*([A-Z]+[a-zA-Z]*)\s*([^a-zA-Z+]*?)(\+?\d\s*[\d\.\-\(\)\/ ]*\d)\s*/';

$matchCount = preg_match_all($pattern, $numbersString, $matches);
$output = '';

for($i=0; $i < $matchCount; $i++) {
    $name = $matches[1][$i];
    $tel = $matches[3][$i];
    $tel = preg_replace('/[.\-\(\) \/]+/','', $tel);

    $output .= '<li><b>' . htmlspecialchars($name) . ':</b> ' . $tel . '</li>';

}

if ($output == '') {
    echo "<p>No matches!</p>";
} else {
    echo "<ol>$output</ol>";
}
