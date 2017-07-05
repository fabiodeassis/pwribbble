/**
 * Renderiza um shot completo
 *
 * @params
 *   shot: (DribbbleShot) Objeto com as propriedades de um shot
 *
 * @example
 *   <pwbbb-shot-details
 *     data-shot: $dados>
 *   </pwbbb-shot-details>
 */
(function() {
  'use strict';
  /**
   * Controller do component
   */
  function shotDetailsController() {
    var ctrl = this;
  }
  shotDetailsController.$inject = [];

  angular
    .module('dribbble')
    .component('pwbbbShotDetails', {
      templateUrl: 'scripts/components/shots/details.template.html',
      transclude: true,
      controller: shotDetailsController,
      bindings: {
        shot: '<'
      }
    });
})();
