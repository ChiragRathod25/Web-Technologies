<?php
$x = "Naman";
echo "Hello $x";
echo "<br>";
$x = "Namo";
echo 'Hello $x';
echo "<br>";
echo "String Length(Hello Chirag) : ";
echo strlen("Hello Chirag");

echo "<br>";
echo "Word Count(Hello Dhoni) : ";
echo str_word_count("Hello Dhoni");

echo "<br>";
echo "Position of word(Hello kohli) : ";
echo strpos("Hello kohli!", "kohli");

echo "<br>";
echo "Reverse word(BVM) : ";
$x = "BVM";
echo strrev($x);

echo "<br>";
echo "Concate String (Hello+Putin) : ";
$x = "Hello";
$y = "Putin";
$z = $x . $y;
echo $z;
?>