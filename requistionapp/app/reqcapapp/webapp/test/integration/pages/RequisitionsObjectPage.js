sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'demo.reqapp.reqcapapp',
            componentId: 'RequisitionsObjectPage',
            contextPath: '/Requisitions'
        },
        CustomPageDefinitions
    );
});