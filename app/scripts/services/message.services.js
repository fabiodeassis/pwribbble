(function() {
  var deps = [MessageServices];

  angular.module('dribbble')
    .factory('MessageServices', deps);

  /**
   * Serviço com os metodos de notificação da UI
   * @return {MessageServices} Retorna os metodos do serviço
   */
  function MessageServices() {
    this.return = {
      data: returnData,
      null: returnNull
    };

    /**
     * retorno do serviço
     */
    return this;

    /**
     * Retorna os dados da requisição http
     * @param {TResult} response Dados da Resposta Http
     * @return {*} Objeto com os dados da resposta
     */
    function returnData(response) {
      return response.data;
    }

    /**
     * Mostra um erro de falha na requisição Http
     * @param {TResult} response Dados da Resposta Http
     * @return {null} Retorno do metodo
     */
    function returnNull(response) {
      // TODO Mostrar Growl de erro
      console.error(response);
      return null;
    }
  }
})();
