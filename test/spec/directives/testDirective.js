'use strict';

describe('Directive: testDirective', function () {
  beforeEach(module('phonecatApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<test-directive></test-directive>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the testDirective directive');
  }));
});
