
require('dotenv/config');
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
	username: process.env.username,
	password: process.env.password, // optional, prompted if none given
	host: process.env.host,
	port: process.env.port,
	localRoot: __dirname + process.env.localRoot,
	remoteRoot: process.env.remoteDevRoot,
	include: ['*.*']
}
	
ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err)
	else console.log('finished');
});