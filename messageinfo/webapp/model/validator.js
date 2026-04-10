sap.ui.define([], function () {
  "use strict";

  return {
    validateEmail: function (value) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(value);
    },

    validateNumber: function (value) {
      return /^\d+$/.test(value);
    }
  };
});