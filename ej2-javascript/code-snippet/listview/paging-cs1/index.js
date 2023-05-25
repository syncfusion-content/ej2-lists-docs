
   var pager = new ej.grids.Pager({
        totalRecordsCount: data.length,
        pageSize: 10,
        pageCount: 2,
        click: function () {
            listObj.query = new ej.data.Query().range((pager.currentPage - 1) * pager.pageSize, (pager.currentPage * pager.pageSize));
        }
    });
    pager.appendTo('#Pager');
    var header = '<table class="w-100"> <tr><td class="w-25">Order ID</td><td class="w-45">Ship Name</td><td class="w-25">ShipCity</td></tr></table>';
    var template = '<table class="w-100"> <colgroup><col span="2"><col></colgroup><tr><td class="w-25">${OrderID}</td><td class="w-45">${ShipName}</td><td class="w-25">${ShipCity}</td></tr></table>';
    var listObj = new ej.lists.ListView({
        dataSource: new ej.data.DataManager({
            json: data, 
            adaptor: new ej.data.JsonAdaptor
        }),
        query: new ej.data.Query().range(0, pager.pageSize),
        headerTemplate: header,
        template: template,
        showHeader: true
    });
    listObj.appendTo('#element');

