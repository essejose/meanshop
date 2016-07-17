'use strict';

angular.module('meanshopApp')

  .controller('ProductsCtrl', function ($scope, Products) {
    $scope.products = Products.query();

  })

  .controller('ProductsCtrl', function ($scope, $state, $stateParams, Product) {
    $scope.products = Products.get({id:$stateParams.id});

    $scope.deleteProduct = function(){

    	Products.delete($scope.product);
    	$state.go('products');
    }

  });

