<?php
require('connect.php');
$sql="SHOW TABLES";
$dbname="votingform";
mysqli_select_db($connect,$dbname);
$result=mysqli_query($connect,$sql);
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        echo $row["Tables_in_".$dbname]."<br/>";
    }
}
else{
    echo "0 tables";
}
?>
