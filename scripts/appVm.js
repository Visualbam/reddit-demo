/*jslint nomen: true, plusplus: true, regexp: true*/
/*globals ko, ElementVm, elementRepo, console*/

(function (window, ko, elementRepo, ElementVm) {
    'use strict';

    window.AppVm = function () {
        // create object
        var _self = {},
            i,
            isActive = false;

        _self.elementList = ko.observableArray([]);

        for (i = 0; i < elementRepo.length; i++) {
            _self.elementList.push(new ElementVm(elementRepo[i]));
        }

        _self.showContent = function (element) {
            element.isActive(true);
            console.log(element);
        };

        // return object
        return _self;
    };

}(window, ko, elementRepo, ElementVm));
