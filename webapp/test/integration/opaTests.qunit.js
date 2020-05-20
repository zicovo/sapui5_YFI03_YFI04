/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"dwp/sapui5_project_YFI03_YFI04/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});