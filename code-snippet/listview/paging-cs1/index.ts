


import { ListView } from '@syncfusion/ej2-lists';
import { Pager } from "@syncfusion/ej2-grids";
import { DataManager, Query, JsonAdaptor } from '@syncfusion/ej2-data';
import { data } from './datasource.ts';
let pager: Pager = new Pager({
    totalRecordsCount: data.length,
    pageSize: 10,
    pageCount:2,
    click: function () {
        listObj.query= new Query().range((pager.currentPage - 1) * pager.pageSize, (pager.currentPage * pager.pageSize));
    }
});
pager.appendTo('#Pager');
let header: string = '<table class="w-100"> <tr><td class="w-25">Order ID</td><td class="w-45">Ship Name</td><td class="w-25">ShipCity</td></tr></table>';
let template: string = '<table class="w-100"> <colgroup><col span="2"><col></colgroup><tr><td class="w-25">${OrderID}</td><td class="w-45">${ShipName}</td><td class="w-25">${ShipCity}</td></tr></table>';
//Initialize ListView component
// Initialize the ListView control
let listObj: ListView = new ListView({
 //Set the defined data to the data source property
    dataSource: new DataManager({
    json: data,
    adaptor: new JsonAdaptor
}),
query:new Query().range(0, pager.pageSize),
template:template,
headerTemplate:header,
showHeader:true
});
//Render the initialized ListView control
listObj.appendTo('#element');



