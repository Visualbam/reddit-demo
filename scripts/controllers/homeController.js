/*globals console, jQuery, ViewModel, ViewEngine, PostModel, PostList, PostDetailModel, app*/

app.register({
    name: 'homeController',
    dependencies: ['jQuery', 'ViewModel', 'PostList', 'PostDetailModel', 'viewInstance', 'sammy'],
    factory: function ($, ViewModel, PostList, PostDetailModel, viewInstance, sammy) {
        "use strict";

        var url = 'http://www.reddit.com';

        // Get here is an interceptor for an HTTP GET REQUEST
        // When here 'app.get('#/')' do stuff
        sammy.get('#/', function () {
            $.getJSON(url + '/r/funny/.json', function (json) {
                viewInstance.setView(new ViewModel({
                    template: 'homeTemplate',
                    data: new PostList(json)
                }));
            });
        });

        sammy.get('#/posts/:id', function (params) {
            $.getJSON(url + '/r/funny/' + params.params.id + '.json', function (json) {
                viewInstance.setView(new ViewModel({
                    template: 'postTemplate',
                    data: new PostDetailModel(json)
                }));
            });
        });
    }
});
