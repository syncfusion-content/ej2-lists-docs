


import { ListView } from '@syncfusion/ej2-lists';

//define the array of JSON
let settings: { [key: string]: Object }[] = [
    {
        'Name': 'Display',
        'id': 'list-01'
    },
    {
        'Name': 'Notification',
        'id': 'list-02'
    },
    {
        'Name': 'Sound',
        'id': 'list-03'
    },
    {
        'Name': 'Apps',
        'id': 'list-04'
    },
    {
        'Name': 'Storage',
        'id': 'list-05'
    },
    {
        'Name': 'Battery',
        'id': 'list-06'
    }
];

//Initialize ListView control
let listviewInstance: ListView = new ListView({
    //set the data to datasource property
    dataSource: settings,

    //map the appropriate columns to fields property
     fields: { text: 'Name', tooltip: 'Name', id:'id'},

    //set the header tittle for the list
    headerTitle: 'Device settings',
    showHeader: true

});

//Render initialized ListView
listviewInstance.appendTo("#element");



