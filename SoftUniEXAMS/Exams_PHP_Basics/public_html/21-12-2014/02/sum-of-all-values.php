<?php

//var_dump($_GET['keys']);
//var_dump($_GET['text']);

$keys = trim($_GET['keys']);
$text = trim($_GET['text']);

preg_match("/^([a-zA-Z_]+)\d+/", $keys, $startKey);
preg_match("/\d+([a-zA-Z_]+)$/", $keys, $endKey);

$startKey = $startKey[1];
$endKey = $endKey[1];

$regex = '/' . $startKey . "(.*?)" . $endKey . '/';

preg_match_all($regex, $text, $out);

$sum = 0;
foreach ($out[1] as $o) {
    if (is_numeric($o)) {
        $sum += $o;
    }
}


$sum ? $output = $sum : $output = 'nothing';

echo ($startKey && $endKey) ? "<p>The total value is: <em>{$output}</em></p>" : "<p>A key is missing</p>";


//sudo gedit /boot/grub2/grub.cfg
