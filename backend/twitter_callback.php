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
 

  //  print_r($access_token['screen_name']);
   // $url = $connection->url('oauth/authorize', array('oauth_token' => $_GET['oauth_token']));
   // header($url);
  ?>
