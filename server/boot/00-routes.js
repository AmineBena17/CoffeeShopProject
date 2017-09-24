module.exports = function (app) {

  var User = app.models.User;
  User.create({email: 'amine@amine.com', password: 'amine'}, function (err, userInstance) {
    if(err) {
      console.log(err)
    } else {
      console.log(userInstance);
    }
  });

  // Install a "/ping" route that returns "pong"
  // app.get('/', function (req, res, next) {
  //   if (req.isAuthenticated) {
  //     res.render('/accueil', {
  //       title: 'Accueil',
  //       user: req.user
  //     });
  //   } else {
  //     res.redirect('/login');
  //   }
  // });
  //
  //
  // app.post('/login', function (req, res) {
  //   User.login({
  //     email: req.body.email,
  //     password: req.body.password
  //   }, 'user', function (err, token) {
  //     if (err) {
  //       if (err.details && err.code === 'LOGIN_FAILED_EMAIL_NOT_VERIFIED') {
  //         res.render('reponseToTriggerEmail', {
  //           title: 'Login failed',
  //           content: err,
  //           redirectToEmail: '/api/users/' + err.details.userId + '/verify',
  //           redirectTo: '/',
  //           redirectToLinkText: 'Click here',
  //           userId: err.details.userId
  //         });
  //       } else {
  //         res.render('response', {
  //           title: 'Login failed. Wrong username or password',
  //           content: err,
  //           redirectTo: '/',
  //           redirectToLinkText: 'Please login again',
  //         });
  //       }
  //       return;
  //     }
  //   });
  // });
}
