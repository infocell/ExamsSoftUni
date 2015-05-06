<?php

$input = array(1234, 145, 15, 247);

foreach ($input as $number) {
    $output = '';
    for ($i = 1; $i <= 9; $i++) {
        for ($j = 0; $j <= 9; $j++) {
            for ($k = 0; $k <= 9; $k++) {
                if ($i != $j && $j != $k && $i != $k && "{$i}{$j}{$k}" <= $number) {
                    $output .= "{$i}{$j}{$k}, ";
                }
            }
        }
    }
    $output ? print_r(substr($output, 0, strlen($output) - 2) . PHP_EOL) : print_r('no' . PHP_EOL);
    //. PHP_EOL is new line in console
}

