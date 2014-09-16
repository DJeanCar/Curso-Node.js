var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy;

var facebookConnection = function (server) {


	passport.use(new FacebookStrategy({
		clientID : '742694022439888',
		clientSecret : '5450a69e21f912864b7e95a785a14515',
		callbackURL : 'http://localhost:8000/auth/facebook/callback'
	}, function (accessToken, refreshToken, profile, done){
		done(null, profile);
	}));

	server.get('/auth/facebook', passport.authenticate('facebook'));

	server.get('/auth/facebook/callback', passport.authenticate('facebook' , { successRedirect : '/extra-data',
															failureRedirect : '/error'}));
};

module.exports = facebookConnection;