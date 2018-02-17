<?php
    $screen_name = $_POST['screen_name'];
    $config = require_once 'config.php';
    define('CONSUMER_KEY', $config['consumer_key']);
    define('CONSUMER_SECRET', $config['consumer_secret']);
    define('OAUTH_CALLBACK', $config['url_callback']);
    $conn = mysqli_connect($config['servername'], $config['username'], $config['password'], $config['dbname']);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $finder = mysqli_query($conn, "SELECT * FROM alertUsers WHERE username='$screen_name'");
    if (!$finder)
    {
        die('Error: ' . mysqli_error($conn));
    }
    if(mysqli_num_rows($finder) > 0){
    echo "successfully";
    }

    else {
        echo "back";
    }

?>