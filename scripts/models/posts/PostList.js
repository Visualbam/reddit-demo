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
                i,
                j;

            this.posts = ko.observableArray([]);

            for (i = 0; i < data.length; i++) {
                for (j = 0; j < data[i].children.length; j++) {
                    post = data[i].children[j].data;

                    if (post.url.indexOf('.jpg') <= 0) {
                        post.url = post.url + '.jpg';
                    }

                    if (post.url.indexOf('imgur') > -1) {
                        this.posts.push(new PostModel(post));
                    }
                }
            }
        };
    }
});
