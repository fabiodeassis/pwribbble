/**
 * Renderiza um shot
 *
 * @params
 *   shot: (DribbbleShot) Objeto com as propriedades de um shot
 *
 * @example
 *   <pwbbb-shot-resume
 *     data-shot: $dados>
 *   </pwbbb-shot-resume>
 */
(function() {
  'use strict';
  /**
   * Controller do component
   */
  function shotResumeController() {
    var ctrl = this;
  }
  shotResumeController.$inject = [];

  angular
    .module('dribbble')
    .component('pwbbbShotResume', {
      templateUrl: 'scripts/components/shots/resume.template.html',
      transclude: true,
      controller: shotResumeController,
      bindings: {
        shot: '<'
      }
    });
})();
