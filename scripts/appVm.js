/*jslint nomen: true, plusplus: true, regexp: true*/
/*globals ko, ElementVm, elementRepo, console*/


// Incharge of everything here
// Bridge between cart & product

(function (window, ko, elementRepo, ElementVm) {
    'use strict';

    window.AppVm = function () {
        // create object
        var _self = {},
            i;

        _self.elementList = ko.observableArray([]);

        for (i = 0; i < elementRepo.length; i++) {
            _self.elementList.push(new ElementVm(elementRepo[i]));
        }

        // return object
        return _self;
    };

}(window, ko, elementRepo, ElementVm));
