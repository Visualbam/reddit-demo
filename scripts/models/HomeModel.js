/*jslint devel: true, nomen: true*/
/*globals ko*/

(function (window, ko) {
    "use strict";

    window.homeModel = function (data) {
        data = data || {};

        var _self = {};

        _self.posts = ko.observableArray([]);
        _self.addresses
        // Loop through reddit data from API and add to our VM
        for (i = 0; i < data.posts.length; i++) {
            _self.posts.push(new PostModel(data.posts[i]));
        }

        return _self;
    };

}(window, ko));
