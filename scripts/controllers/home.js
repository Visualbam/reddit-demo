/*globals console, jQuery, ViewModel, HomeModel, ViewEngine*/

(function (window, $, ViewModel, HomeModel, ViewEngine) {
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
    };

}(window, jQuery, ViewModel, HomeModel, ViewEngine));
