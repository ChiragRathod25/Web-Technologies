<?php
    $age = 20;
    echo "<h4>Decision Making Example</h4>";
    if ($age < 18) {
        echo "You are a minor.";
    } elseif ($age >= 18 && $age < 60) {
        echo "You are an adult.";
    } else {
        echo "You are a senior citizen.";
    }
    
    echo "<br>";
    echo "<h4>Looping Example</h4>";
    for ($i = 1; $i <= 5; $i++) {
        echo $i . " ";
    }
    
?>
