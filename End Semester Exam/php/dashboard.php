<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin dashboard</title>
</head>
<body>
    <h1>
        Hi, <?php 
    session_start();
        echo $_SESSION["username"];
         ?>
    </h1>
    <?php
    require('databaseConnect.php');
    // echo $_SESSION["username"];
    if(!isset($_SESSION["username"])){
        header('Location: adminLogin.php');
        exit();        
    }
    echo '<table border="1">';
    echo '<tr>';
    echo '<th>First Name</th>';
    echo '<th>Last Name</th>';
    echo '<th>Email</th>';
    echo '</tr>';
    $sql="SELECT * from users";
    $result=mysqli_query($connect,$sql);
    if(mysqli_num_rows($result)>0){
        while($row=mysqli_fetch_assoc($result)){
            $firstname=$row['firstname'];
            $lastname=$row['lastname'];
            $email=$row['email'];
            echo '<tr>';
            echo "<td>$firstname</td>";
            echo "<td>$lastname</td>";
            echo "<td>$email</td>";

            echo '</tr>';
        }
    }
    
    echo '<a href="registrationForm.php"><button>Register New</button></a>';
    echo '<a href="adminLoggedOut.php"><button>Click here to Logout</button></a>';
    ?>
   
</body>
</html>