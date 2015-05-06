<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/html">
<head>
    <title>String Modifier</title>
</head>
<body>

<form action="06-StringModifier.php" method="get">
    <input type="text" name="str" id="str"/>
    <input type="radio" name="selectOfRadioBtn" value="palindromeCheck" id="palindrome" checked/>
    <label for="palindrome">Check Palindrome: </label>
    <input type="radio" name="selectOfRadioBtn" value="reverseString" id="reverseString"/>
    <label for="reverseString">Reverse string: </label>
    <input type="radio" name="selectOfRadioBtn" value="split" id="split"/>
    <label for="split">Split: </label>
    <input type="radio" name="selectOfRadioBtn" value="hashString" id="hashString"/>
    <label for="hashString">Hash String: </label>
    <input type="radio" name="selectOfRadioBtn" value="shuffleString" id="shuffleString"/>
    <label for="shuffleString">Shuffle String: </label>
    <input type="submit" value="Submit" name="submit"/>
</form>

<?php

function is_palindrome($string)
{
    $s = strtolower(preg_replace("/[^A-Za-z0-9]/", "", $string));
    return $s == strrev($s);
}

function shuffle_Str($string)
{
    $strArr = str_split($string);
    shuffle($strArr);
    return implode('', $strArr);
}

if (!empty($_GET['str'])) {
    $str = $_GET['str'];
    $selectOfRadioBtn = $_GET['selectOfRadioBtn'];

    $output = '';
    switch ($selectOfRadioBtn) {
        case 'palindromeCheck' :
            $output = is_palindrome($str) ? "$str is a palindrome!" : "$str is not a palindrome!";
            break;
        case 'reverseString' :
            $output = strrev($str);
            break;
        case 'split' :
            $output = implode(' ', str_split($str));
            break;
        case 'hashString' :
            $output = crypt($str, '$5$test$');
            break;
        case 'shuffleString' :
            $output = shuffle_Str($str);
            break;
    }
    echo htmlentities($output);
}