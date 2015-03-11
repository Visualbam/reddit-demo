/*jslint nomen: true, plusplus: true*/
/*globals ko*/

(function (window, ko) {
    "use strict";

    window.ElementVm = function (data) {
        data = data || {};

        // create object
        var _self = {};

        // add properties
        _self.title = ko.observable(data.title || '');
        _self.duedate = ko.observable(data.duedate || '');
        _self.type = ko.observable(data.type || '');
        _self.content = ko.observable(data.content || '');
        _self.maxValue = ko.observable(data.maxValue || 0);
        _self.value = ko.observable(data.value || 0);
        _self.percentComplete = ko.computed(function () {
            return Math.floor((_self.value() * 100) / _self.maxValue());
        }, this);

        // return object
        return _self;
    };

}(window, ko));
