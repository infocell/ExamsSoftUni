<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Form Data</title>
    <style>
        input {
            display: block;
            margin-top: 10px;
            line-height: 18px;
            padding: 5px;
        }
        fieldset {
            width: 300px;
        }
        input[type="radio"] {
            display: inline-block;
        }
        label:after {
            display: block;
            content: "";
        }

    </style>
</head>
<body>
<form method="post">
    <fieldset>
        <input type="text" name="name" placeholder="Name..." />
        <input type="number" name="age" placeholder="Age..." />
        <input type="radio" name="sex" id="male" value="male" />
            <label for="male">Male</label>
        <input type="radio" name="sex" id="female" value="female" />
            <label for="female">Female</label>
        <input type="submit" name="submit" />
    </fieldset>

</form>
    <?php
    if ($_POST['submit']) {
        $name = $_POST['name'];
        $age = $_POST['age'];
        $sex = $_POST['sex'];
        echo "<p>My name is {$name}. I am {$age} years old. I am {$sex}.</p>";
    }
    ?>
</body>
</html>