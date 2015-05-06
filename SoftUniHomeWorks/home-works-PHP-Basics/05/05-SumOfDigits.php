<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>Sum Of Digits</title>
</head>
<body>

<form action="05-SumOfDigits.php" method="get">
    <label for="str">Input string: </label>
    <input type="text" name="str" id="str"/>
    <input type="submit" value="Submit" name="submit"/>
</form>

<?php
if (!empty($_GET['str'])) {
    $str = $_GET['str'];
    $strArr = preg_split('/,\s*/', $str, -1, PREG_SPLIT_NO_EMPTY);

    $output = '<table border = "2">';
    foreach ($strArr as $elem) {
        if (is_numeric($elem)) {
            $elemArr = str_split($elem);
            $sum = 0;
            foreach ($elemArr as $k => $e) {
                $sum += intval($e);
            }
            $output .= "<tr><td>{$elem}</td><td>{$sum}</td></tr>";
        } else {
            $output .= "<tr><td>{$elem}</td><td>I cannot sum that</td></tr>";
        }
    }
    $output .= '</table>';
    echo $output;
}
?>

</body>
</html>