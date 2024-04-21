<?php
$servername = "localhost"; 
$username = "root"; 
$password = "Sports@Inv2937"; 

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$databaseName = "myWebDB";
$sqlCreateDatabase = "CREATE DATABASE IF NOT EXISTS $databaseName";
if ($conn->query($sqlCreateDatabase) === TRUE) {
    echo "Database '$databaseName' created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->select_db($databaseName);

$result = $conn->query("SHOW DATABASES");
echo "List of databases:<br>";
while ($row = $result->fetch_assoc()) {
    echo $row['Database'] . "<br>";
}

$tableName = "new_table";
$sqlCreateTable = "CREATE TABLE IF NOT EXISTS $tableName (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
)";
if ($conn->query($sqlCreateTable) === TRUE) {
    echo "Table '$tableName' created successfully<br>";
} else {
    echo "Error creating table: " . $conn->error;
}

$result = $conn->query("SHOW TABLES");
echo "Tables in database '$databaseName':<br>";
while ($row = $result->fetch_assoc()) {
    echo $row['Tables_in_' . $databaseName] . "<br>";
}
$conn->close();
?>
