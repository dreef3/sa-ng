'use strict';

angular.module('sangApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.products', {
        url: '^/products',
        templateUrl: 'app/products/products.html',
        controller: 'ProductsCtrl'
      });
  });
