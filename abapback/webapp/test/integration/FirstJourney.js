sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheZI_PRODUCTS_05List.iSeeThisPage();
            Then.onTheZI_PRODUCTS_05List.onTable().iCheckColumns(8, {"product_id":{"header":"product_id"},"product_name":{"header":"product_name"},"price":{"header":"price"},"currency":{"header":"currency"},"created_by":{"header":"Created By"},"created_at":{"header":"Created On"},"last_changed_by":{"header":"Changed By"},"last_changed_at":{"header":"Changed On"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheZI_PRODUCTS_05List.onFilterBar().iExecuteSearch();
            
            Then.onTheZI_PRODUCTS_05List.onTable().iCheckRows();

            When.onTheZI_PRODUCTS_05List.onTable().iPressRow(0);
            Then.onTheZI_PRODUCTS_05ObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});