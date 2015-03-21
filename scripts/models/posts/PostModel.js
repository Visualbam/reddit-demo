/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko*/

(function (window, ko) {
    "use strict";

    window.PostModel = function (data) {
        data = data || {};

        var _self = {},
            imageUrl = data.url.toString().replace('http://imgur.com/', 'https://i.imgur.com/'),
            i;

        if (imageUrl.indexOf('.jpg') <= 0) {
            imageUrl = imageUrl + '.jpg';
        }

        _self.title = ko.observable(data.title || '');
        _self.image = ko.observable(imageUrl || null);
        _self.url = ko.observable('#/posts/' + data.id || '');

        return _self;
    };

}(window, ko));
