sap.ui.require([
    "sap/ui/test/Opa5",
    "demo/itest/test/integration/arrangements/Startup",
    "demo/itest/test/integration/pages/Login"
], function (Opa5, Startup, LoginPage) {
    "use strict";

    Opa5.extendConfig({
        arrangements: new Startup(),
        viewNamespace: "demo.itest.view.",
        autoWait: true
    });

    QUnit.module("Login Integration");

    Opa5.createPageObjects({
        onTheLoginPage: LoginPage
    });

    opaTest("Should login successfully with valid credentials", function (Given, When, Then) {
        Given.onTheLoginPage.iStartMyApp();

        When.onTheLoginPage.iEnterUser("admin");
        When.onTheLoginPage.iEnterPassword("admin123");
        When.onTheLoginPage.iPressLogin();

        Then.onTheLoginPage.iShouldSeeResult("Login successful.");
        Then.onTheLoginPage.iTeardownMyApp();
    });

    opaTest("Should show invalid credentials for wrong password", function (Given, When, Then) {
        Given.onTheLoginPage.iStartMyApp();

        When.onTheLoginPage.iEnterUser("admin");
        When.onTheLoginPage.iEnterPassword("wrong123");
        When.onTheLoginPage.iPressLogin();

        Then.onTheLoginPage.iShouldSeeResult("Invalid credentials.");
        Then.onTheLoginPage.iTeardownMyApp();
    });
});