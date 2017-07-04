(function() {
  var deps = [
    '$stateParams',
    'ApiServices',
    itemController
  ];

  angular.module('dribbble')
    .controller('ItemController', deps);

  /**
   *
   * @param {StateParamsProvider} $stateParams Objeto com os Parametros de Rota
   * @param {DribbbleApiServices} ApiServices Servicos da api do Dribbble
   */
  function itemController($stateParams, ApiServices) {
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
