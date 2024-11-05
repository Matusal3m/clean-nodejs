module.exports = (repository) => {
  return {
    login: async (req, res) => {
      try {
        const { email, password } = req.body;

        if (!email || !password) {
          throw new Error("Todos os campos devem ser preenchidos");
        }

        const user = await repository.login({ email, password });

        res.status(200).json({
          sucess: true,
          user
        })
      } catch (err) {
        console.error(err)
        return res.status(500).json({
          sucess: false,
          message: "Erro ao efetuar login do usuário"
        })
      }
    }
  }
}