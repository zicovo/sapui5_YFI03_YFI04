sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/ui/model/json/JSONModel"
], function (Controller, Dialog, JSONModel) {
	"use strict";

	return Controller.extend("dwp.sapui5_project_YFI03_YFI04.controller.Home", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.home
		 */
		 
		 
		 
		onInit: function () {

		},
		
		pressDialog: null,
		
		showDetails: function (oEvent) {
			
			var context = oEvent.getSource().getBindingContext();
			var oPayment_run = context.getObject(context.getPath());
			
			console.log(oPayment_run.Laufi);
		
			
			this.getOwnerComponent().getRouter().navTo("Detail", {
				paymentRunId: oPayment_run.Laufi
			});
				
			// }
		},
		onFilterID: function(oEvent){
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.home
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.home
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.home
		 */
		//	onExit: function() {
		//
		//	}

	});

});