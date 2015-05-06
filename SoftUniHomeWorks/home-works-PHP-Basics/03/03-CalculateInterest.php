<!DOCTYPE html>
<html>
<head>
    <title>Calculate Interest</title>
</head>
<body>

<?php
if (isset($_POST['submit']) &&
    is_numeric($_POST['amountOfMoney']) &&
    isset($_POST['currency']) &&
    is_numeric($_POST['cia']) &&
    isset($_POST['periodOfTime'])
) {

    $amountOfMoney = intval($_POST['amountOfMoney']);
    $currency = $_POST['currency'];
    $compoundAnnualAmount = floatval($_POST['cia']);
    $months = intval($_POST['periodOfTime']);


    $compoundMonthAmount = $compoundAnnualAmount / 12;

    for ($i = 0; $i < $months; $i++) {
        $amountOfMoney = $amountOfMoney * ($compoundMonthAmount + 100) / 100;
    }

    $amountOfMoney = number_format($amountOfMoney, 2, '.', '');
    echo $currency == "usd" ? "&#36; $amountOfMoney" : ($currency == "bgn" ? "$amountOfMoney leva" : " &euro; $amountOfMoney");
}
?>

<form method="post" action="">
    <fieldset>
        <label for="amount">Enter Amount: </label>
        <input type="number" name="amountOfMoney" id="amount" required="required"/><br/>
        <input type="radio" name="currency" value="usd" id="usd" required="required"/><label for="usd">USD</label>
        <input type="radio" name="currency" value="eur" id="eur" required="required"/><label for="eur">EUR</label>
        <input type="radio" name="currency" value="bgn" id="bgn" required="required"/><label for="bgn">BGN</label><br/>
        <label for="cia">Compound Interest Amount</label><input type="number" id="cia" name="cia"
                                                                required="required"/><br/>
        <select name="periodOfTime" required="required">
            <option value="6">6 Months</option>
            <option value="12">1 Year</option>
            <option value="24">2 Years</option>
            <option value="60">5 Years</option>
        </select>

        <input type="submit" name="submit" value="Calculate"/>
    </fieldset>
</form>
</body>
</html>