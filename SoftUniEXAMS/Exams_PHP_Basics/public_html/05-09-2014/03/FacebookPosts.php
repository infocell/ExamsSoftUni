<?php
$text = $_GET['text'];

$fbPosts = preg_split('/[\n\r]/', $text, -1, PREG_SPLIT_NO_EMPTY);

//var_dump($fbPosts);
//var_dump($fbPosts);
$res = array();
class ClassArticle{
    public $d;
    public $a;
    function __construct($d, $a){
        $this->d = $d;
        $this->a = $a;
    }
}

foreach ($fbPosts as $fbpost) {
    $fb = preg_split('/;/', $fbpost, -1, PREG_SPLIT_NO_EMPTY);

    $author = htmlspecialchars(trim($fb[0]));
    $date = strrev(trim($fb[1]));
    $date = strrev($date);
    $date = new DateTime($date, new DateTimeZone('Europe/Sofia'));
    $dateOut = $date->format('j F Y');
    $post = htmlspecialchars(trim($fb[2]));
    $likesCount = intval(trim($fb[3]));

    if (!empty($fb[4])) {
        $commentsOut = '<div class="comments">';
        $comments = preg_split('/\//', $fb[4], -1, PREG_SPLIT_NO_EMPTY);
        foreach ($comments as $c) {
            $commentsOut .= '<p>' . htmlspecialchars(trim($c)) . '</p>';
        }
        $commentsOut .= '</div>';
    }


    $article = '<article>';
    $article .= "<header><span>{$author}</span><time>{$dateOut}</time></header>";
    $article .= "<main><p>{$post}</p></main>";
    $article .= "<footer><div class=\"likes\">{$likesCount} people like this</div>{$commentsOut}</footer>";
    $article .= '</article>';




    $res[] = new ClassArticle($date, $article);

}

usort($res, function ($a, $b) {
    return $a->d < $b->d;
});

foreach ($res as $r) {
    echo $r->a;
}
