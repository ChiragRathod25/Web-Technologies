<?php
require('databaseConnect.php');
$previousPage=$_SERVER['HTTP_REFERER'];
if (isset($_POST['firstname'])) {
    $firstname = $_POST['firstname'];
    // You can use the $firstname value here if needed
} else {
    // Display an alert and redirect back to the previous page
    echo "<script>
        if (alert('Please Enter firstname')) {
            window.location.href = document.referrer;
        }
    </script>";
}
if(isset($_POST['lastname'])){
    $lastname=$_REQUEST['lastname'];
    // echo $lastname;
}
if(isset($_POST['email'])){
    $email =$_REQUEST['email'];
    // echo $email;
}
$sql="INSERT INTO users (firstname,lastname,email) values ('$firstname','$lastname','$email')";
$result=mysqli_query($connect,$sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello , <?php echo $firstname ?></title>
</head>
<body>
    <h1>Hello, <?php echo $firstname ." ". $lastname?></h1>
    <h3>Your email address is <?php echo $email?></h3>
    <h4>
        You are successfully registered !!
    </h4>
    <a href="login.php"><button>Click here to login</button></a>
</body>
</html>