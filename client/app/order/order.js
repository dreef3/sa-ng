'use strict';

angular.module('sangApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.order', {
        url: '^/order',
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl'
      });
  });
