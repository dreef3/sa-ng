'use strict';

angular.module('sangApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main.clients', {
                url: '^/clients',
                templateUrl: 'app/clients/clients.html',
                controller: 'ClientsCtrl'
            });
    });
