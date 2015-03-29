/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko, PostModel, app, data*/

app.register({
    name: 'PostList',
    dependencies: ['PostModel', 'ko'],
    factory: function (PostModel, ko) {
        "use strict";

        return function (data) {
            var redditItems = data.children,
                post,
                i;

            this.posts = ko.observableArray([]);

            for (i = 0; i < redditItems.length; i++) {
                post = redditItems[i].data;

                if (post.url.indexOf('.jpg') > -1 || post.url.indexOf('.gif') > -1 || !post.url.indexOf('bucket') > -1) {
                    this.posts.push(new PostModel(post));
                }
            }
        };
    }
});
