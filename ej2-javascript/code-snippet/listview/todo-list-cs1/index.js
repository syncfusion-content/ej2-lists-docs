var listData = [
        {text: 'Do Meditation', id: '1'},
        {text: 'Go Jogging', id: '2'},
        {text: 'Buy Groceries', id: '3'},
        {text: 'Pay Phone bill', id: '4'},
        {text: 'Play Football with your friends', id: '5'},
    ];

    // Initialize the ListView component
    var listObj = new ej.lists.ListView({

        //Set the defined data to the data source property
        dataSource: listData,

        headerTitle: 'To DO List',
        showHeader: true,

        //Set true to enable CheckBox
        showCheckBox: true
    });

    //Render the initialized ListView component
    listObj.appendTo('#element');

