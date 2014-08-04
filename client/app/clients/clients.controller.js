'use strict';

angular.module('sangApp')
    .controller('ClientsCtrl', function ($scope, $http, $resource) {
        var Client = $resource('/api/clients/:id', {id: '@_id'});
        $scope.clients = Client.query(function () {
            console.log($scope.clients);
        });
/*
        $scope.clients = [];
        var getClients = function () {
            $http.get('/api/clients').success(function (clients) {
                $scope.clients = clients;
            });
        };
        getClients();
*/

        $scope.client = new Client();
        $scope.saveClient = function () {
            $scope.client.$save();
            $scope.client = new Client();
            $scope.clients = Client.query();
        };
        $scope.deleteClient = function (client) {
            client.$delete();
            $scope.clients = Client.query();
        }
    });
