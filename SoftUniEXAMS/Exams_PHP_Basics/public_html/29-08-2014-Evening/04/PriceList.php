<?php
$priceList = $_GET['priceList'];

$pattern = '/<tr>\s*<td>\s*([\w\W]+?)\s*<\/td>\s*<td>\s*([\w\W]+?)\s*<\/td>\s*<td>\s*([\w\W]+?)\s*<\/td>\s*<td>\s*([\w\W]+?)\s*<\/td>\s*<\/tr>/';

$countMatches = preg_match_all($pattern, $priceList, $matches);

$categoriesArr = array();

for($i= 0; $i < $countMatches; $i++) {

    $product = html_entity_decode($matches[1][$i]);
    $category = html_entity_decode($matches[2][$i]);
    $price = html_entity_decode($matches[3][$i]);
    $currency = html_entity_decode($matches[4][$i]);

    $categoryClass = new stdClass();
    $categoryClass->product = $product;
    $categoryClass->price = $price;
    $categoryClass->currency = $currency;


    if (!isset($categoriesArr[$category])) {
        $categoriesArr[$category] = array();
    }

    $categoriesArr[$category][] = $categoryClass;
}

ksort($categoriesArr);
$sortedArr = array();
foreach ($categoriesArr as $key=>$category) {
    usort($category,function($a, $b) {
        return strcmp($a->product, $b->product);
    });
    $sortedArr[$key] = $category;
}

echo json_encode($sortedArr);
