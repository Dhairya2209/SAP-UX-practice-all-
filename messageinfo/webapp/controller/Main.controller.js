sap.ui.define([
  "com/msginfo/messageinfo/controller/Base",
  "sap/m/MessageBox"
], function (BaseController, MessageBox) {
  "use strict";

  return BaseController.extend("com.msginfo.messageinfo.controller.Main", {

    onEmailChange: function (oEvent) {
      this.validateField(oEvent.getSource(), "email");
    },

    onNumberChange: function (oEvent) {
      this.validateField(oEvent.getSource(), "number");
    },

    onSubmit: function () {
      const email = this.byId("emailInput");
      const number = this.byId("numberInput");

      const isEmailValid = this.validateField(email, "email");
      const isNumberValid = this.validateField(number, "number");

      if (isEmailValid && isNumberValid) {
        MessageBox.success("All inputs are valid ✅");
      } else {
        MessageBox.error("Please fix errors ❌");
      }
    }

  });
});