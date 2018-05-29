(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('dragon', dragon);

    dragon.$inject = [];

    function dragon() {
        return function (vm, $element, $attrs) {
            $(function(){
                $element.animate({
                    top: '7%',
                    left: '9%'
                }, 1500, 'swing', function(){
                    $element.animate({
                        top: '24%',
                        left: '0%'
                    }, 1200);
                });
            });
        }
    };
})();