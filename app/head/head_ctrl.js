/**
 * Created by Zen on 2017/6/2.
 */

(function() {
    'use strict';

    angular
        .module('app.page')
        .controller('head_ctrl', head_ctrl);

    head_ctrl.$inject = ['$scope', '$state'];

    function head_ctrl(vm, $state) {
        vm.menu = {
            selected: 'zen',
            switch: function(name){
                this.selected = name;
                $state.go('head.' + name);
            }
        }
    }
})();