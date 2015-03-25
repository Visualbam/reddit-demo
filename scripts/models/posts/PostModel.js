/*jslint devel: true, nomen: true, plusplus: true*/
/*globals ko, app*/

app.register({
    name: 'PostModel',
    dependencies: ['ko'],
    factory: function (ko) {
        "use strict";

        return function (data) {
            data = data || {};

            var imageUrl = data.url.toString().replace('http://imgur.com/', 'https://i.imgur.com/');

            if (imageUrl.indexOf('.jpg') <= 0) {
                imageUrl = imageUrl + '.jpg';
            }

            if (imageUrl.indexOf('.gifv') >= 0) {
                imageUrl = 'http://www.pakistancardealers.com/img/no-image.jpg';
            }

            this.title = ko.observable(data.title || '');
            this.image = ko.observable(imageUrl || null);
            this.url = ko.observable('#/posts/' + data.id || '');
        };
    }
});
