<!DOCTYPE html>
<html>
<head>
    <title>Most Frequent Tag</title>
</head>
<body>
<form method="post" action="">
    <fieldset>
        <label for="tags">Enter Tags: </label>
        <input type="text" name="tags" id="tags"/>
        <input type="submit" name="submit"/>
    </fieldset>
</form>

<?php
if (isset($_POST['tags']) && $_POST['tags'] != '') {
    $arrOfTags = preg_split('/,[\s+]*/', $_POST["tags"]);

    $acv = array_count_values($arrOfTags);
    foreach ($acv as $key => $freq) {
        echo "<div>" . htmlentities($key) . " : $freq times</div>";

    }

    $outputMostFreq = '';
    define('PHP_INT_MIN', ~PHP_INT_MAX);
    $mostFreq = PHP_INT_MIN;
    arsort($acv);
    foreach ($acv as $key => $freq) {
        global $mostFreq;
        global $outputMostFreq;
        if ($mostFreq < $freq) {
            $mostFreq = $freq;
        }
        if ($mostFreq == $freq) {
            $outputMostFreq .= $key . ", ";
        }
    }
    $lengthOutputMostFreg = strlen($outputMostFreq) - 2;
    $outputMostFreq = htmlentities(substr($outputMostFreq, 0, $lengthOutputMostFreg));
    echo "Most Frequent Tag is: " . $outputMostFreq;
}
?>
</body>
</html>