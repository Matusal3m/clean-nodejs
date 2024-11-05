/**
 * 
 * @param {import("../adapters/datadaseAdapterType").DatabaseAdapter} databaseAdapter 
 * @returns 
 */
module.exports = (databaseAdapter) => {
  const tableName = "users";

  const findUserByEmail = async (email) => {
    return await databaseAdapter.from(tableName).select("email").equals(email);
  }

  return {
    register: async ({ email, password, name }) => {
      try {
        const user = await findUserByEmail(email);

        if (user) {
          throw new Error("Usuário já cadastrado");
        }

        const response = await databaseAdapter.from(tableName).create({ email, password, name })

        return { email, name }
      } catch (err) {
        console.error(err)
        throw new Error("Erro ao registrar novo usuário");
      }
    },
    login: async ({ email, password }) => {
      try {
        const user = (await findUserByEmail(email))[0]

        if (!user) {
          throw new Error("Usuário não encontrado");
        }

        if (user.password !== password) {
          throw new Error("Senha incorreta")
        }

        return { id: user.id, email: user.email, name: user.name }
      } catch (err) {
        console.error(err);
        throw new Error("Erro ao efetuar login do usuário");

      }
    }
  }
}