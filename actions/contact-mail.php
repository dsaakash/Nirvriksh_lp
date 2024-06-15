<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$date = date('Y-m-d');
$name = $_GET['name'];
$email = $_GET['email'];
$phone = $_GET['phone'];
$message = $_GET['message'];

// $stringToHash = "name=$name&membership=$membership_id&txnid=$txnid";
// $ascii = bin2hex($stringToHash);
// $data = sha1($ascii);

//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


//Load Composer's autoloader
require 'PHPMailer/vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

//EMAIL RECEIVED TO THE CLIENT

    $mail2 = new PHPMailer(true);
    $mail2->IsMail();
    $mail2->IsSMTP(); 
    $mail2->Host = 'nirvriksh.com';
    $mail2->SMTPAuth = true; 
    $mail2->SMTPDebug = false; 
    $mail2->do_debug = 0;
    $mail2->Username = 'contact@nirvriksh.com';
    $mail2->Password = 'vS4~Yi(D02WO';
    $mail2->FromName = "NirVriksh";
    $mail2->From = "contact@nirvriksh.com";	
    $mail2->SMTPSecure = 'tls';
    $mail2->Port = 587;
    $mail2->addAddress('contact@nirvriksh.com');
    $mail2->AddReplyTo('contact@nirvriksh.com', 'NirVriksh');
    $mail2->IsHTML(true);
    $mail2->Subject = "Contact Form Submission | NirVriksh";
    $mail2->Body = "<!DOCTYPE html
    PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
<html xmlns='http://www.w3.org/1999/xhtml' xmlns:v='urn:schemas-microsoft-com:vml'
    xmlns:o='urn:schemas-microsoft-com:office:office' lang='en'>

<head>
    <meta http-equiv='Content-type' content='text/html; charset=utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='format-detection' content='date=no' />
    <meta name='x-apple-disable-message-reformatting' />
    <link href='https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i' rel='stylesheet' />
    <title>Email</title>

    <style type='text/css' media='screen'>
        /* Linked Styles */
        body {
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
            min-width: 100% !important;
            width: 100% !important;
            background: #f4f4f4;
            -webkit-text-size-adjust: none
        }

        a {
            color: #66c7ff;
            text-decoration: none
        }

        p {
            padding: 0 !important;
            margin: 0 !important
        }

        img {
            -ms-interpolation-mode: bicubic;
            /* Allow smoother rendering of resized image in Internet Explorer */
        }

        .mcnPreviewText {
            display: none !important;
        }


        /* Mobile styles */
        @media only screen and (max-device-width: 480px),
        only screen and (max-width: 480px) {
            .mobile-shell {
                width: 100% !important;
                min-width: 100% !important;
            }

            .bg {
                background-size: 100% auto !important;
                -webkit-background-size: 100% auto !important;
            }

            .text-header,
            .m-center {
                text-align: center !important;
            }

            .center {
                margin: 0 auto !important;
            }

            .container {
                padding: 20px 10px !important
            }

            .td {
                width: 100% !important;
                min-width: 100% !important;
            }

            .m-br-15 {
                height: 15px !important;
            }

            .p30-15 {
                padding: 30px 15px !important;
            }

            .p40 {
                padding: 20px !important;
            }

            .m-td,
            .m-hide {
                display: none !important;
                width: 0 !important;
                height: 0 !important;
                font-size: 0 !important;
                line-height: 0 !important;
                min-height: 0 !important;
            }

            .m-block {
                display: block !important;
            }

            .fluid-img img {
                width: 100% !important;
                max-width: 100% !important;
                height: auto !important;
            }

            .column,
            .column-top,
            .column-empty,
            .column-empty2,
            .column-dir-top {
                float: left !important;
                width: 100% !important;
                display: block !important;
            }

            .column-empty {
                padding-bottom: 10px !important;
            }

            .column-empty2 {
                padding-bottom: 20px !important;
            }

            .content-spacing {
                width: 15px !important;
            }
        }
    </style>
</head>

