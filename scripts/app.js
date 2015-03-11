/*globals ko, AppVm, jQuery*/

(function (ko, AppVm, $) {
    "use strict";

    $(function () {
        ko.applyBindings(new AppVm());
    });

}(ko, AppVm, jQuery));
