<?php
require('databaseConnect.php');
session_start();
if(session_destroy()){
    header('Location: adminLogin.php');
}
else{

}
?>