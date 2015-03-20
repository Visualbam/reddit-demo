/*jslint nomen: true*/
/*globals jQuery, ko, ViewModel*/

(function (window, $, ko, ViewModel) {
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

    window.ViewEngine = _self;

}(window, jQuery, ko, ViewModel));
