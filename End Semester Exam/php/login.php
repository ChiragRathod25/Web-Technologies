<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <form action="" method="post">
        <label for="firstname">First Name: </label>
        <input type="text" id="firstname" name="firstname">
        <hr>
        <label for="email">Email : </label>
        <input type="text" id="email" name="email">
        <hr>
        <input type="submit" value="submit">
    </form>
    <form action="logout.php" method="post">
        <input type="submit" value="Logout">
    </form>
    <form action="registrationForm.php" method="post">
        <input type="submit" value="registrationForm.php">
    </form>
 
</body>
<?php

require('databaseConnect.php');
if($_SERVER['REQUEST_METHOD']=='POST'){
    if(isset($_POST['firstname'])){
        $firstname=$_POST['firstname'];
}
if(isset($_POST['email'])){
    $email=$_POST['email'];
}
$sql="SELECT * from users";
$result=mysqli_query($connect,$sql);
if(mysqli_num_rows($result)>0){
    $flage=false;
    while($row=mysqli_fetch_assoc($result))
    {   
        if($row['firstname']==$firstname){
            if($row['email']==$email){
                $flage=true;
                echo "<script>document.querySelector('body').innerHTML+='Hello, $firstname'</script>";
                $_SESSION['id']=$firstname;
                // echo $_SESSION['id'];
                setcookie("user","$firstname",time() + (86400*30),"/");
                if(count($_COOKIE)>1){
                    echo "Cookie is enable";
                    foreach ($_COOKIE as $key => $val) {
                        echo "$key is $val<br>\n";
                    }
                }
                else{
                    echo "Cookie is disable";
                }
                break;
            }
        }
    }
    if($flage==false){
        echo "<script>alert('No user found');</script>";
        echo "No user found";
    }
    


}
else{
    echo "No data found";
}

}
else {

}
?>
</html>