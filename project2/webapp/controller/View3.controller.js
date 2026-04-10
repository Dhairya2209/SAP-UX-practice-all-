sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/ValueState",
     "sap/m/MessageToast"
   
], function (Controller, JSONModel, ValueState,MessageToast) {
    "use strict";

    return Controller.extend("demo.compo.project2.controller.View3", {

        onInit: function () {
            var oModel = new JSONModel({
                name: "",
                email:""
            });
            this.getView().setModel(oModel);
        },

        onValidate: function () {
            var oNameInput= this.byId("nameInput");
            var oEmailInput= this.byId("emailInput");

            var sName  = (oNameInput.getValue() || "").trim();
            var bValid=true;
            var bEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sEmail);

        

            if (!sName) {
                oNameInput.setValueState(ValueState.Error);
                oNameInput.setValueStateText("Name is required");
                bValid=false;
            } 
            // else if (bValid) {
            
            //     oInput.setValueState(ValueState.Success);
            //     oInput.setValueStateText("valid number");
            //     oInput.setShowValueStateMessage(true);

            //     // Optional Toast
            //     MessageToast.show("✅ Valid Email!");
            // } 
            else {
                oNameInput.setValueState(ValueState.Success);
                oNameInput.setValueStateText("valid name");
               
            }
            if(!sEmail){
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("email is required");
                bValid=false;
            }
            else if (!bEmailValid){
                oEmailInput.setValueState(ValueState.Error);
                oEmailInput.setValueStateText("enter a valid email");
                bValid = false;
            }
            else{
                oEmailInput.setValueState(ValueState.Success);
                oEmailInput.setValueStateText("Valid Email");
            }

            if(bValid){
                MessageToast.show("All fields are valid");
            }
        }

    });
});