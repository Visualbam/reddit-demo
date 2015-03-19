/*globals console, jQuery*/

(function (window, $) {
    "use strict";


    window.homeController = function (app) {
        // Build constants module to store strings that wont change
        var url = 'http://www.reddit.com';


        // Get here is an interceptor for an HTTP GET REQUEST
        // When here 'app.get('#/')' do stuff
        app.get('#/', function () {
            $.getJSON(url + '/r/funny', function (json) {

            });
        });
    };

}(window, jQuery));
