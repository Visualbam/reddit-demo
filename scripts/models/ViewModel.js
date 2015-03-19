/*jslint devel: true, eqeq: true, nomen: true*/
/*globals ko*/

(function (ko, HomeModel) {
    "use strict";

    var _self;

    _self.VM = function (model) {
        model = model || {};

        this.template = model.template || 'defaultTemplate';
        this.data = model.data || {};
    };

    return _self;

}(ko));
