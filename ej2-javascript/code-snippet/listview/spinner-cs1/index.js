//Initialize ListView component
var listviewInstance = new ej.lists.ListView({
    //bind the DataManager instance to dataSource property
    dataSource: new ej.data.DataManager({
        url: '//js.syncfusion.com/ejServices/Wcf/Northwind.svc/',
        crossDomain: true
    }),

    //bind the Query instance to query property
    query: new ej.data.Query().from('Products').select('ProductID,ProductName').take(10),

    //map the appropriate columns to fields property
    fields: { id: 'ProductID', text: 'ProductName' },

    //set the header tittle for the list
    headerTitle: 'Product Name',
    showHeader: true,
    width:"300",
    actionComplete  : oncomplete,
  
});

//Render initialized ListView
listviewInstance.appendTo("#element");

ej.popups.createSpinner({ 
        target: document.getElementById('spinner')
    });
    ej.popups.showSpinner(document.getElementById('spinner'));

function oncomplete(){ 
  document.getElementById('spinner').style.display = "none";
}


