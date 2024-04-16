<?php

class Car {
    public $name;
    public $year;

    public function __construct( $name, $year) {
        $this->name = $name;
        $this->year = $year;
    }

    public function displayDetails() {
        echo "Car: {$this->year} {$this->name}";
    }
    public function calculateAge() {
        $currentYear = date('Y');
        return $currentYear - $this->year;
    }
}

$car1 = new Car("Toyota", 2018);
$car2 = new Car("Honda", 2015);

echo "Car 1 Details: ";
echo "<br>";
$car1->displayDetails();
echo "<br>";
echo "Car 1 Age: " . $car1->calculateAge(); 
echo "<br>";
?>
