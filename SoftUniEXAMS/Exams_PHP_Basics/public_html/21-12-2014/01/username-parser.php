<?php

$list = ($_GET['list']);
$length = $_GET['length'];
$showUserName = isset($_GET['show']);

//var_dump($_GET);

$list = preg_split('/\n/', $list);
//var_dump($list);
$result = [];
foreach ($list as $line) {
    $line = trim($line);
    if ($line != '') {
        $result[] = $line;
    }
}

echo '<ul>';
$output = '';

foreach ($result as $elem) {
    if (strlen($elem) >= $length) {
        $output .= "<li>" . htmlspecialchars($elem) . "</li>";
    } elseif ($showUserName) {
        $output .= '<li style="color: red;">' . htmlspecialchars($elem) . "</li>";
    }
}

echo $output;
echo '</ul>';
