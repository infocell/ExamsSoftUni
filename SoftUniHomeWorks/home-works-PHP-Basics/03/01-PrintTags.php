<!DOCTYPE html>
<html>
<head>
    <title>Print Tags</title>
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
    $arrOfTags = preg_split('/,\s+/', $_POST["tags"]);
    foreach ($arrOfTags as $key => $elem) {
        echo "<div>$key : " . htmlentities($elem) . "</div>";
    }
}
?>
</body>
</html>