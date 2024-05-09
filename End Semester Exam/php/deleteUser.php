<?php
require('databaseConnect.php');
if($_SERVER['REQUEST_METHOD']=='POST'){
    if(isset($_POST['firstname'])){
        $firstname=$_POST['firstname'];
    }
    if(isset($_POST['lastname'])){
        $lastname=$_POST['lastname'];
    }
    if(isset($_POST['email'])){
        $email=$_POST['email'];
    }   
    $sql="DELETE FROM users WHERE firstname='$firstname' AND lastname='$lastname' AND email='$email'";
    $result=mysqli_query($connect,$sql);
    
    // echo 'success';
    header('Location: dashboard.php');
}
?>