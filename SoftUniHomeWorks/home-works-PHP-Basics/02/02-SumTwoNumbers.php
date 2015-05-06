<?php
$inputArr = array(array(2, 5), array(1.567808, 0.356), array(1234.5678, 333));

foreach ($inputArr as $numbersArr) {
    $output = '$firstNumber + $secondNumber = ' . $numbersArr[0] . ' + ' . $numbersArr[1] . ' = ' . number_format(round(((float)$numbersArr[0] + floatval($numbersArr[1])), 2), 2, '.', '');
    echo $output . '<br />';
}
