/*globals app*/
app.register({
    name: 'ViewModel',
    factory: function (model) {
        "use strict";

        model = model || {};

        this.template = model.template || 'defaultTemplate';
        this.data = model.data || {};
        this.before = model.before || undefined;
        this.after = model.after || undefined;

        return this;
    }
});
