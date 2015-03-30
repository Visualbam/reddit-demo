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
            getData,
            addPages,
            setViewModel,
            count;

        getData = function (request, count) {
            var nextRequest;

            if (count < 10) {
                $.getJSON(url + request, function (json) {
                    nextRequest = '/.json?count=25&after=' + json.data.after;
                    pages.push(json.data);

                    getData(nextRequest, count++);
                });
            } else {
                setViewModel();
            }
        };

        setViewModel = function () {
            // set to empty VM
            // Give view instance an update data method
            // When data gets updated add post model to posts observable

            viewInstance.setView(new ViewModel({
                template: 'homeTemplate',
                data: new PostList(pages)
            }));
        };

        sammy.get('#/', function () {
            getData('/.json', 0);
        });

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
