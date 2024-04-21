<?php
$servername = "localhost"; 
$username = "root";
$password = "Sports@Inv2937";

$conn = new mysqli($servername, $username, $password);

$sql = "SHOW DATABASES";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo $row["Database"] . "<br>";
    }
} else {
    echo "0 databases found";
}

?>