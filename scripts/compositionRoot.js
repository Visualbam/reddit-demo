/*globals jQuery, Sammy, home, ko, homeController, ViewEngine*/

(function (window, $, ko, homeController, ViewEngine) {
    "use strict";

    var App = new Sammy('#main', function () {
        // Wire up controllers: Pass sammy into controller function
        window.homeController(this);
        ko.applyBindings(ViewEngine.mainVw);
    });

    App.run('#/');

}(window, jQuery, ko, homeController, ViewEngine));
