sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'demo.abapback.abapback',
            componentId: 'ZI_PRODUCTS_05ObjectPage',
            contextPath: '/ZI_PRODUCTS_05'
        },
        CustomPageDefinitions
    );
});