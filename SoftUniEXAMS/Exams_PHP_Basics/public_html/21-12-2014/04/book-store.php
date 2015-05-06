<?php
class Book
{
    private $author;
    private $name;
    private $genre;
    private $price;
    private $publishDate;
    private $info;

    function __construct($author, $name, $genre, $price, $publishDate, $info)
    {
        $this->author = trim($author);
        $this->name = trim($name);
        $this->genre = trim($genre);
        $this->price = trim($price);
        $this->publishDate = new DateTime($publishDate, new DateTimeZone('Europe/Sofia'));
        $this->info = trim($info);
    }

    public function getAuthor() {
        return $this->author;
    }
    public function getName() {
        return $this->name;
    }
    public function getGenre() {
        return $this->genre;
    }
    public function getPrice() {
        return $this->price;
    }
    public function getPublishDate() {
//        var_dump($this->publishDate);
        return $this->publishDate->format('Y-m-d');
    }
    public function getInfo() {
        return $this->info;
    }
}

$books = [];
$text = $_GET['text'];
$minPrice = floatval(trim($_GET['min-price']));
$maxPrice = floatval(trim($_GET['max-price']));
$sort = $_GET['sort'];
$order = $_GET['order'];

$textArr = preg_split('/\r\n/', $text, -1, PREG_SPLIT_NO_EMPTY);

foreach ($textArr as $line) {
    $lineArr = preg_split('/\//', $line, -1, PREG_SPLIT_NO_EMPTY);

    $author = trim($lineArr[0]);
    $name = trim($lineArr[1]);
    $genre = trim($lineArr[2]);
    $price = floatval($lineArr[3]);
    $publishDate = trim($lineArr[4]);
    $info = trim($lineArr[5]);

    if ($price >= $minPrice && $price <= $maxPrice) {
        $books[] = new Book($author, $name, $genre, $price, $publishDate, $info);
    }
}
//var_dump($books);

function sortByGenre($a, $b) {
    global $order;
//var_dump($order);
    if($order == 'descending') {
//        var_dump($a);
        return strcmp($b->getGenre(), $a->getGenre());
    } else {
        return strcmp($a->getGenre(), $b->getGenre());
    }
}

function sortByAuthor($a, $b) {
    global $order;
    if($order == 'descending') {
        return (strcmp($b->getAuthor(), $a->getAuthor()));
    } else {
        return (strcmp($a->getAuthor(), $b->getAuthor()));
    }
}

switch($sort) {
    case 'genre':
        usort($books, function($a, $b) {
            if(strcmp($a->getGenre(), $b->getGenre()) != 0) {
                return sortByGenre($a, $b);
            } else {
                return $a->getPublishDate() > $b->getPublishDate();
            }
        });
        break;
    case 'author':
        usort($books, function($a, $b) {
            if(strcmp($a->getAuthor(), $b->getAuthor()) != 0) {
                return sortByAuthor($a, $b);
            } else {
                return $a->getPublishDate() > $b->getPublishDate();
            }
        });
        break;
    case 'publish-date':
        usort($books, function($a, $b) {
            global $order;
            if($order == 'descending') {
                return $a->getPublishDate() < $b->getPublishDate();
            } else {
                return $a->getPublishDate() > $b->getPublishDate();
            }
        });
        break;
    default:
        break;
}

$output = '';
foreach ($books as $obj) {
//    var_dump($obj->getAuthor());
    $output .= '<div>';
    $output .= '<p>' . htmlentities($obj->getName()) .'</p>';
    $output .= '<ul>';
    $output .= '<li>' . htmlentities($obj->getAuthor()) . '</li>';
    $output .= '<li>' . htmlentities($obj->getGenre()) . '</li>';
    $output .= '<li>' . number_format((float)$obj->getPrice(), 2, '.', '') . '</li>';
    $output .= '<li>' . htmlentities($obj->getPublishDate()) . '</li>';
    $output .= '<li>' . htmlentities($obj->getInfo()) . '</li>';
    $output .= '</ul>';
    $output .= '</div>';
}

echo $output;

//var_dump($output);
