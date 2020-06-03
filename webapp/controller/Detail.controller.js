sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("dwp.sapui5_project_YFI03_YFI04.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.detail
		 */
		_sPaymentRunId: "",

		onInit: function () {

			$.sap.paymentRunId = 0;

			this.getOwnerComponent().getRouter().getRoute("Detail").attachMatched(this.onRouteMatched, this);
			
			
			var oViewModel;
			// Model used to manipulate control states
			oViewModel = new JSONModel({
				paymentRunTitle : this.getOwnerComponent().getModel("i18n").getResourceBundle().getText("paymentRunTitle")
			});
			this.getView().setModel(oViewModel, "detailView");
			

		},

		onYFI03: function () {
			// var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// oRouter.navTo("XMLDeleteResult");
			// MessageToast.show("Oops! Not implemented yet!");
			
			this.getOwnerComponent().getModel().remove("/payment_runSet('" + $.sap.paymentRunId + "')", {
				method : "DELETE",
				success: function(odata, response){
					if(odata){
						console.log("Successful ahjaaaaaaaaaa");
						console.log("This is odata: ");
						console.log(odata);
						// MessageBox.success("Deleted successfully.");
					}else{
						console.log("Unsuccessful ahjaaaa, wa dacht ge nu!");
						// MessageBox.error("Unable to delete.");
					}
				} 
		
			});
			
			this.getOwnerComponent().getRouter().navTo("XMLDeleteResult", {
				paymentRunId: $.sap.paymentRunId
			});
		},

		onRouteMatched: function (oEvent) {
			var oArguments = oEvent.getParameter("arguments");
			var sPaymentRunId = oArguments.paymentRunId;
			console.log(sPaymentRunId);
			this._sPaymentRunId = sPaymentRunId;
			this.onRead(sPaymentRunId);

		},

		onRead: function (id) {

			var that = this;
			//perform read operation to get details of 1 entity
			this.getOwnerComponent().getModel().read("/payment_runSet('" + id + "')", {
				success: function (oData, oResult) {
					var oModel_PaymentRun = new JSONModel();

					oModel_PaymentRun.setData(oData);
					console.log("Odata: " + JSON.stringify(oData))

					console.log(oModel_PaymentRun)
					
					$.sap.paymentRunId = oModel_PaymentRun.oData.Laufi;
					$.sap.paymentRunDate = oModel_PaymentRun.oData.Laufd;
					console.log($.sap.paymentRunId);
					console.log($.sap.paymentRunDate);
					that.displayData(oModel_PaymentRun.oData, that);

				},
				error: function (oError) {
					console.log(oError)
				}

			});

		},

		displayData: function (oModel, that) {

			//add values to text fields 

			that.getView().byId("txtLaufi").setText(oModel.Laufi === "" ? "N/a" : oModel.Laufi);
			that.getView().byId("txtLaufd").setText(oModel.Laufd === "" ? "N/a" : oModel.Laufd);
			that.getView().byId("txtZbukr").setText(oModel.Zbukr === "" ? "N/a" : oModel.Zbukr);
			that.getView().byId("txtLifnr").setText(oModel.Lifnr === "" ? "N/a" : oModel.Lifnr);
			that.getView().byId("txtKunnr").setText(oModel.Kunnr === "" ? "N/a" : oModel.Kunnr);
			that.getView().byId("txtEmpfg").setText(oModel.Empfg === "" ? "N/a" : oModel.Empfg);
			that.getView().byId("txtVblnr").setText(oModel.Vblnr === "" ? "N/a" : oModel.Vblnr);
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