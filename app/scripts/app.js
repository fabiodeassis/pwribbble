(function() {
  var deps = [
    'ui.router'
  ];

  angular.module('dribbble', deps)
  .config(['$stateProvider', '$urlRouterProvider', dribbbleConfig])
  .run(['$http', dribbbleRun]);

  /**
   * Configura as rotas do módulo
   * @param {routStateProvider} $stateProvider provider das rotas
   * @param {urlRouterProvider} $urlRouterProvider Configurações de ROtas
   */
  function dribbbleConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/shots');
    $stateProvider
      .state({
        name: 'shots',
        url: '/shots',
        views: {
          'view': {
            templateUrl: 'views/shots.html',
            controller: 'ListController as ListCtrl'
          }
        }
      })
      .state({
        name: 'shots.page',
        url: '/page/:page',
        views: {
          'view': {
            templateUrl: 'views/shots.html',
            controller: 'ListController as ListCtrl'
          }
        }
      })
      .state({
        name: 'shot',
        url: '/shot/:id',
        views: {
          'view': {
            templateUrl: 'views/shot.html',
            controller: 'ItemController as ItemCtrl'
          }
        }
      });
  }

  /**
   * Define configurações do módulo
   * @param {httpProvider} $http Retorna as configurações das http
   */
  function dribbbleRun($http) {
    $http.defaults.headers.common['APP-VERSION'] = '1.0.0';

    $http.defaults.headers.common['content-type'] = 'application/json';
    $http.defaults.headers.common['Authorization'] = 'Bearer 481912a7cf310490262a0540d53807d9dcde198c252de325407da7772e7776f6';

    if (!$http.defaults.headers.get) {
      $http.defaults.headers.get = {};
    }
  }
})();
