<!DOCTYPE html>
<html>
<head>
    <title>Sentence Extractor</title>
</head>
<body>

<?php if (!isset($_GET['submit'])) { ?>

    <form action="05-SentenceExtractor.php" method="get">
        <fieldset>
            <label for="text">Text: </label>
            <textarea name="text" id="text" cols="100" rows="10">
This is my cat! And this is my dog. We happily live in Paris – the most beautiful city in the world! Isn’t it great? Well it is :)
            </textarea><br/>
            <label for="word">Word: </label>
            <input type="text" name="word" value="is" id="word"/><br/>
            <input type="submit" value="Generate" name="submit"/>
        </fieldset>
    </form>

<?php
} else {
    $text = $_GET['text'];
    $word = $_GET['word'];
    preg_match_all('/[^.!?]+[.!?]/', $text, $sentencesArr);
    $sentencesArr = $sentencesArr[0];
    $sentencesFiltered = preg_grep('/ '. $word .' /i', $sentencesArr);

    foreach ($sentencesFiltered as $s) {
        echo "<p>{$s}</p>";
    }
}
?>

</body>
</html>