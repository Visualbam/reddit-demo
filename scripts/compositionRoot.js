/*globals jQuery, Sammy, home, homeController*/
(function (window, $, homeController) {
    "use strict";

    var App = new Sammy('#content', function () {
        // Wire up controllers: Pass sammy into controller function
        window.homeController(this);
    });

    App.run('#/');

}(window, jQuery, homeController));
