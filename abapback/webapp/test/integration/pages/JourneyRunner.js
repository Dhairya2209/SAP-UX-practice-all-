sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/abapback/abapback/test/integration/pages/ZI_PRODUCTS_05List",
	"demo/abapback/abapback/test/integration/pages/ZI_PRODUCTS_05ObjectPage"
], function (JourneyRunner, ZI_PRODUCTS_05List, ZI_PRODUCTS_05ObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/abapback/abapback') + '/test/flp.html#app-preview',
        pages: {
			onTheZI_PRODUCTS_05List: ZI_PRODUCTS_05List,
			onTheZI_PRODUCTS_05ObjectPage: ZI_PRODUCTS_05ObjectPage
        },
        async: true
    });

    return runner;
});

