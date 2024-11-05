const databaseAdapter = require("../adapters/");
const userRepository = require("../repositories/userRepository")(databaseAdapter)
const userController = require("../controllers/userController")(userRepository);

module.exports = (app, libs) => {
  const router = libs.express.Router();

  router
    .route("/")
    .get(userController.getAll)
    .post(userController.create)
    .put(userController.update);

  router
    .route("/:id")
    .get(userController.getOne)
    .delete(userController.delete);

  return router
}