/// <reference path="TableData.js" />
/// <reference path="TableData.js" />
/// <summary>Create table template</summary>
$.hmfunction = {};
$.hmfunction.Scroll = function _Scroll(keys) {
    //this.Keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    this.preventDefault = function (e) {
        //e.preventDefault();
    };
    this.preventDefaultForScrollKeys = function (e) {
        if (keys[e.keyCode]) {
            //this.preventDefault(e);
            e.preventDefault();
            return false;
        }
    };
    this.supportsPassive = false;
    this.wheelOpt = this.supportsPassive ? { passive: false } : false;
    this.wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    this.disableScroll = function () {
        window.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
        window.addEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt); // modern desktop
        window.addEventListener('touchmove', this.preventDefault, this.wheelOpt); // mobile
        window.addEventListener('keydown', this.preventDefaultForScrollKeys, false);
    };
    this.enableScroll = function () {
        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener(this.wheelEvent, this.preventDefault, this.wheelOpt);
        window.removeEventListener('touchmove', this.preventDefault, this.wheelOpt);
        window.removeEventListener('keydown', this.preventDefaultForScrollKeys, false);
    }
}

$.hmcustom = {};
$.hmcustom.table = {};
$.hmcustom.function = {};
$.hmcustom.para = {};
$.hmcustom.para.Month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
$.hmcustom.table.odd = 3;
$.hmcustom.table.cost = 0;
$.hmcustom.table.percent = 2;
$.hmcustom.para.ValidateAntiForgeryToken = '';
$.hmcustom.para.Contractid;
$.hmcustom.table.InputmaskDateTime = function (a) {
    $(a).unbind("focus").inputmask("mm/dd/yyyy", { 'placeholder': "mm/dd/yyyy" })
}
$.hmcustom.table.collapseSummary = function (tablename) {
    $("table[name='" + tablename + "'] div[class='collapse in']").collapse("hide");
    $("table[name='" + tablename + "'] div[class='table-responsive collapse in']").collapse("hide");
}
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
        case "div":
            $("#" + id).attr("class", "overlay", true);
            $($("#" + id)[0].firstElementChild).attr("class", "fa fa-refresh fa-spin", true);
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
        case "div":
            $("#" + id).attr("style", "display:none", true)
            break;
        default:
            $("#divwaitingsave").attr("class", "", true);
            $($("#divwaitingsave")[0].firstElementChild).attr("class", "", true);
            break;
    }
}
$.hmcustom.table.ClickRow = function (a) {
    var GetTagTableName = $($(a).closest("table")).attr("name");
    var GetTagTbody = $($(a).closest("tbody")).attr("id");
    $("table[name=" + GetTagTableName + "] #" + GetTagTbody + " tr").removeClass("sv-gv-datarow-focused");
    $(a).addClass("sv-gv-datarow-focused");
}
$.hmcustom.table.ClickRowChild = function (a) {
    var GetTagTableName = $($(a).closest("table")).attr("name");
    var parentid = $($(a).closest("table")).attr("data-parent");
    $("table[name=" + GetTagTableName + "] #tbodyworkchil_" + parentid + " tr").removeClass("sv-gv-datarow-focused");
    $(a).addClass("sv-gv-datarow-focused");
}

