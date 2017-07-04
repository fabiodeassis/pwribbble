(function() {
  var deps = [
    'MainServices',
    mainController
  ];

  angular.module('dribbble')
    .controller('MainController', deps);

  /**
   * Define o controller MainCtrl
   * @param {MainServices} MainServices Servicos da aplicação principal
   */
  function mainController(MainServices) {
    var ctrl = this;
    ctrl.onInit = onInit;

    MainServices.pageTitle.set('Shots Populares');

    ctrl.onInit();

    /**
     * Ações da inicialização do controller
     */
    function onInit() {
      ctrl.pageTitle = MainServices.pageTitle.get();
    }
  }
})();
