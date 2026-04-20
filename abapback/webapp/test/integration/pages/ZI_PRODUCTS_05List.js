sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'demo.abapback.abapback',
            componentId: 'ZI_PRODUCTS_05List',
            contextPath: '/ZI_PRODUCTS_05'
        },
        CustomPageDefinitions
    );
});