
<?php

header('Access-Control-Allow-Origin: *');

if(isset($_POST['email'])) {
  function died($error) {
    // your error code can go here
    echo "We are very sorry, but there were error(s) found with the form you submitted. ";
    echo "These errors appear below.<br /><br />";
    echo $error."<br /><br />";
    echo "Please go back and fix these errors.<br /><br />";
    die();
  }

  if(!isset($_POST['email'])) {
      died('We are sorry, but there appears to be missing fields with the form you submitted.');
  }

  $email = $_POST['email']; // required
  $name = $_POST['name']; // required
  $ret_url = $_POST['retURL']; // required
  $message = $_POST['message'];

  // EDIT THE 2 LINES BELOW AS REQUIRED
  $email_to = "dakota@dakotamauza.com";
  $email_from = $email;
  $email_subject =  "New inquiry from the website from - " . $name;

  // validating email
  $error_message = "";
  $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$email_to)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }

  if(strlen($error_message) > 0) {
    died($error_message);
  }

  $email_message = 'There was a submission receieved from '.$name.' at '.$email." with the following message: \n\n".$message;

  function clean_string($string) {
    $bad = array("content-type","bcc:","to:","cc:","href");
    return str_replace($bad,"",$string);
  }

  // create email headers
  $headers = 'From: '.$email_from."\r\n".
  'Reply-To: '.$email_from."\r\n" .
  'X-Mailer: PHP/' . phpversion();
  $success = mail($email_to_test, $email_subject, $email_message, $headers);

  if ($success) {
    header('Location:'.$ret_url);
  }
}

?>