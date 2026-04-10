sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.int.demoint.controller.View1", {
        onApprove: function(oEvent) {
            MessageToast.show("Approved: " + oEvent.getParameter("reqId"));
        },

        onBlocked: function(oEvent) {
            MessageToast.show(
                "Approval blocked for " +
                oEvent.getParameter("reqId") +
                ". Reason: " +
                oEvent.getParameter("reason")
            );
        }
    });
});