/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["demo/extend/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
