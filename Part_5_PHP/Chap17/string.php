<?php	
	// php is case sensitive
	//either double quote or single quote
	// Single quote as string constant , but we can insert html tags into it
	//  \ escape charatcter
	$firstName = 'Ivan';
	$wishing = "Hello everyone, my first name is $firstName. <BR />";
	echo $wishing;
	$lastName = 'Bayross';
	$greeting = ' Hello everyone, my last name is $lastName.';
	echo $greeting;
?>