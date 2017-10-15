module.exports = function (app) {

  var User = app.models.User;

  User.create({email:'admin@coffeeshoprestaurant.org', password:'admin'}, function (err, cb) {
    console.log(cb);
  });

  app.get('/', function (req, res, next) {
    if (req.isAuthenticated) {
      res.render('/home', {
        title: 'Accueil',
        user: req.user
      });
    } else {
      res.redirect('/login');
    }
  });

  //Login
  app.post('/login', function (req, res) {
    User.login({
      email: req.body.email,
      password: req.body.password
    }, 'user', function (err, token) {
      if (err) {
        if (err.details && err.code === 'LOGIN_FAILED_EMAIL_NOT_VERIFIED') {
          res.render('reponseToTriggerEmail', {
            title: 'Login failed',
            content: err,
            redirectToEmail: '/api/users/' + err.details.userId + '/verify',
            redirectTo: '/',
            redirectToLinkText: 'Click here',
            userId: err.details.userId
          });
        } else {
          res.render('response', {
            title: 'Login failed. Wrong username or password',
            content: err,
            redirectTo: '/',
            redirectToLinkText: 'Please login again',
          });
        }
        return;
      }
    });
  });

//Logout
  app.get('/logout', function(req, res, next) {
    if (!req.accessToken){
      return res.sendStatus(401);
    } else {
      User.logout(req.accessToken.id, function(err) {
      if (err){
        return next(err);
      } else {
        res.redirect('/');
      }
      });
    }
  });

  // Reset Password
  app.post('/reset-password', function (req, res, next) {
    User.resetPassword({
      email: req.body.email;
      }, function (err) {
      if(err) {
        return res.status(401).send(err);
      } else {
        res.render('response',{
          title: 'Le mot de passe est réinitialiser',
          content: 'Check your email',
          redirectTo:'\',
          redirectToLinkText: 'Log In'
        });
    }
    });
  });
}
