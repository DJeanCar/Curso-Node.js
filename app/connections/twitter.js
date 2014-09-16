var passport = require('passport'),
	TwitterStrategy = require('passport-twitter').Strategy;

var twitterConnection = function (server){
	passport.use(new TwitterStrategy({
		consumerKey : 'shVbawKw1RWuCb7eVAakcbPkN',
		consumerSecret : 'f5nf5VlHxvdiCYYIUyHsFrPmIQEDEXBj1Hv8Nk3biXa39Cbcq3',
		callbackURL : 'http://devask.nodejitsu.com/auth/twitter/callback'
	}, function (accessToken, RefreshToken, profile, done){
		done(null, profile);
	}));

	server.get('/auth/twitter', passport.authenticate('twitter'));

	server.get('/auth/twitter/callback', passport.authenticate('twitter' , { successRedirect : '/extra-data',
															failureRedirect : '/error'}));
};

module.exports = twitterConnection;