<?php
$servername='localhost';
$username='root';
$password="Sports@Inv2937";

$connect=new mysqli($servername,$username,$password);

$sql = "CREATE DATABASE votingform";

if($connect->query($sql)==TRUE){
    echo "database creatd successfully !!";
}
// if(!$result){
    // echo "database creation failed";
// }
// else{
    // echo "database created successfully";
// }
?>