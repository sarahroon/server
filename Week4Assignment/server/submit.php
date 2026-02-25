<?php

$host = "db.jwwzkjwmddxajcabsmjx.supabase.co";
$port = "5432";
$dbname = "postgres";
$user = "sarahroon";
$password = "Runnerforlife0013!";

$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');

if (empty($name) || empty($email)) {
    die("Name and Email are required!");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format!");
}

$result = pg_query_params(
    $conn,
    "INSERT INTO users (name, email) VALUES ($1, $2)",
    array($name, $email)
);

if ($result) {
    echo "New record created successfully!";
} else {
    echo "Error: " . pg_last_error($conn);
}

pg_close($conn);
?>