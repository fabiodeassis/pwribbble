(function() {
  var deps = ['$rootScope', MainServices];

  angular.module('dribbble')
    .factory('MainServices', deps);

  /**
   * Serviços da Api do Dribbble
   * @param {rootScopeProvider} $rootScope Scopo principal do Angular
   * @return {MainServices} Objeto com os metodos do serviço
   */
  function MainServices($rootScope) {
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
      return $rootScope.pageTitle;
    }

    /**
     * Atualiza o titulo da página
     * @param {string} value Valor que será atribuido em PageTitle
     */
    function setTitle(value) {
      $rootScope.pageTitle = value;
    }
  }
})();
