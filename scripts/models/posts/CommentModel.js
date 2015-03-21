/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko*/

(function (window, ko) {
    "use strict";

    window.CommentModel = function (data) {
        data = data || {};

        var _self = {};

        _self.content = ko.observable(data.body || '');

        return _self;
    };

}(window, ko));
