sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/eclipse2/eclipse2/test/integration/pages/RegistrationsList",
	"demo/eclipse2/eclipse2/test/integration/pages/RegistrationsObjectPage"
], function (JourneyRunner, RegistrationsList, RegistrationsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/eclipse2/eclipse2') + '/test/flp.html#app-preview',
        pages: {
			onTheRegistrationsList: RegistrationsList,
			onTheRegistrationsObjectPage: RegistrationsObjectPage
        },
        async: true
    });

    return runner;
});

