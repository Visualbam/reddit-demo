/*jslint nomen: true, plusplus: true, regexp: true*/
/*globals ko, ElementVm, elementRepo, console*/

(function (window, ko, elementRepo, ElementVm) {
    'use strict';

    window.AppVm = function () {
        // create object
        var _self = {},
            i,
            x;

        _self.elementList = ko.observableArray([]);
        _self.isGrid = ko.observable(true);
        _self.isList = ko.observable(false);

        for (i = 0; i < elementRepo.length; i++) {
            _self.elementList.push(new ElementVm(elementRepo[i]));
        }

        // Functions for switching between grid / list





        // return object
        return _self;
    };

}(window, ko, elementRepo, ElementVm));
