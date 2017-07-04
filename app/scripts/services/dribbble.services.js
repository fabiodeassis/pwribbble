(function() {
  var deps = ['$http', 'MessageServices', DribbbleApiServices];

  angular.module('dribbble')
    .factory('ApiServices', deps);

  /**
   * Serviços da Api do Dribbble jhkjhkjhkjh
   * @param {httpProvider} $http Contém os methodos de acessos as funções de chamadas XmlHttpRequest
   * @param {MessageServices} MessageServices Metodos de retorno de requisiçao
   * @return {DribbbleApiServices} Objeto com os metodos da api
   */
  function DribbbleApiServices($http, MessageServices) {
    const dribbbleApiVersion = 'v1';
    const dribbbleApiUrl = '/' + dribbbleApiVersion;

    /**
     * Fns para manipulação de Shots
     * @type {{get: getShots}}
     */
    this.shots = {
      get: getShots
    };

    /**
     * Fns para Manipulação de um shot específico
     * @type {{get: getShot}}
     */
    this.shot = {
      get: getShot
    };

    /**
     * retorno do serviço
     */
    return this;

    /**
     * Retorna os shots mais populares
     * @param {number} page Pagina atual
     * @return {*|Promise.<TResult>} Array com os shots ou Null
     */
    function getShots(page) {
      return $http({
        method: 'GET',
        url: dribbbleApiUrl + '/shots',
        params: {per_page: 10, page: page || 1}
      })
      .then(
        MessageServices.return.data,
        MessageServices.return.null
      );
    }

    /**
     * Retorna os dados de um shot buscando por ID
     * @param {number} id identificador do shot
     * @return {*|Promise.<TResult>} Objeto com os dados do Shot
     */
    function getShot(id) {
      return $http({
        method: 'GET',
        url: dribbbleApiUrl + '/shots/' + id
      })
      .then(
        MessageServices.return.data,
        MessageServices.return.null
      );
    }
  }
})();
