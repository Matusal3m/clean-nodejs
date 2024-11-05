
module.exports = async (app, libs) => {
  const userRoutes = require('./userRoutes')(app, libs);
  const authRoutes = require("./auth")(app, libs);

  const router = libs.express.Router();
  router.use('/users', userRoutes)
  router.use('/auth', authRoutes)

  /* Main path */
  app.use("/api", router);
};
