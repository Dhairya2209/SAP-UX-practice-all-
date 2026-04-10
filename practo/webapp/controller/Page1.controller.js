sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demo.practo.practo.controller.Page1", {
        onGoToPage2: function () {
            this.getOwnerComponent().getRouter().navTo("RoutePage2");
        }
    });
});
