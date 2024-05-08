<?php
    require('connect.php');
    $sql="DROP DATABASE votingform";
    $result=mysqli_query($connect,$sql);
    if($result){
        echo "databse deleted successfully";
    }
    else{
        echo "failed to delete";
    }
?>