$.hmcustom.table.DateCompare = function (startdate, enddate) {
    var stdate = new Date(startdate);
    var eddate = new Date(enddate);
    if (stdate < eddate) {
        alert("ngày bắt đầu nhỏ hơn ngày kết thúc!");
    }
}
$.hmcustom.table.DateTimeConvert_EN = function(date, type)
{
    if (date != null) {
      
        var getstringnumber = date.match(/[0-9]/g);
        var startdate = Number(getstringnumber.join(""))
        var formatdate = new Date(startdate);
        switch(type)
        {
            case "date":
                var format = $.hmcustom.para.Month[formatdate.getMonth()] + " " + (formatdate.getDate() >= 10 ? formatdate.getDate() : "0" + formatdate.getDate()) + "," + formatdate.getFullYear();
                break;
            case "datetime":
                var format = $.hmcustom.para.Month[formatdate.getMonth()] + " " + (formatdate.getDate() >= 10 ? formatdate.getDate() : "0" + formatdate.getDate()) + "," + formatdate.getFullYear() + " " + (formatdate.getHours() >= 10 ? formatdate.getHours() : "0" + formatdate.getHours()) + ":" + (formatdate.getMinutes() >= 10 ? formatdate.getMinutes() : "0" + formatdate.getMinutes()) + ":" + (formatdate.getSeconds() >= 10 ? formatdate.getSeconds() : "0" + formatdate.getSeconds());
                break;
            case "time":
                var format = (formatdate.getHours() >= 10 ? formatdate.getHours() : "0" + formatdate.getHours()) + ":" + (formatdate.getMinutes() >= 10 ? formatdate.getMinutes() : "0" + formatdate.getMinutes()) + ":" + (formatdate.getSeconds() >= 10 ? formatdate.getSeconds() : "0" + formatdate.getSeconds());
                break;
        }
        return format;
    }
    return "";
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
$.hmcustom.table.DateTimeConvertSys = function (date, type) {
    if (date != null) {
        var getstringnumber = date.match(/[0-9]/g);
        var startdate = Number(getstringnumber.join(""))
        startdate = new Date(startdate);
        var format;
        switch(type)
        {
            case "date":
                format = startdate.getFullYear() + "-" + ((startdate.getMonth() + 1) >= 10 ? (startdate.getMonth() + 1) : "0" + (startdate.getMonth() + 1)) + "-" + (startdate.getDate() >= 10 ? startdate.getDate() : "0" + startdate.getDate());
                break;
            case "datetime":
                format = startdate.getFullYear() + "-" + ((startdate.getMonth() + 1) >= 10 ? (startdate.getMonth() + 1) : "0" + (startdate.getMonth() + 1)) + "-" + (startdate.getDate() >= 10 ? startdate.getDate() : "0" + startdate.getDate()) + " " + (startdate.getHours() >= 10 ? startdate.getHours() : "0" + startdate.getHours()) + ":" + (startdate.getMinutes() >= 10 ? startdate.getMinutes() : "0" + startdate.getMinutes());
                break;
            case "time":
                format = (startdate.getHours() >= 10 ? startdate.getHours() : "0" + startdate.getHours()) + ":" + (startdate.getMinutes() >= 10 ? startdate.getMinutes() : "0" + startdate.getMinutes()) + ":" + (startdate.getSeconds() >= 10 ? startdate.getSeconds() : "0" + startdate.getSeconds());
                break;
        }
        return format;
    }
    return "";
}
$.hmcustom.table.DateTimeConvertSysDate = function (date, type) {
    if (date != null) {
        startdate = date;
        var format;
        switch(type)
        {
            case "date":
                format = startdate.getFullYear() + "-" + ((startdate.getMonth() + 1) >= 10 ? (startdate.getMonth() + 1) : "0" + (startdate.getMonth() + 1)) + "-" + (startdate.getDate() >= 10 ? startdate.getDate() : "0" + startdate.getDate());
                break;
            case "datetime":
                format = startdate.getFullYear() + "-" + ((startdate.getMonth() + 1) >= 10 ? (startdate.getMonth() + 1) : "0" + (startdate.getMonth() + 1)) + "-" + (startdate.getDate() >= 10 ? startdate.getDate() : "0" + startdate.getDate()) + " " + (startdate.getHours() >= 10 ? startdate.getHours() : "0" + startdate.getHours()) + ":" + (startdate.getMinutes() >= 10 ? startdate.getMinutes() : "0" + startdate.getMinutes());
                break;
            case "time":
                format = (startdate.getHours() >= 10 ? startdate.getHours() : "0" + startdate.getHours()) + ":" + (startdate.getMinutes() >= 10 ? startdate.getMinutes() : "0" + startdate.getMinutes()) + ":" + (startdate.getSeconds() >= 10 ? startdate.getSeconds() : "0" + startdate.getSeconds());
                break;
        }
        return format;
    }
    return "";
}
$.hmcustom.table.DateTimeConvertString = function (date) {
    if (date != null) {
        return ((Number(date.getMonth()) + 1) > 9 ? (Number(date.getMonth()) + 1) : ("0" + (Number(date.getMonth()) + 1))) + "/" + (date.getDate() > 9 ? date.getDate() : ("0" + date.getDate())) + "/" + date.getFullYear();
    }
    return "";
}
///Table có sum giá trị 
$.hmcustom.table.Create = function (arraytable, tablename, action, fontsize, addnewobject) {
    var timespam = new Date().getTime();
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
        let widthcustom = "";
        if (!v.View) {
            display = "display:none";
        }
        else {
            countcol += 1;
        }
        var itemvalue = v.Des;
        switch (v.Type) {
            case "string":
            case "selected":
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
            case "Selectized":
                classtype = "text-right";
                break;
            case "bool":
                classtype = "text-center";
                break;
        }
        if (v.Update) {
            colortext = "color:#337ab7";
        }
        if (v.Width != "undefined" && v.Width != null && v.Width != "") {
            widthcustom = "Width:" + v.Width + "px";
        }
        htmlheader += "<th data-resizable-column-id='" + v.Name + timespam + "' class='" + classtype + "' data-fieldname='" + v.Name + "' style='" + style + "; " + display + "; " + colortext + "; " + widthcustom + "'>" + itemvalue + "</th>";
    })
    var htmlfilter = "";
    let htmlsum = "";
    let inputfilter = "";
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "";
        var display = "";
        var displayfilter = "";
        var formatdatetime = "";
        var htmledit = "";
        let clss_th = "";
        if (!v.View) {
            display = "display:none";
        }
        if (!v.Filter) {
            displayfilter = "display:none";
        }
        var itemvalue = v.Name
        switch (v.Type) {
            case "string":
            case "selecteduser":
            case "selected":
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                break;
            case "Selectized":
                let unitpricetype = "currency";
                classtype = "text-right";
                inputfilter = "<input placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "datetime":
                classtype = "text-right";
                formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "'  data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + ' class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "number":
                classtype = "text-right";
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "decimal":
            case "currency":
                classtype = "text-right";
                inputfilter = "<input onkeyup='$.hmcustom.table.OnEventInput(this)' placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "bool":
                clss_th = 'class="text-center"';
                inputfilter = "";
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
                htmlsum += '<th class="' + classtype + '"  style="' + style + '" data-fieldname="' + itemvalue + '"><a href="javascript:void(0);" title="Clear" onclick="$.hmcustom.table.ClearText(this,' + paratablename + ')"><i class="fa fa-eraser"></i></a></th>';
            }
            else
            {
                htmlsum += '<th></th>';
            }
        }
        else {
            htmlfilter += "<th " + clss_th + " style='" + style + "; font-size:12px; " + display + "; vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
            htmlsum += "<th style='" + style + "; font-size:12px; " + display + "' data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' class='" + classtype + "'></th>";
        }
    })

    let htmlinsert = "";
    if (addnewobject != undefined)
    {
        if (addnewobject.method == "insert") {
            let htmlcolinsert = "";
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
                    case "selected":
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='hmBorder input-control input-sm" + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "Selectized":
                        let unitpricetype = "currency";
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";

                        break;
                    case "datetime":
                        classtype = "text-right";
                        formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "number":
                        classtype = "text-right";
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "decimal":
                    case "currency":
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "bool":
                        inputfilter = "";
                        break;
                    case "icon":
                        classtype = "text-center";
                        style = "vertical-align:middle";
                        //itemvalue = "";
                        display = "display:none";
                        htmledit = v.Des;
                        break;
                }
                htmlcolinsert += "<th style='" + style + "; font-size:12px; " + display + "; vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
            })
            htmlinsert = '<tr>' +
                             '<th class="text-center" style="vertical-align:middle"><a href="javascript:;" onclick="$.procresponsibility.table.AddNewValue(this)" data-action="'+addnewobject.action+'" data-path="'+addnewobject.path+'" data-url="' + addnewobject.url + '"><small class="label label-primary text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                    htmlcolinsert +
                             '<th></th>' +
                        '</tr>';
        }
    }
    
    //style="font-size:12px"
    var htmltable = '<form>' +
                        '<div class="text-center" style="border: 1px solid #f4f4f4; border-bottom:none" id="divtitle' + tablename + '"></div>' +
                        '<div class="table-responsive"><table class="table table-bordered table-condensed"  name="' + tablename + '" data-area="' + action + '" style="' + font_size + '">' +
                                '<thead class="rc-handle-container">' +
                                    '<tr class="row-header">' +
                                        '<th style="Width:60px"><input type="hidden" value="0" name="page" id="inputpage' + tablename + '"/></th>' +
                                        htmlheader +
                                    '</tr>' +
                                    '<tr class="row-filter">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:$.hmcustom.table.collapseSummary(' + paratablename + ');"><small class="label label-default text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                        htmlfilter +
                                    '</tr>' +
                                        '<tr class="row-sum">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:void(0);" onclick="$.hmcustom.table.SumRow(this,' + paratablename + ')" class="btn-default btn-flat"><img src="/Content/themes/accounting/images/sigma.png"/></a></th>' +
                                        //'<th class="text-center" style="vertical-align:middle"><a href="javascript:void(0);" onclick="$.hmcustom.table.SumFromDatabase(this,' + paratablename + ')" class="btn-default btn-flat"><img src="/Content/themes/accounting/images/sigma.png"/></a></th>' +
                                        htmlsum +
                                    '</tr>' +
                                     htmlinsert +
                                '</thead>' +
                                '<tbody id="tbody' + tablename + '"></tbody>' +
                                '<tfoot>' +
                                    $.hmcustom.AddRowWaiting("trwaiting" + tablename, countcol) +
                                    $.hmcustom.AddRowLoadmore("trloadmore" + tablename, "aloadmore" + tablename, countcol, null) +
                                '</tfoot>' +
                        '</table></div>' +
                    '</form>';
    return htmltable;
}
///table không sum giá trị
$.hmcustom.table.CreateNotSum = function (arraytable, tablename, action, fontsize, addnewobject) {
    var htmlheader = "";
    var countcol = 1;
    let font_size = "font-size:12px";
    let paratablename = "'" + tablename + "'";
    var second = 20;
    var idauto = 0;
    if (fontsize != null && fontsize != "" && fontsize != "undefined") {
        font_size = "font-size:" + fontsize + "px";
    }
    $.each(arraytable, function (i, v) {
        idauto = new Date().getTime() + second;
        var classtype = "";
        var style = "";
        var display = "";
        var colortext = "";
        let widthcustom = "";
        if (!v.View) {
            display = "display:none;";
        }
        else {
            countcol += 1;
        }
        var itemvalue = v.Des;
        switch (v.Type) {
            case "string":
            case "selected":
                break;
            case "datetime":
            case "date":
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
                style = "vertical-align:middle;";
                itemvalue = "";
                break;
            case "Selectized":
                classtype = "text-right";
                break;
            case "bool":
                classtype = "text-center";
                break;
        }
        if (v.Update) {
            colortext = "color:#337ab7;";
        }
        if (v.Width != "undefined" && v.Width != null && v.Width != "") {
            widthcustom = "Width:" + v.Width + "px;";
        }
        htmlheader += "<th data-resizable-column-id='" + v.Name + idauto + "' class='" + classtype + "' data-fieldname='" + v.Name + "' style='" + style  + display  + colortext + widthcustom + "'>" + itemvalue + "</th>";
    })
    var htmlfilter = "";
    let inputfilter = "";
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "";
        var display = "";
        var displayfilter = "";
        var formatdatetime = "";
        var htmledit = "";
        let clss_th = "";
        if (!v.View) {
            display = "display:none;";
        }
        if (!v.Filter) {
            displayfilter = "display:none;";
        }
        var itemvalue = v.Name
        switch (v.Type) {
            case "string":
            case "selecteduser":
            case "selected":
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                break;
            case "Selectized":
                let unitpricetype = "currency";
                classtype = "text-right";
                inputfilter = "<input placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "date":
            case "datetime":
                classtype = "text-right";
                var regexreplace = new RegExp(/[;](?![\w])/gi);
                classtype = classtype.replace(regexreplace, '').trim();
                formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "'  data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + ' class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "number":
                classtype = "text-right;";
                var regexreplace = new RegExp(/[;](?![\w])/gi);
                classtype = classtype.replace(regexreplace, '').trim();
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "decimal":
            case "currency":
                classtype = "text-right;";
                var regexreplace = new RegExp(/[;](?![\w])/gi);
                classtype = classtype.replace(regexreplace, '').trim();
                inputfilter = "<input onkeyup='$.hmcustom.table.OnEventInput(this)' placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "bool":
                clss_th = 'class="text-center"';
                inputfilter = "";
                break;
            case "icon":
                classtype = "text-center;";
                style = "vertical-align:middle;";
                //itemvalue = "";
                display = "display:none;";
                htmledit = v.Des;
                break;
        }
        var regexreplace = new RegExp(/[;](?![\w])/gi);
        classtype = classtype.replace(regexreplace, '').trim();
        if (v.Type == "icon") {
            htmlfilter += "<th class='" + classtype + "'  style='" + style + "'>" + htmledit + "</th>";
        }
        else {
            htmlfilter += "<th " + clss_th + " style='" + style + " font-size:12px; " + display + " vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
        }
    })

    let htmlinsert = "";
    if (addnewobject != undefined) {
        if (addnewobject.method == "insert") {
            let htmlcolinsert = "";
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
                    case "selected":
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='hmBorder input-control input-sm" + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "Selectized":
                        let unitpricetype = "currency";
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";

                        break;
                    case "datetime":
                        classtype = "text-right";
                        formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "number":
                        classtype = "text-right";
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "decimal":
                    case "currency":
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "bool":
                        inputfilter = "";
                        break;
                    case "icon":
                        classtype = "text-center";
                        style = "vertical-align:middle";
                        //itemvalue = "";
                        display = "display:none";
                        htmledit = v.Des;
                        break;
                }
                htmlcolinsert += "<th style='" + style + "; font-size:12px; " + display + "; vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
            })
            htmlinsert = '<tr>' +
                             '<th class="text-center" style="vertical-align:middle"><a href="javascript:;" onclick="$.procresponsibility.table.AddNewValue(this)" data-action="' + addnewobject.action + '" data-path="' + addnewobject.path + '" data-url="' + addnewobject.url + '"><small class="label label-primary text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                    htmlcolinsert +
                             '<th></th>' +
                        '</tr>';
        }
    }

    //style="font-size:12px"
    var htmltable = '<form>' +
                        '<div class="text-center" style="border: 1px solid #f4f4f4; border-bottom:none" id="divtitle' + tablename + '"></div>' +
                        '<div class="table-responsive"><table class="table table-bordered table-condensed" name="' + tablename + '" data-area="' + action + '" style="' + font_size + '">' +
                                '<thead>' +
                                    '<tr class="row-header">' +
                                        '<th style="Width:60px"><input type="hidden" value="0" name="page" id="inputpage' + tablename + '"/></th>' +
                                        htmlheader +
                                    '</tr>' +
                                    '<tr class="row-filter">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:$.hmcustom.table.collapseSummary(' + paratablename + ');"><small class="label label-default text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                        htmlfilter +
                                    '</tr>' +
                                '</thead>' +
                                '<tbody id="tbody' + tablename + '"></tbody>' +
                                '<tfoot>' +
                                    $.hmcustom.AddRowWaiting("trwaiting" + tablename, countcol) +
                                    $.hmcustom.AddRowLoadmore("trloadmore" + tablename, "aloadmore" + tablename, countcol, null) +
                                '</tfoot>' +
                        '</table></div>'+
                    '</form>';
    return htmltable;
}
///table không sum và không filter
$.hmcustom.table.CreateNotSumvsFilter = function (arraytable, tablename, action, fontsize, addnewobject) {
    var htmlheader = "";
    var countcol = 1;
    let font_size = "font-size:12px";
    let paratablename = "'" + tablename + "'";
    var second = 20;
    var idauto = 0;
    if (fontsize != null && fontsize != "" && fontsize != "undefined") {
        font_size = "font-size:" + fontsize + "px";
    }
    $.each(arraytable, function (i, v) {
        idauto = new Date().getTime() + second;
        var classtype = "";
        var style = "";
        var display = "";
        var colortext = "";
        let widthcustom = "";
        if (!v.View) {
            display = "display:none;";
        }
        else {
            countcol += 1;
        }
        var itemvalue = v.Des;
        switch (v.Type) {
            case "string":
            case "selected":
                break;
            case "datetime":
            case "date":
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
                style = "vertical-align:middle;";
                itemvalue = "";
                break;
            case "Selectized":
                classtype = "text-right";
                break;
            case "bool":
                classtype = "text-center";
                break;
        }
        if (v.Update) {
            colortext = "color:#337ab7;";
        }
        if (v.Width != "undefined" && v.Width != null && v.Width != "") {
            widthcustom = "Width:" + v.Width + "px;";
        }
        htmlheader += "<th data-resizable-column-id='" + v.Name + idauto + "' class='" + classtype + "' data-fieldname='" + v.Name + "' style='" + style + display + colortext + widthcustom + "'>" + itemvalue + "</th>";
    })

    //style="font-size:12px"
    var htmltable = '<form>' +
                        '<div class="text-center" style="border: 1px solid #f4f4f4; border-bottom:none" id="divtitle' + tablename + '"></div>' +
                        '<div class="table-responsive"><table class="table table-bordered table-condensed" name="' + tablename + '" data-area="' + action + '" style="' + font_size + '">' +
                                '<thead>' +
                                    '<tr class="row-header">' +
                                        '<th style="Width:60px"><input type="hidden" value="0" name="page" id="inputpage' + tablename + '"/></th>' +
                                        htmlheader +
                                    '</tr>' +
                                '</thead>' +
                                '<tbody id="tbody' + tablename + '"></tbody>' +
                                '<tfoot>' +
                                    $.hmcustom.AddRowWaiting("trwaiting" + tablename, countcol) +
                                    $.hmcustom.AddRowLoadmore("trloadmore" + tablename, "aloadmore" + tablename, countcol, null) +
                                '</tfoot>' +
                        '</table></div>' +
                    '</form>';
    return htmltable;
}
///table không sum giá trị và không tạo form
$.hmcustom.table.CreateNotSum_form = function (arraytable, tablename, action, fontsize, addnewobject) {
    var htmlheader = "";
    var countcol = 1;
    let font_size = "font-size:12px";
    let paratablename = "'" + tablename + "'";
    var second = 20;
    var idauto = 0;
    if (fontsize != null && fontsize != "" && fontsize != "undefined") {
        font_size = "font-size:" + fontsize + "px";
    }
    $.each(arraytable, function (i, v) {
        idauto = new Date().getTime() + second;
        var classtype = "";
        var style = "";
        var display = "";
        var colortext = "";
        let widthcustom = "";
        if (!v.View) {
            display = "display:none;";
        }
        else {
            countcol += 1;
        }
        var itemvalue = v.Des;
        switch (v.Type) {
            case "string":
            case "selected":
                break;
            case "datetime":
            case "date":
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
                style = "vertical-align:middle;";
                itemvalue = "";
                break;
            case "Selectized":
                classtype = "text-right";
                break;
            case "bool":
                classtype = "text-center";
                break;
        }
        if (v.Update) {
            colortext = "color:#337ab7;";
        }
        if (v.Width != "undefined" && v.Width != null && v.Width != "") {
            widthcustom = "Width:" + v.Width + "px;";
        }
        htmlheader += "<th data-resizable-column-id='" + v.Name + idauto + "' class='" + classtype + "' data-fieldname='" + v.Name + "' style='" + style + display + colortext + widthcustom + "'>" + itemvalue + "</th>";
    })
    var htmlfilter = "";
    let inputfilter = "";
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "";
        var display = "";
        var displayfilter = "";
        var formatdatetime = "";
        var htmledit = "";
        let clss_th = "";
        if (!v.View) {
            display = "display:none;";
        }
        if (!v.Filter) {
            displayfilter = "display:none;";
        }
        var itemvalue = v.Name
        switch (v.Type) {
            case "string":
            case "selecteduser":
            case "selected":
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                break;
            case "Selectized":
                let unitpricetype = "currency";
                classtype = "text-right";
                inputfilter = "<input placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "date":
            case "datetime":
                classtype = "text-right";
                formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "'  data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + ' class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "number":
                classtype = "text-right;";
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "decimal":
            case "currency":
                classtype = "text-right;";
                inputfilter = "<input onkeyup='$.hmcustom.table.OnEventInput(this)' placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "bool":
                clss_th = 'class="text-center"';
                inputfilter = "";
                break;
            case "icon":
                classtype = "text-center;";
                style = "vertical-align:middle;";
                //itemvalue = "";
                display = "display:none;";
                htmledit = v.Des;
                break;
        }
        var regexreplace = new RegExp(/[;](?![\w])/gi);
        classtype = classtype.replace(regexreplace, '').trim();
        if (v.Type == "icon") {
            htmlfilter += "<th class='" + classtype + "'  style='" + style + "'>" + htmledit + "</th>";
        }
        else {
            htmlfilter += "<th " + clss_th + " style='" + style + " font-size:12px; " + display + " vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
        }
    })

    let htmlinsert = "";
    if (addnewobject != undefined) {
        if (addnewobject.method == "insert") {
            let htmlcolinsert = "";
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
                    case "selected":
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='hmBorder input-control input-sm" + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "Selectized":
                        let unitpricetype = "currency";
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";

                        break;
                    case "datetime":
                        classtype = "text-right";
                        formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "number":
                        classtype = "text-right";
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "decimal":
                    case "currency":
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "bool":
                        inputfilter = "";
                        break;
                    case "icon":
                        classtype = "text-center";
                        style = "vertical-align:middle";
                        //itemvalue = "";
                        display = "display:none";
                        htmledit = v.Des;
                        break;
                }
                htmlcolinsert += "<th style='" + style + "; font-size:12px; " + display + "; vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
            })
            htmlinsert = '<tr>' +
                             '<th class="text-center" style="vertical-align:middle"><a href="javascript:;" onclick="$.procresponsibility.table.AddNewValue(this)" data-action="' + addnewobject.action + '" data-path="' + addnewobject.path + '" data-url="' + addnewobject.url + '"><small class="label label-primary text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                    htmlcolinsert +
                             '<th></th>' +
                        '</tr>';
        }
    }

    //style="font-size:12px"
    var htmltable = //'<form>' +
                        '<div class="text-center" style="border: 1px solid #f4f4f4; border-bottom:none" id="divtitle' + tablename + '"></div>' +
                        '<div class="table-responsive"><table class="table table-bordered table-condensed" name="' + tablename + '" data-area="' + action + '" style="' + font_size + '">' +
                                '<thead>' +
                                    '<tr class="row-header">' +
                                        '<th style="Width:60px"><input type="hidden" value="0" name="page" id="inputpage' + tablename + '"/></th>' +
                                        htmlheader +
                                    '</tr>' +
                                    '<tr class="row-filter">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:$.hmcustom.table.collapseSummary(' + paratablename + ');"><small class="label label-default text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                        htmlfilter +
                                    '</tr>' +
                                '</thead>' +
                                '<tbody id="tbody' + tablename + '"></tbody>' +
                                '<tfoot>' +
                                    $.hmcustom.AddRowWaiting("trwaiting" + tablename, countcol) +
                                    $.hmcustom.AddRowLoadmore("trloadmore" + tablename, "aloadmore" + tablename, countcol, null) +
                                '</tfoot>' +
                        '</table></div>';
    //'</form>';
    return htmltable;
}
///Table thêm mới nhứng không có sum
$.hmcustom.table.CreateAddNew_NotSum = function (arraytable, tablename, action, fontsize, addnewobject) {
    var htmlheader = "";
    var countcol = 1;
    let font_size = "font-size:12px";
    let paratablename = "'" + tablename + "'";
    var second = 20;
    var idauto = 0;
    if (fontsize != null && fontsize != "" && fontsize != "undefined") {
        font_size = "font-size:" + fontsize + "px";
    }
    $.each(arraytable, function (i, v) {
        idauto = new Date().getTime() + second;
        var classtype = "";
        var style = "";
        var display = "";
        var colortext = "";
        let widthcustom = "";
        if (!v.View) {
            display = "display:none;";
        }
        else {
            countcol += 1;
        }
        var itemvalue = v.Des;
        switch (v.Type) {
            case "string":
            case "selected":
                break;
            case "datetime":
                classtype = "text-right;";
                break;
            case "number":
                classtype = "text-right;";
                break;
            case "decimal":
            case "currency":
                classtype = "text-right;";
                break;
            case "icon":
                classtype = "text-center;";
                style = "vertical-align:middle;";
                itemvalue = "";
                break;
            case "Selectized":
                classtype = "text-right;";
                break;
            case "bool":
                classtype = "text-center;";
                break;
        }
        if (v.Update) {
            colortext = "color:#337ab7;";
        }
        if (v.Width != "undefined" && v.Width != null && v.Width != "") {
            widthcustom = "Width:" + v.Width + "px;";
        }
        htmlheader += "<th data-resizable-column-id='" + v.Name + idauto + "' class='" + classtype + "' data-fieldname='" + v.Name + "' style='" + style + display + colortext + widthcustom + "'>" + itemvalue + "</th>";
    })
    var htmlfilter = "";
    let inputfilter = "";
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "";
        var display = "";
        var displayfilter = "";
        var formatdatetime = "";
        var htmledit = "";
        let clss_th = "";
        if (!v.View) {
            display = "display:none;";
        }
        if (!v.Filter) {
            displayfilter = "display:none;";
        }
        var itemvalue = v.Name
        switch (v.Type) {
            case "string":
            case "selecteduser":
            case "selected":
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                break;
            case "Selectized":
                let unitpricetype = "currency";
                classtype = "text-right";
                inputfilter = "<input placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "datetime":
                classtype = "text-right";
                formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "'  data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + ' class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "number":
                classtype = "text-right;";
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "decimal":
            case "currency":
                classtype = "text-right;";
                inputfilter = "<input onkeyup='$.hmcustom.table.OnEventInput(this)' placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "bool":
                clss_th = 'class="text-center"';
                inputfilter = "";
                break;
            case "icon":
                classtype = "text-center;";
                style = "vertical-align:middle;";
                //itemvalue = "";
                display = "display:none;";
                htmledit = v.Des;
                break;
        }
        var regexreplace = new RegExp(/[;](?![\w])/gi);
        classtype = classtype.replace(regexreplace, '').trim();
        if (v.Type == "icon") {
            htmlfilter += "<th class='" + classtype + "'  style='" + style + "'>" + htmledit + "</th>";
        }
        else {
            htmlfilter += "<th " + clss_th + " style='" + style + " font-size:12px; " + display + " vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
        }
    })

    let htmlinsert = "";
    if (addnewobject != undefined) {
        if (addnewobject.method == "insert") {
            let htmlcolinsert = "";
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
                    case "selected":
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='hmBorder input-control input-sm" + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "Selectized":
                        let unitpricetype = "currency";
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";

                        break;
                    case "datetime":
                        classtype = "text-right";
                        formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "number":
                        classtype = "text-right";
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "decimal":
                    case "currency":
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "bool":
                        inputfilter = "";
                        break;
                    case "icon":
                        classtype = "text-center";
                        style = "vertical-align:middle";
                        //itemvalue = "";
                        display = "display:none";
                        htmledit = v.Des;
                        break;
                }
                htmlcolinsert += "<th style='" + style + "; font-size:12px; " + display + "; vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
            })
            htmlinsert = '<tr class="row-insert">' +
                             '<th class="text-center" style="vertical-align:middle"><a href="javascript:;" onclick="$.procresponsibility.table.AddNewValue(this)" data-action="' + addnewobject.action + '" data-path="' + addnewobject.path + '" data-url="' + addnewobject.url + '"><small class="label label-primary text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                 htmlcolinsert +
                        '</tr>';
        }
    }

    //style="font-size:12px"
    var htmltable = '<form>' +
                        '<div class="text-center" style="border: 1px solid #f4f4f4; border-bottom:none" id="divtitle' + tablename + '"></div>' +
                        '<div class="table-responsive"><table class="table table-bordered table-condensed" name="' + tablename + '" data-area="' + action + '" style="' + font_size + '">' +
                                '<thead>' +
                                    '<tr class="row-header">' +
                                        '<th style="Width:60px"><input type="hidden" value="0" name="page" id="inputpage' + tablename + '"/></th>' +
                                        htmlheader +
                                    '</tr>' +
                                    '<tr class="row-filter">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:$.hmcustom.table.collapseSummary(' + paratablename + ');"><small class="label label-default text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                        htmlfilter +
                                    '</tr>' +
                                     htmlinsert +
                                '</thead>' +
                                '<tbody id="tbody' + tablename + '"></tbody>' +
                                '<tfoot>' +
                                    $.hmcustom.AddRowWaiting("trwaiting" + tablename, countcol) +
                                    $.hmcustom.AddRowLoadmore("trloadmore" + tablename, "aloadmore" + tablename, countcol, null) +
                                '</tfoot>' +
                        '</table></div>' +
                    '</form>';
    return htmltable;
}
///Tabel tạo có tab index
$.hmcustom.table.CreateTabIndex = function (arraytable, tablename, action, fontsize, addnewobject) {
    var htmlheader = "";
    var countcol = 1;
    let font_size = "font-size:12px";
    let paratablename = "'" + tablename + "'";
    var second = 20;
    var idauto = 0;
    if (fontsize != null && fontsize != "" && fontsize != "undefined") {
        font_size = "font-size:" + fontsize + "px";
    }
    $.each(arraytable, function (i, v) {
        idauto = new Date().getTime() + second;
        var classtype = "";
        var style = "";
        var display = "";
        var colortext = "";
        let widthcustom = "";
        if (!v.View) {
            display = "display:none;";
        }
        else {
            countcol += 1;
        }
        var itemvalue = v.Des;
        switch (v.Type) {
            case "string":
            case "selected":
                break;
            case "date":
            case "datetime":
                classtype = "text-right;";
                break;
            case "number":
                classtype = "text-right;";
                break;
            case "decimal":
            case "currency":
                classtype = "text-right;";
                break;
            case "icon":
                classtype = "text-center;";
                style = "vertical-align:middle;";
                itemvalue = "";
                break;
            case "Selectized":
                classtype = "text-right;";
                break;
            case "bool":
                classtype = "text-center;";
                break;
        }
        var regexreplace = new RegExp(/[;](?![\w])/gi);
        classtype = classtype.replace(regexreplace, '').trim();
        if (v.Update) {
            colortext = "color:#337ab7;";
        }
        if (v.Width != "undefined" && v.Width != null && v.Width != "") {
            widthcustom = "Width:" + v.Width + "px";
        }
        htmlheader += "<th data-resizable-column-id='" + v.Name+idauto + "' class='" + classtype + "' data-fieldname='" + v.Name + "' style='" + style + display + colortext  + widthcustom + "'>" + itemvalue + "</th>";
    })
    var htmlfilter = "";
    let htmlsum = "";
    let inputfilter = "";
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "";
        var display = "";
        var displayfilter = "";
        var formatdatetime = "";
        var htmledit = "";
        let clss_th = "";
        if (!v.View) {
            display = "display:none";
        }
        if (!v.Filter) {
            displayfilter = "display:none";
        }
        var itemvalue = v.Name
        switch (v.Type) {
            case "string":
            case "selecteduser":
            case "selected":
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                break;
            case "Selectized":
                let unitpricetype = "currency";
                classtype = "text-right;";
                inputfilter = "<input placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "datetime":
                classtype = "text-right;";
                formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "'  data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + ' class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "number":
                classtype = "text-right";
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "decimal":
            case "currency":
                classtype = "text-right";
                inputfilter = "<input onkeyup='$.hmcustom.table.OnEventInput(this)' placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "bool":
                clss_th = 'class="text-center;"';
                inputfilter = "";
                break;
            case "icon":
                classtype = "text-center;";
                style = "vertical-align:middle;";
                //itemvalue = "";
                display = "display:none;";
                htmledit = v.Des;
                break;
        }
        var regexreplace = new RegExp(/[;](?![\w])/gi);
        classtype = classtype.replace(regexreplace, '').trim();
        if (v.Type == "icon") {
            htmlfilter += "<th class='" + classtype + "'  style='" + style + "'>" + htmledit + "</th>";
            if (itemvalue == "Edit") {
                htmlsum += '<th class="' + classtype + '"  style="' + style + '" data-fieldname="' + itemvalue + '"><a href="javascript:void(0);" title="Clear" onclick="$.hmcustom.table.ClearText(this,' + paratablename + ')"><i class="fa fa-eraser"></i></a></th>';
            }
            else {
                htmlsum += '<th></th>';
            }
        }
        else {
           
            htmlfilter += "<th " + clss_th + " style='" + style + "; font-size:12px; " + display + "; vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
            htmlsum += "<th style='" + style + "font-size:12px; " + display + "' data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' class='" + classtype + "'></th>";
        }
    })

    let htmlinsert = "";
    if (addnewobject != undefined) {
        if (addnewobject.method == "insert") {
            let htmlcolinsert = "";
            $.each(arraytable, function (i, v) {
                var classtype = "";
                var style = "";
                var display = "";
                var displayfilter = "";
                var formatdatetime = "";
                var htmledit = "";
                if (!v.View) {
                    display = "display:none;";
                }
                if (!v.Filter) {
                    displayfilter = "display:none;";
                }
                var itemvalue = v.Name
                switch (v.Type) {
                    case "string":
                    case "selected":
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='hmBorder input-control input-sm" + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "Selectized":
                        let unitpricetype = "currency";
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";

                        break;
                    case "datetime":
                        classtype = "text-right";
                        formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "number":
                        classtype = "text-right";
                        inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "decimal":
                    case "currency":
                        classtype = "text-right";
                        inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                        break;
                    case "bool":
                        inputfilter = "";
                        break;
                    case "icon":
                        classtype = "text-center";
                        style = "vertical-align:middle;";
                        //itemvalue = "";
                        display = "display:none;";
                        htmledit = v.Des;
                        break;
                }
                htmlcolinsert += "<th style='" + style + "font-size:12px; " + display + " vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
            })
            htmlinsert = '<tr class="row-insert">' +
                             '<th class="text-center" style="vertical-align:middle"><a href="javascript:;" onclick="$.procresponsibility.table.AddNewValue(this)" data-action="' + addnewobject.action + '" data-path="' + addnewobject.path + '" data-url="' + addnewobject.url + '"><small class="label label-primary text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                    htmlcolinsert +
                        '</tr>';
        }
    }

    //style="font-size:12px"
    var htmltable = '<form>' +
                        '<div class="text-center" style="border: 1px solid #f4f4f4; border-bottom:none" id="divtitle' + tablename + '"></div>' +
                        '<div class="table-responsive"><table class="table table-bordered table-condensed" name="' + tablename + '" data-area="' + action + '" style="' + font_size + '">' +
                                '<thead>' +
                                    '<tr class="row-header">' +
                                        '<th data-resizable-column-id="' + new Date().getTime() + '" style="Width:30px"><input type="hidden" value="0" name="page" id="inputpage' + tablename + '"/></th>' +
                                        htmlheader +
                                    '</tr>' +
                                    '<tr class="row-filter">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:$.hmcustom.table.collapseSummary(' + paratablename + ');"><small class="label label-default text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                        htmlfilter +
                                    '</tr>' +
                                        '<tr class="row-sum">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:void(0);" onclick="$.hmcustom.table.SumRow(this,' + paratablename + ')" class="btn-default btn-flat"><img src="/Content/themes/accounting/images/sigma.png"/></a></th>' +
                                        //'<th class="text-center" style="vertical-align:middle"><a href="javascript:void(0);" onclick="$.hmcustom.table.SumFromDatabase(this,' + paratablename + ')" class="btn-default btn-flat"><img src="/Content/themes/accounting/images/sigma.png"/></a></th>' +
                                        htmlsum +
                                    '</tr>' +
                                     htmlinsert +
                                '</thead>' +
                                '<tbody id="tbody' + tablename + '"></tbody>' +
                                '<tfoot>' +
                                    $.hmcustom.AddRowWaiting("trwaiting" + tablename, countcol) +
                                    $.hmcustom.AddRowLoadmore("trloadmore" + tablename, "aloadmore" + tablename, countcol, null) +
                                '</tfoot>' +
                        '</table></div>' +
                    '</form>';
    return htmltable;
}
/// <summary>Table có copy paste</summary>
$.hmcustom.table.CreateNotSum_Paste = function (arraytable, tablename, action, fontsize, addnewobject) {
    var htmlheader = "";
    var countcol = 1;
    let font_size = "font-size:12px";
    let paratablename = "'" + tablename + "'";
    var second = 20;
    var idauto = 0;
    if (fontsize != null && fontsize != "" && fontsize != "undefined") {
        font_size = "font-size:" + fontsize + "px";
    }
    $.each(arraytable, function (i, v) {
        idauto = new Date().getTime() + second;
        var classtype = "";
        var style = "";
        var display = "";
        var colortext = "";
        let widthcustom = "";
        if (!v.View) {
            display = "display:none;";
        }
        else {
            countcol += 1;
        }
        var itemvalue = v.Des;
        switch (v.Type) {
            case "string":
            case "selected":
                break;
            case "datetime":
            case "date":
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
                style = "vertical-align:middle;";
                itemvalue = "";
                break;
            case "Selectized":
                classtype = "text-right";
                break;
            case "bool":
                classtype = "text-center";
                break;
        }
        if (v.Update) {
            colortext = "color:#337ab7;";
        }
        if (v.Width != "undefined" && v.Width != null && v.Width != "") {
            widthcustom = "Width:" + v.Width + "px;";
        }
        htmlheader += "<th data-resizable-column-id='" + v.Name + idauto + "' class='" + classtype + "' data-fieldname='" + v.Name + "' style='" + style + display + colortext + widthcustom + "'>" + itemvalue + "</th>";
    })
    var htmlfilter = "";
    let inputfilter = "";
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "";
        var display = "";
        var displayfilter = "";
        var formatdatetime = "";
        var htmledit = "";
        let clss_th = "";
        if (!v.View) {
            display = "display:none;";
        }
        if (!v.Filter) {
            displayfilter = "display:none;";
        }
        var itemvalue = v.Name
        switch (v.Type) {
            case "string":
            case "selecteduser":
            case "selected":
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                break;
            case "Selectized":
                let unitpricetype = "currency";
                classtype = "text-right";
                inputfilter = "<input placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + unitpricetype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "date":
            case "datetime":
                classtype = "text-right";
                var regexreplace = new RegExp(/[;](?![\w])/gi);
                classtype = classtype.replace(regexreplace, '').trim();
                formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "'  data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + '  class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '"  ' + formatdatetime + ' class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "number":
                classtype = "text-right;";
                var regexreplace = new RegExp(/[;](?![\w])/gi);
                classtype = classtype.replace(regexreplace, '').trim();
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' placeholder='=' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilter' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilter' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "decimal":
            case "currency":
                classtype = "text-right;";
                var regexreplace = new RegExp(/[;](?![\w])/gi);
                classtype = classtype.replace(regexreplace, '').trim();
                inputfilter = "<input onkeyup='$.hmcustom.table.OnEventInput(this)' placeholder='='  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>";
                if (v.FilterCompare) {
                    inputfilter = '<div class="input-group">' +
                                    "<input placeholder='=' data-fieldname='" + itemvalue + "' onkeyup='$.hmcustom.table.OnEventInput(this)' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "' value=''/>" +
                                    '<span class="input-group-addon btn-default" data-toggle="collapse" data-target="#collapsefilterd' + itemvalue + tablename + '">' +
                                        '<a style="color:black;" >' +
                                            '<i class="fa fa-filter"></i>' +
                                        '</a>' +
                                    '</span>' +
                                '</div>' +
                                '<div class="collapse" id="collapsefilterd' + itemvalue + tablename + '">' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.lg" value="" placeholder=">" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ls" value="" placeholder="<" />' +
                                    '<input data-fieldname="' + itemvalue + '" data-type="' + v.Type + '" onkeyup="$.hmcustom.table.OnEventInput(this)" class="input-control input-sm text-right" name="' + itemvalue + '.ul" value="" placeholder="<>" />' +
                                '</div>';
                }
                break;
            case "bool":
                clss_th = 'class="text-center"';
                inputfilter = "";
                break;
            case "icon":
                classtype = "text-center;";
                style = "vertical-align:middle;";
                //itemvalue = "";
                display = "display:none;";
                htmledit = v.Des;
                break;
        }
        var regexreplace = new RegExp(/[;](?![\w])/gi);
        classtype = classtype.replace(regexreplace, '').trim();
        if (v.Type == "icon") {
            htmlfilter += "<th class='" + classtype + "'  style='" + style + "'>" + htmledit + "</th>";
        }
        else {
            htmlfilter += "<th " + clss_th + " style='" + style + " font-size:12px; " + display + " vertical-align:top' data-fieldname='" + itemvalue + "'>" + inputfilter + "</th>";
        }
    })

    let htmlinsert = "";
    let htmlcolinsert = "";
    let stringtable = "'" + tablename + "'";
    let stringurlinsert = "'" + action.urlinsert + "'";
    $.each(arraytable, function (i, v) {
        var classtype = "";
        var style = "padding:0;";
        var display = "";
        var displayfilter = "display:none";
        var formatdatetime = "";
        var htmledit = "";
        if (!v.View) {
            display = "display:none";
        }
        var itemvalue = v.Name
        switch (v.Type) {
            case "string":
            case "selected":
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='hmBorder input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                break;
            case "Selectized":
                let unitpricetype = "currency";
                classtype = "text-right";
                inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + unitpricetype + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";

                break;
            case "datetime":
                classtype = "text-right";
                formatdatetime = 'onfocus = "$.hmcustom.table.InputmaskDateTime(this)"';
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                break;
            case "number":
                classtype = "text-right";
                inputfilter = "<input data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                break;
            case "decimal":
            case "currency":
                classtype = "text-right";
                inputfilter = "<input  data-fieldname='" + itemvalue + "' data-type='" + v.Type + "' " + formatdatetime + " style='" + displayfilter + "' class='input-control input-sm " + classtype + "' name='" + itemvalue + "'/>";
                break;
            case "bool":
                inputfilter = "";
                break;
            case "icon":
                classtype = "text-center";
                style += "vertical-align:middle";
                //display = "display:none";
                htmledit =  '<a href="javascript:;" onclick="$.hmcustom.function.EventSavePaste(' + stringtable + ',' + stringurlinsert + ')"><i class="fa fa-save"></i></a><br>' +
                            '<a href="javascript:;" onclick="$.hmcustom.function.EventRemoveAllPaste(this)" title="Xóa tất cả các công tác thêm mới"><i class="fa fa-remove"></i></a>';
                break;
        }
        if (v.Type == "icon")
        {
            htmlcolinsert += "<th class='" + classtype + "'  style='" + style + "'>" + htmledit + "</th>";
        }
        else
        {
            htmlcolinsert += "<th style='" + style + " font-size:12px; " + display + "; vertical-align:middle' data-fieldname='" + itemvalue + "' onclick='$.hmcustom.function.EventCopy(this)'>" + inputfilter + "</th>";
        }
    })
    htmlinsert = '<tr class="row-paste">' +
                     '<th class="text-center" style="vertical-align:middle"><small class="text-center"><i class="fa fa-paste"></i></small></th>' +
                            htmlcolinsert +
                     //'<th class="text-center" style="vertical-align:middle">' +
                     //       '<a href="javascript:;" onclick="$.hmcustom.function.EventSavePaste(' + stringtable + ',' + stringurlinsert + ')"><i class="fa fa-save"></i></a>' +
                     //       '<a href="javascript:;" onclick="$.hmcustom.function.EventRemoveAllPaste(this)"><i class="fa fa-remove"></i></a>' +
                     //'</th>' +
                '</tr>';
    var htmltable = '<form>' +
                        '<div class="text-center" style="border: 1px solid #f4f4f4; border-bottom:none" id="divtitle' + tablename + '"></div>' +
                        '<div class="table-responsive">' +
                            '<table class="table table-bordered table-condensed" name="' + tablename + '" data-area="' + action.urlupdate + '" style="' + font_size + '">' +
                                '<thead>' +
                                    '<tr class="row-header">' +
                                        '<th data-resizable-column-id="' + new Date().getTime() + '"><input type="hidden" value="0" name="page" id="inputpage' + tablename + '"/></th>' +
                                        htmlheader +
                                    '</tr>' +
                                    '<tr class="row-filter">' +
                                        '<th class="text-center" style="vertical-align:middle"><a href="javascript:$.hmcustom.table.collapseSummary(' + paratablename + ');"><small class="label label-default text-center" style="vertical-align:middle"><i class="fa fa-plus"></i></small></a></th>' +
                                        htmlfilter +
                                    '</tr>' +
                                    htmlinsert +
                                '</thead>' +
                                '<tbody id="tbody' + tablename + '"></tbody>' +
                                '<tfoot>' +
                                    $.hmcustom.AddRowWaiting("trwaiting" + tablename, countcol) +
                                    $.hmcustom.AddRowLoadmore("trloadmore" + tablename, "aloadmore" + tablename, countcol, null) +
                                '</tfoot>' +
                            '</table>' +
                        '</div>' +
                    '</form>';
    return htmltable;
}
///Add body khogno load more và sử dụng phím
$.hmcustom.table.AddRowtbody = function (arraytable, tablename, datarow, html) {
    var trvalue = "";
    var count_row = $("table[name='" + tablename + "'] #tbody" + tablename + " tr[name='trvalue" + tablename + "']").length + 1;
    $.each(datarow, function (i, v) {
        var tdvalue = "";
        var idauto = "";
        $.each(arraytable, function (_i, _v) {
            let classtype = "";
            let style = "";
            let display = "";
            let Editcolum = "";
            let inputedit = "";
            let paratable = "'" + tablename + "'";
            let categorychosen = "'" + "DF" + "'";
            let chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            let formatinput = '';
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
                    var regex = new RegExp(/<a\b[^>]*>(.*?)<[/]a>/gm);
                    if(regex.test(itemvalueorg))
                    {
                        itemvalueorg = (itemvalueorg.replace(regex, "")).trim();
                    }
                    break;
                case "date"://dùng cho gõ tay và cho update nguyên một dòng dữ liệu
                case "datetime"://dùng để chọn trê lịch 
                    classtype = "text-right";
                    if (itemvalue != null && itemvalue != "") {
                        //itemvalueorg = $.hmcustom.table.DateTimeConvert(v[_v.Name]);
                        //itemvalue = $.hmcustom.table.DateTimeConvert(v[_v.Name]);
                        itemvalueorg = $.hmcustom.table.DateTimeConvert_EN(v[_v.Name], "date");
                        itemvalue = $.hmcustom.table.DateTimeConvert_EN(v[_v.Name],"date");
                    }
                    else {
                        itemvalue = "";
                    }
                    break;
                case "number":
                    if (itemvalue == "" || itemvalue == null) {
                        itemvalue = 0;
                    }
                    else
                    {
                        itemvalue = itemvalueorg;
                    }
                    classtype = "text-right";
                    break;
                case "decimal":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.odd, minimumFractionDigits: $.hmcustom.table.odd });
                    formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "currency":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = Math.round(itemvalue,0);
                    itemvalue = (Math.round(itemvalue, 1)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "selectedCode":
                case "selecteduser":
                case "selected":
                    if (itemvalue == null) {
                        itemvalue = "";
                    }
                    itemvalueorg = "";
                    break;
                case "Selectized":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
                    //formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "bool":
                    classtype = "text-center";
                    break;
                case "icon":
                    classtype = "text-center";
                    style = "vertical-align:middle";
                    itemvalue = v[_v.Name];
                    chosenelement = "";
                    break;
            }
            if (_v.Selectized && _v.Type != "bool") {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" value="' + itemvalueorg + '" data-type="' + _v.Type + '" type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
                chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            }
            if (_v.Update && !_v.Selectized && _v.Type != "bool") {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" name="' + _v.Name + '" value="' + itemvalueorg + '"  data-type="' + _v.Type + '" ' + formatinput + ' type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
                chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            }
            if (_v.Type == "datetime" && _v.Update) {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" value="' + itemvalueorg + '" data-type="' + _v.Type + '" type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
                chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            }
            tdvalue += "<td class='" + classtype + "'  data-type='" + _v.Type + "'  data-fieldname='" + _v.Name + "' style='" + display + ";" + style + "' " + Editcolum + " " + chosenelement + ">" + inputedit + itemvalue + "</td>";
        })
        trvalue += "<tr onclick='$.hmcustom.table.ClickRow(this)' class='row-data' name='trvalue" + tablename + "'><td class='text-center'>" + count_row + "</td>" + tdvalue + "</tr>";
        count_row += 1;
    })
    return trvalue;
}
/// <summary>di chuyện giữa cá cột bằng phím and loadmore</summary>
$.hmcustom.table.AddRowtbodywithKey = function (arraytable, tablename, datarow, page, html) {
    var trvalue = "";
    var count_row = $("table[name='" + tablename + "'] #tbody" + tablename + " tr").length + 1;
    var trindex = count_row;
    var arrayidauto = [];
    var second = 20;
    var idauto = 0;
    $.each(datarow, function (i, v) {
        var tdvalue = "";
        idauto = new Date().getTime() + second;
        arrayidauto.push(idauto);
        var tabindex = 0;
        $.each(arraytable, function (_i, _v) {
            let classtype = "";
            let style = "";
            let display = "";
            let Editcolum = "";
            let inputedit = "";
            let paratable = "'" + tablename + "'";
            let categorychosen = "'" + "DF" + "'";
            //let chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            let formatinput = '';
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
                    var regex = new RegExp(/<a\b[^>]*>(.*?)<[/]a>/gm);
                    if (regex.test(itemvalueorg)) {
                        itemvalueorg = (itemvalueorg.replace(regex, "")).trim();
                    }
                    break;
                case "date"://dùng cho gõ tay và cho update nguyên một dòng dữ liệu
                case "datetime"://dùng để chọn trê lịch 
                    classtype = "text-right";
                    if (itemvalue != null && itemvalue != "") {
                        //itemvalueorg = $.hmcustom.table.DateTimeConvert(v[_v.Name]);
                        //itemvalue = $.hmcustom.table.DateTimeConvert(v[_v.Name]);
                        itemvalueorg = $.hmcustom.table.DateTimeConvert_EN(v[_v.Name], "date");
                        itemvalue = $.hmcustom.table.DateTimeConvert_EN(v[_v.Name], "date");
                    }
                    else {
                        itemvalue = "";
                    }
                    break;

                case "number":
                    if (itemvalue == "" || itemvalue == null) {
                        itemvalue = 0;
                    }
                    else {
                        itemvalue = itemvalueorg;
                    }
                    classtype = "text-right";
                    break;
                case "decimal":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.odd, minimumFractionDigits: $.hmcustom.table.odd });
                    formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "currency":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = Math.round(itemvalue, 0);
                    itemvalue = (Math.round(itemvalue, 1)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "selectedCode":
                case "selecteduser":
                case "selected":
                    if (itemvalue == null) {
                        itemvalue = "";
                    }
                    itemvalueorg = "";
                    break;
                case "Selectized":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    //formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "bool":
                    classtype = "text-center";
                    break;
                case "icon":
                    classtype = "text-center";
                    style = "vertical-align:middle";
                    itemvalue = v[_v.Name];
                    chosenelement = "";
                    break;
                case "idauto":
                    display = "display:none";
                    break;
            }
            if (_v.Selectized && _v.Type != "bool") {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" value="' + itemvalueorg + '" data-type="' + _v.Type + '" type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
            }
            if (_v.Update && !_v.Selectized && _v.Type != "bool") {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" name="' + _v.Name + '" value="' + itemvalueorg + '"  data-type="' + _v.Type + '" ' + formatinput + ' type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
            }
            if (_v.Type == "datetime" && _v.Update) {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" value="' + itemvalueorg + '" data-type="' + _v.Type + '" type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
            }
            if (display == "display:none" || _v.Type == "icon")
            {
                tdvalue += "<td class='" + classtype + "'  data-type='" + _v.Type + "'  data-fieldname='" + _v.Name + "' style='" + display + ";" + style + "' " + Editcolum + ">" + inputedit + itemvalue + "</td>";
            }
            else 
            {
                tdvalue += "<td tabindex='" + tabindex + "' class='" + classtype + "'  data-type='" + _v.Type + "'  data-fieldname='" + _v.Name + "' style='" + display + ";" + style + "' " + Editcolum + ">" + inputedit + itemvalue + "</td>";
                tabindex += 1;
            }
        })
        trvalue += "<tr tabindex='" + trindex + "'  class='row-data' name='trvalue" + idauto + "'><td class='text-center'>" + count_row + "</td>" + tdvalue + "</tr>";
        count_row += 1;
        trindex += 1;
    })
    $("#tbody" + tablename).append(trvalue);
    $.hmcustom.function.Loadmore(page, "trloadmore" + tablename, "aloadmore" + tablename, "inputpage" + tablename, tablename);
    $.hmcustom.endwaiting("tb", "trwaiting" + tablename);

    $("table[name='" + tablename + "']").resizableColumns('unbindEvents');
    $("table[name='" + tablename + "']").resizableColumns();
    $("table[name='" + tablename + "']").resizableColumns('syncHandleWidths');
    var Keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    var objectfunction = new $.hmfunction.Scroll(Keys);
    $.each(arrayidauto, function (i, v) {
        $("#tbody" + tablename + " tr[name='trvalue" + v + "'] td").unbind("mousedown");
        $("#tbody" + tablename + " tr[name='trvalue" + v + "'] td").mousedown(function () {
            $("#tbody" + tablename + " tr[name='trvalue" + v + "']").unbind("keydown");
            $(this).attr("data-active", 1, true);
            objectfunction.disableScroll();
            $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
            $($(this).closest("tr")).addClass("sv-gv-datarow-focused");
            //$("#tbody" + tablename + " tr td").removeClass("tdchosen");
            $("#tbody" + tablename + " tr td").removeClass("tddefault");
            //$(this).addClass("tdchosen");
            $(this).addClass("tddefault");
            var cellindex = $(this).get(0).cellIndex;
            var bodylength = $("#tbody" + tablename + " tr").length;
            $("#tbody" + tablename + " tr[name='trvalue" + v + "']").keydown(function (event) {
                var tabindexcurrent = $(this).attr("tabindex");
                switch (event.keyCode) {
                    case 37://left
                        var trindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused']").attr("tabindex");
                        var getclasscurrent = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[data-active=1]").attr("class");
                        var tdindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[class='" + getclasscurrent + "']").attr("tabindex");
                        var indexleft = Number(tdindex) - 1;
                        if ($("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexleft + "]").length > 0) {
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexleft + "]").addClass("tddefault");
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexleft + "]").attr("data-active", 1, true);
                        }
                        break;
                    case 38://up
                        var trindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused']").attr("tabindex");
                        var getclasscurrent = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[data-active=1]").attr("class");
                        var tdindex = $("#tbody" + tablename + "  tr[class='row-data sv-gv-datarow-focused'] td[class='" + getclasscurrent + "']").attr("tabindex");
                        var index = Number(trindex) - 1;
                        if (index >= 1) {
                            $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
                            $("#tbody" + tablename + " tr[tabindex=" + index + "]").addClass("sv-gv-datarow-focused");
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").addClass("tddefault");
                            $("#tbody" + tablename + " tr td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").attr("data-active", 1, true);
                        }
                        break;
                    case 39://right
                        var trindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused']").attr("tabindex");
                        var getclasscurrent = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[data-active=1]").attr("class");
                        var tdindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[class='" + getclasscurrent + "']").attr("tabindex");
                        var indexright = Number(tdindex) + 1;
                        if ($("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").length > 0) {
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").addClass("tddefault");
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").attr("data-active", 1, true);
                        }
                        break;
                    case 40:// down
                        var trindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused']").attr("tabindex");
                        var getclasscurrentdown = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[data-active=1]").attr("class");
                        var tdindex = $("#tbody" + tablename + "  tr[class='row-data sv-gv-datarow-focused'] td[class='" + getclasscurrentdown + "']").attr("tabindex");
                        var index = Number(trindex) + 1;
                        if (index <= bodylength) {
                            $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
                            $("#tbody" + tablename + " tr[tabindex=" + index + "]").addClass("sv-gv-datarow-focused");
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").addClass("tddefault");
                            $("#tbody" + tablename + " tr td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").attr("data-active", 1, true);
                        }
                        else {
                            $("#tbody" + tablename + " tr td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
                            objectfunction.enableScroll();
                        }
                        break;
                }
            })
        })
    })
  
    //return trvalue;
}
/// <summary>Phân biệt edit và không edit</summary>
$.hmcustom.table.AddRowtbodywithKey1 = function (arraytable, tablename, datarow, page, html) {
    var trvalue = "";
    var count_row = $("table[name='" + tablename + "'] #tbody" + tablename + " tr").length + 1;
    var trindex = count_row;
    var arrayidauto = [];
    var second = 20;
    var idauto = 0;
    $.each(datarow, function (i, v) {
        var tdvalue = "";
        idauto = new Date().getTime() + second;
        arrayidauto.push(idauto);
        var tabindex = 0;
        $.each(arraytable, function (_i, _v) {
            let classtype = "";
            let style = "";
            let display = "";
            let Editcolum = "";
            let inputedit = "";
            let paratable = "'" + tablename + "'";
            let categorychosen = "tddefault";//"'" + "DF" + "'";
            if(_v.Update)
            {
                categorychosen = "tdchosen";//"'" + "CH" + "'";
            }
            let formatinput = '';
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
                    var regex = new RegExp(/<a\b[^>]*>(.*?)<[/]a>/gm);
                    if (regex.test(itemvalueorg)) {
                        itemvalueorg = (itemvalueorg.replace(regex, "")).trim();
                    }
                    break;
                case "date"://dùng cho gõ tay và cho update nguyên một dòng dữ liệu
                case "datetime"://dùng để chọn trê lịch 
                    classtype = "text-right";
                    if (itemvalue != null && itemvalue != "") {
                        itemvalueorg = $.hmcustom.table.DateTimeConvert_EN(v[_v.Name], "date");
                        itemvalue = $.hmcustom.table.DateTimeConvert_EN(v[_v.Name], "date");
                    }
                    else {
                        itemvalue = "";
                    }
                    break;

                case "number":
                    if (itemvalue == "" || itemvalue == null) {
                        itemvalue = 0;
                    }
                    else {
                        itemvalue = itemvalueorg;
                    }
                    classtype = "text-right";
                    break;
                case "decimal":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.odd, minimumFractionDigits: $.hmcustom.table.odd });
                    formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "currency":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = Math.round(itemvalue, 0);
                    itemvalue = (Math.round(itemvalue, 1)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "selectedCode":
                case "selecteduser":
                case "selected":
                    if (itemvalue == null) {
                        itemvalue = "";
                    }
                    itemvalueorg = "";
                    break;
                case "Selectized":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    //formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "bool":
                    classtype = "text-center";
                    break;
                case "icon":
                    classtype = "text-center";
                    style = "vertical-align:middle";
                    itemvalue = v[_v.Name];
                    chosenelement = "";
                    break;
                case "idauto":
                    display = "display:none";
                    break;
            }
            
            if (_v.Selectized && _v.Type != "bool") {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" value="' + itemvalueorg + '" data-type="' + _v.Type + '" type="hidden" style="font-family:Arial"/>';
            }
            if (_v.Update && !_v.Selectized && _v.Type != "bool") {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" name="' + _v.Name + '" value="' + itemvalueorg + '"  data-type="' + _v.Type + '" ' + formatinput + ' type="hidden" style="font-family:Arial"/>';
            }
            if (_v.Type == "datetime" && _v.Update) {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" value="' + itemvalueorg + '" data-type="' + _v.Type + '" type="hidden" style="font-family:Arial"/>';
            }
            let styleformat = (display + "; " + style);
            styleformat = (styleformat.replace(/^[;]|;$|(^\s;)|(^\s)/g,'')).trim();
            if (display == "display:none" || _v.Type == "icon") {
                tdvalue += "<td class='" + classtype + "'  data-type='" + _v.Type + "'  data-fieldname='" + _v.Name + "' style='"+styleformat+"' " + Editcolum + ">" + inputedit + itemvalue + "</td>";
            }
            else {
                tdvalue += "<td tabindex='" + tabindex + "' class='" + classtype + "' data-update='"+_v.Update+"'  data-type='" + _v.Type + "'  data-fieldname='" + _v.Name + "' style='" + styleformat + "' " + Editcolum + ">" + inputedit + itemvalue + "</td>";
                tabindex += 1;
            }
        })
        trvalue += "<tr tabindex='" + trindex + "'  class='row-data' name='trvalue" + idauto + "'><td class='text-center'>" + count_row + "</td>" + tdvalue + "</tr>";
        count_row += 1;
        trindex += 1;
    })
    $("#tbody" + tablename).append(trvalue);
    $.hmcustom.function.Loadmore(page, "trloadmore" + tablename, "aloadmore" + tablename, "inputpage" + tablename, tablename);
    $.hmcustom.endwaiting("tb", "trwaiting" + tablename);
    //sự kiện phím di chuyển
    var Keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    var objectfunction = new $.hmfunction.Scroll(Keys);
    $.each(arrayidauto, function (i, v) {
        $("#tbody" + tablename + " tr[name='trvalue" + v + "'] td").unbind("mousedown");
        $("#tbody" + tablename + " tr[name='trvalue" + v + "'] td").mousedown(function () {
            $("#tbody" + tablename + " tr[name='trvalue" + v + "']").unbind("keydown");
            $(this).attr("data-active", 1, true);
            objectfunction.disableScroll();
            $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
            $($(this).closest("tr")).addClass("sv-gv-datarow-focused");
            $("#tbody" + tablename + " tr td").removeClass("tddefault");
            $("#tbody" + tablename + " tr td").removeClass("tdchosen");
            var editdefault = $(this).attr("data-update");
            if (editdefault == "true")
            {
                $(this).addClass("tdchosen");
            }
            else
            {
                $(this).addClass("tddefault");
            }            
            var cellindex = $(this).get(0).cellIndex;
            var bodylength = $("#tbody" + tablename + " tr").length;
            $("#tbody" + tablename + " tr[name='trvalue" + v + "']").keydown(function (event) {
                var tabindexcurrent = $(this).attr("tabindex");
                switch (event.keyCode) {
                    case 37://left
                        
                        var trindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused']").attr("tabindex");
                        var getclasscurrent = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[data-active=1]").attr("class");
                        var tdindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[class='" + getclasscurrent + "']").attr("tabindex");
                        var indexleft = Number(tdindex) - 1;
                        if ($("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexleft + "]").length > 0) {
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr td").removeClass("tdchosen");
                            var edit = $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexleft + "]").attr("data-update");
                            if (edit == "true")
                            {
                                $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexleft + "]").addClass("tdchosen");
                            }
                            else
                            {
                                $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexleft + "]").addClass("tddefault");
                            }
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexleft + "]").attr("data-active", 1, true);
                        }
                        break;
                    case 38://up
                        var trindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused']").attr("tabindex");
                        var getclasscurrent = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[data-active=1]").attr("class");
                        var tdindex = $("#tbody" + tablename + "  tr[class='row-data sv-gv-datarow-focused'] td[class='" + getclasscurrent + "']").attr("tabindex");
                        var index = Number(trindex) - 1;
                        if (index >= 1) {
                            $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
                            $("#tbody" + tablename + " tr[tabindex=" + index + "]").addClass("sv-gv-datarow-focused");
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr td").removeClass("tdchosen");
                            var editup = $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").attr("data-update");
                            if (editup == "true")
                            {
                                $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").addClass("tdchosen");
                            }
                            else
                            {
                                $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").addClass("tddefault");
                            }
                            $("#tbody" + tablename + " tr td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").attr("data-active", 1, true);
                        }
                        break;
                    case 39://right
                        var trindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused']").attr("tabindex");
                        var getclasscurrent = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[data-active=1]").attr("class");
                        var tdindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[class='" + getclasscurrent + "']").attr("tabindex");
                        var indexright = Number(tdindex) + 1;
                        if ($("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").length > 0) {
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr td").removeClass("tdchosen");
                            var editright = $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").attr("data-update");
                            if (editright == "true") {
                                $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").addClass("tdchosen");
                            }
                            else {
                                $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").addClass("tddefault");
                            }
                            //$("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").addClass("tddefault");
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr[tabindex=" + trindex + "] td[tabindex=" + indexright + "]").attr("data-active", 1, true);
                        }
                        break;
                    case 40:// down
                        var trindex = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused']").attr("tabindex");
                        var getclasscurrentdown = $("#tbody" + tablename + " tr[class='row-data sv-gv-datarow-focused'] td[data-active=1]").attr("class");
                        var tdindex = $("#tbody" + tablename + "  tr[class='row-data sv-gv-datarow-focused'] td[class='" + getclasscurrentdown + "']").attr("tabindex");
                        var index = Number(trindex) + 1;
                        if (index <= bodylength) {
                            $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
                            $("#tbody" + tablename + " tr[tabindex=" + index + "]").addClass("sv-gv-datarow-focused");
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr td").removeClass("tdchosen");
                            var editdown = $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").attr("data-update");
                            if (editdown == "true")
                            {
                                $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").addClass("tdchosen");
                            }
                            else
                            {
                                $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").addClass("tddefault");
                            }
                            $("#tbody" + tablename + " tr td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr[tabindex=" + index + "] td[tabindex=" + tdindex + "]").attr("data-active", 1, true);
                        }
                        else {
                            $("#tbody" + tablename + " tr td").attr("data-active", 0, true);
                            $("#tbody" + tablename + " tr td").removeClass("tddefault");
                            $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
                            objectfunction.enableScroll();
                        }
                        break;
                }
            })
        })
    })
    $("table[name='" + tablename + "']").mouseleave(function (event) {
        $("#tbody" + tablename + " tr td").removeClass("tddefault");
        $("#tbody" + tablename + " tr td").removeClass("tdchosen");
        $("#tbody" + tablename + " tr").removeClass("sv-gv-datarow-focused");
    })
    
}
/// <summary>Có load more</summary>
$.hmcustom.table.AddRowtbody1 = function (arraytable, tablename, datarow, page, html) {
    $.hmcustom.waiting("tb", "trwaiting" + tablename);
    var trvalue = "";
    var count_row = $("table[name='" + tablename + "'] #tbody" + tablename + " tr[name='trvalue" + tablename + "']").length + 1;
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
            let formatinput = '';
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
                        itemvalueorg = $.hmcustom.table.DateTimeConvert_EN(v[_v.Name],"date");
                        itemvalue = $.hmcustom.table.DateTimeConvert_EN(v[_v.Name],"date");
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
                    formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "currency":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "selected":
                    if (itemvalue == null) {
                        itemvalue = "";
                    }
                    itemvalueorg = "";
                    break;
                case "Selectized":
                    classtype = "text-right";
                    if (itemvalue == null || itemvalue == "") {
                        itemvalue = 0;
                    }
                    itemvalueorg = itemvalue;
                    itemvalue = itemvalue.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost, minimumFractionDigits: $.hmcustom.table.cost });
                    //formatinput = 'onkeyup="$.hmcustom.table.OnEventInput(this)"';
                    break;
                case "bool":
                    classtype = "text-center";
                    break;
                case "icon":
                    classtype = "text-center";
                    style = "vertical-align:middle";
                    itemvalue = v[_v.Name];
                    chosenelement = "";
                    break;
            }
            if (_v.Selectized && _v.Type != "bool") {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" value="' + itemvalueorg + '" data-type="' + _v.Type + '" type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
                chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            }
            if (_v.Update && !_v.Selectized && _v.Type != "bool") {
                Editcolum = "ondblclick='$.hmcustom.table.EditColumn(this)'";
                inputedit = '<input class="form-control input-sm ' + classtype + '" name="' + _v.Name + '" value="' + itemvalueorg + '"  data-type="' + _v.Type + '" ' + formatinput + ' type="hidden" style="font-family:Arial"/>';
                categorychosen = "'" + "CH" + "'";
                chosenelement = 'onclick="$.hmcustom.table.ChosenElement(this,' + paratable + ',' + categorychosen + ')"';
            }
            tdvalue += "<td class='" + classtype + "'  data-type='" + _v.Type + "'  data-fieldname='" + _v.Name + "' " + Editcolum + " style='" + display + ";" + style + "' " + Editcolum + " " + chosenelement + ">" + inputedit + itemvalue + "</td>";
        })
        trvalue += "<tr onclick='$.hmcustom.table.ClickRow(this)' class='row-data' name='trvalue" + tablename + "'><td class='text-center'>" + count_row + "</td>" + tdvalue + "</tr>";
        count_row += 1;
    })
    $.hmcustom.function.Loadmore(page, "trloadmore" + tablename, "aloadmore" + tablename, "inputpage" + tablename, tablename);
    $.hmcustom.endwaiting("tb", "trwaiting" + tablename);
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
                        return '<div class="item"><span" href="' + escape(item.Value) + '">' + escape(item.Text) + '</span></div>';
                    },
                    option: function (item, escape) {
                        return "<div data-value=" + escape(item.Value) + " data-selectable='' class='option'><span style='font-size:10px'>" + escape(item.Text) + "</span></div>";
                    }
                },
                onItemAdd: function (value, data) {
                    let ItemName = data.get(0).textContent;
                    var outerhtml = $($(a).get(0).firstChild).closest("tr").get(0).outerHTML;
                    var form = document.createElement("form")
                    $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                    $(form).append(outerhtml);
                    var input = document.createElement("input");
                    $(input).attr("name", "contractid");
                    $(input).attr("value", $.hmcustom.para.Contractid);
                    $(form).append(input);
                    let inputcolname = document.createElement("input");
                    $(inputcolname).attr("name", "colname");
                    $(inputcolname).attr("value", fieldname);
                    $(form).append(inputcolname);
                    var input1 = document.createElement("input");
                    $(input1).attr("name", "Unit");
                    $(input1).attr("value", value);
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
                                selectized[0].selectize.destroy();
                                //$(a).get(0).lastChild.data = item.Text;
                                if ($(a).get(0).lastChild.data == null) {

                                    $($(a).get(0).firstChild).val(ItemName);
                                    let htmlinput = ItemName;
                                    $($(a).get(0).firstChild).after(htmlinput);
                                }
                                else {
                                    $(a).get(0).lastChild.data = ItemName;
                                    $($(a).get(0).firstChild).val(ItemName).focus();
                                }
                                $(a).attr("style", "", true);
                                $(a).click(function () {
                                    var id = $(a).attr("aria-describedby");
                                    $("#" + id).popover('destroy');
                                })
                            }
                        }
                    })
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

            if ($(a).get(0).lastChild.data != "undefined") {
                $($(a).get(0).firstChild).val($(a).get(0).lastChild.data);
                let gettag = $(a).get(0).lastChild.tagName;
                $(a).get(0).lastChild.data = null;
                if (gettag == "B") {
                    $($(a).get(0).lastChild).remove();
                }
            }
            return;
        case "selecteduser":
            var selectized = $($(a).get(0).firstChild).selectize({
                delimiter: ',',
                persist: false,
                preload: true,
                maxItems: 1,
                maxOptions: 10,
                valueField: 'Value',
                searchField: ['Value', 'Text'],
                options: [
                       { Text: 'Not set value--', Value: ' ' }
                ],
                create: false,
                render: {
                    item: function (item, escape) {
                        return '<div class="item"><span" href="' + escape(item.Value) + '">' + escape(item.Value) + '</span></div>';
                    },
                    option: function (item, escape) {
                        let valuesplit = item.Text.split('--');
                        return "<div data-value=" + escape(item.Value) + " data-selectable='' class='option'><span style='font-size:13px'>" + item.Value + '--' + valuesplit[0] + "</span><span style='font-size:10px' class='badge bg-blue'>" + valuesplit[1] + "</span></div>";
                    }
                },
                onItemAdd: function (value, data) {
                    let ItemName = data.get(0).textContent;
                    var outerhtml = $($(a).get(0).firstChild).closest("tr").get(0).outerHTML;
                    var form = document.createElement("form")
                    $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                    $(form).append(outerhtml);
                    var input = document.createElement("input");
                    $(input).attr("name", "contractid");
                    $(input).attr("value", $.hmcustom.para.Contractid);
                    $(form).append(input);
                    let inputcolname = document.createElement("input");
                    $(inputcolname).attr("name", "colname");
                    $(inputcolname).attr("value", fieldname);
                    $(form).append(inputcolname);
                    let inputcoluser = document.createElement("input");
                    $(inputcoluser).attr("name", fieldname);
                    $(inputcoluser).attr("value", value);
                    $(form).append(inputcoluser);
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
                                $($(a).get(0).firstChild).attr("Type", "hidden", true)
                                selectized[0].selectize.destroy();
                                if ($(a).get(0).lastChild.data == null) {

                                    $($(a).get(0).firstChild).val(ItemName);
                                    let htmlinput = ItemName;
                                    $($(a).get(0).firstChild).after(htmlinput);
                                }
                                else {
                                    $(a).get(0).lastChild.data = ItemName;
                                    $($(a).get(0).firstChild).val(ItemName).focus();
                                }
                                $(a).attr("style", "", true);
                                $(a).click(function () {
                                    var id = $(a).attr("aria-describedby");
                                    $("#" + id).popover('destroy');
                                })
                            }
                        }
                    })
                },
                load: function (query, callback) {
                    if (!query.length) return callback();
                    if ((query == "" || query != null)) {
                        $.ajax({
                            url: "/Pms/ResProcPlan/GetListUser",
                            type: 'GET',
                            data: { prefix: query, contractid: $.hmcustom.para.Contractid },
                            error: function () {
                                callback();
                            },
                            success: function (res) {
                                callback(res.slice(0, 10));
                            }
                        });
                    }
                },
                create: false,
            });
            selectized[0].selectize.focus();
            return;
        case "Selectized":
            let trparent = $(a).closest("tr").get(0).outerHTML;
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
                        //var outerhtml = $($(a).get(0).firstChild).closest("tr").get(0).outerHTML;
                        var form = document.createElement("form")
                        $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                        $(form).append(trparent);
                        let inputcolname = document.createElement("input");
                        $(inputcolname).attr("name", "colname");
                        $(inputcolname).attr("value", fieldname);
                        $(form).append(inputcolname);
                        var input = document.createElement("input");
                        $(input).attr("name", "contractid");
                        $(input).attr("value", $.hmcustom.para.Contractid);
                        $(form).append(input);
                        var input1 = document.createElement("input");
                        $(input1).attr("name", fieldname);
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
                                    let valueformatresult = (Number(item.Value)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
                                    $($(a).get(0).firstChild).attr("Type", "hidden", true)
                                    selectized[0].selectize.destroy();
                                    $(a).get(0).lastChild.data = valueformatresult;
                                    $(a).attr("style", "", true);
                                    $(a).click(function () {
                                        var id = $(a).attr("aria-describedby");
                                        $("#" + id).popover('destroy');
                                    })
                                    //làm tạm
                                    let _gettd = $(a).closest("tr").get(0).childNodes;
                                    let _quantity = 0;
                                    $.each(_gettd, function (i, v) {
                                        let _fieldname = $(v).attr("data-fieldname");
                                        if (_fieldname == "Quantity") {
                                            _quantity = $($(v).get(0).firstChild).val();
                                        }
                                        if (_fieldname == "LCAmount") {
                                            $(v).get(0).lastChild.data = (Number(_quantity * item.Value)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
                                        }
                                    })
                                }
                            }
                        })
                        let valueformat = (Number(item.Value)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
                        return '<div class="item"><span" href="' + escape(item.Value) + '">' + valueformat + '</span></div>';
                    },
                    option: function (item, escape) {
                        let valueformat1 = (Number(item.Value)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
                        return "<div data-value=" + escape(item.Value) + " data-selectable='' class='option'><span class='' style=''>" + valueformat1 + escape(item.Text) + "</span></div>";
                    }
                },
                load: function (query, callback) {
                    if (!query.length) return callback();
                    if ((query == "" || query != null)) {
                        let newform = document.createElement("form");
                        $(newform).append(trparent);
                        var inputprefix = document.createElement("input");
                        $(inputprefix).attr("name", "prefix");
                        $(inputprefix).attr("value", query);
                        $(newform).append(inputprefix);
                        $.ajax({
                            url: "/Pms/ResProcItemPlan/SelectizeUnitPrice",
                            type: 'GET',
                            data: JSON.stringify({ collect: $(newform).serialize() }),
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            async: true,
                            cache: false,
                            error: function () {
                                callback();
                            },
                            success: function (res) {
                                callback(res.slice(0, 30));
                            }
                        });
                    }
                },
                create: true,
            })
            selectized[0].selectize.focus();
            break;
        case "selectedCode":
            let list_td = $(a).closest("tr").get(0).childNodes;
            let original = "";
            $.each(list_td, function (i, v) {
                if ($(v).attr("data-fieldname") == "Original") {
                    original = $(v).get(0).textContent;
                }
            })
            var selectized = $($(a).get(0).firstChild).selectize({
                delimiter: ',',
                persist: false,
                preload: true,
                maxItems: 1,
                maxOptions: 20,
                valueField: 'Value',
                searchField: ['Value', 'Text'],
                create: false,
                render: {
                    item: function (item, escape) {
                        return '<div class="item"><span" href="' + escape(item.Value) + '">' + escape(item.Value) + '</span></div>';
                    },
                    option: function (item, escape) {
                        return "<div data-value=" + escape(item.Value) + " data-selectable='' class='option'><span class='' style='font-size:13px'>" + escape(item.Text) + "</span></div>";
                    },
                },
                onItemAdd: function (value, data) {
                    let trparent = $(a).closest("tr").get(0).outerHTML;
                    let ItemName = data.get(0).textContent;
                    var form = document.createElement("form")
                    $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                    $(form).append(trparent);
                    let inputcolname = document.createElement("input");
                    $(inputcolname).attr("name", "colname");
                    $(inputcolname).attr("value", fieldname);
                    $(form).append(inputcolname);
                    var input = document.createElement("input");
                    $(input).attr("name", "contractid");
                    $(input).attr("value", $.hmcustom.para.Contractid);
                    $(form).append(input);
                    var input1 = document.createElement("input");
                    $(input1).attr("name", fieldname);
                    $(input1).attr("value", value);
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
                                $($(a).get(0).firstChild).attr("Type", "hidden", true)
                                selectized[0].selectize.destroy();
                                if ($(a).get(0).lastChild.data == null) {
                                    $($(a).get(0).firstChild).val(ItemName);
                                    let htmlinput = ItemName;
                                    $($(a).get(0).firstChild).after(htmlinput);
                                }
                                else {
                                    $(a).get(0).lastChild.data = ItemName;
                                    $($(a).get(0).firstChild).val(ItemName).focus();
                                }
                                $(a).attr("style", "", true);
                                $(a).click(function () {
                                    var id = $(a).attr("aria-describedby");
                                    $("#" + id).popover('destroy');
                                })
                                $.each(list_td, function (i, v) {
                                    if ($(v).attr("data-fieldname") == "Description") {
                                        $(v).get(0).textContent = res["ValueRow"].Name;
                                    }
                                })
                            }
                        }
                    })
                },
                load: function (query, callback) {
                    if (!query.length) return callback();
                    if ((query == "" || query != null)) {
                        $.ajax({
                            url: "/Pms/ResProcItemPlan/SelectizeItemERP",//"/Pms/ResProcItemPlan/SelectizeItemHBC_All",
                            type: 'GET',
                            data: { prefix: query, original: original },
                            error: function () {
                                callback();
                            },
                            success: function (res) {
                                callback(res.slice(0, 10));
                            }
                        });
                    }
                },
                create: true,
            })
            selectized[0].selectize.focus();
            return;
        case "selectedDep":
            var selectized = $($(a).get(0).firstChild).selectize({
                delimiter: ',',
                persist: false,
                preload: true,
                maxItems: 1,
                maxOptions: 10,
                valueField: 'Value',
                searchField: ['Value', 'Text'],
                create: false,
                render: {
                    item: function (item, escape) {
                        return '<div class="item"><span" href="' + escape(item.Value) + '">' + escape(item.Text) + '</span></div>';
                    },
                    option: function (item, escape) {
                        return "<div data-value=" + escape(item.Value) + " data-selectable='' class='option'><span style='font-size:12px' class='badge bg-blue'>" + escape(item.Text) + "</span></div>";
                    }
                },
                onItemAdd: function (value, data) {
                    let ItemName = data.get(0).textContent;
                    var outerhtml = $($(a).get(0).firstChild).closest("tr").get(0).outerHTML;
                    var form = document.createElement("form")
                    $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                    $(form).append(outerhtml);
                    let inputcolname = document.createElement("input");
                    $(inputcolname).attr("name", "colname");
                    $(inputcolname).attr("value", fieldname);
                    $(form).append(inputcolname);
                    let inputcoluser = document.createElement("input");
                    $(inputcoluser).attr("name", fieldname);
                    $(inputcoluser).attr("value", value);
                    $(form).append(inputcoluser);
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
                                $($(a).get(0).firstChild).attr("Type", "hidden", true)
                                selectized[0].selectize.destroy();
                                if ($(a).get(0).lastChild.data == null) {

                                    $($(a).get(0).firstChild).val(ItemName);
                                    let htmlinput = ItemName;
                                    $($(a).get(0).firstChild).after(htmlinput);
                                }
                                else {
                                    $(a).get(0).lastChild.data = ItemName;
                                    $($(a).get(0).firstChild).val(ItemName).focus();
                                }
                                $(a).attr("style", "", true);
                                $(a).click(function () {
                                    var id = $(a).attr("aria-describedby");
                                    $("#" + id).popover('destroy');
                                })
                            }
                        }
                    })
                },
                load: function (query, callback) {
                    if (!query.length) return callback();
                    if ((query == "" || query != null)) {
                        $.ajax({
                            url: "/Pms/ResProcItemPlan/SelectizeDepartmentERP",
                            type: 'GET',
                            data: { prefix: query, contractid: $.hmcustom.para.Contractid },
                            error: function () {
                                callback();
                            },
                            success: function (res) {
                                callback(res.slice(0, 10));
                            }
                        });
                    }
                },
                create: false,
            })
            selectized[0].selectize.focus();
            break;
        case "selectedregion":
            var selectized = $($(a).get(0).firstChild).selectize({
                delimiter: ',',
                persist: false,
                preload: true,
                //maxItems: 1,
                maxOptions: 10,
                valueField: 'Value',
                searchField: ['Value', 'Text'],
                create: false,
                render: {
                    item: function (item, escape) {
                        return '<div class="item"><span" href="' + escape(item.Value) + '">' + escape(item.Text) + '</span></div>';
                    },
                    option: function (item, escape) {
                        return "<div data-value=" + escape(item.Value) + " data-selectable='' class='option'><span style='font-size:12px' class='badge bg-blue'>" + escape(item.Text) + "</span></div>";
                    }
                },
                onItemAdd: function (value, data) {
                    let ItemName = data.get(0).textContent;
                    var outerhtml = $($(a).get(0).firstChild).closest("tr").get(0).outerHTML;
                    var form = document.createElement("form")
                    $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                    $(form).append(outerhtml);
                    let inputcolname = document.createElement("input");
                    $(inputcolname).attr("name", "colname");
                    $(inputcolname).attr("value", fieldname);
                    $(form).append(inputcolname);
                    let inputcoluser = document.createElement("input");
                    $(inputcoluser).attr("name", fieldname);
                    $(inputcoluser).attr("value", value);
                    $(form).append(inputcoluser);
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
                                var childnode_td = $($($(a).get(0).firstChild).closest("tr")).find("td");
                                var localid = 0;
                                $.each(childnode_td, function (i, v) {
                                    if($(v).attr("data-fieldname") == "LocalId")
                                    {
                                        localid = $($(v).get(0).firstChild).val();
                                    }
                                })
                                $($(a).get(0).firstChild).attr("Type", "hidden", true)
                                selectized[0].selectize.destroy();
                                if ($(a).get(0).lastChild.data == null) {

                                    $($(a).get(0).firstChild).val(ItemName);
                                    let htmlinput = "<small class='label label-primary flat' style='margin-bottom:3px'>" + ItemName + " <a href='javascript:void(0);' onclick='$.procresponsibility.function.DeleteRegion(this)' data-localid='" + localid + "' data-region='" + value + "' style='color:white; margin-left:5px'><i class='fa fa-remove'></i></a></small>" + "<p style='margin:1px'></p>";
                                    //let htmlinput = ItemName;
                                    $($(a).get(0).firstChild).after(htmlinput);
                                }
                                else {
                                    $(a).get(0).lastChild.data = "<small class='label label-primary flat' style='margin-bottom:3px'>" + ItemName + " <a href='javascript:void(0);' onclick='$.procresponsibility.function.DeleteRegion(this)' data-localid='" + localid + "' data-region='" + value + "' style='color:white; margin-left:5px'><i class='fa fa-remove'></i></a></small>" + "<p style='margin:1px'></p>";;
                                    $($(a).get(0).firstChild).val(ItemName).focus();
                                }
                                $(a).attr("style", "", true);
                                $(a).click(function () {
                                    var id = $(a).attr("aria-describedby");
                                    $("#" + id).popover('destroy');
                                })
                            }
                        }
                    })
                },
                load: function (query, callback) {
                    if (!query.length) return callback();
                    if ((query == "" || query != null)) {
                        $.ajax({
                            url: "/Pms/ResProcPlanResponsibility/SelectizeRegion",
                            type: 'GET',
                            data: { prefix: query, contractid: $.hmcustom.para.Contractid },
                            error: function () {
                                callback();
                            },
                            success: function (res) {
                                callback(res.slice(0, 10));
                            }
                        });
                    }
                },
                create: false,
            })
            selectized[0].selectize.focus();
            break;
        case "datetime":
            let eventype = "";
            $($(a).get(0).firstChild).datepicker({
                format: "mm/dd/yyyy",
                autoclose: 'true',
                todayBtn: 'true',
                todayHighlight: 'true',
            }).on("changeDate", function (value) {
                $($(a).get(0).firstChild).focus();
            })
            $($(a).get(0).firstChild).inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' });
            $($(a).get(0).firstChild).focus();
            $($(a).get(0).firstChild).keyup(function (event) {
                event.preventDefault();
                if (event.keyCode === 13 || event.keyCode === 9) {
                    let valueupdate = $(this).val();
                    let trparent = $(a).closest("tr").get(0).outerHTML;
                    let ItemName = valueupdate;
                    var form = document.createElement("form")
                    $(form).append($.hmcustom.para.ValidateAntiForgeryToken);
                    $(form).append(trparent);
                    let inputcolname = document.createElement("input");
                    $(inputcolname).attr("name", "colname");
                    $(inputcolname).attr("value", fieldname);
                    $(form).append(inputcolname);
                    var input = document.createElement("input");
                    $(input).attr("name", "contractid");
                    $(input).attr("value", $.hmcustom.para.Contractid);
                    $(form).append(input);
                    var input1 = document.createElement("input");
                    $(input1).attr("name", fieldname);
                    $(input1).attr("value", valueupdate);
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
                                $($(a).get(0).firstChild).attr("Type", "hidden", true)
                                if ($(a).get(0).lastChild.data == null) {
                                    $($(a).get(0).firstChild).val(ItemName);
                                    let htmlinput = ItemName;
                                    $($(a).get(0).firstChild).after(htmlinput);
                                }
                                else {
                                    $(a).get(0).lastChild.data = ItemName;
                                }
                                $(a).attr("style", "", true);
                                $(a).click(function () {
                                    var id = $(a).attr("aria-describedby");
                                    $("#" + id).popover('destroy');
                                })
                            }
                        }
                    })
                }
            })
            return;
        case "date":
            $($(a).get(0).firstChild).inputmask('mm/dd/yyyy', { 'placeholder': 'mm/dd/yyyy' });
            break;
    }
    $($(a).get(0).firstChild).val($(a).get(0).lastChild.data);
    let gettag = $(a).get(0).lastChild.tagName;
    $(a).get(0).lastChild.data = null;
    if (gettag == "B") {
        $($(a).get(0).lastChild).remove();
    }
    var list_td = $($(a).get(0).firstChild).closest("tr").get(0).childNodes;
    $($(a).get(0).firstChild).unbind("keyup");
    $($(a).get(0).firstChild).unbind("focusout");
    $($(a).get(0).firstChild).on({
        "keyup": function (event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                $($(a).get(0).firstChild).unbind("focusout");
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
                            convertqnty = (Number(quantity)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
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
                    case "datetime":
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
                                //làm tạm
                                if (fieldname == "Quantity" || fieldname == "LCUnitPrice" || fieldname == "UnitPrice") {
                                    let _gettd = $(a).closest("tr").get(0).childNodes;
                                    let _quantity = 0;
                                    let _unitprice = 0;
                                    $.each(_gettd, function (i, v) {
                                        let _fieldname = $(v).attr("data-fieldname");
                                        if (_fieldname == "LCUnitPrice" || _fieldname == "UnitPrice") {
                                            _unitprice = ($($(v).get(0).firstChild).val());
                                            _unitprice = _unitprice.replace(/[,]/gi, "").trim();
                                        }
                                        if (_fieldname == "Quantity") {
                                            _quantity = ($(v).get(0).lastChild.data).replace(/[,]/gi, "").trim();
                                           
                                        }
                                        if (_fieldname == "LCAmount") {
                                            $(v).get(0).lastChild.data = (Number(_quantity * _unitprice)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
                                        }
                                    })
                                }
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
                        convertqnty = (Number(quantity)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
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
                case "datetime":
                    if ($(a).get(0).lastChild.data == null) {

                        $($(a).get(0).firstChild).val(quantity);
                        let htmlinput = quantity;
                        $($(a).get(0).firstChild).after(htmlinput);
                    }
                    else {
                        $(a).get(0).lastChild.data = quantity;
                        $($(a).get(0).firstChild).val(quantity).focus();
                    }
                    break
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
                            //làm tạm
                            if (fieldname == "Quantity" || fieldname == "LCUnitPrice" || fieldname == "UnitPrice") {
                                let _gettd = $(a).closest("tr").get(0).childNodes;
                                let _quantity = 0;
                                let _unitprice = 0;
                                $.each(_gettd, function (i, v) {
                                    let _fieldname = $(v).attr("data-fieldname");
                                    if (_fieldname == "LCUnitPrice" || _fieldname == "UnitPrice") {
                                        _unitprice = ($($(v).get(0).firstChild).val()).replace(',', '').trim();
                                    }
                                    if (_fieldname == "Quantity") {
                                        //_quantity = $($(v).get(0).firstChild).val();
                                        _quantity = ($(v).get(0).lastChild.data).replace(',', '').trim();
                                    }
                                    if (_fieldname == "LCAmount") {
                                        $(v).get(0).lastChild.data = (Number(_quantity * _unitprice)).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
                                    }
                                })
                            }
                        }
                    }
                })
            }
        }
    })
}
$.hmcustom.table.Filter = function (arraytable, tablename) {
    let create_formdata = document.createElement("form");
    let inputpage = document.createElement("input");
    $(inputpage).attr("name", "page");
    $(inputpage).attr("value", $("#inputpage" + tablename).val());
    $(create_formdata).append(inputpage);
    $.each(arraytable, function (i, v) {
        if (v.Filter) {
            if (v.FilterCompare) {
                let arraycompare = [v.Name, v.Name + ".lg", v.Name + ".ls", v.Name + ".ul"];
                $.each(arraycompare, function (i_arrray, v_array) {
                    let create_element = document.createElement("input");
                    $(create_element).attr("name", v_array);
                    let elementinputform = $("table[name='" + tablename + "'] tr[class='row-filter'] input[name='" + v_array + "']");
                    $.each(elementinputform, function (_i, _v) {
                        let datatype = $(_v).attr("data-type");
                        switch (datatype) {
                            case "number":
                                var format = ($(_v).val()).replace(/\D/gi, '').trim();
                                $(create_element).attr("value", format);
                                break;
                            case "decimal":
                                var format = ($(_v).val()).replace(/[,]/gi, '').trim();
                                $(create_element).attr("value", format);
                                break;
                            case "currency":
                                var format = ($(_v).val()).replace(/\D/gi, '').trim();
                                $(create_element).attr("value", format);
                                break;
                            case "datetime":
                                var format = $(_v).val();
                                $(create_element).attr("value", format);
                                break;
                            default:
                                var format = $(_v).val();
                                $(create_element).attr("value", format);
                                break;
                        }
                    })
                    $(create_formdata).append(create_element);
                })
            }
            else {
                let create_element = document.createElement("input");
                $(create_element).attr("name", v.Name);
                let elementinputform = $("table[name='" + tablename + "'] tr[class='row-filter'] input[name='" + v.Name + "']");
                $.each(elementinputform, function (_i, _v) {
                    let datatype = $(_v).attr("data-type");
                    switch (datatype) {
                        case "number":
                            var format = ($(_v).val()).replace(/\D/gi, '').trim();
                            $(create_element).attr("value", format);
                            break;
                        case "decimal":
                            var format = ($(_v).val()).replace(/[,]/gi, '').trim();
                            $(create_element).attr("value", format);
                            break;
                        case "currency":
                            var format = ($(_v).val()).replace(/\D/gi, '').trim();
                            $(create_element).attr("value", format);
                            break;
                        case "datetime":
                            var format = $(_v).val();
                            $(create_element).attr("value", format);
                            break;
                        default:
                            var format = $(_v).val();
                            $(create_element).attr("value", format);
                            break;
                    }
                })
                $(create_formdata).append(create_element);
                //console.log("form", create_formdata)
                //console.log("form js", $(create_element))
            }
        }
    })
    return create_formdata;
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
                let formatcurrency = total.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
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
/// <summary>Sum từ database</summary>
$.hmcustom.table.SumFromDatabase = function(a, tablename)
{
    let table_th = $("table[name='" + tablename + "'] tr[class='row-sum'] th");
    $.each(table_th, function (i, v) {
        console.log($(v).get(0));
    })
}
/// <summary>Sự kiện sử lý lưới</summary>
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
$.hmcustom.table.OnEventInput = function (a) {
    let getvalue = ($(a).val()).replace(/[a-zA-Z]+|[~!#$%^&*()_+=-|\\/?<>,]+/gi, '').trim();

    //if($(a).keyCode == 17 && $(a).keyCode == 67)
    //{
    //    getvalue = $(a).val().replace(/[a-zA-Z]+|[~!#$%^&*()_+=-|\\/?<>,]+/g, '').trim();
    //}
    let regex = new RegExp(/[.]/g);
    let checknumberpoint = (getvalue).match(regex);
    if (checknumberpoint != null) {
        if (checknumberpoint.length > 1) {
            getvalue = getvalue.replace(/[.]$/g, '');
        }
    }
    let testexistspoint = regex.test($(a).val());
    let gettype = $(a).attr("data-type");
    let format = "";
    switch (gettype) {
        case "number":
            if (getvalue != "") {
                format = Number(getvalue).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
            }
            $(a).get(0).value = format;
            break;
        case "decimal":
            if (getvalue != "" && testexistspoint) {
                let splitstring = getvalue.split('.');
                if (splitstring[1].length >= $.hmcustom.table.odd) {
                    format = Number(getvalue).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.odd, minimumFractionDigits: $.hmcustom.table.odd });
                }
                else if (splitstring[1].length < $.hmcustom.table.odd && splitstring[1].length != 0) {
                    format = Number(getvalue).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: splitstring[1].length, minimumFractionDigits: splitstring[1].length });
                }
                else if (splitstring[1].length == 0) {
                    format = Number(getvalue).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: splitstring[1].length, minimumFractionDigits: splitstring[1].length }) + ".";
                }
                $(a).get(0).value = format;
            }
            else if (getvalue != "" && !testexistspoint) {
                format = Number(getvalue).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
                $(a).get(0).value = format;
            }
            else {
                $(a).get(0).value = format;
            }
            break;
        case "currency":
            if (getvalue != "") {
                format = Number(getvalue).toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: $.hmcustom.table.cost , minimumFractionDigits: $.hmcustom.table.cost  });
            }
            $(a).get(0).value = format;
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
        $("#" + aid).attr("style", "", true);
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
    var tablename = $($(a).closest("table")).attr("name");
    var checkall = $(a).get(0).checked;
    var listinput = $("#" + tbody + " tr[name='" + trname + tablename + "'] input[name='checkbox']");
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
$.hmcustom.function.DeleteElementSign = function (a) {
    var trparent = $(a).closest("tr");
    var rowindexchild = trparent.get(0).rowIndex;
    var tablenamechild = $($(trparent).closest("table")).attr("name");
    var rowindex = $(trparent).parents("tr").get(0).rowIndex;

    var tablename = new $.hmcustomData.Table().Department.TableInfo.TableName;
    var tr = $("table[name='" + tablename + "']").get(0).rows[rowindex - 1];
    while ($(tr).attr("class") == "row-detail") {
        var roindex_before = $(tr).get(0).rowIndex;
        tr = $("table[name='" + tablename + "']").get(0).rows[roindex_before - 1];
    }
    $.each(tr.cells, function (i, v) {
        var fieldname = $(v).attr("data-fieldname");
        if (fieldname == "Name") {
            var status = $(v.firstChild).attr("data-status");
            if (status == 0) {
                if (Number(v.childNodes[2].firstChild.childNodes[1].data) == 0) {
                    v.childNodes[2].firstChild.childNodes[1].data = "  0";
                }
                else {
                    v.childNodes[2].firstChild.childNodes[1].data = "  " + (Number(v.childNodes[2].firstChild.childNodes[1].data) - 1);
                }
            }
        }
    })

    var trafter = $("table[name='" + tablenamechild + "']").get(0).rows[rowindexchild + 1];
    if ($(trafter) != undefined) {
        if ($(trafter).attr("class") == "row-detail") {
            $(trafter).remove();
        }
    }
    $($(a).closest("tr")).remove();
}
/// <summary>Checkbox cho tbody</summary>
$.hmcustom.function.CheckAllNotTrName = function (a) {
    var tablename = $($(a).closest("table")).attr("name");
    var tbody = "tbody" + tablename;
    var checkall = $(a).get(0).checked;
    var listinput = $("#" + tbody + " tr input[name='checkbox']");
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
$.hmcustom.function.ReportExcelJs = function (a) {
    let tablename = $($(a).closest("table")).attr("name");
    let filename = $(a).attr("data-filename");
    $("table[name='" + tablename + "']").table2excel({
        filename: filename + ".xls"
    });
}
$.hmcustom.function.AddListErrors = function (result) {
    $("#modaladdnew_edit div[name=divlisterror] ul").remove();
    $("#modaladdnew_edit div[name=divlisterror]").attr("class", "callout callout-danger", true);
    var html = "";
    $.each(result["Errors"], function (i, v) {
        html += "<li>" + v + "</li>";
    })
    $("#modaladdnew_edit div[name=divlisterror]").append("<ul>" + html + "</ul>");
    $("#modaladdnew_edit div[name=divlisterror]").fadeIn(1000);
    $("#modaladdnew_edit div[name=divlisterror]").fadeOut(10000);
    $.hmcustom.endwaiting();
}
$.hmcustom.function.AddListErrorsModal = function(result)
{
    $("#modaladdlisterror div[name=divlisterror] ul").remove();
    let html = "";
    $.each(result["Errors"], function (i, v) {
        html += "<li>" + v + "</li>";
    })
    $("#modaladdlisterror div[name=divlisterror]").append("<ul>" + html + "</ul>");
    $("#modaladdlisterror div[name=divlisterror]").fadeIn(1000);
    $("#modaladdlisterror").modal("toggle");
    $("#modaladdlisterror").on("hidden.bs.modal", function (e) {
        $("#bodymainhtml").attr("style", "padding-right:0", true);
        $("#modaladdnew_edit").attr("overflow-y", "true");
    })
}
$.hmcustom.function.AddListSuccessModal = function () {
    let html = "<li>Success</li>";
    $("#modaladdlistsuccess div[name=divlistsuccess]").append("<ul>" + html + "</ul>");
    $("#modaladdlistsuccess div[name=divlistsuccess]").fadeIn(1000);
    $("#modaladdlistsuccess").modal("toggle");
}
$.hmcustom.function.RandomColor = function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
/// <summary>Event copy paste</summary>
$.hmcustom.function.EventCopy = function (a) {
    let tablename = $($(a).closest("table")).attr("name");
    let classname = $($(a).parent("tr")).attr("class");
    $("table[name='"+tablename+"'] tr[class='" + classname + "'] th").removeClass("tdchosen");
    $($(a).get(0)).addClass("tdchosen");
    $($(a).get(0)).unbind("paste");
    $($(a).get(0)).dblclick(function () {
        $($(a).get(0).firstChild).removeAttr("style");
        $($(a).get(0).firstChild).attr("style", "border:none");
        $($(a).get(0).firstChild).focus();
        $($(a).get(0)).unbind("paste");
    }).focusout(function (event) {
        $($(a).get(0).firstChild).attr("style", "display:none", true);
        $($(a).get(0)).unbind("dblclick");
    })
    //console.log($(a).get(0));
    $($(a).get(0)).unbind("paste");
    $.hmcustom.function.EventPaste(a, tablename, classname);
   
}
$.hmcustom.function.EventPaste = function (a, tablename, classname) {
    $($(a).get(0)).on("paste", function (event) {
        let value = event.originalEvent.clipboardData.items;
        $.each(value, function (i, v) {
            if (v.type === 'text/plain') {
                v.getAsString(function (text) {
                    var x = $(a).index(),
                        y = $(a).closest('tr').index(),
                        obj = {}, objrow = [], objectnew = [], objectvalue = [];
                    //text = text.trim('\n');
                    var html_tr = "";
                    var promise = new Promise(function (resolve, reject) {
                        $.each(text.split('\n'), function (i2, v2) {
                            if (v2 !== "")
                            {
                                var table_th = $("table[name='" + tablename + "'] tr[class='" + classname + "'] th");
                                var table_td = "";
                                $.each(table_th, function (i, v) {
                                    var input_name = $($(v).find("input")).attr("name");
                                    var input_datatype = $($(v).find("input")).attr("data-type");
                                    var th_style = $(v).attr("style");
                                    if (input_name != undefined && input_datatype != undefined) {
                                        switch (input_datatype) {
                                            case "decimal":
                                                table_td += '<th style="' + th_style + '"><input class="input-control input-sm text-right" data-type="' + input_datatype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" style="border:none" data-fieldname="' + input_name + '" name="collect[' + i2 + '].' + input_name + '"/></th>';
                                                break;
                                            case "currency":
                                                table_td += '<th style="' + th_style + '"><input class="input-control input-sm text-right" data-type="' + input_datatype + '" onkeyup="$.hmcustom.table.OnEventInput(this)" style="border:none" data-fieldname="' + input_name + '" name="collect[' + i2 + '].' + input_name + '"/></th>';
                                                break;
                                            case "string":
                                            case "datetime":
                                            default:
                                                table_td += '<th style="' + th_style + '"><input class="input-control input-sm" data-type="' + input_datatype + '"  style="border:none" data-fieldname="' + input_name + '" name="collect[' + i2 + '].' + input_name + '"/></th>';
                                                break;
                                        }
                                    }
                                    else {
                                        if ($(v).find("a").length == 2) {
                                            table_td += '<th class="text-center" style="vertical-align:middle"><a href="javascript:;" onclick="$.hmcustom.function.EventRemovePaste(this)"><i class="fa fa-remove"></i></a></th>';
                                            resolve(1);
                                        }
                                        else {
                                            table_td += v.outerHTML;
                                        }
                                    }
                                })
                                html_tr += '<tr name="valueinsert" style="background-color:#ecf0f5">' + table_td + '</tr>';
                            }
                        });
                        $($(a).closest("tr")).after(html_tr);
                    })
                    promise.then(function (resolve) {
                        if(resolve == 1)
                        {
                            $.each(text.split('\n'), function (i2, v2) {
                                $.each(v2.split('\t'), function (i3, v3) {
                                    var row = y + i2 + 1, col = x + i3;
                                    let inputvalue = $(a).closest('table').find('tr:eq(' + row + ') th:eq(' + col + ')').find("input");
                                    let inputtype = $($(a).closest('table').find('tr:eq(' + row + ') th:eq(' + col + ')').find("input")).attr("data-type");
                                    switch (inputtype) {
                                        case "decimal":
                                            var regex = new RegExp(/[!#$&*+=|'"\{\}a-z-]/g);
                                            var testexist = regex.test(v3);
                                            if (testexist) {
                                                $(a).closest('table').find('tr:eq(' + row + ') th:eq(' + col + ')').attr("style", "outline:1px solid #dd4b39", true);
                                            }
                                            break;
                                        case "currency":
                                            var regex = new RegExp(/[!#$&*+=|'"\{\}a-z-]/gi);
                                            var testexist = regex.test(v3);
                                            if (testexist) {
                                                $(a).closest('table').find('tr:eq(' + row + ') th:eq(' + col + ')').attr("style", "outline:1px solid #dd4b39", true);
                                            }
                                            break;
                                        case "string":
                                            break;
                                        case "datetime":
                                            break;
                                        default:
                                            break;
                                    }
                                    if (inputvalue.length > 0) {
                                        $(inputvalue).removeAttr("style");
                                        $(inputvalue).attr("style", "border:none");
                                        $(inputvalue).val(v3);
                                    }
                                });
                            });
                        }
                    })
                });
            }
        });      
    })
}
$.hmcustom.function.EventRemovePaste = function (a) {
    $($(a).closest("tr")).remove();
}
$.hmcustom.function.EventRemoveAllPaste = function (a) {
    let tablename = $($(a).closest("table")).attr("name");
    $("table[name='" + tablename + "']").find("tr[name='valueinsert']").remove();
}

$.hmcustom.function.EventSavePaste = function (tablename, url) {
    $.hmcustom.waiting("all");
    $("#tbody" + tablename + " tr").remove();
    var rowinsert = $("table[name='" + tablename + "']").find("tr[name='valueinsert']");
    var arraytable = [
                     { Name: "ResWorkId", Des: "", Type: "string", Filter: false, View: false, Update: true },
                    { Name: "MFCode", Des: "MF Code", Type: "string", Filter: true, View: true },
                    { Name: "WorkCode", Des: "Work Code", Type: "string", Filter: true, View: true, Update: false },
                    { Name: "WorkName", Des: "Description", Type: "string", Filter: true, View: true, Update: false, Width: 300 },
                    //{ Name: "Currency", Des: "Currency", Type: "currency", Filter: true, View: true, Update: false },
                    { Name: "Unit", Des: "Unit", Type: "selected", Filter: true, View: true, Update: false, Selectized: true },
                    { Name: "Quantity", Des: "Qnty", Type: "decimal", Filter: true, View: true, FilterCompare: true, Update: false },
                    { Name: "Amount", Des: "Amount", Type: "currency", Filter: true, View: true, FilterCompare: true, Update: false },
                    { Name: "BoQType", Des: "Type", Type: "string", Filter: true, View: true, Update: false },
                    { Name: "Note", Des: "Note", Type: "string", Filter: true, View: true, Update: false },
                    { Name: "Chosen", Des: "", Type: "icon", Filter: true, View: true, Update: false },
    ]
    var listerror = [];
    var countrowmaster = 0;
    $.each(rowinsert, function (i, v) {
        var data = {};
        var promise = new Promise((resolve, reject) => {
            data.__RequestVerificationToken = $("input[name=__RequestVerificationToken]").val();
            data.contractid = $.hmcustom.para.Contractid;
            $.each($(v).find("th"), function (i1, v1) {
                var value = $($(v1).find("input")).val();
                var input_name = $($(v1).find("input")).attr("data-fieldname");
                var fieldname = [];
                var input_datatype = $($(v1).find("input")).attr("data-type");
                if (input_name != undefined && input_datatype != undefined && input_name !== "") {
                    switch (input_datatype) {
                        case "decimal":
                            var regex = new RegExp(/[!,#$&*+=|'"\{\}a-z-]/g);
                            value = value.replace(regex, "").trim();
                            break;
                        case "currency":
                            var regex = new RegExp(/[!,#$&*+=|'"\{\}a-z-]/gi);
                            value = value.replace(regex, "").trim();
                            break;
                        case "string":
                            break;
                        default:
                            break;
                    }
                    data[input_name] = value;
                }
            })
            resolve(data);
        }).then((resolve) => {
            if (listerror.length != 0)
            {
                countrowmaster += 1;
                if (countrowmaster == rowinsert.length) {
                    if (listerror.length != 0) {
                        $("#inputpage" + tablename).val(-1);
                        if (listerror.length > 0) {

                            var objecterrors = new Object();
                            objecterrors.Errors = listerror
                            $.hmcustom.function.AddListErrorsModal(objecterrors);
                            $.hmcustom.endwaiting("all");
                        }
                    }
                }
            }
            else
            {
                $.ajax({
                    url: url,
                    type: "Post",
                    data: resolve,
                    async: false,
                    success: function (res) {
                        if (res["Errors"].length > 0) {
                            $.each(res["Errors"], function (i, v) {
                                listerror.push(v);
                            })
                            countrowmaster += 1;
                        }
                        else {
                            $(v).remove();
                            var arrayvalue = [];
                            $.each(res["ValueRow"], function (i, v) {
                                htmldelete = '<a href="javascript:;" data-toggle="tooltip" data-placement="auto" title="Xóa công tác"  onclick="$.ganttchart.table.BoQ.DelShowAddNewWork(this,' + v.ResWorkId + ')" data-id="' + v.ResWorkId + '"><i class="fa fa-remove"></i></a>';
                                v.Chosen = '<input name="checkbox" data-work="' + v.ResWorkId + '"  value="" type="checkbox" onclick="$.ganttchart.function.Checked(this)"><br>' +
                                            '<a href="javascript:;" data-toggle="tooltip" data-placement="auto" title="Gắn định mức và Master Format"  onclick="$.ganttchart.table.BoQ.SetNormForWork(this,' + v.ResWorkId + ')"><i class="fa fa-list-alt"></i></a>' +
                                            htmldelete;
                                arrayvalue.push(v);
                            })
                            var html = $.hmcustom.table.AddRowtbody(arraytable, tablename, arrayvalue, null);
                            $("#tbody" + tablename).append(html);
                            $.hmcustom.function.Loadmore(res, "trloadmore" + tablename, "aloadmore" + tablename, "inputpage" + tablename, tablename);
                            $.hmcustom.endwaiting("tb", "trwaiting" + tablename);
                            countrowmaster += 1;
                        }
                        if (countrowmaster == rowinsert.length) {
                            if (listerror.length != 0) {
                                $("#inputpage" + tablename).val(-1);
                                if (listerror.length > 0) {

                                    var objecterrors = new Object();
                                    objecterrors.Errors = listerror
                                    $.hmcustom.function.AddListErrorsModal(objecterrors);
                                    $.hmcustom.endwaiting("all");
                                }
                            }
                            else {
                                alert("Success");
                                $("#inputpage" + tablename).val(-1);
                                $.hmcustom.endwaiting("all");
                            }
                        }
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("Errors");
                        $.hmcustom.endwaiting("tb", "trwaiting" + tablename);
                        $.hmcustom.endwaiting("all");
                    }
                })
            }
          
        })
    })   
}
