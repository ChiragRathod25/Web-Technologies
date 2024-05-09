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
</body>
<?php

require('databaseConnect.php');
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
                echo "<script>document.querySelector('body').innerHTML='Hello, $firstname'</script>";
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
?>
</html>