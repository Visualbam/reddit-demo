/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko, app*/

app.register({
    name: 'PostModel',
    dependencies: ['ko'],
    factory: function (ko, data) {
        "use strict";

        data = data || {};

        var _self = {};

        _self.title = ko.observable(data.title || '');
        _self.url = ko.observable('#/posts/' + data.id || '');

        return _self;
    }
});
