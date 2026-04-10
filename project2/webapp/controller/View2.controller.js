sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState",
   
], function (Controller, JSONModel, ValueState) {
    "use strict";

    return Controller.extend("demo.compo.project2.controller.View2", {

        onInit: function () {
            var oModel = new JSONModel({
                value: ""
            });
            this.getView().setModel(oModel);
        },

        onLiveChange: function (oEvent) {
            var sValue = (oEvent.getParameter("value") || "").trim();
            var oInput = this.byId("inputField");

        

            if (!sValue) {
                oInput.setValueState(ValueState.None);
                oInput.setValueStateText("");
            } 
            else if (sValue.length < 5) {
            
                oInput.setValueState(ValueState.Error);
                oInput.setValueStateText("Minimum 5 characters required");
               
            } 
            else {
                oInput.setValueState(ValueState.Success);
                oInput.setValueStateText("valid inputS");
               
            }
        }

    });
});