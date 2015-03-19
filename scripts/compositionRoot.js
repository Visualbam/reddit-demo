/*globals jQuery, Sammy*/
(function (window, $) {
    "use strict";

    var app = new Sammy('#content', function () {

        // Wire up controllers: Pass sammy into controller function
        window.homeController(this);
    });

    app.run('#/');

}(window, jQuery));
