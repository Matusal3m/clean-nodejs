/**
 * 
 * @param {import("../adapters/datadaseAdapterType").DatabaseAdapter} databaseAdapter 
 * @returns 
 */
module.exports = (databaseAdapter) => {
  const tableName = "users";
  return {
    findAll: async () => {
      try {
        const users = await databaseAdapter.from(tableName).select("*");

        return users
      }
      catch (err) {
        console.error(err)
        throw new Error("Erro ao encontrar usuários");
      }
    },
    findById: async (userId) => {
      try {
        const user = await databaseAdapter.from().select("id").equals(userId);

        return user;
      } catch (err) {
        throw new Error("Erro ao encontrar usuário");
      }
    },
    delete: async (userId) => {
      try {
        await databaseAdapter.from(tableName).delete(userId)

        return { sucess: true }
      } catch (err) {
        throw new Error("Erro ao deletar usuário");
      }
    },
    create: async ({ name }) => {
      try {
        const response = await databaseAdapter.from(tableName).create({ name })

        return response
      } catch (err) {
        console.error(err)
        throw new Error("Erro ao criar usuário");
      }
    },
    update: async (newUser) => {
      try {
        const information = await databaseAdapter.from(tableName).update(newUser)

        return information
      } catch (err) {
        console.error(err)
        throw new Error("Erro ao atualizar usuário");
      }
    }
  }
}
