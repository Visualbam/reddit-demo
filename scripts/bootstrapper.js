/*globals app, resolve, jQuery, ko, Sammy, viewEngine*/
(function (app, $, ko, window) {
    "use strict";

    var start,
        compose;

    compose = function () {
        var sammy = new window.Sammy('#main', function () {}),
            viewEngine = app.resolve('viewEngine');

        app.register({
            name: 'viewInstance',
            factory: function () {
                return viewEngine;
            }
        });

        app.register({
            name: 'sammy',
            factory: function () {
                return sammy;
            }
        });

        app.resolve('homeController');

        ko.applyBindings(app.resolve('viewInstance').mainVw);
        sammy.run('#/');
    };

    start = function () {
        compose();
    };

    start();

}(app, jQuery, ko, window));
