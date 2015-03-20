/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko, PostModel*/

(function (window, ko, PostModel) {
    "use strict";

    window.HomeModel = function (data) {
        data = data || {};

        var _self = {},
            redditItems = data.data.children,
            i;

        _self.posts = ko.observableArray([]);

        // Loop through reddit data from API and add to our VM
        for (i = 0; i < redditItems.length; i++) {
            _self.posts.push(new PostModel(redditItems[i]));
        }

        return _self;
    };

}(window, ko, PostModel));
