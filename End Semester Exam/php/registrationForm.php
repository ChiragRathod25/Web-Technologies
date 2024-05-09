<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <style>
        form{
            width: 25%;
            border:2px solid black;
            padding:15px;
            border-radius:15px;
        }
    </style>
    <script src="../JS/validateForm.js"></script>
</head>
<body>
    <form onsubmit="return validateMyForm(this)" action="hellouser.php" method="POST"  >
    <label for="firstname">First Name : </label>
    <input type="text" id="firstname" name="firstname">
    <hr>
    <label for="lastname">Last Name : </label>
    <input type="text" id="lastname" name="lastname">
    <hr>
    <label for="email">Email : </label>
    <input type="email" id="email" name="email">
    <hr>
    <input type="submit" value="submit">
    <input type="reset" value="Reset">
    </form>
</body>
</html>