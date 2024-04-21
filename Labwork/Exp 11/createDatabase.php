<?php
$servername = "localhost"; 
$username = "root";
$password = "Sports@Inv2937";

$conn = new mysqli($servername, $username, $password);

$sql = " DATABASE myDB";

if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}
?>