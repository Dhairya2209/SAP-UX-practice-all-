sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'demo.eclipse2.eclipse2',
            componentId: 'RegistrationsList',
            contextPath: '/Registrations'
        },
        CustomPageDefinitions
    );
});