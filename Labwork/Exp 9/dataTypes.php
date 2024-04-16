<?php
$x = 5.5; // float
$y = true; // boolean
$z = array(1, 2, 3); // array
class Person {
    public $name;
    public $age;
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    public function introduce() {
        return "My name is " . $this->name . " and I am " . $this->age . " years old!";
    }
}

echo "var_dump() function returns the data type and the value<br>";

$person = new Person("Rohit Sharma", 25);
var_dump($person);

var_dump($x);
echo "<br>";
var_dump($y);
echo "<br>";
var_dump($z);
echo "<br>";
    ?>