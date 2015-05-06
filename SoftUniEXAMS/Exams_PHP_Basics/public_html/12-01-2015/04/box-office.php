<?php

//var_dump($_GET);

$list = trim($_GET['list']);
$minSeats = $_GET['minSeats'] + 0;
$maxSeats = $_GET['maxSeats'] + 0;
$filter = trim($_GET['filter']);
$order = trim($_GET['order']);

//$listOfBoxOffice = preg_split('/[\r\n]+/', $list, -1, PREG_SPLIT_NO_EMPTY);

$pattern = '/\s*(.*?)\s*\(\s*(.*?)\)\s*-\s*(.*?)\s*\/\s*(\d+)\s*/';


$countMatches = preg_match_all($pattern, $list, $matches);

//var_dump($matches);

$arrOfBoxOffice = array();
for ($i = 0; $i < $countMatches; $i++) {

    $movieName = $matches[1][$i];
    $genre = $matches[2][$i];
    $starsArr = preg_split('/\s*,\s*/',$matches[3][$i]);
    $seatsFilled = $matches[4][$i] + 0;

    if ($seatsFilled >= $minSeats && $seatsFilled <= $maxSeats) {
        if($filter == $genre || $filter == 'all') {
            $box = new stdClass();
            $box->screening = $movieName;
            $box->stars = $starsArr;
            $box->seatsFilled = $seatsFilled;
            $arrOfBoxOffice[] = $box;
        }
    }
}

usort($arrOfBoxOffice, function($a, $b) use ($order) {
   if($order == 'ascending')  {
       if(strcmp($a->screening, $b->screening) != 0) {
           return strcmp($a->screening, $b->screening);
       } else {
           return $a->seatsFilled - $b->seatsFilled;
       }
   } else {
       if(strcmp($a->screening, $b->screening) != 0) {
           return strcmp($b->screening, $a->screening);
       } else {
           return $a->seatsFilled - $b->seatsFilled;
       }
   }
});

foreach ($arrOfBoxOffice as $elem) {
    echo "<div class=\"screening\">";
    echo "<h2>$elem->screening</h2>";
    echo "<ul>";

    foreach ($elem->stars as $star) {
        echo "<li class=\"star\">$star</li>";
    }

    echo "</ul>";
    echo "<span class=\"seatsFilled\">$elem->seatsFilled seats filled</span>";
    echo "</div>";
}




