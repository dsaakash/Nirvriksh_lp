<?php
// Database configuration
$servername = "localhost";
$username = "biniclgw_nirvriksh_admins";
$password = "mxcdv@NV2024$$#";
$dbname = "biniclgw_nirvriksh";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>
