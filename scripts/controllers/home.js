/*globals console, jQuery, ViewModel, ViewEngine, PostModel, PostList, PostDetailModel*/

(function (window, $, ViewModel, ViewEngine, PostModel, PostList, PostDetailModel) {
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
                    data: new PostList(json)
                }));
            });
        });

        app.get('#/posts/:id', function (params) {
            $.getJSON(url + '/r/funny/' + params.params.id + '.json', function (json) {
                ViewEngine.setView(new ViewModel({
                    template: 'postTemplate',
                    data: new PostDetailModel(json)
                }));
            });
        });

    };

}(window, jQuery, ViewModel, ViewEngine, PostModel, PostList, PostDetailModel));
