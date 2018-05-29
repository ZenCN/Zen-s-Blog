(function() {
    'use strict';

    angular
        .module('app.widget')
        .directive('paintedScroll', paintedScroll);

    paintedScroll.$inject = [];

    function paintedScroll() {
        return function (vm, $element) {
            $(function(){
                $element.fadeIn(1500, function(){
                    $element.animate({
                        top: '0',
                        height: '96%'
                    });
                })
            });
        }
    }
})();