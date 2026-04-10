sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState",
   
   
], function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("demo.compo.project2.controller.View1", {

        onInit: function () {
            var oModel = new JSONModel({
                name: ""
            });
            this.getView().setModel(oModel);
        },

        onLiveChange: function (oEvent) {
            var sValue = (oEvent.getParameter("value") || "").trim();
            var oInput = this.byId("numberInput");

            var bValid = /^\d*$/.test(sValue);

            if (!sValue) {
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("this field is required");
            } 
            // else if (bValid) {
            
            //     oInput.setValueState(ValueState.Success);
            //     oInput.setValueStateText("valid number");
            //     oInput.setShowValueStateMessage(true);

            //     // Optional Toast
            //     MessageToast.show("✅ Valid Email!");
            // } 
            else {
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("valid inputS");
               
            }
        }

    });
});