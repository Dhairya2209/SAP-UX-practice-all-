sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.prac.project3prac.controller.View1", {
        onTilePress: function () {
            MessageToast.show("Tile Pressed");
        }
    });
});