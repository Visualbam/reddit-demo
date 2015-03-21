/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko*/

(function (window, ko) {
    "use strict";

    window.CommentModel = function (data) {
        data = data || {};

        var _self = {},
            //post = data[0].data.children[0].data,
            //comments = data[1].data.children,
            i;

        _self.title = ko.observable(data.title || '');
        _self.url = ko.observable('#/posts/' + data.id || '');

//        for (i = 0; i < comments.length; i++) {
//            console.log(comments[i].data.body);
//        }

        return _self;
    };

}(window, ko));
