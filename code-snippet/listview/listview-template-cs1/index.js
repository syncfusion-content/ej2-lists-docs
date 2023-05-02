var template = '<div class="settings">'
        + '<div id="postContainer"><div id="postImg">'
        + '<img src=${image} style="height:35px;width:35px;border-radius:50%; border: 1px solid #ccc;" /></div>'
        + '<div id="content">'
        + '<div class="name">${Name}</div>'
        + '<div id="info">${contact}</div>'
        + '</div>'
        + '</div>'

    //Define an array of JSON data
    var dataSource = [
    { Name: 'Nancy', contact: '(206) 555-985774', id: '1', image: 'https://ej2.syncfusion.com/demos/src/grid/images/1.png', category: 'Experience' },
    { Name: 'Janet', contact: '(206) 555-3412', id: '2', image: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', category: 'Fresher' },
    { Name: 'Margaret', contact: '(206) 555-8122', id: '4', image: 'https://ej2.syncfusion.com/demos/src/grid/images/4.png', category: 'Experience' },
    { Name: 'Andrew ', contact: '(206) 555-9482', id: '5', image: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', category: 'Experience' },
    { Name: 'Steven', contact: '(71) 555-4848', id: '6', image: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', category: 'Fresher' },    ];
  

    // Initialize ListView component
    var listObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource: dataSource,

        //Map the appropriate columns to fields property
        fields: { text: 'Name', id:'Name'},

        //Set customized template
        template: template,

        enableRtl: true,
        select: onSelect

    });

    //Render initialized ListView component
    listObj.appendTo('#listview');

   function onSelect(){
    var selectedItem = listObj.getSelectedItems();
    document.getElementById('val').innerHTML = 'Selected Item : <b>'+selectedItem.text+'</b>';
   }


