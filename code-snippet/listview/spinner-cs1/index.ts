


import { ListView } from '@syncfusion/ej2-lists';
//Import DataManager related classes
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createSpinner, showSpinner } from '@syncfusion/ej2-popups';

//Initialize the ListView control
let listviewInstance: ListView = new ListView({
    //Bind the DataManager instance to the dataSource property
    dataSource: new DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    }),

    //Bind the Query instance to the query property
    query: new Query().from('Products').select('ProductID,ProductName').take(10),

    //Map the appropriate columns to the fields property
    fields: { id: 'ProductID', text: 'ProductName' },

    //Set the header tittle to the list
    headerTitle: 'Product Name',
    showHeader: true,
    width:"300",
    actionComplete  : oncomplete
});

//Render the initialized ListView
listviewInstance.appendTo("#element");

createSpinner({
        target: document.getElementById('spinner')
    });
    showSpinner(document.getElementById('spinner'));

function oncomplete(){
  document.getElementById('spinner').style.display = "none";
}



