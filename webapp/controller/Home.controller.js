sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/ToolbarSpacer",
	"sap/ui/model/FilterType",
], function (Controller, Dialog, JSONModel, Filter, FilterOperator, FilterType, ToolbarSpacer) {
	"use strict";

	return Controller.extend("dwp.sapui5_project_YFI03_YFI04.controller.Home", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.home
		 */

		onInit: function () {
			// var oView=this.getView();

			// var oJSONModel = this.initSampleDataModel();
			// oView.setModel(new JSONModel({
			// 	globalFilter:"",
			// 	availabilityFilterOn:false,
			// 	cellFilterOn:false
			// }),"ui");

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
		onFilterID: function (oEvent) {
			var aFilters = [];
			var sQuery = oEvent.getParameter("query");
			console.log(oEvent);
			console.log(this.getView().getModel());
			if (sQuery && sQuery.length > 0) {
				var oFilter = new Filter("Laufi",FilterOperator.Contains, sQuery);
				aFilters.push(oFilter);
			}
			//create table binding
			var oTable = this.getView().byId("idPaymentRunTable");
			console.log(oTable);
			var oBinding = oTable.getBinding("items"); 
			console.log(oBinding);
			
			oBinding.filter(aFilters);

		},
		
		onSearch : function (oEvent) {
			
			
			//create filter
			
			var filters = [];
			var query = oEvent.getParameter('query');
			
			//check if query contains value
			
			if(query && query.length > 0){
				var filter = new Filter("Laufi", FilterOperator.EQ, query);
				filters.push(filter);
			}
			
			
			//update table
			
			var oTable = this.getView().byId('idPaymentRunTable');
			var binding = oTable.getBinding('items');
			binding.filter(filters);
			
			// console.log('Ik zit erin')
			// var oView = this.getView(),
			// 	sValue = oView.byId("searchField").getValue(),
			// 	oFilter = new Filter("Laufi", FilterOperator.Contains, sValue);
			// 	console.log('filter: ' + sValue)
				
			// 	var oTable = oView.byId('idPaymentRunTable');
			// 	console.log(oFilter)
			// 	console.log(oTable.getBinding('items'))
			// 	oTable.getBinding("items").filter(oFilter, FilterType.Application);
		},


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