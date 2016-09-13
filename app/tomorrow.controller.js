(function() {
    "use strict";

    angular
        .module("app")
        .controller("Tomorrow", Tomorrow);

    function Tomorrow() {
        let $ctrl = this;
        //let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $ctrl.tomorrow = (new Date().getDay() + 1) % 7;
    }
})();