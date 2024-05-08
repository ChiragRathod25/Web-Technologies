<?php
	$var1 = 85;
	$var2 = 50;

	function MySum()
	{
		global $var1, $var2,$var3;
		$var3 = $var1 + $var2;
		echo "The Sum is:", $var3."<br/>";
	} 
	MySum();

	echo "Vakue of variable 2 is :", $var2;
	echo "<br/>".$var3;
?>