<body class='body'
    style='padding:0 !important; margin:0 !important; display:block !important; min-width:100% !important; width:100% !important; background:#f4f4f4; -webkit-text-size-adjust:none;'>
    <table width='100%' border='0' cellspacing='0' cellpadding='0' bgcolor='#f4f4f4'>
        <tr>
            <td align='center' valign='top'>
                <table width='650' border='0' cellspacing='0' cellpadding='0' class='mobile-shell'>
                    <tr>
                        <td class='td container'
                            style='width:650px; min-width:650px; font-size:0pt; line-height:0pt; margin:0; font-weight:normal; padding:55px 0px;'>

                            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                <tr>
                                    <td style='padding-bottom: 20px;'>
                                        <table width='100%' border='0' cellspacing='0' cellpadding='0'
                                            bgcolor='#ffffff'>
                                            <tr>
                                                <td class='p30-15' style='padding: 50px 30px;'>
                                                    <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                                        <tr>
                                                            <td class='h2 pb20'
                                                                style='color:#000000; font-family:Arial,sans-serif; font-size:24px; line-height:32px; text-align:center; padding-bottom:20px;'>
                                                                Welcome to NirVriksh</td>
                                                        </tr>
                                                        <tr>
                                                            <td class='h2 pb20'
                                                                style='color:#114490; font-family:Arial,sans-serif; font-size:14px; line-height:32px; text-align:center; padding-bottom:20px;'>
                                                                <img src='https://nirvriksh.com/images/welcome.png' style='width:200px'>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class='text pb20'
                                                                style='color:#777777; font-family:Arial,sans-serif; font-size:14px; line-height:26px; text-align:center; padding-bottom:20px;'>
                                                                We have received a new Contact form submission and here are the details:</td>
                                                        </tr>
                                                        <tr>
                                                            <td class='h3 pb20'
                                                                style='color:#114490; font-family:Arial,sans-serif; font-size:14px; line-height:32px; text-align:center; padding-bottom:20px;'>
                                                                Name: <b>$name</b><br>Email ID:
                                                                <b>$email</b><br>Mobile No.:
                                                                <b>$phone</b><br>Message:
                                                                <b>$message</b>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                <tr>
                                    <td class='p30-15' style='padding: 50px 30px;' bgcolor='#ffffff'>
                                        <table width='100%' border='0' cellspacing='0' cellpadding='0'>
                                            <tr>
                                                <td class='text-footer1'
                                                    style='color:#999999; font-family: Arial,sans-serif; font-size:16px; line-height:15px; text-align:center;'>
                                                    NirVriksh Solutions Private Limited.</td>
                                            </tr>
                                            <tr>
                                                <td class='text-footer2'
                                                    style='color:#999999; font-family: Arial,sans-serif; font-size:12px; line-height:26px; text-align:center;'>
                                                    Copyright © 2024 | All Rights Reserved.</td>
                                            </tr>
                                            <tr>
                                                <td class='text-footer2 pb30'
                                                    style='color:#999999; font-family: Arial,sans-serif; font-size:8px; line-height:11px; text-align:center; padding-top: 20px;'>This is a system generated email and please do not reply to this message. If you are not supposed to receive this message, then please delete it immediately and do not forward it to any other email address or save it for any other purpose.
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>";
    // $mail2->Send();
    
    if(!$mail2->Send()) {
        $response["status"] = false;
        $response["message"] = "Error while submitting the form. Please try again.";
        echo json_encode($response); 
    //     echo "Message could not be sent.  ";
    //     echo "Mailer Error: " . $mail2->ErrorInfo;
    //     echo ("<script LANGUAGE='JavaScript'>window.location.href='../contact';</script>");
    //     exit; 
     };
    
    //REDIRECT TO PAGE AFTER SUBMIT
    
    // echo ("<script LANGUAGE='JavaScript'>window.location.href='../thankyou';</script>");
    $response["status"] = true;
    $response["message"] = "Your form is now submitted successfully!";
    echo json_encode($response); 
?>