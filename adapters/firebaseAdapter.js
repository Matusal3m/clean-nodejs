
module.exports = () => {
  const db = require("../database").firebase();

  // methos used in from().select
  /**
   * 
   * @param {FirebaseFirestore.QuerySnapshot<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData>} snapshot 
   * @returns 
   */
  const getDocuments = async (snapshot) => {
    try {
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (err) {
      console.error(err)
      throw new Error("Erro ao coletar documents de uma snapshot")
    }
  };

  const queryByCondition = async (collection, collumn, operator, value) => {
    const snapshot = await db.collection(collection).where(collumn, operator, value).get();
    return await getDocuments(snapshot);
  };

  return {
    from: (collection) => {
      return {

        select: (collumn = "*") => {
          try {

            // return all values from the collection
            if (collumn === "*") {
              return db.collection(collection).get()
                .then(snapshot => {
                  return getDocuments(snapshot);
                })
                .then(docs => {
                  return docs;
                })
                .catch(err => {
                  console.error("Erro ao obter documentos:", err);
                });
            }

            // others methods to filter the results
            return {
              equals: (value) => queryByCondition(collection, collumn, "==", value),
              notEquals: (value) => queryByCondition(collection, collumn, "!=", value),
              greaterThan: (value) => queryByCondition(collection, collumn, ">", value),
              lessThan: (value) => queryByCondition(collection, collumn, "<", value),
              greaterOrEqualsThan: (value) => queryByCondition(collection, collumn, ">=", value),
              lessOrEqualsThan: (value) => queryByCondition(collection, collumn, "<=", value),
            };

          } catch (err) {
            console.error(err)
            throw new Error("Erro ao requisitar todos elementos de uma coleção ao firestore")
          }
        },
        /**
         * 
         * @param {string} id
         * @returns {Promise}.
         */
        delete: async (id) => {
          try {
            const response = await db.collection(collection).doc(id).delete();

            return response
          } catch (err) {
            throw new Error("Erro ao excluir elemento no firestore")
          }
        },
        /**
         * 
         * @param {Object} data 
         * @returns {Promise}
         */
        create: async (data) => {
          try {
            const response = await db.collection(collection).doc().set(data);

            return response
          } catch (err) {
            console.error(err)
            throw new Error("Erro ao criar elemento no firestore")
          }
        },
        /**
         * 
         * @param {Object} data 
         * @returns {Promise}
         */
        update: async (data) => {
          try {
            const response = await db.collection(collection).doc(data.id).set(data)

            return response
          } catch (err) {
            console.error(err);
            throw new Error("Erro ao elemento usuário no firestore")
          }
        }
      }
    }
  }

}