'use strict';

describe('Controller: PreciosCtrl', function () {

  // load the controller's module
  beforeEach(module('corlateApp'));

  var PreciosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreciosCtrl = $controller('PreciosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PreciosCtrl.awesomeThings.length).toBe(3);
  });
});
