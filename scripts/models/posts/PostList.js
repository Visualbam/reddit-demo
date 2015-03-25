/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko, PostModel, app, data*/

app.register({
    name: 'PostList',
    dependencies: ['PostModel', 'ko'],
    factory: function (PostModel, ko) {
        "use strict";

        return function (data) {
            var redditItems = data.data.children,
                i;

            this.posts = ko.observableArray([]);

            for (i = 0; i < redditItems.length; i++) {
                this.posts.push(new PostModel(redditItems[i].data));
            }
        };
    }
});
