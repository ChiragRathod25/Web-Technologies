<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill out all required fields.";
    } else {
        echo "<h2>Thank you for your submission, $name!</h2>";
        echo "<p><strong>Your Email:</strong> $email</p>";
        echo "<p><strong>Message:</strong><br>$message</p>";
    }
} else {
    header("Location: form.html");
    exit();
}
?>
