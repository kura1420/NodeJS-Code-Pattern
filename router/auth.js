const authController = require('../controller/AuthController');

module.exports = {
  path: '/auth',
  config: (router) => {
    router
      .post('/login', authController.validate('login'), authController.loginCheck)
      .post('/forgot', authController.validate('forgot'), authController.forgotCheck);

    return router;
  },
};
