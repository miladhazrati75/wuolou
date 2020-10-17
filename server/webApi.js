const ensureAuthorized = require("./controllers/auth/authController").withAuth;
const authController = require("./controllers/auth/authController");

module.exports = (router) => {
  router.post("/register", function (req, res) {
    authController.register(req, res);
  });
  router.post("/login", function (req, res) {
    authController.login(req, res);
  });
  router.post("/checkToken", function (req, res) {
    authController.checkToken(req, res);
  });
    return router;
};
