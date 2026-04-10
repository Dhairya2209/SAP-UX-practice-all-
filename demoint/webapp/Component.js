sap.ui.define([
    "sap/ui/core/UIComponent",
    "demo/int/demoint/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("demo.int.demoint.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            UIComponent.prototype.init.apply(this, arguments);
            this.setModel(models.createDeviceModel(), "device");
        }
    });
});