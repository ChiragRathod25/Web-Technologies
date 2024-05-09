<?php
    require('databaseConnect.php');
    if(isset($_POST['username'])){
        $username=$_REQUEST['username'];
    }
    
    if(isset($_POST['password'])){
        $password=$_REQUEST['password'];
    }
    $sql="INSERT INTO administrator(username,password) values ('$username','".md5($password)."')";
    $result=mysqli_query($connect,$sql);
    if($result){
        echo '<script>alert("signed Up successfully")';
        echo '</script>'; 
        echo '<a href="dashbaord.php"><button>Click here to Login</button></a>';

    }
?>  