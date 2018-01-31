
 <?php
   require "vendor/autoload.php";
   use Abraham\TwitterOAuth\TwitterOAuth;
   $config = require_once 'config.php';
   define('CONSUMER_KEY', $config['consumer_key']);
   define('CONSUMER_SECRET', $config['consumer_secret']);
   define('OAUTH_CALLBACK', $config['url_callback']);

   $connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET);
   $request_token = $connection->oauth('oauth/request_token', array('oauth_callback' => OAUTH_CALLBACK));
   $url = $connection->url('oauth/authorize', array('oauth_token' => $request_token['oauth_token']));
   var_dump($url);
  ?>
