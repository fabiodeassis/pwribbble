(function() {
  var deps = [MainServices];

  angular.module('dribbble')
    .factory('MainServices', deps);

  /**
   * Serviços da Api do Dribbble
   * @param {angular.http} $http Contém os methodos de acessos as funções de chamadas XmlHttpRequest
   * @return {MainServices} Objeto com os metodos do serviço
   */
  function MainServices() {
    var pageTitle;

    this.pageTitle = {
      get: getTitle,
      set: setTitle
    };

    return this;

    /**
     * retorna o titulo da página atul
     * @return {*} string com o titulo
     */
    function getTitle() {
      return pageTitle;
    }

    /**
     * Atualiza o titulo da página
     * @param {string} value Valor que será atribuido em PageTitle
     */
    function setTitle(value) {
      pageTitle = value;
    }
  }
})();
