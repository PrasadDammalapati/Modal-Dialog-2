angular.module('plunker', ['ui.bootstrap']);
var ModalDemoCtrl = function ($scope, $modal, $log) {
  $scope.model = {};
  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      size: size,
      scope: $scope,
      resolve: {
      }
    });

    modalInstance.result.then(function () {
      
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.ok = function () {
    alert("projectname from popup = " + $scope.model.ProjectName);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};