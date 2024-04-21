<?php
$servername = "localhost"; 
$username = "root";
$password = "Sports@Inv2937";
$dbname = "sports-inventory-management";

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SHOW TABLES";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row["Tables_in_sports-inventory-management"] . "<br>";
    }
} else {
    echo "0 tables found";
}
?>