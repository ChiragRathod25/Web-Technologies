<?php
	$str = "http://www.ivanbayross.com?txtName=Ivan&txtSurname=Bayross&txtDOB=23/06/1952";
	$parameters = preg_split("/[&=]/", $str);
	echo "The parameters and their corresponding values passed are: <br />";
	print_r($parameters);
?>