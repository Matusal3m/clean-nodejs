module.exports = (repository) => {
  return {
    register: async (req, res) => {
      try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
          throw new Error("Todos os campos devem ser preenchidos");
        }

        // TODO: encrypt password
        const newUser = await repository.register({ email, password, name });

        res.status(200).json({
          sucess: true,
          user: newUser
        })
      } catch (err) {
        console.error(err)
        return res.status(500).json({
          sucess: false,
          message: "Erro ao registrar novo usuário"
        })
      }
    }
  }
}