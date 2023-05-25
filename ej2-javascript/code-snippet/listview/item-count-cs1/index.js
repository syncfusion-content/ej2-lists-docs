 var template = '<div class="e-list-wrapper e-list-multi-line e-list-avatar">' +
    '<img class="e-avatar e-avatar-circle" src=${image} style="background:#BCBCBC" />' +
    '<span class="e-list-item-header">${Name}</span>' +
    '<span class="e-list-content">${contact}</span>' +
    '</div>';

    //Define an array of JSON data
    var dataSource = [
        { Name: 'Nancy', contact:'(206) 555-985774', id: '1', image: 'https://ej2.syncfusion.com/demos/src/grid/images/1.png',  category: 'Experience'},
        { Name: 'Janet', contact: '(206) 555-3412', id: '2', image: 'https://ej2.syncfusion.com/demos/src/grid/images/3.png', category: 'Fresher' },
        { Name: 'Margaret', contact:'(206) 555-8122', id:'4', image: 'https://ej2.syncfusion.com/demos/src/grid/images/4.png', category: 'Experience' },
        { Name: 'Andrew ', contact:'(206) 555-9482', id: '5', image: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', category: 'Experience'},
        { Name: 'Steven', contact:'(71) 555-4848', id: '6', image: 'https://ej2.syncfusion.com/demos/src/grid/images/5.png', category: 'Fresher' },
        { Name: 'Michael', contact:'(71) 555-7773', id: '7', image: 'https://ej2.syncfusion.com/demos/src/grid/images/6.png', category: 'Experience' },
        { Name: 'Robert', contact:'(71) 555-5598', id: '8', image: 'https://ej2.syncfusion.com/demos/src/grid/images/7.png', category: 'Fresher' },
        { Name: 'Laura', contact:'(206) 555-1189', id: '9', image: 'https://ej2.syncfusion.com/demos/src/grid/images/8.png', category: 'Experience' },
    ];

    // Initialize ListView component
    var listObj = new ej.lists.ListView({

        //Set defined data to dataSource property
        dataSource: dataSource,

        width: 350,

        //Map the appropriate columns to fields property
        fields: { text: 'Name', groupBy: 'category' },
        cssClass: 'e-list-template',
        //Set customized template
        template: template,
        groupTemplate: '<div><span class="category">${items[0].category}</span> <span class="count"> ${items.length} Item(s)</span></div> '

    });

    //Render initialized ListView component
    listObj.appendTo('#List');

