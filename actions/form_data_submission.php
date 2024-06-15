<?php
include '../config.php';
$response = [];

// If the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data
    $full_name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $service = mysqli_real_escape_string($conn, $_POST['service']);

    // SQL query to insert data into the table
    $sql = "INSERT INTO form_data (full_name, email_address, mobile_number, service) VALUES ('$full_name', '$email', '$phone', '$service')";

    // Execute the query
    if (mysqli_query($conn, $sql)) {
        $response["status"] = true;
        $response["message"] = "Your form is now submitted successfully!";
        echo json_encode($response); 
    	// Redirect to another page
        header("Location: form-mail.php?name=$full_name&email=$email&phone=$phone&service=$service");
        exit();
    } else {
        $response["status"] = false;
        $response["message"] = "Error while submitting the form. Please try again.";
        echo json_encode($response); 
    	die;
    }
}

// Close connection
mysqli_close($conn);
?>