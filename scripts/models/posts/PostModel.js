/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko, app*/

app.register({
    name: 'PostModel',
    dependencies: ['ko'],
    factory: function (ko) {
        "use strict";

        return function (data) {
            data = data || {};

            var imageUrl = data.url.toString().replace('http://imgur.com/', 'https://i.imgur.com/').replace('gifv', 'gif');

//            if (imageUrl.indexOf('.jpg') <= 0) {
//                imageUrl = imageUrl + '.jpg';
//            }

            this.title = ko.observable(data.title || '');
            this.image = ko.observable(imageUrl || null);
            this.url = ko.observable('#/posts/' + data.id || '');
        };
    }
});
