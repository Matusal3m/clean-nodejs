
module.exports = (app, libs) => {
  const registerRoutes = require("./registerRoutes")(app, libs);
  const loginRoutes = require("./loginRoutes")(app, libs);

  const router = libs.express.Router();

  router.use("/register", registerRoutes);
  router.use("/login", loginRoutes);

  return router;
}