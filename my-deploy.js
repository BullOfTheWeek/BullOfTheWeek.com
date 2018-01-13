
require('dotenv/config');
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
	username: process.env.username,
	password: process.env.password, // optional, prompted if none given
	host: process.env.host,
	port: 21,
	localRoot: __dirname + "/static",
	remoteRoot: "bulloftheweek.com/BullOfTheWeek/master/",
	include: ['static/*'],
	exclude: ['.*', 'tmp/*', 'build/*','node_modules/*','node_modules',]
}
	
ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err)
	else console.log('finished');
});