


import { ListView } from '@syncfusion/ej2-lists';

//Define an array of JSON data
let dataSource: { [key: string]: Object }[] = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'Bing', url: 'https://www.bing.com' },
    { name: 'Yahoo', url: 'https://www.yahoo.com' },
    { name: 'Ask.com', url: 'https://www.ask.com' },
    { name: 'AOL.com', url: 'https://www.aol.com' }
];
let anchor_template: string = "<a target='_blank' href='${url}'>${name}</a>";

// Initialize ListView control
let listObj: ListView = new ListView({

    //Set defined data to dataSource property
    dataSource: dataSource,


    //Set header title
    headerTitle: 'Search engines',

    //Set true to show header title
    showHeader: true,

    template: anchor_template

});

//Render initialized ListView control
listObj.appendTo('#element');



