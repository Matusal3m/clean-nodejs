
module.exports = (repository) => {
  return {
    getAll: async (req, res) => {
      try {
        const users = await repository.findAll();

        res.status(200).json({
          success: true,
          users
        });
      } catch (err) {
        console.error(new Error("Erro no userController.getAll"))
        return res.status(500).json({
          success: false,
          message: "Erro na requisição de todos os usuários",
        });
      }
    },
    getOne: async (req, res) => {
      try {
        const userId = req.params.id;

        const user = await repository.findById(userId);

        res.status(200).json({
          success: true,
          user
        });
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: "Erro ao procurar usuário",
        });
      }
    },
    create: async (req, res) => {
      try {
        const name = req.body.name;

        const information = await repository.create({ name });

        res.status(200).json({
          success: true,
          information
        });
      } catch (err) {
        console.error(err)
        return res.status(500).json({
          success: false,
          message: "Erro ao criar usuário"
        });
      }
    },
    delete: async (req, res) => {
      try {
        const userId = req.params.id;

        await repository.delete(userId);

        res.status(200).json({
          success: true,
        });
      } catch {
        return res.status(500).json({
          success: false,
          message: "Erro ao deletar usuário"
        });
      }
    },
    update: async (req, res) => {
      try {
        const userData = req.body
        const information = await repository.update(userData);

        res.status(200).json({
          success: true,
          information
        })
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: "Erro ao atualizar informações do usuário"
        })
      }
    }
  }
}