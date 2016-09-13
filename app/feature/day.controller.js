(function() {
    "use strict";

    angular
        .module("feature")
        .controller("Day", Day);

    function Day(days) {
        let $ctrl = this;
        //let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        $ctrl.day = days.today;
    }
})();