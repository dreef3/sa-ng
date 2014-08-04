'use strict';

angular.module('sangApp')
    .controller('NavbarCtrl', function ($scope, $location) {
        $scope.menu = [
            {
                title: 'Продажа',
                link: '/order'
            },
            {
                title: 'Клиенты',
                link: '/clients'
            },
            {
                title: 'Товары',
                link: '/products'
            }];

        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });
