// sap.ui.define([
//     "sap/ui/core/XMLComposite"
// ], function(XMLComposite) {
//     "use strict";

//     return XMLComposite.extend("demo.int.demoint.controls.RequisitionCard", {
//         metadata: {
//             properties: {
//                 reqId: { type: "string", defaultValue: "" },
//                 supplier: { type: "string", defaultValue: "" },
//                 amount: { type: "string", defaultValue: "" },
//                 riskScore: { type: "int", defaultValue: 0 },
//                 contractAvailable: { type: "boolean", defaultValue: false },
//                 budgetExceeded: { type: "boolean", defaultValue: false }
//             },
//             events: {
//                 approve: {
//                     parameters: {
//                         reqId: { type: "string" }
//                     }
//                 },
//                 blocked: {
//                     parameters: {
//                         reqId: { type: "string" },
//                         reason: { type: "string" }
//                     }
//                 }
//             }
//         },

//         // ✅ ADD THIS BLOCK
//         formatter: {
//             getContractText: function(bValue) {
//                 return bValue ? "Contract Available" : "No Contract";
//             }
//         },

//         _onApproveAccepted: function() {
//             this.fireApprove({
//                 reqId: this.getReqId()
//             });
//         },

//         _onApproveRejected: function(oEvent) {
//             this.fireBlocked({
//                 reqId: this.getReqId(),
//                 reason: oEvent.getParameter("reason")
//             });
//         }
//     });
// });


sap.ui.define([
    "sap/ui/core/XMLComposite"
], function(XMLComposite) {
    "use strict";

    return XMLComposite.extend("demo.int.demoint.controls.RequisitionCard", {
        metadata: {
            properties: {
                reqId: { type: "string", defaultValue: "" },
                supplier: { type: "string", defaultValue: "" },
                amount: { type: "string", defaultValue: "" },
                riskScore: { type: "int", defaultValue: 0 },
                contractAvailable: { type: "boolean", defaultValue: false },
                budgetPercent: { type: "int", defaultValue: 0 },   // ✅ NEW
                overdue: { type: "boolean", defaultValue: false }  // ✅ NEW
            },
            events: {
                approve: {
                    parameters: {
                        reqId: { type: "string" }
                    }
                },
                blocked: {
                    parameters: {
                        reqId: { type: "string" },
                        reason: { type: "string" }
                    }
                }
            }
        },

        // ✅ FORMATTERS (VERY IMPORTANT)
        formatter: {
            getContractText: function(v) {
                return v === true || v === "true"
                    ? "Contract Available"
                    : "No Contract";
            },

            getBudgetState: function(percent) {
                if (percent > 90) return "Error";
                if (percent > 70) return "Warning";
                return "Success";
            }
        },

        _onApproveAccepted: function() {
            this.fireApprove({
                reqId: this.getReqId()
            });
        },

        _onApproveRejected: function() {
            this.fireBlocked({
                reqId: this.getReqId(),
                reason: "Rejected by user"
            });
        }
    });
});