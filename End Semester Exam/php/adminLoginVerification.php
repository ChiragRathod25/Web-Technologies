<?php
    session_start();
    require('databaseConnect.php');
    if($_SERVER['REQUEST_METHOD']=="POST"){

        if(isset($_POST['username'])){
            $username=$_POST['username'];
    }
    
    if(isset($_POST['password'])){
        $password=$_POST['password'];
    }
    $sql="SELECT * FROM administrator where username='$username' AND password='".md5($password)."'";
    $result=mysqli_query($connect,$sql);
    if(mysqli_num_rows($result)==1){
        $_SESSION['username'] = $username;
        echo "Administrator Logged In Successfully";
        echo '<a href="dashboard.php"><button>Click here to view dashboard</button></a>';
    }
    else{
        echo "Username or password incorrect";
    }
}
else{
    echo "No Request";
}
?>  