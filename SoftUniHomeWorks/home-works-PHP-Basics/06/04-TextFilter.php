<!DOCTYPE html>
<html>
<head>
    <title>Text Filter</title>
</head>
<body>

<?php if (!isset($_GET['submit'])) { ?>

    <form action="04-TextFilter.php" method="get">
        <fieldset>
            <label for="text">Text: </label>
            <textarea name="text" id="text" cols="100" rows="10">
It is not Linux, it is GNU/Linux. Linux is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/Linux!
Sincerely, a Windows client
            </textarea><br/>
            <label for="banlist">Banlist</label>
            <input type="text" name="banlist" value="Linux, Windows" id="banlist"/><br/>
            <input type="submit" value="Generate" name="submit"/>
        </fieldset>
    </form>

<?php
} else {
    $text = $_GET['text'];
    $banlist = $_GET['banlist'];
    $banlistArr = preg_split('/[,\s]/', $banlist, -1, PREG_SPLIT_NO_EMPTY);

    foreach ($banlistArr as $ban) {
        $text = preg_replace('/' . $ban . '/i', str_repeat('*', strlen($ban)), $text);
    }
    echo $text;
}
?>

</body>
</html>