/*jslint devel: true, nomen: true*/
/*globals ko*/

(function (window, ko) {
    "use strict";

    window.PostModel = function (data) {
        data = data || {};

        var _self = {};

        _self.title = ko.observable(data.title || '');

        return _self;
    };

}(window, ko));
