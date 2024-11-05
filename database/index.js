//Only connection
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const serviceAccount = require("../keys/finance-backend-test-51bbb9663bcf.json")

module.exports = {
  firebase: () => {
    try {
      initializeApp({
        credential: cert(serviceAccount)
      });

      return getFirestore();
    } catch (err) {
      throw new Error("Erro ao criar conexão com firebase")
    }
  }
}