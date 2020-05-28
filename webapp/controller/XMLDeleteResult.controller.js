sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("dwp.sapui5_project_YFI03_YFI04.controller.XMLDeleteResult", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.XMLDeleteResult
		 */
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("XMLDeleteResult").attachPatternMatched(this._handleRouteMatched, this);
		},

		onYFI04: function () {
			//MessageToast.show("Oops! Not implemented yet!²");
				this.getOwnerComponent().getRouter().navTo("Detail", {
				paymentRunId: oPayment_run.Laufi
			});
		},
		_handleRouteMatched: function () {
				console.log("WERK KUT DING");
			}
			// onRouteMatched: function (oEvent) {
			// 	var oArguments = oEvent.getParameter("arguments");
			// 	var sPaymentRunId = oArguments.paymentRunId;
			// 	console.log(sPaymentRunId);

		// },
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.XMLDeleteResult
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.XMLDeleteResult
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.XMLDeleteResult
		 */
		//	onExit: function() {
		//
		//	}

	});

});