/*globals ko, AppVm, jQuery*/

(function (ko, AppVm, $) {
    "use strict";

    $(function () {
        return $('[data-toggle]').on('click', function () {
            var toggle;
            toggle = $(this).addClass('active').attr('data-toggle');
            $(this).siblings('[data-toggle]').removeClass('active');
            return $('.elements').removeClass('grid list').addClass(toggle);
        });
    });

    ko.applyBindings(new AppVm());

}(ko, AppVm, jQuery));
