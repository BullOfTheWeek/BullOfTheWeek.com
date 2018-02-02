<?php
   require "vendor/autoload.php";
   use Abraham\TwitterOAuth\TwitterOAuth;
   $config = require_once 'config.php';
   session_start();

   define('CONSUMER_KEY', $config['consumer_key']);
   define('CONSUMER_SECRET', $config['consumer_secret']);
   define('OAUTH_CALLBACK', $config['url_callback']);

    $request_token = [];
    $request_token['oauth_token'] = $_SESSION['oauth_token'];
    $request_token['oauth_token_secret'] = $_SESSION['oauth_token_secret'];

    if (isset($_REQUEST['oauth_token']) && $request_token['oauth_token'] !== $_REQUEST['oauth_token']) {
        // Abort! Something is wrong.
    }
    $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, $request_token['oauth_token'], $request_token['oauth_token_secret']);
    $access_token = $connection->oauth("oauth/access_token", ["oauth_verifier" => $_REQUEST['oauth_verifier']]);
    // Create connection
    $conn = mysqli_connect($config['servername'], $config['username'], $config['password'], $config['dbname']);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    $query = mysqli_query($conn, "SELECT * FROM alertUsers WHERE username='".$access_token['screen_name']."'");

        if (!$query)
        {
            die('Error: ' . mysqli_error($con));
        }

    if(mysqli_num_rows($query) > 0){

        echo "email already exists";

    }
    else{

      $sql = "INSERT INTO alertUsers (username,subscribed_date)
      VALUES ('".$access_token['screen_name']."', CURRENT_TIMESTAMP)";
      if ($conn->query($sql) === TRUE) {
          echo "New record created successfully";
      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
      }

    }

    $conn->close();

  //  print_r($access_token['screen_name']);
   // $url = $connection->url('oauth/authorize', array('oauth_token' => $_GET['oauth_token']));
   // header($url);
  ?>
