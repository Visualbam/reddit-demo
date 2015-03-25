/*jslint nomen: true, plusplus: true*/
/*globals window, ko, PostModel, CommentModel, console, app*/

app.register({
    name: 'PostDetailModel',
    dependencies: ['PostModel', 'CommentModel', 'ko'],
    factory: function (PostModel, CommentModel, ko) {
        "use strict";

        return function (data) {
            var post = data[0].data.children[0].data,
                commentList = data[1].data.children,
                i;

            this.comments = ko.observableArray([]);
            this.post = new PostModel(post);

            for (i = 0; i < commentList.length; i++) {
                this.comments.push(new CommentModel(commentList[i].data));
            }
        };
    }
});
