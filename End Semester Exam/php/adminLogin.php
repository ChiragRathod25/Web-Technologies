<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adminstrator Login</title>
</head>
<body>
    <h1>
        Administrator Login
    </h1>
    <form action="adminLoginVerification.php" method="post">
    <label for="username">Username : </label>
    <input type="text" id="username" name="username">
    <label for="password">Password : </label>
    <input type="password" name="password" id="password">
    <input type="submit" value="submit">
    </form>
    <hr>
    <a href="adminSignup.php">

        <button>Signed Up</button>
    </a>
</body>
</html>