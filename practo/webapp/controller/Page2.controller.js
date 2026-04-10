sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.practo.practo.controller.Page2", {
        onGoToPage3: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage3");
        },

        onBack: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage1");
        }
    });
});
