sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("dwp.sapui5_project_YFI03_YFI04.controller.XMLDeleteResult", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf dwp.sapui5_project_YFI03_YFI04.view.XMLDeleteResult
		 */
		onInit: function () {

			this.getOwnerComponent().getRouter().getRoute("XMLDeleteResult").attachMatched(this._handleRouteMatched, this);
		},

		onYFI04: function () {
			//MessageToast.show("Oops! Not implemented yet!²");
			// this.getOwnerComponent().getRouter().navTo("Detail", {
			// 	paymentRunId: oPayment_run.Laufi
			// });
			var oEntry = {};

			oEntry.Laufi = $.sap.paymentRunId;
			oEntry.Laufd = $.sap.paymentRunDate;
			oEntry.Revreason = this.getView().byId("ReversalReason").getSelectedKey();

			console.log("YFI04 ID: " + oEntry.Laufi);
			console.log("YFI04 Date: " + oEntry.Laufd);
			console.log("YFI04 Reversal Reason: " + oEntry.Revreason);

			this.getOwnerComponent().getModel().update("/payment_runSet('" + oEntry.Laufi + "')", oEntry, {
				method: "PUT",
				success: function (odata) {
					alert("success");
					console.log("Success in YFI04: ");
					console.log(odata);
				},
				error: function (e) {
					console.log("Error in YFI04");
					alert("error");
				}
			});
		},

		_handleRouteMatched: function (oEvent) {

			var oArguments = oEvent.getParameter("arguments");
			var sPaymentRunId = oArguments.paymentRunId;
		
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

					console.log(oModel_PaymentRun)

					$.sap.paymentRunId = oModel_PaymentRun.oData.Laufi;
					$.sap.paymentRunDate = oModel_PaymentRun.oData.Laufd;
					console.log($.sap.paymentRunId);
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