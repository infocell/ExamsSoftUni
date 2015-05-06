<!DOCTYPE html>
<html>
<head>
    <title>Word Mapping</title>
</head>
<body>

<?php
if (!isset($_GET['submit'])) {
?>
<form action="01-WordMapper.php" method="get">
    <fieldset>
        <textarea name="text" id="" cols="100"
                  rows="10">The quick brows fox.!!! jumped over...// the lazy dog.!</textarea><br/>
        <input type="submit" value="Count words" name="submit"/>
    </fieldset>
</form>

<?php
}
else {
    $text = $_GET['text'];
    $text = strtolower($text);
    $strArr = preg_split('/[^\w+]/', $text, -1, PREG_SPLIT_NO_EMPTY);
    $wordMapper = array();

    foreach ($strArr as $str) {
        if (empty($wordMapper[$str])) {
            $wordMapper[$str] = 0;
        }
        $wordMapper[$str] += 1;
    }
    $output = '<table border="2">';
    foreach ($wordMapper as $word=>$count) {
        $output .= "<tr><td>{$word}</td><td>{$count}</td></tr>";
    }
    $output .= '</table>';
    echo $output;
}

?>