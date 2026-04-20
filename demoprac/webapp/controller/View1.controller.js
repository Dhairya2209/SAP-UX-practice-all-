sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("demo.demoprac.controller.View1", {

        onInit: function () {
            var oData = {
                employees: [
                    { id: "101", name: "priyanshu", city: "pune" },
                    { id: "102", name: "BALA", city: "cxc" },
                    { id: "103", name: "Rahul", city: "Mumbai" },
                    { id: "104", name: "Amit", city: "Delhi" },
                    { id: "105", name: "Neha", city: "Pune" }
                ]
            };

            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },

        onSearch: function (oEvent) {
            var sValue = oEvent.getParameter("newValue");
            var oTable = this.byId("idTable");
            var oBinding = oTable.getBinding("items");
            var aFilters = [];

            if (sValue) {
                var oFilter1 = new Filter("name", FilterOperator.Contains, sValue);
                var oFilter2 = new Filter("city", FilterOperator.Contains, sValue);

                var oFinalFilter = new Filter({
                    filters: [oFilter1, oFilter2],
                    and: false   // OR condition
                });

                aFilters.push(oFinalFilter);
            }

            oBinding.filter(aFilters);
        }

    });
});