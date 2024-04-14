<?php
function calculateSum($num1, $num2) {
    $sum = $num1 + $num2;
    return $sum;
}
echo "Sum of 5 and 10 is :" . calculateSum(5, 10) . "<br>";
function multiplicationTable($num) {
    for ($i = 1; $i <= 10; $i++) {
        $result = $num * $i;
        echo "$num x $i = $result <br>";
    }
}
multiplicationTable(5);
?>