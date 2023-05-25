


import { ListView } from '@syncfusion/ej2-lists';

//define the array of JSON
let arts: { [key: string]: string }[] = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];

//Initialize ListView control
let listviewInstance: ListView = new ListView({
    //set the data to datasource property
    dataSource: arts
});

//Render initialized ListView
listviewInstance.appendTo("#element");



