<!DOCTYPE html>
<html>
<head>
    <title>TextColorer</title>
</head>
<body>

<?php
if (!isset($_GET['submit'])) {
    ?>
    <form action="02-TextColorer.php" method="get">
        <fieldset>
        <textarea name="text" id="" cols="100"
                  rows="10">What a wonderful world!</textarea><br/>
            <input type="submit" value="Color text" name="submit"/>
        </fieldset>
    </form>
<?php
} else {

    $text = $_GET['text'];
    $textArr = str_split($text);

    $output = '';
    foreach ($textArr as $ch) {
        $output .= (ord($ch) % 2 == 0) ? "<span style='color:red'>$ch</span> " : "<span style='color:blue'>$ch</span> ";
    }
    echo $output;

}
?>
</body>
</html>