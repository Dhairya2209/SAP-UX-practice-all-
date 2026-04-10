sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.practo.practo.controller.Page5", {
        onGoToPage1: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage1");
        },

        onBack: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage4");
        }
    });
});
