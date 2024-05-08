<?php
$servername='localhost';
$username='root';
$password="Sports@Inv2937";
// $dbname="Sports-Inventory-management";
$connect=new mysqli($servername,$username,$password);
if(!$connect){
    echo "Connection failed !";
}
// $sqlquery="DATABASE votingform";
// $result=mysqli_query($connect,$sqlquery);

// if($result){
//     echo "database created successfully";
// }
// else {
//     echo "retry";
// }
?>