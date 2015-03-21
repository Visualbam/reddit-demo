/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko, CommentModel, PostModel*/

(function (window, ko, PostModel, CommentModel) {
    "use strict";

    window.RedditModel = {

        index: function (data) {
            var _self = {},
                redditItems = data.data.children,
                i;

            _self.posts = ko.observableArray([]);

            // Loop through reddit data from API and add to our VM
            for (i = 0; i < redditItems.length; i++) {
                _self.posts.push(new PostModel(redditItems[i].data));
            }

            return _self;
        },

        show: function (data) {
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
        }
    };

}(window, ko, PostModel, CommentModel));
