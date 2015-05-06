<?php

$input = array(
    array("Gosho", "0882-321-423", 24, "Hadji Dimitar"),
    array("Pesho", "0884-888-888", 67, "Suhata Reka")
);
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Information Table</title>

    <style type="text/css">
        table {
            border: double black;
            border-collapse: collapse;
            margin: 20px auto;
        }
        th {
            text-align: left;
            background-color: darkorange;
            padding: 8px;
            border: 1px solid black;
            width: 200px;
        }
        td {
            text-align: right;
            padding: 8px;
            border: 1px solid black;
            width: 200px;
        }
    </style>

</head>
<body>
<?php
foreach ($input as $arr) {
?>
    <table>
        <tbody>
        <tr>
            <th>
                Name
            </th>
            <td>
                <?php
                    echo $arr[0];
                ?>
            </td>
        </tr>
        <tr>
            <th>
                Phone number
            </th>
            <td>
                <?php
                    echo $arr[1];
                ?>
            </td>
        </tr>
        <tr>
            <th>
                Age
            </th>
            <td>
                <?php
                    echo $arr[2];
                ?>
            </td>
        </tr>
        <tr>
            <th>
                Address
            </th>
            <td>
                <?php
                    echo $arr[3];
                ?>
            </td>
        </tr>
        </tbody>
    </table>
<?php
}
?>
</body>
</html>