sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.itemdesc.itemdescription.controller.View1", {

        // 🔹 CREATE
        onSubmit: function () {

            var oModel = this.getView().getModel();

           var oData = {
    ItemId: this.byId("idItemId").getValue().padStart(5, '0'),
    ProductName: this.byId("idProductName").getValue(),
    ProductPrice: parseFloat(this.byId("idProductPrice").getValue()),
    InStock: this.byId("idStock").getValue().padStart(5, '0'),
    WarehouseLocation: this.byId("idWarehouse").getValue(),
    PalntLocation: this.byId("idPlant").getValue(),
    AssetCode: this.byId("idAsset").getValue()
};

            var oBinding = oModel.bindList("/Items");
            var oContext = oBinding.create(oData);

            var that = this;

            oContext.created().then(function () {
                MessageToast.show("Created successfully");
                oModel.refresh();
                that._clearForm();
            }).catch(function (err) {
                console.error(err);
                MessageToast.show("Create failed");
            });
        },

        // 🔹 DELETE
        onDeletePress: function () {
            var oItem = this.byId("idTable").getSelectedItem();

            if (!oItem) {
                MessageToast.show("Select a row first");
                return;
            }

            var oContext = oItem.getBindingContext();

            oContext.delete().then(function () {
                MessageToast.show("Deleted successfully");
            }).catch(function (err) {
                console.error(err);
                MessageToast.show("Delete failed");
            });
        },

        // 🔹 UPDATE
        onUpdatePress: function () {
            var oItem = this.byId("idTable").getSelectedItem();

            if (!oItem) {
                MessageToast.show("Select a row first");
                return;
            }

            var oContext = oItem.getBindingContext();

            oContext.setProperty("ProductName", this.byId("idProductName").getValue());
            oContext.setProperty("ProductPrice", parseFloat(this.byId("idProductPrice").getValue()));
            oContext.setProperty("InStock", this.byId("idStock").getValue());
            oContext.setProperty("WarehouseLocation", this.byId("idWarehouse").getValue());
            oContext.setProperty("PalntLocation", this.byId("idPlant").getValue());
            oContext.setProperty("AssetCode", this.byId("idAsset").getValue());

            oContext.getModel().submitBatch().then(function () {
                MessageToast.show("Updated successfully");
            }).catch(function (err) {
                console.error(err);
                MessageToast.show("Update failed");
            });
        },

        // 🔹 CLEAR FORM
        _clearForm: function () {
            this.byId("idItemId").setValue("");
            this.byId("idProductName").setValue("");
            this.byId("idProductPrice").setValue("");
            this.byId("idStock").setValue("");
            this.byId("idWarehouse").setValue("");
            this.byId("idPlant").setValue("");
            this.byId("idAsset").setValue("");
        }

    });
});