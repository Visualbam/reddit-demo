/*jslint nomen: true, plusplus: true*/
/*globals console, jQuery, ViewModel, ViewEngine, PostModel, PostList, PostDetailModel, app*/

app.register({
    name: 'homeController',
    dependencies: ['jQuery', 'ViewModel', 'PostList', 'PostDetailModel', 'viewInstance', 'sammy'],
    factory: function ($, ViewModel, PostList, PostDetailModel, viewInstance, sammy) {
        "use strict";

        var url = 'http://www.reddit.com',
            getPages,
            pages = [],
            addPage,
            nextPage,
            count,
            i;

        $.ajaxSetup({
            async: false
        });

        addPage = function () {
            for (i = 1; i < 3; i++) {
                $.getJSON(url + '/.json?count=25&after=' + nextPage, function (json) {
                    nextPage = json.data.after;
                    pages.push(json.data);
                });
            }
        };

        sammy.get('#/', function () {


            $.when(
                $.getJSON(url + '/.json', function (json) {
                    nextPage = json.data.after;
                    pages.push(json.data);
                }),
                addPage()
            ).done(function (json) {
                json = pages;

                for (i = 0; i < json.length; i++) {
                    viewInstance.setView(new ViewModel({
                        template: 'homeTemplate',
                        data: new PostList(json[i])
                    }));
                }

            });
        });

        // Get here is an interceptor for an HTTP GET REQUEST
        // When here 'app.get('#/')' do stuff

//        sammy.get('#/posts/:id', function (params) {
//            $.getJSON(url + '/r/funny/' + params.params.id + '.json', function (json) {
//                viewInstance.setView(new ViewModel({
//                    template: 'postTemplate',
//                    data: new PostDetailModel(json)
//                }));
//            });
//        });
    }
});
