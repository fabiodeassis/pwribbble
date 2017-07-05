(function() {
  var deps = [
    '$stateParams',
    'ApiServices',
    'MainServices',
    itemController
  ];

  angular.module('dribbble')
    .controller('ItemController', deps);

  /**
   *
   * @param {StateParamsProvider} $stateParams Objeto com os Parametros de Rota
   * @param {DribbbleApiServices} ApiServices Servicos da api do Dribbble
   * @param {MainServices} MainServices Servicos da aplicação principal
   */
  function itemController($stateParams, ApiServices, MainServices) {
    var ctrl = this;
    ctrl.onInit = onInit;
    ctrl.getShotReturn = getShotReturn;

    ctrl.onInit();

    /**
     * Ações da inicialização do controller
     */
    function onInit() {
      if ($stateParams.id) {
        ApiServices.shot.get($stateParams.id).then(getShotReturn);
      }
    }

    /**
     * Popula o Objeto Shot com o retorno do serviço
     * @param {*} result resultado da busca
     */
    function getShotReturn(result) {
      ctrl.shot = result;
      MainServices.pageTitle.set((result && result.title) ? result.title : 'Falhou:/');

      if (result.user && result.user.links) {
        ctrl.links = [];
        for (var key in result.user.links) {
          if (result.user.links[key] !== '') {
            ctrl.links.push({name: key, url: result.user.links[key]});
          }
        }
      }
    }
  }
})();
