/*jslint nomen: true, plusplus: true*/
/*globals app, ko, ViewModel, $*/
app.register({
    name: 'viewEngine',
    dependencies: ['window', 'ko', 'ViewModel'],
    factory: function (window, ko, ViewModel) {
        "use strict";

        var _self = {};

        _self.mainVw = {
            viewModel: ko.observable(new ViewModel())
        };

        _self.setView = function (viewModel) {
            if (!viewModel instanceof ViewModel) {
                throw new Error('When setting the view, a ViewModel is required.');
            }

            if (window.scroll) {
                window.scroll(0, 0);
            }

            _self.mainVw.viewModel(viewModel);
        };

        return _self;
    }
});
