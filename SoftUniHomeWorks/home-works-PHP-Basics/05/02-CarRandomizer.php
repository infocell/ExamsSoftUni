<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>Rich People's Problems</title>
</head>
<body>

<form action="02-CarRandomizer.php" method="get">
    <label for="cars">Enter cas</label>
    <input type="text" name="cars" id="cars"/>
    <input type="submit" value="Show result" name="submit"/>
</form>

<?php

if (isset($_GET['submit'])) {
    $cars = preg_split('/,/', $_GET['cars'], -1, PREG_SPLIT_NO_EMPTY);
    $colors = array('red', 'green', 'blue', 'black', 'yellow', 'white', 'gray', 'orange');
    $output = '<table border="2">';
    $output .= '<tr><th>Car</th><th>Color</th><th>Count</th></tr>';

    foreach ($cars as $car) {
        $randomColor = rand(0, (count($colors) - 1));
        $randomCount = rand(1, 5);

        $output .= "<tr><td>{$car}</td><td>{$colors[$randomColor]}</td><td>{$randomCount}</td>";
    }

    $output .= '</table>';

    echo $output;

}
?>
</body>
</html>