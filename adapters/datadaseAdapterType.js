/**
 * @typedef {Object} DatabaseAdapter
 * @property {function(string): CollectionInterface} from - Inicializa operações em uma coleção específica.
 */

/**
 * @typedef {Object} CollectionInterface
 * @property {function(string=): Promise<Object[]> | FilterInterface} select - Seleciona documentos da coleção ou aplica filtros.
 * @property {function(Object): Promise<any>} create - Cria um novo documento na coleção.
 * @property {function(Object): Promise<any>} update - Atualiza um documento pelo ID.
 * @property {function(string): Promise<any>} delete - Deleta um documento pelo ID.
 */

/**
 * @typedef {Object} FilterInterface
 * @property {function(*): Promise<Object[]>} equals - Filtra documentos onde o campo é igual ao valor.
 * @property {function(*): Promise<Object[]>} notEquals - Filtra documentos onde o campo é diferente do valor.
 * @property {function(*): Promise<Object[]>} greaterThan - Filtra documentos onde o campo é maior que o valor.
 * @property {function(*): Promise<Object[]>} lessThan - Filtra documentos onde o campo é menor que o valor.
 * @property {function(*): Promise<Object[]>} greaterOrEqualsThan - Filtra documentos onde o campo é maior ou igual ao valor.
 * @property {function(*): Promise<Object[]>} lessOrEqualsThan - Filtra documentos onde o campo é menor ou igual ao valor.
 */

/**
 * Repositório de Usuários
 * @param {DatabaseAdapter} databaseAdapter - O adaptador de banco de dados que segue o contrato DatabaseAdapter.
 */

module.exports = {}