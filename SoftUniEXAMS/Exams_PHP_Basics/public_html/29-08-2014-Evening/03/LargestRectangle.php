<?php
$matrix = json_decode($_GET['jsonTable']);

$maxSize = 0;

$max = new stdClass();
$max->area = 0;
$max->topRow = 0;
$max->bottomRow = 0;
$max->leftCol = 0;
$max->rightCol = 0;

for ($rowTop = 0; $rowTop < count($matrix); $rowTop++) {
    for ($rowBottom = $rowTop; $rowBottom < count($matrix); $rowBottom++) {
        for ($colLeft = 0; $colLeft < count($matrix[$rowTop]); $colLeft++) {
            for ($colRight = $colLeft; $colRight < count($matrix[$rowTop]); $colRight++) {


                $cmpRows = false;
                $cmpCols = false;

                $topLeft = $matrix[$rowTop][$colLeft];
                $topRight = $matrix[$rowTop][$colRight];
                $bottomLeft = $matrix[$rowBottom][$colLeft];
                $bottomRight = $matrix[$rowBottom][$colRight];

                if (
                    strcmp($topLeft, $topRight) == 0 &&
                    strcmp($topLeft, $bottomRight) == 0 &&
                    strcmp($topLeft, $bottomLeft) == 0
                ) {


                    for ($colInside = $colLeft; $colInside <= $colRight; $colInside++) {
                        if (
                            strcmp($matrix[$rowTop][$colInside], $topLeft) == 0 &&
                            strcmp($matrix[$rowBottom][$colInside], $topLeft) == 0
                        ) {

                            $cmpCols = true;
                        } else {
                            $cmpCols = false;

                            break;
                        }
                    }

                    for ($rowInside = $rowTop; $rowInside <= $rowBottom; $rowInside++) {
//                        var_dump($rowInside);
                        if (
                            strcmp($matrix[$rowInside][$colLeft], $topLeft) == 0 &&
                            strcmp($matrix[$rowInside][$colRight], $topLeft) == 0
                        ) {
                            $cmpRows = true;
                        } else {
                            $cmpRows = false;
                            break;
                        }
                    }

                    if ($cmpRows && $cmpCols) {
                        $width = $colRight - $colLeft + 1;
                        $height = $rowBottom - $rowTop + 1;
                        $area = $width * $height;

                        if ($area > $max->area) {
                            $max->area = $area;
                            $max->topRow = $rowTop;
                            $max->bottomRow = $rowBottom;
                            $max->leftCol = $colLeft;
                            $max->rightCol = $colRight;

                        }
                    }
                }
            }
        }
    }
}


echo "<table border='1' cellpadding='5'>";
for ($row = 0; $row < count($matrix); $row++) {
    echo "<tr>";
    for ($col = 0; $col < count($matrix[$row]); $col++) {

        $ch = htmlspecialchars($matrix[$row][$col]);

//        $max->topRow = 0;
//        $max->bottomRow = 0;
//        $max->leftCol = 0;
//        $max->rightCol = 0;


        $style = (($row >= $max->topRow && $row <= $max->bottomRow) &&
            ($col == $max->leftCol || $col == $max->rightCol)) ||
        (($row == $max->topRow || $row == $max->bottomRow) &&
            ($col >= $max->leftCol && $col <= $max->rightCol)) ?

            " style='background:#CCC'" : '';

        echo "<td{$style}>{$ch}</td>";
    }
    echo "</tr>";
}

echo "</table>";

//var_dump($max);
