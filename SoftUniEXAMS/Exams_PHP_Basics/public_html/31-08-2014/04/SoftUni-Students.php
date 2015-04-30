<?php
$column = $_GET['column'];
$order = $_GET['order'];
$students = trim($_GET['students']);

$students = preg_split('/[\r\n]/', $students, -1, PREG_SPLIT_NO_EMPTY);

class Student
{
    public $id;
    public $username;
    public $email;
    public $type;
    public $result;

    function __construct($id, $username, $email, $type, $result)
    {
        $this->id = $id + 1;
        $this->username = $username;
        $this->email = $email;
        $this->type = $type;
        $this->result = intval($result);
    }
}

//var_dump($students);

foreach ($students as $id => $student) {

    $student = preg_split('/\s*,\s*/', $student, -1, PREG_SPLIT_NO_EMPTY);

    $studentsArr[] = new Student($id, $student[0], $student[1], $student[2], $student[3]);
}

usort($studentsArr, function ($a, $b) {
    global $column;
    global $order;

    if ($order == 'ascending') {
        if ($column == 'result' || $column == 'id') {
            if ($a->$column != $b->$column) {
                return $a->$column - $b->$column;
            } else {
                return $a->id - $b->id;
            }
        } else {
            if(strcmp($a->$column, $b->$column) != 0) {
                return strcmp($a->$column, $b->$column);
            } else {
                return $a->id - $b->id;
            }
        }
    }

    if ($order == 'descending') {
        if ($column == 'result' || $column == 'id') {
            if ($a->$column != $b->$column) {
                return $b->$column - $a->$column;
            } else {
                return $b->id - $a->id;
            }
        } else {
            if(strcmp($b->$column, $a->$column) != 0) {
                return strcmp($b->$column, $a->$column);
            } else {
                return $b->id - $a->id;
            }
        }
    }
});


$output = '<table>';
$output .= '<thead><tr><th>Id</th><th>Username</th><th>Email</th><th>Type</th><th>Result</th></tr></thead>';

foreach ($studentsArr as $student) {
    $id = htmlspecialchars($student->id);
    $username = htmlspecialchars($student->username);
    $email = htmlspecialchars($student->email);
    $type = htmlspecialchars($student->type);
    $result = htmlspecialchars($student->result);


    $output .= "<tr><td>{$id}</td><td>{$username}</td><td>{$email}</td><td>{$type}</td><td>{$result}</td></tr>";
}
$output .= '</table>';
echo $output;
//var_dump($column);
//var_dump($order);
