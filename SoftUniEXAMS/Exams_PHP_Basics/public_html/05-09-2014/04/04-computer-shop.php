<?php
//var_dump(('5.00') + 0);

$minPrice = ($_GET['minPrice'] + 0);
$maxPrice = ($_GET['maxPrice'] + 0);
$filter = trim($_GET['filter']);
$order  = trim($_GET['order']);
$list = $_GET['list'];
//    "SONY VAIO SVF13N1X2ES | laptop | INTEL CORE i5-4260U, 4 GB RAM, INTEL HD GRAPHICS 5000 | 2399.00
//PACKARD BELL IMEDIA S2185 (SFF) | desktop | INTEL CELERON N2815 Dual Core, 4 GB RAM, INTEL HD GRAPHICS | 369.00
//ACER ASPIRE Z3-600 | desktop | AMD QUAD-CORE A4-5000 1.50 GHz, 4 GB RAM, AMD RADEON HD 8330 | 1399.00
//APPLE iMAC Z0MQ00071/BG | desktop | INTEL CORE i7-4770T, 16 GB RAM, NVIDIA GEFORCE GT 750M | 2949.00
//ACER ASPIRE V5-123-12104G50NSS | laptop | | INTEL CELERON 1007U, 2 GB RAM, INTEL HD GRAPHICS | 489.00
//ACER ASPIRE XC-605 | desktop | INTEL PENTIUM 2117U, 4 GB RAM, INTEL HD GRAPHICS | 749.99
//DELL INSPIRON 3847/476756/477784 | laptop | Intel Core i5-4510U, 6 GB RAM, NVIDIA GeForce 9800GT | 1049.49";

class Product {
    public $id;
    public $name;
    public $components;
    public $price;
    function __construct($id, $name, $components, $price) {
        $this->id = $id;
        $this->name = $name;
        $this->components = $components;
        $this->price = $price;
    }
}

$productsArr = array();
$list = preg_split('/[\r\n]/', $list, -1, PREG_SPLIT_NO_EMPTY);
$id = 0;
foreach ($list as $line) {
    $line = preg_split('/\s*\|\s*/', $line, -1, PREG_SPLIT_NO_EMPTY);
    $name = $line[0];
    $type = $line[1];
    $components = preg_split('/\s*,\s*/', $line[2], -1, PREG_SPLIT_NO_EMPTY);
    $price = $line[3] + 0;
//    var_dump($components);
    $id++;
    if ($price >= $minPrice && $price <= $maxPrice) {
        if($filter == $type || $filter == 'all') {
            $productsArr[] = new Product($id, $name, $components, $price);
        }
    }
}
//var_dump($productsArr);
usort($productsArr, function($a, $b){
    global $order;
    if($order == 'ascending') {
        if($a->price != $b->price) {
            return $a->price - $b->price;
        } else {
            return $a->id - $b->id;
        }
    } else {
        if ($a->price != $b->price) {
            return $b->price - $a->price;
        }
        else {
            return $a->id - $b->id;
        }
    }
});

//var_dump($productsArr);
$output = '';
foreach ($productsArr as $key=>$product) {
    $id = htmlspecialchars($product->id);
    $name = htmlspecialchars($product->name);

    $output .= "<div class=\"product\" id=\"product{$id}\"><h2>{$name}</h2>";
    $output .= "<ul>";
    foreach ($product->components as $component) {
        $component = htmlspecialchars($component);
        $output .= "<li class=\"component\">{$component}</li>";
    }
    $output .= "</ul>";
    $price = number_format($product->price, 2, '.', '');
    $output .= "<span class=\"price\">{$price}</span>";
    $output .= "</div>";
}

echo $output;
