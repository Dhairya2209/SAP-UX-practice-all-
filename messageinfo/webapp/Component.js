sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device"
], function (UIComponent, Device) {
  "use strict";

  return UIComponent.extend("com.msginfo.messageinfo.Component", {

    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // initialize router
      this.getRouter().initialize();
    }
  });
});