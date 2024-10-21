$.hmcustom.Data = {};
$.hm = function hmgrid(a) {
    this.Width = 100;
    this.ExportExcelHTML = function (tablename) {
        var tag_a = document.createElement("a");
        var tag_i = document.createElement("i");
        $(tag_i).addClass("fa fa-file-excel-o");
        $(tag_a).append(tag_i);
        $(tag_a).attr("title", "Export Excel To HTML");
        $(tag_a).click(function () {
            this.hmgrid = new hmgrid();
            this.fncExport = new this.hmgrid.Function_();
            this.fncExport.FunctionExportExcel(tablename);
        })
        return tag_a;
    };
    this.Table = function() {
        //object { Name: "", Des: "", Type: "", View: true, Filter: true, Update: false}
        this.ResProcPlan = {
            "TableInfo": { TableName: "tablePackage" },
            "SysTable": [
            { Name: "ProcCode", Des: "Ref.", Type: "string", Filter: true, View: true },
            { Name: "Subject", Des: "Package", Type: "string", Filter: true, View: true, Width: 300 },
            { Name: "Id", Des: "Id", Type: "string", Filter: true, View: false },
            { Name: "ConsStart", Des: "Start", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "LCAmount", Des: "Pkg. Cost", Type: "currency", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "PreparationDate", Des: "Prepare", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "InvitationDate", Des: "Invite", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "ClosingDate", Des: "Closing", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "OpeningDate", Des: "Opening", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "EvaluationDate", Des: "Evaluate", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "NegotiationDate", Des: "Negotiate", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "AuctionDate", Des: "Auction", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "ContractDate1", Des: "Contract On", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "CommitStatus", Des: "", Type: "number", Filter: true, FilterCompare: false, View: false},
            { Name: "ApprovalProcesses", Des: "", Type: "icon", Filter: true, FilterCompare: true, View: true },
            
            ]
        };
        this.ResProcPlanCommit = {
            "TableInfo": { TableName: "ResProcPlanCommit" },
            "SysTable": [
            { Name: "ProcCode", Des: "Ref.", Type: "string", Filter: true, View: true },
            { Name: "Subject", Des: "Package", Type: "string", Filter: true, View: true, Width: 300 },
            { Name: "Id", Des: "Id", Type: "string", Filter: true, View: false },
            { Name: "ConsStart", Des: "Start", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "Amount", Des: "Pkg. Cost", Type: "currency", Filter: true, FilterCompare: true, View: true, Update: false}
            ]
        };
        this.ResProcDL1Breakdown = function ResProcDL1Breakdown_() {
            this.ResProcDL1Breakdown_Edit = {
                "TableInfo": { TableName: "ResProcDL1Breakdown", Property: {Sum: true, Filter: true, Width:500}},
                "SysTable": [
                        { Name: "LocalId", Des: "", Type: "string", Filter: false, View: false, Update: true},
                        { Name: "MasterFormat", Des: "MF Code", Type: "string", Filter: true, View: true, Update: false, Width: 100 },
                        { Name: "ItemCode", Des: "Item Code", Type: "string", Filter: true, View: true, Update: false, Selectized: false },
                        { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true, Update: false, Width:400 },
                        { Name: "StartDate", Des: "Ready On", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
                        { Name: "EndDate", Des: "End", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
                        { Name: "Unit", Des: "Unit", Type: "string", Filter: true, View: true, Update: false, Selectized: false },
                        { Name: "Quantity", Des: "Qnty.", Type: "decimal", Filter: true, FilterCompare: true, View: true, Update: false },
                        { Name: "UnitPrice", Des: "Unit Price", Type: "currency", Filter: true, FilterCompare: true, View: true, Update: true },
                        { Name: "LCAmount", Des: "Cost", Type: "currency", Filter: true, FilterCompare: true, View: true, Update: true },
                        //{ Name: "ApprovalStatus", Des: "Status", Type: "number", Filter: false, View: true, Update: false },//để check tạm
                        //{ Name: "Approval", Des: "Status1", Type: "number", Filter: false, View: true, Update: false },//để check tạm
                        { Name: "Original", Des: "Source", Type: "string", Filter: true, View: true, Update: false, Width: 100 },

                ]
            };
            this.ResProcDL1Breakdown_NoEdit = {
                "TableInfo": { TableName: "ResProcDL1Breakdown", Property: { Sum: true, Filter: true, Width: 500 } },
                "SysTable": [
                        { Name: "LocalId", Des: "", Type: "string", Filter: false, View: false, Update: true },
                        { Name: "MasterFormat", Des: "MF Code", Type: "string", Filter: true, View: true, Width: 100 },
                        { Name: "ItemCode", Des: "Item Code", Type: "string", Filter: true, View: true },
                        { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true, Width:400 },
                        { Name: "StartDate", Des: "Ready On", Type: "datetime", Filter: true, FilterCompare: true, View: true },
                        { Name: "EndDate", Des: "End", Type: "datetime", Filter: true, FilterCompare: true, View: true },
                        { Name: "Unit", Des: "Unit", Type: "string", Filter: true, View: true },
                        { Name: "Quantity", Des: "Qnty.", Type: "decimal", Filter: true, FilterCompare: true, View: true },
                        { Name: "UnitPrice", Des: "Unit Price", Type: "currency", Filter: true, FilterCompare: true, View: true },
                        { Name: "LCAmount", Des: "Cost", Type: "currency", Filter: true, FilterCompare: true, View: true },
                        //{ Name: "ApprovalStatus", Des: "Status", Type: "number", Filter: false, View: true, Update: false },//để check tạm
                        //{ Name: "Approval", Des: "Status1", Type: "number", Filter: false, View: true, Update: false },//để check tạm
                        { Name: "Original", Des: "Source", Type: "string", Filter: true, View: true, Width: 100 }                       
                ]
            }
            this.ResProcDL1Breakdown_FullEdit = {
                "TableInfo": { TableName: "ResProcDL1Breakdown" },
                "SysTable": [
                        { Name: "LocalId", Des: "", Type: "string", Filter: false, View: false, Update: true },
                        { Name: "MasterFormat", Des: "MF Code", Type: "string", Filter: true, View: true, Update: false, Width: 100 },
                        { Name: "ItemCode", Des: "Item Code", Type: "string", Filter: true, View: true, Update: true, Selectized: false },
                        { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true, Update: true, Width: 400 },
                        { Name: "StartDate", Des: "Ready On", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: true },
                        { Name: "EndDate", Des: "End", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: true },
                        { Name: "Unit", Des: "Unit", Type: "string", Filter: true, View: true, Update: true, Selectized: true },
                        { Name: "Quantity", Des: "Qnty.", Type: "decimal", Filter: true, FilterCompare: true, View: true, Update: true },
                        { Name: "UnitPrice", Des: "Unit Price", Type: "currency", Filter: true, FilterCompare: true, View: true, Update: true },
                        { Name: "LCAmount", Des: "Cost", Type: "currency", Filter: true, FilterCompare: true, View: true, Update: true },
                        //{ Name: "ApprovalStatus", Des: "Status", Type: "number", Filter: false, View: true, Update: false },//để check tạm
                        //{ Name: "Approval", Des: "Status1", Type: "number", Filter: false, View: true, Update: false },//để check tạm
                        { Name: "Original", Des: "Source", Type: "string", Filter: true, View: true, Update: false, Width: 100 },

                ]
            };
        }
        this.ResProcDL1BreakdownView = {
            "TableInfo": { TableName: "ResProcDL1BreakdownView" },
            "SysTableProperty": ["LocalId", "MasterFormat", "ItemCode", "Description", "StartDate", "EndDate", "Unit", "Quantity", "UnitPrice", "LCAmount", "Original", "Chosen"],
            "SysTable": [
                        { Name: "LocalId", Des: "", Type: "string", Filter: false, View: false, Update: true },
                        { Name: "MasterFormat", Des: "MF Code", Type: "string", Filter: false, View: true},
                        { Name: "ItemCode", Des: "Item Code", Type: "string", Filter: false, View: true },
                        { Name: "Description", Des: "Description", Type: "string", Filter: false, View: true},
                        { Name: "StartDate", Des: "Ready On", Type: "datetime", Filter: false, View: true },
                        { Name: "EndDate", Des: "End", Type: "datetime", Filter: false,  View: true },
                        { Name: "Unit", Des: "Unit", Type: "string", Filter: false, View: true },
                        { Name: "Quantity", Des: "Qnty.", Type: "decimal", Filter: false, View: true },
                        { Name: "UnitPrice", Des: "Unit Price", Type: "currency", Filter: false, View: true },
                        { Name: "LCAmount", Des: "Cost", Type: "currency", Filter: false, View: true },
                        { Name: "Original", Des: "Source", Type: "string", Filter: false, View: true},              
                        { Name: "Chosen", Des: "", Type: "icon", Filter: true, View: true}
            ]
        };
        this.ResProcDL1BreakdownComment = {
            "TableInfo": { TableName: "ResProcDL1BreakdownComment" },
            "SysTable": [
                { Name: "Comment", Des: "Comment", Type: "string", Filter: true, View: true },
                { Name: "CreatedBy", Des: "Created By", Type: "string", Filter: true, View: true },
                { Name: "CreatedDate", Des: "Created Date", Type: "datetime", Filter: true, View: true },
            ],
        };
        this.ResProcDL1BreakdownApproval = {
            "TableInfo": { TableName: "ResProcDL1BreakdownApproval" },
            "SysTable": [
                //{ Name: "DL1BreakdownApprovalId", Des: "", Type: "string", Filter: true, View: true },
                { Name: "CreatedBy", Des: "Created By", Type: "string", Filter: true, View: true },
                { Name: "CreatedDate", Des: "Created Date", Type: "datetime", Filter: true, View: true },
                { Name: "ApprovalStatus", Des: "Report", Type: "string", Filter: true, View: true },
                { Name: "Remarks", Des: "Remarks", Type: "string", Filter: true, View: true },
                { Name: "MasterCode", Des: "Master Code", Type: "string", Filter: true, View: true },
                { Name: "ItemCode", Des: "Item Code", Type: "string", Filter: true, View: true },
                { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true },
                { Name: "StartDate", Des: "Ready On", Type: "datetime", Filter: true, FilterCompare: true, View: true },
                { Name: "EndDate", Des: "End", Type: "datetime", Filter: true, FilterCompare: true, View: true },
                { Name: "Unit", Des: "Unit", Type: "string", Filter: true, View: true },
                { Name: "Quantity", Des: "Quantity", Type: "decimal", Filter: true, FilterCompare: true, View: true },
                { Name: "LCUnitPrice", Des: "Unit Price", Type: "currency", Filter: true, FilterCompare: true, View: true },
                { Name: "LCAmount", Des: "Amount", Type: "currency", Filter: true, FilterCompare: true, View: true },
                { Name: "Original", Des: "Source", Type: "string", Filter: true, View: true },
            ]
        };
        this.ResProcDL1BreakdownLog = {
            "TableInfo": { TableName: "ResProcDL1BreakdownLog" },
            "SysTable": [
                    { Name: "CreatedBy", Des: "Created By", Type: "string", Filter: true, View: true },
                    { Name: "CreatedDate", Des: "Created Date", Type: "datetime", Filter: true, View: true },
                    //{ Name: "Remarks", Des: "Remarks", Type: "string", Filter: true, View: true },
                    { Name: "SequenceApproval", Des: "Request Edit", Type: "string", Filter: true, View: true },
                    { Name: "MasterCode", Des: "MF Code", Type: "string", Filter: true, View: true },
                    { Name: "ItemCode", Des: "Item Code", Type: "string", Filter: true, View: true },
                    { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true },
                    { Name: "StartDate", Des: "Ready On", Type: "datetime", Filter: true, FilterCompare: true, View: true },
                    { Name: "EndDate", Des: "End", Type: "datetime", Filter: true, FilterCompare: true, View: true },
                    { Name: "Unit", Des: "Unit", Type: "string", Filter: true, View: true },
                    { Name: "Quantity", Des: "Quantity", Type: "decimal", Filter: true, FilterCompare: true, View: true },
                    { Name: "LCUnitPrice", Des: "Unit Price", Type: "currency", Filter: true, FilterCompare: true, View: true },
                    { Name: "LCAmount", Des: "Amount", Type: "currency", Filter: true, FilterCompare: true, View: true },
                    { Name: "Original", Des: "Source", Type: "string", Filter: true, View: true },
                    
            ]
        };
        this.ResProcDL1BreakdownBought = {
            "TableInfo": { TableName: "ResProcDL1BreakdownBought" },
            "SysTable": [
                    { Name: "QuantityBought", Des: "QuantityBought", Type: "decimal", Filter: true, FilterCompare: true, View: true },
                    { Name: "UnitPriceBought", Des: "UnitPriceBought", Type: "currency", Filter: true, FilterCompare: true, View: true },
                    { Name: "AmountBought", Des: "AmountBought", Type: "currency", Filter: true, FilterCompare: true, View: true },
                    { Name: "CreatedBy", Des: "CreatedBy", Type: "string", Filter: true, View: true },
                    { Name: "CreatedDate", Des: "CreatedDate", Type: "datetime", Filter: true, View: true },
            ]
        }
        this.ResBoQ = {
            "TableInfo": { TableName: "ResBoQ" },
            "SysTable": [
                { Name: "LocalId", Des: "", Type: "string", Filter: false, View: false, Update: true },
                { Name: "SystemCode", Des: "MF Code", Type: "string", Filter: true, View: true },
                { Name: "OrgCode", Des: "Work Code", Type: "string", Filter: true, View: true, Update: true },
                { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true, Update: true, Width:300 },
                //{ Name: "Currency", Des: "Currency", Type: "currency", Filter: true, View: true, Update: false },
                { Name: "Unit", Des: "Unit", Type: "selected", Filter: true, View: true, Update: true, Selectized: true },
                { Name: "Qnty", Des: "Qnty", Type: "decimal", Filter: true, View: true, FilterCompare:true, Update: true },
                { Name: "LCAmount", Des: "Amount", Type: "currency", Filter: true, View: true, FilterCompare: true, Update: true},
                { Name: "BoQType", Des: "Type", Type: "string", Filter: true, View: true, Update: false },
                { Name: "Note", Des: "Note", Type: "string", Filter: true, View: true, Update: true },
            ]
        };
        this.ResWork = {
            "TableInfo": { TableName: "ResWork" },
            "SysTable": [
                { Name: "ResWorkId", Des: "", Type: "string", Filter: false, View: false, Update: true },
                { Name: "MFCode", Des: "MF Code", Type: "string", Filter: true, View: true },
                { Name: "WorkCode", Des: "Work Code", Type: "string", Filter: true, View: true, Update: true },
                { Name: "WorkName", Des: "Description", Type: "string", Filter: true, View: true, Update: true, Width: 300 },
                //{ Name: "Currency", Des: "Currency", Type: "currency", Filter: true, View: true, Update: false },
                { Name: "Unit", Des: "Unit", Type: "selected", Filter: true, View: true, Update: true, Selectized: true },
                { Name: "Quantity", Des: "Qnty", Type: "decimal", Filter: true, View: true, FilterCompare: true, Update: true },
                { Name: "Amount", Des: "Amount", Type: "currency", Filter: true, View: true, FilterCompare: true, Update: true },
                { Name: "BoQType", Des: "Type", Type: "string", Filter: true, View: true, Update: false },
                { Name: "Note", Des: "Note", Type: "string", Filter: true, View: true, Update: true },
            ]
        };
        this.ResWorkModal = {
            "TableInfo": { TableName: "ResWorkModal" },
            "SysTable": [
                { Name: "MFCode", Des: "MF Code", Type: "string", Filter: true, View: true },
                { Name: "WorkCode", Des: "Work Code", Type: "string", Filter: true, View: true, Update: false },
                { Name: "WorkName", Des: "Description", Type: "string", Filter: true, View: true, Update: false, Width: 300 },
                //{ Name: "Currency", Des: "Currency", Type: "currency", Filter: true, View: true, Update: false },
                { Name: "Unit", Des: "Unit", Type: "selected", Filter: true, View: true, Update: false },
                { Name: "Quantity", Des: "Qnty", Type: "decimal", Filter: true, View: true, FilterCompare: true, Update: false },
                { Name: "Amount", Des: "Amount", Type: "currency", Filter: true, View: true, FilterCompare: true, Update: false },
                { Name: "BoQType", Des: "Type", Type: "string", Filter: true, View: true, Update: false },
                { Name: "Note", Des: "Note", Type: "string", Filter: true, View: true, Update: false },
            ]
        };
        this.ResWorkNorm = {
            "TableInfo": { TableName: "ResWorkNorm" },
            "SysTable": [
                { Name: "ResWorkNormId", Des: "", Type: "string", Filter: false, View: false, Update: false },
                { Name: "Code", Des: "Res_Code", Type: "string", Filter: true, View: true, Update: false },
                { Name: "Name", Des: "Res_Name", Type: "string", Filter: true, View: true, Update: false },
                { Name: "Unit", Des: "Unit", Type: "string", Filter: true, View: true, Update: false},
                { Name: "Qnty", Des: "Qnty", Type: "decimal", Filter: true, View: true, Update: false },
                { Name: "Edit", Des: "", Type: "icon", Filter: true, View: true, Update: false, Width:30 },
            ]
        };
        this.ResNormResource = {
            "TableInfo": { TableName: "ResNormResource" },
            "SysTable": [
                { Name: "Code", Des: "MF Code", Type: "string", Filter: true, View: true },
                { Name: "Name", Des: "Work Code", Type: "string", Filter: true, View: true },
                { Name: "Unit", Des: "Unit", Type: "string", Filter: true, View: true, Update: false },
                { Name: "Qnty", Des: "Qnty", Type: "decimal", Filter: true, View: true, Update: false },
            ]
        }
        this.AppCustomerERP = {
            "TableInfo": { TableName: "AppCustomerERP" },
            "SysTable": [
                   { Name: "Sup_Code", Des: "Sup_Code", Type: "string", View: true, Filter: true, Update: false },
                   { Name: "SupNumber", Des: "Sup_Number", Type: "string", View: true, Filter: true, Update: false },
                   { Name: "SupName", Des: "Sup_Name", Type: "string", View: true, Filter: true, Update: false },
                   { Name: "Address", Des: "Address", Type: "string", View: true, Filter: true, Update: false },
            ]
        };
        this.CustomerMap = {
            "TableInfo": { TableName: "CustomerMap" },
            "SysTable": [
                    { Name: "LocalId", Des: "", Type: "string", View: false, Filter: false, Update: true },
                   { Name: "SupCode", Des: "SupCode", Type: "string", View: false, Filter: false, Update: true },
                   { Name: "SupNumber", Des: "Code", Type: "string", View: true, Filter: true, Update: false, Width:80 },
                   { Name: "SupName", Des: "Name", Type: "string", View: true, Filter: true, Update: false },
                   { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: true },
                   { Name: "Email", Des: "Email", Type: "string", View: true, Filter: true, Update: true },
                   { Name: "Region", Des: "Region", Type: "selectedregion", Selectized: true, View: true, Filter: true, Update: true },
                   //{ Name: "Address", Des: "Address", Type: "string", View: true, Filter: true, Update: false },
            ]
        };
        this.CustomerMap_NoEdit = {
            "TableInfo": { TableName: "CustomerMap" },
            "SysTable": [
                   { Name: "SupNumber", Des: "Code", Type: "string", View: true, Filter: true, Update: false, Width: 80 },
                   { Name: "SupName", Des: "Name", Type: "string", View: true, Filter: true, Update: false },
                   { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: false },
                   { Name: "Email", Des: "Email", Type: "string", View: true, Filter: true, Update: true },
                   { Name: "Region", Des: "Region", Type: "selectedregion", Selectized:true, View: true, Filter: true, Update: true },
                   //{ Name: "Address", Des: "Address", Type: "string", View: true, Filter: true, Update: false },
            ]
        };
        this.ComponentResource = {
            "TableInfo": { TableName: "ComponentResource" },
            "SysTable": [
                    { Name: "ItemCode", Des: "Item Code", Type: "string", View: true, Filter: true, Update: false, Width:150},
                   { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: false },
                   //{ Name: "StartDate", Des: "Start", Type: "datetime", View: true, Filter: false, Update: false, Width:100 },
                   //{ Name: "Unit", Des: "Unit", Type: "string", View: true, Filter: false, Update: false, Width: 100 },
                   //{ Name: "Quantity", Des: "Quantity", Type: "decimal", View: true, Filter: false, Update: false, Width: 100 },
                   { Name: "Amount", Des: "Amount Accept", Type: "currency", View: true, Filter: true, Update: false, Width: 100 },
                   { Name: "AmountPlan", Des: "Amount Created", Type: "currency", View: true, Filter: true, Update: false, Width: 100 },
                   { Name: "Percent", Des: "", Type: "icon", View: true, Filter: false, Update: false, Width:400 }
            ]
        };
        this.ResProcPlanWithItem = {
            "TableInfo": { TableName: "ResProcPlanWithItem" },
            "SysTable": [
            { Name: "ProcCode", Des: "Ref.", Type: "string", Filter: true, View: true },
            { Name: "Subject", Des: "Package", Type: "string", Filter: true, View: true, Width: 300 },
            { Name: "Id", Des: "Id", Type: "string", Filter: true, View: false },
            { Name: "ConsStart", Des: "Start", Type: "datetime", Filter: true, FilterCompare: true, View: true, Update: false },
            { Name: "Amount", Des: "Item Amount", Type: "currency", Filter: true, FilterCompare: true, View: true, Update: false }
            ]
        };
        this.SysRoleRes = {
            "TableInfo": { TableName: "SysRoleRes" },
            "SysTable": [
             { Name: "SysRoleId", Des: "", Type: "string", View: false, Filter: false, Update: true},
             { Name: "RoleName", Des: "Role Name", Type: "string", View: true, Filter: true, Update: true},
             { Name: "RoleCode", Des: "Role Code", Type: "string", View: true, Filter: true, Update: true},
             { Name: "LoweredRoleCode", Des: "LoweredRoleCode", Type: "string", View: true, Filter: true, Update: false},
             { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: true}
            ]
        };
        this.SysSubRoleRes = {
            "TableInfo": { TableName: "SysSubRoleRes" },
            "SysTable": [
             { Name: "SysRoleId", Des: "", Type: "string", View: false, Filter: false, Update: true },
             { Name: "SysSubRoleId", Des: "", Type: "string", View: false, Filter: false, Update: true },
             { Name: "RoleName", Des: "Role Name", Type: "string", View: true, Filter: true, Update: true },
             { Name: "RoleCode", Des: "Role Code", Type: "string", View: true, Filter: true, Update: true },
             { Name: "LoweredRoleCode", Des: "LoweredRoleCode", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: true }
            ]
        };
        this.SysUsersInRoles = {
            "TableInfo": { TableName: "SysUsersInRoles" },
            "SysTable": [
             { Name: "RoleName", Des: "Role Name", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Users", Des: "Users", Type: "string", View: true, Filter: true, Update: false },
             { Name: "IsActive", Des: "", Type: "bool", View: true, Filter: false, Update: false }
            ]
        };
        this.SysUsersInSubRoles = {
            "TableInfo": { TableName: "SysUsersInSubRoles" },
            "SysTable": [
             { Name: "LocalId", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "User", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "RoleName", Des: "Role Name", Type: "string", View: true, Filter: true, Update: false },
             { Name: "IsActive", Des: "", Type: "bool", View: true, Filter: false, Update: false }
            ]
        };
        this.ResDetailRequirementView = {
            "TableInfo": { TableName: "ResDetailRequirementView" },
            "SysTable": [
             { Name: "OrgCode", Des: "Work Code", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: true, Width: 300 },
             { Name: "Unit", Des: "Unit", Type: "selected", Filter: true, View: true, Update: true, Selectized: true },
             { Name: "Quantity", Des: "Quantity", Type: "decimal", View: true, Filter: true, FilterCompare: false, Update: true },
             { Name: "ResType", Des: "Type", Type: "string", View: false, Filter: true, Update: false },
             { Name: "LocalId", Des: "", Type: "string", View: false, Filter: false, Update: true },
             { Name: "ResId", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "OrgLanguage", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "WorkId", Des: "", Type: "string", View: false, Filter: false, Update: true },
             { Name: "IsParent", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "NumberParent", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "Type", Des: "Work Type", Type: "string", View: true, Filter: true, Update: false },
             { Name: "ResNorm", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "Distributed", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "NumResource", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "Progress", Des: "", Type: "decimal", View: false, Filter: false, Update: false },
            ]
        };
        this.CsResDetailResourceView = {
            "TableInfo": { TableName: "CsResDetailResourceView" },
            "SysTable": [
             { Name: "OrgCode", Des: "Work Code", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: false, Width: 300 },
             { Name: "Unit", Des: "Unit", Type: "selected", Filter: true, View: true, Update: false, Selectized: false },
             { Name: "Quantity", Des: "Quantity", Type: "decimal", View: true, Filter: true, FilterCompare: false, Update: false },
             { Name: "ResType", Des: "Type", Type: "string", View: false, Filter: true, Update: false },
             { Name: "LocalId", Des: "", Type: "string", View: false, Filter: false, Update: true },
             { Name: "ResId", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "OrgLanguage", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "WorkId", Des: "", Type: "string", View: false, Filter: false, Update: true },
             { Name: "IsParent", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "NumberParent", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "NumberMaterial", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "NumberResource", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "Type", Des: "Resource Type", Type: "string", View: true, Filter: true, Update: false },
             { Name: "ResNorm", Des: "", Type: "string", View: false, Filter: false, Update: false },
             { Name: "Progress", Des: "", Type: "decimal", View: false, Filter: false, Update: false },
            ]
        };
        this.DetailRequirWithDetailRequirSummary = {
            "TableInfo": { TableName: "DetailRequirWithDetailRequirSummary" },
            "SysTable": [
                { Name: "OrgCode", Des: "Work Code", Type: "string", Filter: true, View: true },
                { Name: "Description", Des: "Des", Type: "string", Filter: true, View: true },
                { Name: "Unit", Des: "Unit", Type: "string", Filter: true, View: true },
                { Name: "Quantity", Des: "Qnty", Type: "decimal", Filter: true, FilterCompare:false, View: true },
                { Name: "Type", Des: "Type", Type: "string", Filter: true, View: true },
                { Name: "IsParent", Des: "IsNorm", Type: "string", Filter: true, View: true },
                { Name: "Distribute", Des: "Distribute", Type: "string", Filter: true, View: true },
                { Name: "ResNorm", Des: "Norm Name", Type: "string", Filter: true, View: true },
            ]
        };
        //dùng cho documentFile
        this.DocumentFile = {
            "TableInfo": { TableName: "DocumentFile" },
            "SysTable": [
             { Name: "FileName", Des: "File Name", Type: "string", View: true, Filter: true, Update: false },
             { Name: "CreatedBy", Des: "Created By", Type: "string", View: true, Filter: true, Update: false },//người sở hửu dữ liệu
             { Name: "CreatedDate", Des: "Created Date", Type: "date", View: true, Filter: true, Update: false },
             { Name: "UploadBy", Des: "Upload By", Type: "string", View: false, Filter: true, Update: false }
            ]
        };
        this.DispatchArrived = {
            "TableInfo": { TableName: "DispatchArrived" },
            "SysTable": [
              { Name: "FileName", Des: "File Name", Type: "string", View: true, Filter: true, Update: false },
              { Name: "SignDate", Des: "Sign-Date", Type: "date", View: true, Filter: true, Update: false },
              { Name: "CreatedDate", Des: "Request Date", Type: "date", View: true, Filter: true, Update: false },
              { Name: "CreatedBy", Des: "Created By", Type: "string", View: true, Filter: true, Update: false },
            ]
        };
        this.DispatchAway = {
            "TableInfo": { TableName: "DispatchAway" },
            "SysTable": [
             { Name: "FileName", Des: "File Name", Type: "string", View: true, Filter: true, Update: false },
             //{ Name: "CreatedBy", Des: "Sign-by", Type: "string", View: true, Filter: true, Update: false },
             //{ Name: "SignDate", Des: "Sign-Date", Type: "date", View: true, Filter: true, Update: false },
             //{ Name: "CreatedDate", Des: "Request Date", Type: "date", View: true, Filter: true, Update: false }
            ]
        };
        this.SignBy = {
            "TableInfo": { TableName: "SignBy" },
            "SysTable": [
             { Name: "FullName", Des: "Sign-By", Type: "string", View: true, Filter: true, Update: false },
             { Name: "SignDate", Des: "Sign-Date", Type: "date", View: true, Filter: true, Update: false },
             { Name: "Note", Des: "Note", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Status", Des: "", Type: "icon", View: true, Filter: true, Update: false, Width:50 }
            ]
        };
        this.Department = {
            "TableInfo": { TableName: "Department" },
            "SysTable": [
             { Name: "Name", Des: "Department", Type: "string", View: true, Filter: true, Update: false }
            ]
        };
        //dùng cho tổng hợp nguồn lực
        this.ProcureContainItem = {
            "TableInfo": { TableName: "ProcureContainItem" },
            "SysTable": [
             { Name: "ItemId", Des: "", Type: "string", View: false, Filter: false, Update: true },
             { Name: "ProcPlanId", Des: "", Type: "string", View: false, Filter: false, Update: true },
             { Name: "ProcCode", Des: "Proc.Code", Type: "string", View: true, Filter: true, Update: false },
             { Name: "ItemCode", Des: "Code", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Description", Des: "Name", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Unit", Des: "Unit", Type: "string", View: true, Filter: true, Update: false },
             { Name: "StartDate", Des: "Date", Type: "datetime", View: true, Filter: true, Update: false },
             { Name: "Quantity", Des: "Quantity", Type: "decimal", View: true, Filter: true, Update: false },
             { Name: "UnitPrice", Des: "Est.Price", Type: "currency", View: true, Filter: true, Update: false },
             { Name: "PriceBought", Des: "Price", Type: "currency", View: true, Filter: false, Update: true },
             { Name: "Amount", Des: "Est.Cost", Type: "currency", View: true, Filter: true, Update: false },
            ]
        }
    };
    this.TableChart = function _TableChart() {
        this.ProcureCost = {
            "TableInfo": { TableName: "ProcureCost" },
            "SysTable": [{ Name: "ProcCode", Des: "Procurement Code", Type: "string", View: true, Filter: true, Update: false},
            { Name: "Subject", Des: "Subject", Type: "string", View: true, Filter: true, Update: false},
            { Name: "Amount", Des: "Amount", Type: "currency", View: true, Filter: true, Update: false }
            ]
        },
        this.ProcureDur = {
            "TableInfo": { TableName: "ProcureDur" },
            "SysTable": [{ Name: "ProcCode", Des: "Procurement Code", Type: "string", View: true, Filter: true, Update: false },
            { Name: "Subject", Des: "Subject", Type: "string", View: true, Filter: true, Update: false },
            { Name: "Duration", Des: "Duration", Type: "number", View: true, Filter: true, Update: false }
            ]
        },
         this.ProcureDurCost = {
             "TableInfo": { TableName: "ProcureDurCost" },
             "SysTable": [{ Name: "ProcCode", Des: "Procurement Code", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Subject", Des: "Subject", Type: "string", View: true, Filter: true, Update: false },
             { Name: "Duration", Des: "Duration", Type: "number", View: true, Filter: true, Update: false },
             { Name: "AmountAccept", Des: "Accept Amount", Type: "currency", View: true, Filter: true, Update: false },
             { Name: "Amount", Des: "Amount", Type: "currency", View: true, Filter: true, Update: false }
             ]
         }
    }
    this.Function_ = function TableExport() {
        this.FunctionExportExcel = function (tablename) {
            $("table[name='" + tablename + "']").table2excel({
                filename: "Export" + tablename + ".xls"
            });
        }
    };
}


$.hmcustom.Data.ResProcPlan = {
    "TableInfo": { TableName: "tablePackage"},
    "SysTable": [
    { Name: "ProcCode", Des: "Ref.", Type: "string", Filter: true, View: true },
    { Name: "Subject", Des: "Package", Type: "string", Filter: true, View: true, Width:300 },
    { Name: "Id", Des: "Id", Type: "string", Filter: true, View: false },
    { Name: "ConsStart", Des: "Start", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "ConsEnd", Des: "End", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "DurationInDay", Des: "Duration", Type: "number", Filter: true, FilterCompare: true, View: true },
    { Name: "LCAmount", Des: "Pkg. Cost", Type: "currency", Filter: true, FilterCompare: true, View: true },
    //{ Name: "BidDocDur", Des: "BidDocDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "InvitationDur", Des: "InvitationDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "PrequalDur", Des: "PrequalDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "SubmissionDur", Des: "SubmissionDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "ClosingDur", Des: "ClosingDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "OpenDur", Des: "OpenDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "EvaluationDur", Des: "EvaluationDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "NegoDur", Des: "NegoDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "ContractAwardDur", Des: "ContractAwardDur", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "PreparationDate", Des: "Prepare", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "InvitationDate", Des: "Invite", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "ClosingDate", Des: "Closing", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "OpeningDate", Des: "Opening", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "EvaluationDate", Des: "Evaluate", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "NegotiationDate", Des: "Negotiate", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "AuctionDate", Des: "Auction", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "ContractDate1", Des: "Contract On", Type: "datetime", Filter: true, FilterCompare: true, View: true },
     { Name: "CommitStatus", Des: "", Type: "number", Filter: true, FilterCompare: false, View: false },
    //{ Name: "ProposalDate", Des: "ProposalDate", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "PrequalDate", Des: "PrequalDate", Type: "datetime", Filter: true, FilterCompare: true, View: true },ApprovalProcesses
    //{ Name: "ApprovalStatus", Des: "", Type: "icon", Filter: true, FilterCompare: true, View: true },
    { Name: "ApprovalProcesses", Des: "", Type: "icon", Filter: true, FilterCompare: true, View: true }
    ]
};

//$.hmcustom.Data.ResProcPlan1 = {
//    "TableInfo": { TableName: "tablePackage" },
//    "SysTable": [
//    { Name: "ProcCode", Des: "Ref.", Type: "string", Filter: true, View: true },
//    { Name: "Subject", Des: "Package", Type: "string", Filter: true, View: true, Width: 300 },
//    { Name: "Id", Des: "Id", Type: "string", Filter: true, View: false },
//    { Name: "ConsStart", Des: "Start", Type: "datetime", Filter: true, FilterCompare: true, View: true },
//    { Name: "LCAmount", Des: "Pkg. Cost", Type: "currency", Filter: true, FilterCompare: true, View: true },
//    { Name: "ApprovalStatus", Des: "", Type: "icon", Filter: true, FilterCompare: true, View: true },
//    ]
//};

$.hmcustom.Data.ResProcPlanProcessesTime = {
    "TableInfo": { TableName: "ResProcPlanProcessesTime" },
    "SysTable": [
    { Name: "ProcProcessId", Des: "", Type: "string", Filter: false, View: false, Update:true },
    { Name: "ParameterName", Des: "Process Name", Type: "string", Filter: true, View: true },
    { Name: "StartDate", Des: "Date", Type: "datetime", Filter: true, View: true, Update: true },
    { Name: "Duration", Des: "Duration", Type:"number", Filter: true, View: true, Update:true}
    ]
};

$.hmcustom.Data.ResProcPlanResponsibility = {
    "TableInfo": { TableName: "ResProcPlanResponsibility" },
    "SysTable": [
    { Name: "ProcessApprovalId", Des: "", Type: "string", Filter: false, View: false, Update: true },
    { Name: "PackageTypeName", Des: "Package Type", Type: "string", Filter: true, View: true },
    { Name: "ParameterName", Des: "Process Name", Type: "string", Filter: true, View: true },
    { Name: "ApprovalBy", Des: "Approved By", Type: "selecteduser", Filter: true, View: true, Update: true, Selectized: true },
    { Name: "Sequence", Des: "", Type: "string", Filter: false, View: false, Update:true },
    { Name: "PackageType", Des: "", Type: "string", Filter: false, View: false, Update: true }, 
    { Name: "ProcessDefaultId", Des: "", Type: "string", Filter: false, View: false, Update: true },
    //{ Name: "DepartmentId", Des: "Department", Type: "string", Filter: true, View: true, Update: true },
    //{ Name: "PositionId", Des: "Position", Type: "string", Filter: true, View: true, Update: true }
    ]
}

$.hmcustom.Data.PmsContractApproval = {
    "TableInfo": { TableName: "PmsContractApproval" },
    "SysTable": [
    { Name: "ContractApprovalId", Des: "", Type: "string", Filter: false, View: false, Update: true },
    { Name: "ContractId", Des: "", Type: "string", Filter: false, View: false, Update: true },
    { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true },
    { Name: "SiteManager", Des: "Site Manager", Type: "selecteduser", Filter: true, View: true, Update: true, Selectized: true },
    { Name: "ProjectManager", Des: "Project Manager", Type: "selecteduser", Filter: true, View: true, Update: true, Selectized: true },
    { Name: "PMO", Des: "PMO", Type: "selecteduser", Filter: true, View: true, Update: true, Selectized: true },
    { Name: "CEO", Des: "CEO", Type: "selecteduser", Filter: true, View: true, Update: true, Selectized: true },
    ]
}

$.hmcustom.Data.PmsProcProcessesComment = {
    "TableInfo": { TableName: "PmsProcProcessesComment" },
    "SysTable": [
    { Name: "ApprovedDate", Des: "Approved Date", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "ProcProcessesCommentId", Des: "", Type: "string", Filter: false, View: false, Update: true },
    { Name: "ProcId", Des: "", Type: "string", Filter: false, View: false, Update: true },
    { Name: "SequenceName", Des: "Sequence", Type: "string", Filter: true, View: true },
    { Name: "ApprovedBy", Des: "ApprovedBy", Type: "string", Filter: true, View: true },
    { Name: "ApprovalStatus", Des: "Report", Type: "string", Filter: true, View: true },
    { Name: "Amount", Des: "Cost", Type: "currency", Filter: true, View: true },
    { Name: "Comment", Des: "Comment", Type: "string", Filter: true, View: true },
    { Name: "StartDate", Des: "Start", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "PreparationDate", Des: "Preparation", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "InvitationDate", Des: "Invitation", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "ClosingDate", Des: "Closing", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "OpeningDate", Des: "Opening", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "EvaluationDate", Des: "Evaluation", Type: "datetime", Filter: true, FilterCompare: true, View: true },
     { Name: "NegotiationDate", Des: "Negotiate", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "AuctionDate", Des: "Auction", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    { Name: "ContractDate1", Des: "Contract On", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "ProposalDate", Des: "ProposalDate", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    //{ Name: "PrequalDate", Des: "PrequalDate", Type: "datetime", Filter: true, FilterCompare: true, View: true },
    ]
};

$.hmcustom.Data.ResWorkGroupType = {
    "TableInfo": { TableName: "ResWorkGroupType" },
    "SysTable": [
    { Name: "WorkGroupTypeId", Des: "", Type: "string", Filter: false, View: false, Update: true },
    { Name: "WorkTypeCode", Des: "Code", Type: "string", Filter: true, View: true, Update: true, Width: 50 },
    { Name: "WorkTypeName", Des: "Description", Type: "string", Filter: true, View: true, Update: true },
    //{ Name: "DepartmentName", Des: "Department", Type: "selectedDep", Filter: false, View: true, Update: true, Selectized: true },
    ]
}
$.hmcustom.Data.ResWorkGroupType_NoEdit = {
    "TableInfo": { TableName: "ResWorkGroupType" },
    "SysTable": [
    { Name: "WorkGroupTypeId", Des: "", Type: "string", Filter: false, View: false, Update: false},
    { Name: "WorkTypeCode", Des: "Code", Type: "string", Filter: true, View: true, Update: false, Width: 50 },
    { Name: "WorkTypeName", Des: "Description", Type: "string", Filter: true, View: true, Update: false },
    ]
}

$.hmcustom.Data.ResWorkGroupTypeDetail = {
    "TableInfo": { TableName: "ResWorkGroupTypeDetail" },
    "SysTable": [
    { Name: "WorkTypeDetailId", Des: "", Type: "string", Filter: false, View: false, Update: true },
    { Name: "Subject", Des: "", Type: "string", Filter: false, View: false, Update: false },
    { Name: "Subject_VN", Des: "Subject", Type: "string", Filter: true, View: true, Update: true },
    { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true, Update: true },
    { Name: "MFCode", Des: "MFCode", Type: "string", Filter: true, View: true, Update: true, Width: 70 },
    { Name: "CodeDetail", Des: "CodeDetail", Type: "string", Filter: true, View: true, Update: true, Width: 70 },
    { Name: "FullCode", Des: "FullCode", Type: "string", Filter: true, View: true, Update: false,Width:90 }
    ]
}
$.hmcustom.Data.ResWorkGroupTypeDetail_NoEdit = {
    "TableInfo": { TableName: "ResWorkGroupTypeDetail" },
    "SysTable": [
    { Name: "WorkTypeDetailId", Des: "", Type: "string", Filter: false, View: false, Update: false},
    { Name: "Subject", Des: "", Type: "string", Filter: false, View: false, Update: false },
    { Name: "Subject_VN", Des: "Subject", Type: "string", Filter: true, View: true, Update: false },
    { Name: "Description", Des: "Description", Type: "string", Filter: true, View: true, Update: false },
    //{ Name: "MFCode", Des: "MFCode", Type: "string", Filter: true, View: true, Update: false , Width:70},
    //{ Name: "CodeDetail", Des: "CodeDetail", Type: "string", Filter: true, View: true, Update: false, Width: 70 },
    { Name: "FullCode", Des: "FullCode", Type: "string", Filter: true, View: true, Update: false, Width:90 }
    ]
}

$.hmcustom.Data.SysType = {
    "TableInfo": { TableName: "SysType" },
    "SysTable": [{ Name: "SysTypeId", Des: "", Type: "string", View: false, Filter: false, Update: true, Width:100 },
    { Name: "SysCode", Des: "SysCode", Type: "string", View: true, Filter: true, Update: false, Width: 100 },
    { Name: "TypeName", Des: "Name", Type: "string", View: true, Filter: true, Update: true, Width: 100 },
    { Name: "Properties", Des: "Properties", Type: "string", View: true, Filter: true, Width: 100 },
    //{ Name: "Selected", Des: "Selected", Type: "bool", View: true, Filter: false, Update: true, Width: 100 },
    { Name: "IsActive", Des: "IsActive", Type: "bool", Filter: false, View: true, Update: true, Width: 100}]
}

$.hmcustom.Data.AppConstructionManagerView ={
    "TableInfo": { TableName: "AppConstructionManagerView" },
    "SysTable": [{ Name: "ConstructionManagerID", Des: "", Type: "string", View: false, Filter: false, Update: false },
                 { Name: "ConstructionID", Des: "", Type: "string", View: false, Filter: false, Update: false },
                 { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: false},
                 { Name: "UserName", Des: "User Name", Type: "string", View: true, Filter: true, Update:false },
                 { Name: "RoleName", Des: "Role Name", Type: "string", View: true, Filter: true, Update: false }]
}
$.hmcustom.Data.SysRoleRes = {
    "TableInfo": { TableName: "SysRoleRes" },
    "SysTable": [
     { Name: "SysRoleId", Des: "", Type: "string", View: false, Filter: false, Update: true },
     { Name: "RoleName", Des: "Name", Type: "string", View: true, Filter: true, Update: false },
     { Name: "RoleCode", Des: "Code", Type: "string", View: true, Filter: true, Update: false },
     { Name: "LoweredRoleCode", Des: "LoweredRoleCode", Type: "string", View: true, Filter: true, Update: false },
     { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: false }
    ]
}
$.hmcustom.Data.SysSubRoleRes = {
    "TableInfo": { TableName: "SysSubRoleRes" },
    "SysTable": [
     { Name: "SysRoleId", Des: "", Type: "string", View: false, Filter: false, Update: true },
     { Name: "RoleName", Des: "Role Name", Type: "string", View: true, Filter: true, Update: true },
     { Name: "RoleCode", Des: "Role Code", Type: "string", View: true, Filter: true, Update: true },
     { Name: "LoweredRoleCode", Des: "LoweredRoleCode", Type: "string", View: true, Filter: true, Update: false },
     { Name: "Description", Des: "Description", Type: "string", View: true, Filter: true, Update: true }
    ]
};
$.hmcustom.Data.SysUsersInRoles = {
    "TableInfo": { TableName: "SysUsersInRoles" },
    "SysTable": [
     { Name: "RoleName", Des: "Name", Type: "string", View: true, Filter: true, Update: false },
     { Name: "Users", Des: "Users", Type: "string", View: true, Filter: true, Update: false }
    ]
}
$.hmcustom.Data.SysUsersInSubRoles = {
    "TableInfo": { TableName: "SysUsersInSubRoles" },
    "SysTable": [
     { Name: "LocalId", Des: "", Type: "string", View: false, Filter: false, Update: false },
     { Name: "User", Des: "", Type: "string", View: false, Filter: false, Update: false },
     { Name: "RoleName", Des: "Role Name", Type: "string", View: true, Filter: true, Update: false },
     { Name: "IsActive", Des: "", Type: "bool", View: true, Filter: false, Update: false }
    ]
};