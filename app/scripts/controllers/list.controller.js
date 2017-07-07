(function() {
  var deps = [
    '$scope',
    '$stateParams',
    'ApiServices',
    'MainServices',
    listController
  ];

  angular.module('dribbble')
    .controller('ListController', deps);

  /**
   * Define o controller MainCtrl
   * @param {ScopeProvider} $scope Objeto de scopo do Angular
   * @param {StateParamsProvider} $stateParams Objeto com os Parametros de Rota
   * @param {DribbbleApiServices} ApiServices Servicos da api do Dribbble
   * @param {MainServices} MainServices Servicos da aplicação principal
   */
  function listController($scope, $stateParams, ApiServices, MainServices) {
    var ctrl = this;
    ctrl.onInit = onInit;
    ctrl.getShots = getShots;
    ctrl.getShotsReturn = getShotsReturn;
    ctrl.setPage = setPage;
    ctrl.page = ($stateParams.page) ? parseInt($stateParams.page, 10) : 1;

    ctrl.shots = [{},{},{},{},{}];

    ctrl.onInit();

    /**
     * Ações da inicialização do controller
     */
    function onInit() {
      ctrl.getShots(ctrl.page);
    }

    /**
     * Retorna a lista de shots paginada
     * @param {number} page Pagina a ser requerida
     */
    function getShots(page) {
      if (page <= 0) {
        return;
      }
      ctrl.shots = [{},{},{},{},{}];
      ApiServices.shots.get(page).then(ctrl.getShotsReturn);
    }

    /**
     * Popula o Array de Shots com o retorno do serviço
     * @param {*} result Resultado da requisiçao
     */
    function getShotsReturn(result) {
      if (result) {
        MainServices.pageTitle.set('Shots Populares!');
        ctrl.shots = result;
        if (ctrl.page >= 1) {
          ctrl.prevPage = ctrl.page - 1;
          if (result.length === ApiServices.shots.perPage) {
            // TODO Retornar se existe link no Cabeçalho da requisição
            ctrl.nextPage = ctrl.page + 1;
          }
        }
      } else {
        ctrl.nextPage = null;
        MainServices.pageTitle.set('Nada encontrado:/');
      }
    }

    /**
     * Altera o valor da page atual
     * @param {number} number variante do numero atual
     */
    function setPage(number) {
      ctrl.page += (number);

      if (ctrl.page <= 0) {
        ctrl.page = 1;
      }
    }

    /**
     * Listeners
     */
    $scope.$watch(angular.bind(this, function() {
      return this.page;
    }), function(newVal, oldVal) {
      if (newVal !== oldVal) {
        MainServices.pageTitle.set('Carregando...');
        ctrl.getShots(newVal);
      }
    });
  }
})();
