


import { ListView } from '@syncfusion/ej2-lists';
//import DataManager related classes
import { DataManager, Query } from '@syncfusion/ej2-data';

//Initialize ListView control
let listviewInstance: ListView = new ListView({
    //bind the DataManager instance to dataSource property
    dataSource: new DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    }),

    //bind the Query instance to query property
    query: new Query().from('Products').select('ProductID,ProductName').take(6),

    //map the appropriate columns to fields property
    fields: { id: 'ProductID', text: 'ProductName' },

    //set the header tittle for the list
    headerTitle: 'Product Name',
    showHeader: true
});

//Render initialized ListView
listviewInstance.appendTo("#element")



