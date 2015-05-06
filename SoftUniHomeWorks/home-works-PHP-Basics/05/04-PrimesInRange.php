<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>Find Primes in Range</title>
</head>
<body>

<form action="04-PrimesInRange.php" method="get">
    <label for="start">Starting Index: </label>
    <input type="text" name="start" id="start"/>
    <label for="end">End: </label>
    <input type="text" name="end" id="end"/>
    <input type="submit" value="Submit" name="submit"/>
</form>

<?php

function isPrime($number)
{
    for ($j = 2; $j < $number; $j++) {
        if ($number % $j == 0) {
            return false;
        }
    }
    return true;
}

if (isset($_GET['submit'])) {
    if (is_numeric($_GET['start']) && is_numeric($_GET['end'])) {

        $start = intval($_GET['start']);
        $end = intval($_GET['end']);


        $output = '';
        for ($i = $start; $i <= $end; $i++) {

            $output .= (isPrime($i)) ? "<strong>{$i}</strong>, " : "{$i}, ";

        }
        $output = substr($output, 0, strlen($output) - 2);

    } else {
        $output = "Invalid input";
    }
    echo $output;
}

?>
</body>
</html>