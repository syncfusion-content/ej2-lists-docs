


import { ListView } from '@syncfusion/ej2-lists';

//define the array of string
let data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Initialize ListView control
let listViewInstance: ListView = new ListView({
    //set the data to datasource property
    dataSource: data,
    //set the template for list items
    template: '<img id="listImage" src="./apple.png" alt="apple" />'
});

//Render initialized ListView
listViewInstance.appendTo("#element");



