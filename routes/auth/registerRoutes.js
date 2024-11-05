const databaseAdapter = require("../../adapters")
const authRepository = require("../../repositories/authRepository")(databaseAdapter)
const { register } = require("../../controllers/auth/registerController")(authRepository);

module.exports = (app, libs) => {
  const router = libs.express.Router();

  router.use("/", register)

  return router;
}