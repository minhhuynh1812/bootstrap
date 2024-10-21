$.hmcustom = {};
$.hmcustom.table = {};
$.hmcustom.function = {};
$.hmcustom.table.odd = 3;
$.hmcustom.table.cost = 0;
$.hmcustom.table.percent = 2;
$.hmcustom.AddRowWaiting = function (id, colspan) {
    return '<tr style="display:none" id="' + id + '" class="row-wait"><td class="text-center" colspan="' + colspan + '"><i class="fa fa-refresh fa-spin"></i></td></tr>';
}
$.hmcustom.AddRowLoadmore = function (trid, aid, colspan, func) {
    return '<tr style="display:none" id="' + trid + '"><td class="text-center" colspan="' + colspan + '"><a onclick="' + func + '" name="' + aid + '" id="' + aid + '" data-page="1" href="javascript:;" style="display:block"></a></td></tr>';
}
$.hmcustom.waiting = function (category, id) {
    switch (category) {
        case "all":
            $("#spindelayLoadData").modal("show");
            break;
        case "tb":
            $("#" + id).attr("style", "", true)
            break
        default:
            $("#divwaitingsave").attr("class", "overlay", true);
            $($("#divwaitingsave")[0].firstElementChild).attr("class", "fa fa-refresh fa-spin", true);
            break;
    }
}
$.hmcustom.endwaiting = function (category, id) {
    switch (category) {
        case "all":
            $("#spindelayLoadData").modal("hide");
            break;
        case "tb":
            $("#" + id).attr("style", "display:none", true)
            break
        default:
            $("#divwaitingsave").attr("class", "", true);
            $($("#divwaitingsave")[0].firstElementChild).attr("class", "", true);
            break;
    }
}
$.hmcustom.table.DateCompare = function (startdate, enddate) {
    var stdate = new Date(startdate);
    var eddate = new Date(enddate);
    if (stdate < eddate) {
        alert("ngày bắt đầu nhỏ hơn ngày kết thúc!");
    }
}
$.hmcustom.table.DateTimeConvert = function (date) {
    if (date != null) {
        var getstringnumber = date.match(/[0-9]/g);
        var startdate = Number(getstringnumber.join(""))
        startdate = new Date(startdate);
        var datestartformat = ((startdate.getMonth() + 1) >= 10 ? (startdate.getMonth() + 1) : "0" + (startdate.getMonth() + 1)) + "/" + (startdate.getDate() >= 10 ? startdate.getDate() : "0" + startdate.getDate()) + "/" + startdate.getFullYear();
        return datestartformat;
    }
    return "";
}
$.hmcustom.table.DateTimeConvertFullTime = function (date) {
    if (date != null) {
        var getstringnumber = date.match(/[0-9]/g);
        var startdate = Number(getstringnumber.join(""))
        startdate = new Date(startdate);
        var datestartformat = ((startdate.getMonth() + 1) >= 10 ? (startdate.getMonth() + 1) : "0" + (startdate.getMonth() + 1)) + "/" + (startdate.getDate() >= 10 ? startdate.getDate() : "0" + startdate.getDate()) + "/" + startdate.getFullYear() + " " + startdate.getHours() + ":" + startdate.getMinutes() + ":" + startdate.getSeconds();
        return datestartformat;
    }
    return "";
}
$.hmcustom.table.DateTimeConvertChart = function (date) {
    if (date != null) {
        var getstringnumber = date.match(/[0-9]/g);
        var startdate = Number(getstringnumber.join(""))
        startdate = new Date(startdate);
        var datestartformat = startdate.getFullYear() + "-" + ((startdate.getMonth() + 1) >= 10 ? (startdate.getMonth() + 1) : "0" + (startdate.getMonth() + 1)) + "-" + (startdate.getDate() >= 10 ? startdate.getDate() : "0" + startdate.getDate());
        return datestartformat;
    }
    return "";
}
$.hmcustom.table.DateTimeConvertString = function (date) {
    if (date != null) {
        return ((Number(date.getMonth()) + 1) > 9 ? (Number(date.getMonth()) + 1) : ("0" + (Number(date.getMonth()) + 1))) + "/" + (date.getDate() > 9 ? date.getDate() : ("0" + date.getDate())) + "/" + date.getFullYear();
    }
    return "";
}
$.hmcustom.table.Create = function (arraytable, tablename, action, fontsize) {
    var htmlheader = "";
    var countcol = 1;
    let font_size = "font-size:12px";
    let paratablename = "'" + tablename + "'";
    if (fontsize != null && fontsize != "" && fontsize != "undefined") {
        font_size = "font-size:" + fontsize + "px";
    }
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "";
        var display = "";
        var colortext = "";
        if (!v.View) {
            display = "display:none";
        }
        else {
            countcol += 1;
        }
        var itemvalue = v.Des;
        switch (v.Type) {
            case "string":
                break;
            case "datetime":
                classtype = "text-right";
                break;
            case "number":
                classtype = "text-right";
                break;
            case "decimal":
            case "currency":
                classtype = "text-right";
                break;
            case "icon":
                classtype = "text-center";
                style = "vertical-align:middle";
                itemvalue = "";
                break;
        }
        if (v.Update) {
            colortext = "color:#337ab7";
        }
        htmlheader += "<th class='" + classtype + "' style='" + style + "; " + display + "; " + colortext + "'>" + itemvalue + "</th>";
    })
    var htmlfilter = "";
    let htmlsum = "";
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "";
        var display = "";
        var displayfilter = "";
        var formatdatetime = "";
        var htmledit = "";
        if (!v.View) {
            display = "display:none";
        }
        if (!v.Filter) {
            displayfilter = "display:none";
        }
        var itemvalue = v.Name
        switch (v.Type) {
            case "string":
                break;
            case "datetime":
                classtype = "text-right";
                formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                break;
            case "number":
                classtype = "text-right";
                break;
            case "decimal":
            case "currency":
                classtype = "text-right";
                break;
            case "icon":
                classtype = "text-center";
                style = "vertical-align:middle";
                //itemvalue = "";
                display = "display:none";
                htmledit = v.Des;
                break;
        }
        if (v.Type == "icon") {
            htmlfilter += "<th class='" + classtype + "'  style='" + style + "'>" + htmledit + "</th>";
            if (itemvalue == "Edit") {
                htmlsum += '<th class="' + classtype + '"  style="' + style + '"><a href="javascript:void(0);" title="Clear" onclick="$.hmcustom.table.ClearText(this,' + paratablename + ')"><i class="fa fa-eraser"></i></a></th>';
            }
        }
        else {
            htmlfilter += "<th style='" + style + "; font-size:12px; " + display + "'><input " + formatdatetime + " style='" + displayfilter + "' class='form-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/></th>";
            htmlsum += "<th style='" + style + "; font-size:12px; " + display + "' data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' class='" + classtype + "'></th>";
        }

    })
    //style="font-size:12px"
    var htmltable = '<form>' +
                        '<table class="table table-bordered table-condensed" name="' + tablename + '" data-area="' + action + '" style="' + font_size + '">' +
                                '<thead>' +
                                    '<tr class="row-header">' +
                                        '<th><input type="hidden" value="0" name="page" id="inputpage' + tablename + '"/></th>' +
                                        htmlheader +
                                    '</tr>' +
                                    '<tr class="row-filter">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:$.hmcustom.table.collapseSummary(' + paratablename + ');"><small class="label label-default text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                        htmlfilter +
                                    '</tr>' +
                                     '<tr class="row-sum">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:void(0);" onclick="$.hmcustom.table.SumRow(this,' + paratablename + ')" class="btn-default btn-flat"><img src="/Content/themes/accounting/images/sigma.png"/></a></th>' +
                                        htmlsum +
                                    '</tr>' +
                                '</thead>' +
                                '<tbody id="tbody' + tablename + '"></tbody>' +
                                '<tfoot>' +
                                    $.hmcustom.AddRowWaiting("trwaiting" + tablename, countcol) +
                                    $.hmcustom.AddRowLoadmore("trloadmore" + tablename, "aloadmore" + tablename, countcol, null) +
                                '</tfoot>' +
                        '</table>' +
                    '</form>';
    return htmltable;
}
$.hmcustom.table.AddRowtbody = function (arraytable, tablename, datarow, html) {
    var trvalue = "";
    var count_row = $("#tbody" + tablename + " tr[name='trvalue']").length + 1;
    $.each(datarow, function (i, v) {
        var tdvalue = "";
        $.each(arraytable, function (_i, _v) {
            let classtype = "";
            let style = "";
            let display = "";
            let Editcolum = "";
            let inputedit = "";
            let paratable = "'" + tablename + "'";
            let categorychosen = "'" + "DF" + "'";
            let chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            if (!_v.View) {
                display = "display:none";
            }
            var itemvalue = v[_v.Name];
            var itemvalueorg = v[_v.Name];
            switch (_v.Type) {
                case "string":
                    if (itemvalue == "" || itemvalue == null) {
                        itemvalue = "";
                    }

                    break;
                case "datetime":
                    classtype = "text-right";
                    if (itemvalue != null && itemvalue != "") {
                        itemvalueorg = $.hmcustom.table.DateTimeConvert(v[_v.Name]);
                        itemvalue = $.hmcustom.table.DateTimeConvert(v[_v.Name]);
                    }
                    else {
                        itemvalue = "";
                    }
                    break;
                case "number":
                    classtype = "text-right";
                    break;
                case "decimal":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.odd, minimumFractionDigits: $.hmcustom.table.odd });
                    break;
                case "currency":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    break;
                case "icon":
                    classtype = "text-center";
                    style = "vertical-align:middle";
                    itemvalue = v[_v.Name];
                    chosenelement = "";
                    break;
            }
            if (_v.Update) {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" name="' + _v.Name + '" value="' + itemvalueorg + '" data-type="' + _v.Type + '" type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
                chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            }

            tdvalue += "<td class='" + classtype + "'  data-type='" + _v.Type + "'  data-fieldname='" + _v.Name + "' " + Editcolum + " style='" + display + ";" + style + "' " + Editcolum + " " + chosenelement + ">" + inputedit + itemvalue + "</td>";
        })
        trvalue += "<tr onclick='$.hmcustom.table.ClickRow(this)' class='row-data' name='trvalue'><td class='text-center'>" + count_row + "</td>" + tdvalue + "</tr>";
        count_row += 1;
    })
    return trvalue;
}
$.hmcustom.table.EditColumn = function (a) {
    var area = $($(a).closest("table")).attr("data-area");
    let fieldname = $(a).attr("data-fieldname");
    $($(a).get(0).firstChild).removeAttr("type");
    $($(a).get(0).firstChild).removeAttr("style");
    $($(a).get(0).firstChild).val("");
    $($(a).get(0).firstChild).focus();
    var datatype = $($($(a).get(0).firstChild)).attr("data-type");
    switch (datatype) {
        case "selected":
            var selectized = $($(a).get(0).firstChild).selectize({
                delimiter: ',',
                persist: false,
                preload: true,
                maxItems: 1,
                maxOptions: 30,
                valueField: 'Value',
                searchField: ['Value', 'Text'],
                create: false,
                render: {
                    item: function (item, escape) {
                        var outerhtml = $($(a).get(0).firstChild).closest("tr").get(0).outerHTML;
                        var form = document.createElement("form")
                        $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                        $(form).append(outerhtml);
                        var input = document.createElement("input");
                        $(input).attr("name", "contractid");
                        $(input).attr("value", $.hmcustom.para.Contractid);
                        $(form).append(input);
                        var input1 = document.createElement("input");
                        $(input1).attr("name", "Unit");
                        $(input1).attr("value", item.Value);
                        $(form).append(input1);
                        $.post(area, $(form).serialize(), function (res, status) {
                            if (status == "success") {
                                if (res["Errors"].length != 0) {
                                    if (res["Errors"] == "Login") {
                                        location.replace("/Account/Login");
                                    }
                                    $(a).attr("style", "outline:1px solid #dd4b39", true);
                                    var content = "";
                                    $.each(res["Errors"], function (i, v) {
                                        content += "<li>" + v + "</li>";
                                    })
                                    var ul = "<ul style='padding:3px'>" + content + "</ul>";
                                    $(a).popover({
                                        trigger: 'hover',
                                        container: 'body',
                                        placement: 'top',
                                        html: 'true',
                                        title: 'Error',
                                        content: ul,
                                    });
                                }
                                else {
                                    //$($(a).get(0).firstChild).attr("class", "input-sm form-control", true)
                                    //$($(a).get(0).firstChild).removeAttr("style");
                                    //$($(a).get(0).firstChild).removeAttr("tabindex");
                                    $($(a).get(0).firstChild).attr("Type", "hidden", true)
                                    //$($(a).get(0).firstChild).attr("Value", "", true)
                                    selectized[0].selectize.destroy();
                                    //$(a).get(0).childNodes[1].remove();
                                    $(a).get(0).lastChild.data = item.Text;
                                    $(a).attr("style", "", true);
                                    $(a).click(function () {
                                        var id = $(a).attr("aria-describedby");
                                        $("#" + id).popover('destroy');
                                    })
                                }
                            }
                        })
                        return '<div class="item"><span" href="' + escape(item.Value) + '">' + escape(item.Text) + '</span></div>';
                    },
                    option: function (item, escape) {
                        return "<div data-value=" + escape(item.Value) + " data-selectable='' class='option'><span style='font-size:10px'>" + escape(item.Value) + "</span><span class='badge bg-blue small' style='font-size:10px'>" + escape(item.Text) + "</span></div>";
                    }
                },
                load: function (query, callback) {
                    if (!query.length) return callback();
                    if ((query == "" || query != null)) {
                        $.ajax({
                            url: "/Pms/ResProcPlan/GetListUnit",
                            type: 'GET',
                            data: { prefix: query },
                            error: function () {
                                callback();
                            },
                            success: function (res) {
                                callback(res.slice(0, 30));
                            }
                        });
                    }
                },
                create: false,
            })
            selectized[0].selectize.focus();
            break;
        case "datetime":
            //$($(a).get(0).firstChild).datepicker({
            //        format: "mm/dd/yyyy",
            //        autoclose: 'true',
            //        todayBtn: 'true',
            //        todayHighlight: 'true',
            //})
            $($(a).get(0).firstChild).inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' });

            break;
    }
    $($(a).get(0).firstChild).val($(a).get(0).lastChild.data);
    $(a).get(0).lastChild.data = null;
    var list_td = $($(a).get(0).firstChild).closest("tr").get(0).childNodes;
    $($(a).get(0).firstChild).unbind("keyup");
    $($(a).get(0).firstChild).on({
        "keyup": function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                var valueinput = $($(a).get(0).firstChild).val();
                var convertqnty = 0;
                var quantity = $($(a).get(0).firstChild).val();
                var data_type = $($($(a).get(0).firstChild)).attr("data-type");
                switch (data_type) {
                    case "decimal":
                        var regex = new RegExp(/[!,#$&*+=|'"\{\}]/g);
                        quantity = quantity.replace(regex, '').trim();
                        var testexist = regex.test(quantity);
                        if (valueinput == "" || testexist) {
                            $(a).attr("style", "outline:1px solid #dd4b39", true);
                            return;
                        }
                        else {
                            convertqnty = (Number(quantity)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.odd, minimumFractionDigits: $.hmcustom.table.odd });
                        }
                        $(a).get(0).lastChild.data = convertqnty;
                        $($(a).get(0).firstChild).val(quantity).focus
                        break;
                    case "currency":
                        var regex = new RegExp(/[!,#$&*+=|'"\{\}a-z-]/gi);
                        quantity = quantity.replace(regex, '').trim();
                        var testexist = regex.test(quantity);
                        if (valueinput == "" || testexist) {
                            $(a).attr("style", "outline:1px solid #dd4b39", true);
                            return;
                        }
                        else {
                            convertqnty = (Number(quantity)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                        }
                        $(a).get(0).lastChild.data = convertqnty;
                        $($(a).get(0).firstChild).val(quantity).focus();
                        break;
                    case "string":
                        if ($(a).get(0).lastChild.data == null) {

                            $($(a).get(0).firstChild).val(quantity);
                            let htmlinput = quantity;
                            $($(a).get(0).firstChild).after(htmlinput);
                        }
                        else {
                            $(a).get(0).lastChild.data = quantity;
                            $($(a).get(0).firstChild).val(quantity).focus();
                        }
                        break;
                    default:
                        $(a).get(0).lastChild.data = quantity;
                        $($(a).get(0).firstChild).val(quantity)
                        break;
                }
                $($(a).get(0).firstChild).attr("type", "hidden", true);
                if (area != null && area.trim() != "" && area != "unidentified") {
                    var outerhtml = $($(a).get(0).firstChild).closest("tr").get(0).outerHTML;
                    var form = document.createElement("form")
                    $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                    $(form).append(outerhtml);
                    let inputcolname = document.createElement("input");
                    $(inputcolname).attr("name", "colname");
                    $(inputcolname).attr("value", fieldname);
                    $(form).append(inputcolname);
                    var input = document.createElement("input");
                    $(input).attr("name", "contractid");
                    $(input).attr("value", $.hmcustom.para.Contractid);
                    $(form).append(input);
                    $.post(area, $(form).serialize(), function (res, status) {
                        if (status == "success") {
                            if (res["Errors"].length != 0) {
                                if (res["Errors"] == "Login") {
                                    location.replace("/Account/Login");
                                }
                                $(a).attr("style", "outline:1px solid #dd4b39", true);
                                var content = "";
                                $.each(res["Errors"], function (i, v) {
                                    content += "<li>" + v + "</li>";
                                })
                                var ul = "<ul style='padding:3px'>" + content + "</ul>";
                                $(a).popover({
                                    trigger: 'hover',
                                    container: 'body',
                                    placement: 'top',
                                    html: 'true',
                                    title: 'Error',
                                    content: ul,
                                });
                            }
                            else {
                                $(a).attr("style", "", true);
                                $(a).click(function () {
                                    var id = $(a).attr("aria-describedby");
                                    $("#" + id).popover('destroy');
                                })
                            }
                        }
                    })
                }
            }
        },
        "focusout": function (event) {
            event.preventDefault();
            var valueinput = $($(a).get(0).firstChild).val();
            var convertqnty = 0;
            var quantity = $($(a).get(0).firstChild).val();
            var data_type = $($($(a).get(0).firstChild)).attr("data-type");
            switch (data_type) {
                case "decimal":
                    var regex = new RegExp(/[!,#$&*+=|'"\{\}]/g);
                    quantity = quantity.replace(regex, '').trim();
                    var testexist = regex.test(quantity);
                    if (valueinput == "" || testexist) {
                        $(a).attr("style", "outline:1px solid #dd4b39", true);
                        return;
                    }
                    else {
                        convertqnty = (Number(quantity)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.odd, minimumFractionDigits: $.hmcustom.table.odd });
                    }
                    $(a).get(0).lastChild.data = convertqnty;
                    $($(a).get(0).firstChild).val(quantity).focus
                    break;
                case "currency":
                    var regex = new RegExp(/[!,#$&*+=|'"\{\}a-z-]/gi);
                    quantity = quantity.replace(regex, '').trim();
                    var testexist = regex.test(quantity);
                    if (valueinput == "" || testexist) {
                        $(a).attr("style", "outline:1px solid #dd4b39", true);
                        return;
                    }
                    else {
                        convertqnty = (Number(quantity)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    }
                    $(a).get(0).lastChild.data = convertqnty;
                    $($(a).get(0).firstChild).val(quantity).focus();
                    break;
                case "string":
                    if ($(a).get(0).lastChild.data == null) {

                        $($(a).get(0).firstChild).val(quantity);
                        let htmlinput = quantity;
                        $($(a).get(0).firstChild).after(htmlinput);
                    }
                    else {
                        $(a).get(0).lastChild.data = quantity;
                        $($(a).get(0).firstChild).val(quantity).focus();
                    }
                    break;
                default:
                    $(a).get(0).lastChild.data = quantity;
                    $($(a).get(0).firstChild).val(quantity)
                    break;
            }
            $($(a).get(0).firstChild).attr("type", "hidden", true);
            if (area != null && area.trim() != "" && area != "unidentified") {
                var outerhtml = $($(a).get(0).firstChild).closest("tr").get(0).outerHTML;
                var form = document.createElement("form")
                $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                $(form).append(outerhtml);
                let inputcolname = document.createElement("input");
                $(inputcolname).attr("name", "colname");
                $(inputcolname).attr("value", fieldname);
                $(form).append(inputcolname);
                var input = document.createElement("input");
                $(input).attr("name", "contractid");
                $(input).attr("value", $.hmcustom.para.Contractid);
                $(form).append(input);
                $.post(area, $(form).serialize(), function (res, status) {
                    if (status == "success") {
                        if (res["Errors"].length != 0) {
                            if (res["Errors"] == "Login") {
                                location.replace("/Account/Login");
                            }
                            $(a).attr("style", "outline:1px solid #dd4b39", true);
                            var content = "";
                            $.each(res["Errors"], function (i, v) {
                                content += "<li>" + v + "</li>";
                            })
                            var ul = "<ul style='padding:3px'>" + content + "</ul>";
                            $(a).popover({
                                trigger: 'hover',
                                container: 'body',
                                placement: 'top',
                                html: 'true',
                                title: 'Error',
                                content: ul,
                            });
                        }
                        else {
                            $(a).attr("style", "", true);
                            $(a).click(function () {
                                var id = $(a).attr("aria-describedby");
                                $("#" + id).popover('destroy');
                            })
                        }
                    }
                })
            }
        }
    })
}
$.hmcustom.table.SumRow = function (a, tablename) {
    let tablerow = $("table[name='" + tablename + "'] #tbody" + tablename).get(0).childNodes;
    let arrayvalue = [];
    let arrayfield = [];
    let regex = new RegExp(/[!,#$&*+=|'"\{\}]/g);
    $.each(tablerow, function (i, v) {

        $.each($(v).get(0).childNodes, function (_i, _v) {
            let datatype = $(_v).attr("data-type");
            let fieldname = $(_v).attr("data-fieldname");
            let objvalue = {};
            switch (datatype) {
                case "decimal":
                    if (arrayfield.indexOf(fieldname) == -1) {
                        arrayfield.push(fieldname);
                    }
                    objvalue.name = fieldname;
                    objvalue.value = Number($(_v).get(0).textContent.replace(regex, '').trim());
                    objvalue.type = datatype;
                    arrayvalue.push(objvalue);
                    break;
                case "currency":
                    if (arrayfield.indexOf(fieldname) == -1) {
                        arrayfield.push(fieldname);
                    }
                    objvalue.name = fieldname;
                    objvalue.value = Number($(_v).get(0).textContent.replace(regex, '').trim());
                    objvalue.type = datatype;
                    arrayvalue.push(objvalue);
                    break;
                case "number":
                    if (arrayfield.indexOf(fieldname) == -1) {
                        arrayfield.push(fieldname);
                    }
                    objvalue.name = fieldname;
                    objvalue.value = Number($(_v).get(0).textContent);
                    objvalue.type = datatype;
                    arrayvalue.push(objvalue);
                    break;
                case "datetime":
                case "date":
                    if (arrayfield.indexOf(fieldname) == -1) {
                        arrayfield.push(fieldname);
                    }
                    objvalue.name = fieldname;
                    objvalue.type = datatype;
                    let splitdatetime = $(_v).get(0).textContent.split('/');
                    if (splitdatetime.length == 3) {
                        objvalue.value = new Date($(_v).get(0).textContent)
                    }
                    arrayvalue.push(objvalue);
                    break;
            }
        })
    })

    $.each(arrayfield, function (i, v) {
        let total = 0;
        let type = "";
        let datevalue = [];
        $.each(arrayvalue, function (_i, _v) {
            if (v == _v.name) {
                type = _v.type;
                let datecurrenly = _v.value;
                switch (type) {
                    case "decimal":
                        total += _v.value;
                        break;
                    case "currency":
                        total += _v.value;
                        break;
                    case "number":
                        total += _v.value;
                        break;
                    case "datetime":
                    case "date":
                        datevalue.push(_v.value);
                        break;
                }
            }
        })
        switch (type) {
            case "decimal":
                let formatdecimal = total.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.odd, minimumFractionDigits: $.hmcustom.table.odd });
                $("table[name='" + tablename + "'] tr[class='row-sum'] th[data-fieldname='" + v + "']").get(0).innerText = formatdecimal;
                break;
            case "currency":
                let formatcurrency = total.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                $("table[name='" + tablename + "'] tr[class='row-sum'] th[data-fieldname='" + v + "']").get(0).innerText = formatcurrency;
                break;
            case "number":
                let formatnumber = total;
                $("table[name='" + tablename + "'] tr[class='row-sum'] th[data-fieldname='" + v + "']").get(0).innerText = formatnumber;
                break;
            case "datetime":
            case "date":
                let _promist = new Promise(function (fullfill, destroy) {
                    let regextestname = new RegExp(/(start)/gi);
                    let testname = regextestname.test(v);
                    if (testname) {
                        fullfill(1);
                    }
                    else {
                        fullfill(0);
                    }
                })
                _promist.then(function (mes) {
                    if (datevalue.length == 0) {
                        $("table[name='" + tablename + "'] tr[class='row-sum'] th[data-fieldname='" + v + "']").get(0).innerText = "";
                    }
                    else {

                        let getonlydate = datevalue[0];
                        if (mes == 1) {
                            $.each(datevalue, function (i, v) {
                                if (getonlydate > v) {
                                    getonlydate = v;
                                }
                            })
                            let formatdate = $.hmcustom.table.DateTimeConvertString(getonlydate);
                            $("table[name='" + tablename + "'] tr[class='row-sum'] th[data-fieldname='" + v + "']").get(0).innerText = formatdate;
                        }
                        else {
                            $.each(datevalue, function (i, v) {
                                if (getonlydate < v) {
                                    getonlydate = v;
                                }
                            })
                            let formatdate = $.hmcustom.table.DateTimeConvertString(getonlydate);
                            $("table[name='" + tablename + "'] tr[class='row-sum'] th[data-fieldname='" + v + "']").get(0).innerText = formatdate;
                        }

                    }
                })

                break;
        }
    })
}
$.hmcustom.table.ClearText = function (a, tablename) {
    let tablerow = $("table[name='" + tablename + "'] #tbody" + tablename).get(0).childNodes;
    let trsum = $("table[name='" + tablename + "'] tr[class='row-sum'] th");
    $.each(trsum, function (i, v) {
        let fieldname = $(v).attr("data-fieldname");
        if (fieldname != null && fieldname != "undefined") {
            $(v).get(0).innerText = "";
        }
    })
}
$.hmcustom.table.ChosenElement = function (a, tablename, category) {
    switch (category) {
        case "DF":
            $("table[name='" + tablename + "'] tr td").removeClass("tdchosen");
            $("table[name='" + tablename + "'] tr td").removeClass("tddefault");
            $(a).addClass("tddefault");

            break;
        case "CH":
            $("table[name='" + tablename + "'] tr td").removeClass("tdchosen");
            $("table[name='" + tablename + "'] tr td").removeClass("tddefault");
            $(a).addClass("tdchosen");
            break;
    }

}
$.hmcustom.function.Loadmore = function (res, trid, aid, inputid, tablename) {
    var page = res["Paging"];
    if (page.PageNext >= page.ToTalPage && page.RemainRow == 0) {
        $("#" + trid).attr("style", "display:none", true);
        $("#" + inputid).val(page.PageNext);
    }
    else {
        $("#" + aid).attr("data-page", page.PageNext, true);
        $("#" + inputid).val(page.PageNext);
        $("#" + aid).get(0).innerHTML = "Load more(" + page.RemainRow + ")";
        $("#" + trid).attr("style", "", true);
    }
}
$.hmcustom.function.Checked = function (a) {
    var checked = $(a).get(0).checked;
    if (checked) {
        $($($(a).closest("tr")).get(0)).attr("data-check", 1);
        $($(a).get(0)).attr("checked", "checked");
    }
    else {
        $($($(a).closest("tr")).get(0)).attr("data-check", 0);
    }
}
$.hmcustom.function.CheckAll = function (a, tbody, trname) {
    var checkall = $(a).get(0).checked;
    var listinput = $("#" + tbody + " tr[name='" + trname + "'] input[name='checkbox']");
    $.each(listinput, function (i, v) {
        if (checkall) {
            $($($(v).closest("tr")).get(0)).attr("data-check", 1);
            $($(v).get(0)).attr("checked", "checked");
            $(v).get(0).checked = true;
        }
        else {
            $($($(v).closest("tr")).get(0)).attr("data-check", 0);
            $(v).get(0).checked = false;
        }
    })
}