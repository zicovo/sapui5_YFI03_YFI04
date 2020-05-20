sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("dwp.sapui5_project_YFI03_YFI04.controller.detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.detail
		 */

		onInit: function () {

			this.getOwnerComponent().getRouter().getRoute("detail").attachMatched(this.onRouteMatched, this);

		},

		onRouteMatched: function (oEvent) {
			var oArguments = oEvent.getParameter("arguments");
			var sPaymentRunId = oArguments.paymentRunId;
			console.log(sPaymentRunId)
			
			this.onRead(sPaymentRunId)


		}, 
		
		onRead: function(id){
			
			//perform read operation to get details of 1 entity
			this.getOwnerComponent().getModel().read("/payment_runSet('" + id +"')", {
				success: function (oData, oResult) {
					var oModel_PaymentRun = new JSONModel();

					oModel_PaymentRun.setData(oData);
					console.log("Odata: " + JSON.stringify(oData))

					console.log(oModel_PaymentRun.oData.Laufd)

				},
				error: function (oError) {
					console.log(oError)
				}

			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});