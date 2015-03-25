/*globals app, resolve, jQuery, ko, Sammy, viewEngine*/
(function (app, $, ko, window) {
    "use strict";

    var start,
        compose;

    compose = function () {
        var sammy = new window.Sammy('.main', function () {});

        app.register({
            name: 'sammy',
            factory: function () {
                return sammy;
            }
        });

        app.resolve('viewEngine');
        app.resolve('homeController');
    };

    start = function () {
        compose();
    };

    start();

}(app, jQuery, ko, window));
