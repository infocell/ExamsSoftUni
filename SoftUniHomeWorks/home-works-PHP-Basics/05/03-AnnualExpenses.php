<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>Annual Expenses</title>
</head>
<body>

<form action="03-AnnualExpenses.php" method="get">
    <label for="number">Enter number of years: </label>
    <input type="text" name="number" id="number"/>
    <input type="submit" value="Show costs" name="submit"/>
</form>

<?php

if (isset($_GET['submit'])) {

    $number = $_GET['number'];
    $output = '<table border="2">';
    $output .= '<tr><th>Year</th><th>January</th><th>February</th><th>March</th><th>April</th><th>May</th><th>June</th><th>July</th><th>August</th><th>September</th><th>Octomber</th><th>November</th><th>December</th><th>Total:</th></tr>';

    for ($i = 1; $i <= $number; $i++) {
        $total = 0;
        $year = new DateTime("today - {$i} year");
        $year = $year->format('Y');

        $output .= "<tr>";
        $output .= "<td>{$year}</td>";

        for ($j = 0; $j < 12; $j++) {

            $randomExpenses = rand(0, 999);
            $total += $randomExpenses;

            $output .= "<td>{$randomExpenses}</td>";

        }
        $output .= "<td>{$total}</td>";
        $output .= "</tr>";
    }

    $output .= '</table>';
    echo $output;

}
?>
</body>
</html>