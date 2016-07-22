'use strict';

angular.module('meanshopApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('products', {
        url: '/products',
        templateUrl: 'app/products/products-list.html',
        controller: 'ProductsCtrl'
      })

      .state('newProduct', {
        url: '/products/new',
        templateUrl: 'app/products/products-new.html',
        controller: 'ProductsCtrl'
      });

      .state('viewProduct', {
        url: '/products/:id',
        templateUrl: 'app/products/products-view.html',
        controller: 'ProductsCtrl'
      });



  });
