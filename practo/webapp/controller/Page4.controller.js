sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.practo.practo.controller.Page4", {
        onGoToPage5: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage5");
        },

        onBack: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage3");
        }
    });
});
