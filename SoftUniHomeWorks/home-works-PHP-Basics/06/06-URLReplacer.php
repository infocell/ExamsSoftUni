<!DOCTYPE html>
<html>
<head>
    <title>URL Replacer</title>
</head>
<body>

<?php if (!isset($_GET['submit'])) { ?>

    <form action="06-URLReplacer.php" method="get">
        <fieldset>
            <label for="text">Text: </label>
            <textarea name="text" id="text" cols="100" rows="10">
<p>Come and visit <a href="http://softuni.bg">the Software University</a> to master the art of programming. You can always check our <a href="www.softuni.bg/forum">forum</a> if you have any questions.</p>
            </textarea>
            <input type="submit" value="Generate" name="submit"/>
        </fieldset>
    </form>

<?php
} else {
    $text = $_GET['text'];
    $res = preg_replace_callback('/<a[^>]+href=["\' ]([^> ]*)["\' ][^>]*>([^<]*)<\/a>/', function ($matches) {
        return "[URL={$matches[1]}]{$matches[2]}[/URL]";
    }, $text);
    echo $res;
}
?>

</body>
</html>