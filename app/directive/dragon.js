(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('dragon', dragon);

    dragon.$inject = [];

    function dragon() {
        return function (vm, $element) {
            $(function(){
                $element.animate({
                    top: '14%',
                    right: '120px'
                }, 1800, 'swing', function(){
                    $element.animate({
                        top: '34%',
                        right: '-60px'
                    }, 1500);
                });
            });
        }
    };
})();