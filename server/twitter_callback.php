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
    $row = mysqli_fetch_array($query);
    $subscribed_date = $row['subscribed_date'];
    $membership_finishes = $row['membership_finishes'];
    $membership = $row['membership'];
    setcookie("subscribed_date", $subscribed_date, time() + (86400 * 30), "/"); // 86400 = 1 day
    setcookie("membership_finishes", $membership_finishes, time() + (86400 * 30), "/"); // 86400 = 1 day
    setcookie("membership", $membership, time() + (86400 * 30), "/"); // 86400 = 1 day
    $conn->close();
    header('Location: http://www.bulloftheweek.com/develop/dash-alert');

    }
    else{

      $sql = "INSERT INTO alertUsers (username,subscribed_date,membership,membership_finishes)
      VALUES ('".$access_token['screen_name']."', CURRENT_TIMESTAMP, 'beta',DATE_ADD(NOW(), INTERVAL 15 DAY))";
      if ($conn->query($sql) === TRUE) {
        //  echo "New record created successfully";
        $finder = mysqli_query($conn, "SELECT * FROM alertUsers WHERE username='".$access_token['screen_name']."'");
        if (!$finder)
        {
            die('Error: ' . mysqli_error($conn));
        }
        if(mysqli_num_rows($finder) > 0){
          $row = mysqli_fetch_array($finder);
          $subscribed_date = $row['subscribed_date'];
          $membership_finishes = $row['membership_finishes'];
          $membership = $row['membership'];
          setcookie("subscribed_date", $subscribed_date, time() + (86400 * 30), "/"); // 86400 = 1 day
          setcookie("membership_finishes", $membership_finishes, time() + (86400 * 30), "/"); // 86400 = 1 day
          setcookie("membership", $membership, time() + (86400 * 30), "/"); // 86400 = 1 day
          $conn->close();
          header('Location: http://www.bulloftheweek.com/develop/dash-alert');
        }


      } else {
          echo "Error: " . $sql . "<br>" . $conn->error;
      }

    }

    $conn->close();


  ?>
