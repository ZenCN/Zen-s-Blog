(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider'];

    function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: true,
            events: true
        });

        $urlRouterProvider.when('', '/zen');
        $urlRouterProvider.otherwise('/zen');

        window.app_path = '';

        var resolve_dep = function (config) {

            if (window.app_path) {
                $.each(config, function(i) {
                    config[i] = window.app_path + config[i];
                });
            }

            return {
                load: [
                    '$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load(config);
                    }
                ]
            };
        };

        $stateProvider
            .state('head', {
                url: '',
                abstract: true,
                controller: 'head_ctrl',
                templateUrl: 'app/head/head.html',
                resolve: resolve_dep([
                    'app/head/head_ctrl.js',
                    'app/head/head.css'
                ])
            })
            .state('head.zen',{
                url: '/zen',
                controller: 'zen_ctrl',
                templateUrl: 'app/zen/zen.html',
                resolve: resolve_dep([
                    'app/zen/zen_ctrl.js',
                    'app/zen/zen.css',
                    'app/directive/painted-scroll.js'
                ])
            })
            .state('head.article',{
                url: '/article',
                controller: 'article_ctrl',
                templateUrl: 'app/article/article.html',
                resolve: resolve_dep([
                    'app/article/article_ctrl.js',
                    'app/article/article.css'
                ])
            })
            .state('head.technology',{
                url: '/technology',
                controller: 'technology_ctrl',
                templateUrl: 'app/technology/technology.html',
                resolve: resolve_dep([
                    'app/technology/technology_ctrl.js',
                    'app/technology/technology.css',
                    'app/directive/dragon.js'
                ])
            })
            .state('head.about',{
                url: '/about',
                controller: 'about_ctrl',
                templateUrl: 'app/about/about.html',
                resolve: resolve_dep([
                    'app/about/about_ctrl.js',
                    'app/about/about.css'
                ])
            });
    }
})();