const databaseAdapter = require("../../adapters");
const authRepository = require("../../repositories/authRepository")(databaseAdapter);
const { login } = require("../../controllers/auth/loginController")(authRepository)

module.exports = (app, libs) => {

  const router = libs.express.Router();

  // modify anonym function to a controller function
  router.post("/", login);
  return router
}