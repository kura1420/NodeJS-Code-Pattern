module.exports = {
  path: '/',
  config: (router) => {
    router
      .get('/', (req, res) => {
        res
          .status(200)
          .json('SKP - Balen');
      });

    return router;
  },
};
