sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/EnterText",
    "sap/ui/test/actions/Press",
    "sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, EnterText, Press, PropertyStrictEquals) {
    "use strict";

    var sViewName = "Login";

    return {
        actions: {
            iEnterUser: function (sValue) {
                return this.waitFor({
                    id: "userInput",
                    viewName: sViewName,
                    actions: new EnterText({ text: sValue }),
                    errorMessage: "User input not found"
                });
            },

            iEnterPassword: function (sValue) {
                return this.waitFor({
                    id: "passwordInput",
                    viewName: sViewName,
                    actions: new EnterText({ text: sValue }),
                    errorMessage: "Password input not found"
                });
            },

            iPressLogin: function () {
                return this.waitFor({
                    id: "loginButton",
                    viewName: sViewName,
                    actions: new Press(),
                    errorMessage: "Login button not found"
                });
            }
        },

        assertions: {
            iShouldSeeResult: function (sExpectedText) {
                return this.waitFor({
                    id: "resultText",
                    viewName: sViewName,
                    matchers: new PropertyStrictEquals({
                        name: "text",
                        value: sExpectedText
                    }),
                    success: function () {
                        Opa5.assert.ok(true, "Result text is correct: " + sExpectedText);
                    },
                    errorMessage: "Expected result text not shown"
                });
            }
        }
    };
});