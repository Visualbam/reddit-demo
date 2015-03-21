/*globals console, jQuery, ViewModel, HomeModel, ViewEngine, PostModel*/

(function (window, $, ViewModel, HomeModel, ViewEngine, PostModel) {
    "use strict";

    window.homeController = function (app) {
        // Build constants module to store strings that wont change
        var url = 'http://www.reddit.com';

        // Get here is an interceptor for an HTTP GET REQUEST
        // When here 'app.get('#/')' do stuff
        app.get('#/', function () {
            $.getJSON(url + '/r/funny/.json', function (json) {
                ViewEngine.setView(new ViewModel({
                    template: 'homeTemplate',
                    data: new HomeModel(json)
                }));
            });
        });

        app.get('#/posts/:id', function (params) {
            $.getJSON(url + '/r/funny/' + params.params.id + '.json', function (json) {
                ViewEngine.setView(new ViewModel({
                    template: 'postTemplate',
                    data: new PostModel(json)
                }));
            });
        });

    };

}(window, jQuery, ViewModel, HomeModel, ViewEngine, PostModel));
