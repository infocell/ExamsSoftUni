<?php
$board = preg_split('/\//', $_GET['board']);
$pieces = array('R', 'H', 'K', 'Q', 'B', 'P', ' ');
function theEnd() {
    exit('<h1>Invalid chess board</h1>');
}

foreach ($board as $line=>$cells) {
    $board[$line] = preg_split('/-/', $board[$line], -1, PREG_SPLIT_NO_EMPTY);
}

foreach ($board as $line) {
    if(count($line) != 8) {
        theEnd();
    }
//var_dump($pieces);
    foreach ($line as $key=>$cell) {
//        echo $cell;
        if(!in_array($cell, $pieces)) {
            theEnd();
        }
    }
}

if(count($board) != 8) {
    theEnd();
}

class Chess {
    var $Horseman = 0;
    var $King = 0;
    var $Pawn = 0;
    var $Queen = 0;
    var $Rook = 0;
    var $Bishop = 0;
}


$chess = new Chess();

foreach ($board as $line) {
    foreach ($line as $cell) {
        switch ($cell) {
            case 'R' :
                $chess->Rook += 1;
                break;
            case 'H':
                $chess->Horseman += 1;
                break;
            case 'B' :
                $chess->Bishop += 1;
                break;
            case 'K' :
                $chess->King += 1;
                break;
            case 'Q' :
                $chess->Queen += 1;
                break;
            case 'P' :
                $chess->Pawn += 1;
                break;
            case ' ' :
                break;
            default :
//                theEnd();
        }

    }

}
$output = '<table>';
foreach ($board as $line) {
    $output .= '<tr>';
    foreach ($line as $cell) {
        $output .= '<td>' . htmlentities($cell) . '</td>';
    }
    $output .= '</tr>';
}
$output .= '</table>';

echo $output;

foreach ($chess as $key=>$elem) {
    if($elem == 0) {
        unset($chess->$key);
    }
}

$chessArr = (array)$chess;
ksort($chessArr);
$chess = (object)$chessArr;

echo json_encode($chess);
