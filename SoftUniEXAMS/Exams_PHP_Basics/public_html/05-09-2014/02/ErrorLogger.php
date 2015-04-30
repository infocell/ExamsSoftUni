<?php
$errorLog = $_GET['errorLog'];
$pattern = '/Exception\s+in\s+thread\s+\"[^"]+"\s+java\.[^.]*?([^:]+):([\s\S])+?at\s+[^.]*\.([^(]+)\(([^:]*):([^)]*)\)/';
preg_match_all($pattern, $errorLog, $errorLogArr);
//var_dump($errorLogArr);
$output = '<ul>';
for($i=0; $i < (count($errorLogArr[0])); $i++) {


    $line = htmlspecialchars($errorLogArr[5][$i]);
    $type = htmlspecialchars($errorLogArr[1][$i]);

    $tArr = preg_split('/\s*\.\s*/', $type, -1, PREG_SPLIT_NO_EMPTY);
    $type = $tArr[count($tArr) - 1];


    $file = htmlspecialchars($errorLogArr[4][$i]);
    $method = htmlspecialchars($errorLogArr[3][$i]);

    $output .= '<li>line <strong>' . $line . '</strong> - <strong>' . $type . '</strong> in <em>' . $file . ':' . $method .'</em></li>';
}
$output .= '</ul>';
echo $output;

//var_dump($errorLogArr);