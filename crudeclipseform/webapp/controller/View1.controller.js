sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("demo.crudeclipse.crudeclipseform.controller.View1", {

        // 🔹 CREATE
        onSubmit: function () {

            var oModel = this.getView().getModel();

            var oData = {
                RegId: this.byId("idRegid").getValue(),
                FirstName: this.byId("idFirstName").getValue(),
                MiddleName: this.byId("idMiddleName").getValue(),
                Surname: this.byId("idSurname").getValue(),
                Dob: this._formatDate(this.byId("idDob").getDateValue()),
                Age: parseInt(this.byId("idAge").getValue()),
                Gender: this.byId("idGender").getSelectedKey(),
                Address: this.byId("idAddress").getValue()
            };

            var oBinding = oModel.bindList("/Registrations");

            var oContext = oBinding.create(oData);

            var that = this;

            oContext.created().then(function () {
                MessageToast.show("Created successfully");

                // 🔹 Refresh Table
                oModel.refresh();

                // 🔹 Clear Form
                that._clearForm();

            }).catch(function (oError) {
                MessageToast.show("Error while creating");
                console.error(oError);
            });
        },

        // 🔹 DELETE
        onDeletePress: function () {
            var oTable = this.byId("idTable");
            var oItem = oTable.getSelectedItem();

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
            var oTable = this.byId("idTable");
            var oItem = oTable.getSelectedItem();

            if (!oItem) {
                MessageToast.show("Select a row first");
                return;
            }

            var oContext = oItem.getBindingContext();

            // Update from form input
            oContext.setProperty("FirstName", this.byId("idFirstName").getValue());
            oContext.setProperty("Surname", this.byId("idSurname").getValue());
            oContext.setProperty("Age", parseInt(this.byId("idAge").getValue()));

            oContext.getModel().submitBatch().then(function () {
                MessageToast.show("Updated successfully");
            }).catch(function (err) {
                console.error(err);
                MessageToast.show("Update failed");
            });
        },

        // 🔹 FORMAT DATE
        _formatDate: function (oDate) {
            if (!oDate) return null;

            var yyyy = oDate.getFullYear();
            var mm = String(oDate.getMonth() + 1).padStart(2, '0');
            var dd = String(oDate.getDate()).padStart(2, '0');

            return yyyy + "-" + mm + "-" + dd;
        },

        // 🔹 CLEAR FORM
        _clearForm: function () {
            this.byId("idRegid").setValue("");
            this.byId("idFirstName").setValue("");
            this.byId("idMiddleName").setValue("");
            this.byId("idSurname").setValue("");
            this.byId("idDob").setValue("");
            this.byId("idAge").setValue("");
            this.byId("idGender").setSelectedKey("");
            this.byId("idAddress").setValue("");
        }

    });
});