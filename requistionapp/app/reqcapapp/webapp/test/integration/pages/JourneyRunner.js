sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"demo/reqapp/reqcapapp/test/integration/pages/RequisitionsList",
	"demo/reqapp/reqcapapp/test/integration/pages/RequisitionsObjectPage"
], function (JourneyRunner, RequisitionsList, RequisitionsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('demo/reqapp/reqcapapp') + '/test/flp.html#app-preview',
        pages: {
			onTheRequisitionsList: RequisitionsList,
			onTheRequisitionsObjectPage: RequisitionsObjectPage
        },
        async: true
    });

    return runner;
});

