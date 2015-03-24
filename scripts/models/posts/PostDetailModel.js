/*jslint nomen: true, plusplus: true*/
/*globals window, ko, PostModel, CommentModel, console*/

(function (window, ko, PostModel, CommentModel) {
    "use strict";

    window.PostDetailModel = function (data) {

        var _self = {},
            post = data[0].data.children[0].data,
            commentList = data[1].data.children,
            i;

        _self.comments = ko.observableArray([]);
        _self.post = new PostModel(post);

        for (i = 0; i < commentList.length; i++) {
            _self.comments.push(new CommentModel(commentList[i].data));
        }

        return _self;
    };

}(window, ko, PostModel, CommentModel));
