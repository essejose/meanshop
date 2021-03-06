'use strict';

angular.module('meanshopApp')

.controller('ProductsCtrl', function($scope, Products) {
    $scope.products = Products.query();

})

.controller('ProductsCtrl', function($scope, $state, $stateParams, Product) {
    $scope.products = Products.get({
        id: $stateParams.id
    });

    $scope.deleteProduct = function() {

        Products.delete($scope.product);
        $state.go('products');
    }

})

.controller('ProductsCtrl', function($scope, $state, Product) {
    $scope.products = {};

    $scope.addProduct = function() {

        Products.create($scope.product);
        $state.go('products');
    }

})

.controller('ProductsCtrl', function($scope, $state, $stateParams, Product) {
    $scope.products = Products.get({
        id: $stateParams.id
    });

    $scope.editProduct = function(product) {

        Products.update($scope.product);
        $state.go('products');
    }

})