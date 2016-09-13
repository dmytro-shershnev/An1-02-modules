(function() {
    "use strict";

    angular
        .module("app")
        .controller("Day", Day);

    function Day(days) {
        let $ctrl = this;
        //let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $ctrl.day = days.today;
    }
})();