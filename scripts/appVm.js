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
        _self.toggleGridCss = ko.observable('grid');
        _self.activeElement = ko.observable();

        for (i = 0; i < elementRepo.length; i++) {
            _self.elementList.push(new ElementVm(elementRepo[i]));
        }

        // Functions for switching between grid / list
        _self.toggleBtnCss = function (buttonType, data) {
            if (buttonType === 'grid') {
                _self.toggleGridCss('grid');
            } else {
                _self.toggleGridCss('list');
            }
        };

        _self.showContent = function (data) {
            _self.activeElement(data);
        };

        // return object
        return _self;
    };

}(window, ko, elementRepo, ElementVm));
