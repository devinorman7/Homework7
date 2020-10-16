<?php

require 'common.php';


// Step 1: Get a datase connection from our helper class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Comments (commentText)
  VALUES (?);'
);

$stmt->execute([
$_POST['commentText'],
]);

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../comments/index.php');
