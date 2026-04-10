sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "com/msginfo/messageinfo/model/validator",
  "sap/ui/core/ValueState"
], function (Controller, Validator, ValueState) {
  "use strict";

  return Controller.extend("com.msginfo.messageinfo.controller.Base", {

    validateField: function (oInput, type) {
      const value = oInput.getValue();
      let isValid = false;

      if (type === "email") {
        isValid = Validator.validateEmail(value);
      } else if (type === "number") {
        isValid = Validator.validateNumber(value);
      }

      oInput.setValueState(isValid ? ValueState.Success : ValueState.Error);
      oInput.setValueStateText(isValid ? "Valid Input" : "Invalid Input");

      return isValid;
    }

  });
});