<?php
session_start();
unset($_SESSION['id']);
header('Location: login.php');
setcookie("user","",time()-3600,"/");
?>