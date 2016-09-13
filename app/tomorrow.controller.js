(function() {
    "use strict";

    angular
        .module("app")
        .controller("Tomorrow", Tomorrow);

    function Tomorrow(days) {
        let $ctrl = this;
        //let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $ctrl.tomorrow = days.tomorrow;
    }
})();