/*jslint devel: true, nomen: true*/
/*globals ko*/

(function (window, ko) {
    "use strict";

    window.postModel = function (data) {
        data = data || {};

        var _self = {};

        _self.title = ko.observable(data.title || '');
        _self.description = ko.observable(data.description || '');

        return _self;
    };

}(window, ko));
