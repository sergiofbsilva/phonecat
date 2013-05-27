'use strict';

describe('Directive: directives', function () {
  beforeEach(module('phoncecatApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<directives></directives>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the directives directive');
  }));
});
