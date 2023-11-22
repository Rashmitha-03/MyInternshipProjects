<?php
$name = $_POST['name'];
$visitor = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_from='abc@gmail.com';

$email_subject = 'New Form Submission';

$email_body = "user Name: $name.\n".
               " User Email: $visitor_email.\n".
               "Subject: $subject.\n".
               "User Message: $message .\n";
 $to = 'rashmithakrao03@gmail.com';
 $headers = "From: $email_from \r\n";
 $headers . =" Reply-To : $visitor_email \r\n";

 mail($to, $email_subject, $email_body,$headers);
 header("Location: contact.html");

?>

