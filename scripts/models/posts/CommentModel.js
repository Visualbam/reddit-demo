/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko, app*/

app.register({
    name: 'CommentModel',
    dependencies: ['ko'],
    factory: function (ko) {
        "use strict";

        return function (data) {
            data = data || {};

            this.content = ko.observable(data.body || '');
        };
    }
});
