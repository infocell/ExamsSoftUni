<?php
$input = array("hello", 15, 1.234, array(1, 2, 3), (object)[2, 34]);

foreach ($input as $elem) {
    (is_numeric($elem)) ? var_dump($elem) : print_r(gettype($elem) . PHP_EOL);
}
