<?php
$text = $_GET['text'];
$blacklist = preg_split('/\s+/', $_GET['blacklist']);

preg_match_all('/[\w\+\_\-]+@[\w\-]+\.[\w\-\.]+/', $text, $listOfEmails);


$listOfEmails = $listOfEmails[0];

foreach ($listOfEmails as $key => $email) {
    foreach ($blacklist as $blackMail) {
        $regex = ($blackMail[0] == '*') ? '/.*?\.' . substr($blackMail, 2, strlen($blackMail) - 1) . '$/' : '/^' . $blackMail . '$/';
        preg_match($regex, $email, $isMatch);
        if (!empty($isMatch)) {
            $listOfCensoredEmails[$key] = preg_replace($regex, $email, str_repeat('*', strlen($email)));
        }
    }
}

for($i = 0; $i < count($listOfEmails); $i++) {
    if(is_null($listOfCensoredEmails[$i])) {
        $listOfCensoredEmails[$i] = '<a href="mailto:' . $listOfEmails[$i] . '">' . $listOfEmails[$i] .'</a>';
    }
}

foreach($listOfEmails as $key=>$email) {
    $text = str_replace($listOfEmails[$key], $listOfCensoredEmails[$key], $text);
}
echo '<p>' . $text . '</p>';

//var_dump($listOfEmails);
//var_dump($listOfCensoredEmails);

//$out = 'joijo.crom';
//preg_match('/com$/', $out, $str);
//var_dump($str);


//var_dump($listOfCensoredMails);

//var_dump($text);