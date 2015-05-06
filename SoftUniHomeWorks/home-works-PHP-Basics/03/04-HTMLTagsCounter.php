<!DOCTYPE html>
<html>
<head>
    <title>HTML Tags Counter</title>
    <style>
        h2 {
            margin: 0;
            padding: 0;
        }

        fieldset {
            margin-bottom: 15px;
        }

        input[type="text"]#tag {
            background-color: lightyellow;
        }
    </style>
</head>
<body>
<form method="post" action="">
    <fieldset>
        <label for="tag">Enter HTML tags: </label>
        <input type="text" name="tag" id="tag" value="<?php echo $_POST['tag']; ?>"/>
        <input type="submit" name="submit"/>
    </fieldset>
</form>

<?php
session_start();
if (isset($_POST['tag'])) {
    $arrTags = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article',
        'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big',
        'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center',
        'cite', 'code', 'col', 'colgroup', 'command', 'content', 'data', 'datalist',
        'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'element',
        'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame',
        'frameset', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'image', 'img',
        'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'listing',
        'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'multicol',
        'nav', 'nobr', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option',
        'output', 'p', 'param', 'picture', 'plaintext', 'pre', 'progress', 'q', 'rp', 'rt', 'rtc',
        'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'small', 'source', 'spacer',
        'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td',
        'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'tt',
        'u', 'ul', 'var', 'video', 'wbr', 'xmp'];

    if (!$_SESSION['counter']) {
        $_SESSIONS['counter'] = 0;
    }

    $tag = trim($_POST['tag']);

    if (in_array($tag, $arrTags)) :
        echo "<h2>Valid HTML tag!</h2><br/>";
        $_SESSION['counter']++;
    else :
        echo "<h2>Invalid HTML tag!</h2><br/>";
    endif;

    echo "<h2>Score: " . $_SESSION['counter'] . " </h2>";
}
?>
</body>
</html>




