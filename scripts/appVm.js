/*jslint nomen: true, plusplus: true, regexp: true*/
/*globals ko, ElementVm, elementRepo, console*/

(function (window, ko, elementRepo, ElementVm) {
    'use strict';

    window.AppVm = function () {
        // create object
        var _self = {},
            i,
            x,
            isActive = false;

        _self.elementList = ko.observableArray([]);

        for (i = 0; i < elementRepo.length; i++) {
            _self.elementList.push(new ElementVm(elementRepo[i]));
        }

        _self.showContent = function (element) {
            for (x = 0; x < _self.elementList().length; x++) {
                if (_self.elementList()[x].isActive(true)) {
                    _self.elementList()[x].isActive(false);
                }
            }

            element.isActive(true);
        };

        // return object
        return _self;
    };

}(window, ko, elementRepo, ElementVm));
