/*jslint nomen: true, plusplus: true*/
/*globals window, ko, PostModel, CommentModel, console, app*/

app.register({
    name: 'PostDetailModel',
    dependencies: ['PostModel', 'CommentModel', 'ko'],
    factory: function (PostModel, CommentModel, ko) {
        "use strict";

        var _self = {};

        return _self;
    }
});
