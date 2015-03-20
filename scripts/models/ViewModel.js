/*jslint devel: true, eqeq: true, nomen: true*/
/*globals ko*/

(function (ko, window) {
    "use strict";

    window.VM = function (model) {
        model = model || {};

        this.template = model.template || 'defaultTemplate';
        this.data = model.data || {};

        return this;
    };

}(ko, window));
