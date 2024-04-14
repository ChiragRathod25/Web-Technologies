<?php
    echo "<h4>Array Example</h4>";
    $colors = array("Red", "Green", "Blue");

    echo "Access with index : "; // Output: Array
    echo $colors[0];
    echo $colors[1];
    echo $colors[2];
    echo "<br>Total Colors: ";
    echo count($colors);
    echo "<br>";
    
    
    echo "Access with foreach Loop : "; // Output: Array
    foreach ($colors as $color) {
        echo $color . " ";
    }
    echo "<br>";
    //array with key value pair
    $person = array("name" => "John", "age" => 30);
    echo $person["name"]; 
    
?>
