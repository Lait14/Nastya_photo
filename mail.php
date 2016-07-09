<?php
$errors = array();
$data = array();
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);

// checking for blank values.
if (empty($_POST['nameof']))
  $errors['nameof'] = 'Name is required.';

if (empty($_POST['textof']))
  $errors['textof'] = 'Username is required.';

if (!empty($errors)) {
  $data['errors']  = $errors;
} else {
  $data['message'] = 'Form data is going well';
}
// response back.
echo json_encode($data);
?>