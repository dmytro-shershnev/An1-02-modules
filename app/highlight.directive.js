(function() {
    "use strict";

    angular
        .module("app")
        .directive("highlight", highlight);

    function highlight() {
        return {
            link: function(scope, element, attrs) {
                let value = scope.$ctrl.day;

                if (value === attrs["highlight"]) {
                    element.css("color", "red");
                }
            }
        };
    }
})();