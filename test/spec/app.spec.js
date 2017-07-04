describe('Wiseit -> ', function () {

  // Verificando as dependências
  beforeEach(function(){
    module('dribbble');
    module('ui.router');
  });

  // Suite for testing an individual piece of our feature.
  describe('Rotas -> ', function () {

    // Instantiate global variables (global to all tests in this describe block).
    var $state, $rootScope;

    // Inject dependencies
    beforeEach(inject(function (_$state_, $templateCache, _$rootScope_) {
      $state = _$state_;
      $rootScope = _$rootScope_;
      $templateCache.put('app/index.html', '');
    }));

    // It block (or "spec") to test expectations for the
    // Expectations return true or false.
    it('Shots', function () {
      var config = $state.get('shots');
      expect(config.abstract).toBeUndefined();
      expect(config.url).toBe('/shots');
    });

    it('Page', function () {
      var config = $state.get('shots.page');
      expect(config.abstract).toBeUndefined();
      expect(config.url).toBe('/page/:page');
    });

    it('Details', function () {
      var config = $state.get('shot');
      expect(config.abstract).toBeUndefined();
      expect(config.url).toBe('/shot/:id');
    });
  });
});
