<!DOCTYPE html>
<html>
<head>
    <title>Sidebar Builder</title>
    <style>
        aside {
            width: 250px;
            background-color: skyblue;
            border-radius: 40px;
            border: 1px solid blue;
            padding: 5px 15px;
            margin-bottom: 10px;
        }

        h3 {
            border-bottom: 1px solid #000000;
        }
    </style>
</head>
<body>
<?php if (!isset($_GET['submit'])) { ?>
    <form action="03-SidebarBuilder.php" method="get">
        <fieldset>
            <label for="categories">Categories: </label>
            <input type="text" name="categories" id="categories" value="Knitting, Cycling, Swimming, Dancing"/><br/>
            <label for="tags">Tags: </label>
            <input type="text" name="tags" id="tags" value="person, free time, love, peace, protest"/><br/>
            <label for="months">Months: </label>
            <input type="text" name="months" value="April, May, June, July"/><br/>
            <input type="submit" value="Generate" name="submit"/>
        </fieldset>
    </form>
<?php
} else {

    function getInfoAside($type, $arr)
    {
        $returnAside = "<aside><h3>{$type}</h3><ul>";
        foreach ($arr as $elem) {
            $returnAside .= "<li>{$elem}</li>";
        }
        $returnAside .= '</ul></aside>';
        return $returnAside;
    }

    $categories = $_GET['categories'];
    $categoriesArr = preg_split('/[,\s*]/', $categories, -1, PREG_SPLIT_NO_EMPTY);
    $tags = $_GET['tags'];
    $tagsArr = preg_split('/[,\s*]/', $tags, -1, PREG_SPLIT_NO_EMPTY);
    $months = $_GET['months'];
    $monthsArr = preg_split('/[,\s*]/', $months, -1, PREG_SPLIT_NO_EMPTY);

    $output = getInfoAside('Categories', $categoriesArr);
    $output .= getInfoAside('Tags', $tagsArr);
    $output .= getInfoAside('Months', $monthsArr);
    echo $output;
}
?>

</body>
</html>