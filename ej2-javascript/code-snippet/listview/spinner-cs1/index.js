//Initialize ListView component
var listviewInstance = new ej.lists.ListView({
    //Bind the DataManager instance to dataSource property
    dataSource: new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/',
        crossDomain: true
    }),

    //Initialize query with the Query instance to get specified set of data
    query: new Query().from('ListView').select('EmployeeID,FirstName').take(10),

    //Map the appropriate columns to fields property
    fields: { id: 'EmployeeID', text: 'FirstName' },

    //Set header title
    headerTitle: 'Employees',

    //Set true to show header title
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


