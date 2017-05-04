<?php
//Quick handling of the contact form
require './JsonResponse.php';
define('TO_ADDRESS', 'contact@goehringer.tech');

if (!isset($_POST['name']) || !isset($_POST['email']) || !$_POST['message']) {
  $response = new JsonReponse('Missing or empty field.', 400);
} else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  $response = new JsonReponse('Email address not valid.', 400);
} else {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);
  $subject = "New message from " . $email;
  $headers = 'From: ' . 'Goehringer.tech' . PHP_EOL ;
  $ok = mail(TO_ADDRESS, $subject, $message, $headers);
  if ($ok) {
    $response = new JsonReponse('Success.');
  } else {
    $response = new JsonReponse('Error sending the mail.', 500);
  }
}
$response->send();
