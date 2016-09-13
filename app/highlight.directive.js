(function() {
    "use strict";

    angular
        .module("app")
        .directive("highlight", highlight);

    function highlight($filter) {
        return {
            link: function(scope, element, attrs) {
                let value = scope.$ctrl.day;

                let filterFunction = $filter("dayNames");

                if (filterFunction(value) === attrs["highlight"]) {
                    element.css("color", "red");
                }
            }
        };
    }
})();