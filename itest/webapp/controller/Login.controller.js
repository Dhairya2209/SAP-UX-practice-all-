sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "demo/itest/model/loginValidator"
], function (Controller, loginValidator) {
    "use strict";

    return Controller.extend("demo.itest.controller.Login", {
        onLogin: function () {
            var sUser = this.byId("userInput").getValue();
            var sPassword = this.byId("passwordInput").getValue();

            var oResult = loginValidator.validateCredentials(sUser, sPassword);
            this.byId("resultText").setText(oResult.message);
        }
    });
});