//Define an array of JSON data
var dataSource = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'Bing', url: 'https://www.bing.com' },
    { name: 'Yahoo', url: 'https://www.yahoo.com' },
    { name: 'Ask.com', url: 'https://www.ask.com' },
    { name: 'AOL.com', url: 'https://www.aol.com' },
];
var anchor_template = "<a target='_blank' href='${url}'>${name}</a>";

// Initialize ListView component
var listObj = new ej.lists.ListView({

    //Set defined data to dataSource property
    dataSource: dataSource,


    //Set header title
    headerTitle: 'Search engines',

    //Set true to show header title
    showHeader: true,

    template: anchor_template

});

//Render initialized ListView component
listObj.appendTo('#element');


