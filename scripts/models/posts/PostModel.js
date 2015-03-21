/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko*/

(function (window, ko) {
    "use strict";

    window.PostModel = function (data) {
        data = data || {};

        var _self = {},
            i;

        _self.title = ko.observable(data.title || '');
        _self.url = ko.observable('#/posts/' + data.id || '');

        return _self;
    };

}(window, ko));
