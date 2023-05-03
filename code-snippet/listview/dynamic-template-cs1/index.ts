


import { ListView } from '@syncfusion/ej2-lists';
import { Browser } from '@syncfusion/ej2-base';

let mob_template: string = '<div class="settings">'
    + '<div id="postContainer"><div id="postImg">'
    + '<img src=${image} /></div>'
    + '<div id="content">'
    + '<div id="info">'
    + '<div id="logo"> <div id="share">'
    + '<span class="share"></span> </div> <div id="comments"> <span class="comments"></span> </div>'
    + '<div id="bookmark"> <span class="bookmark"></span> </div></div></div> '
    + '<div class="name">${Name}</div>'
    + '<div class="description">${content}</div>'
    + '<div class="timeStamp">${timeStamp} </div>'
    + '</div>'

let template: string = '<div class="settings">'
    + '<div id="postContainer"><div id="postImg">'
    + '<img src=${image} /></div>'
    + '<div id="content">'
    + '<div class="name">${Name}</div>'
    + '<div class="description">${content}</div>'
    + '<div id="info">'
    + '<div id="logo"> <div id="share">'
    + '<span class="share"></span> </div> <div id="comments"> <span class="comments"></span> </div>'
    + '<div id="bookmark"> <span class="bookmark"></span> </div></div> '
    + '<div class="timeStamp">${timeStamp} </div>'
    + '</div>'
    + '</div>'

//Define an array of JSON data
let dataSource: { [key: string]: Object }[] = [
    { Name: 'IBM Open-Sources Web Sphere Liberty Code', content: 'In September, IBM announced that it would be open-sourcing the code for WebSphere...', id: '1', image: 'https://ej2.syncfusion.com/demos/src/listview/images/1.png', timeStamp: 'Syncfusion Blog - October 19, 2017' },
    { Name: 'Must Reads: 5 Big Data E-books to upend your development', content: 'Our first e-book was published in May 2012-jQuery Succinctly was the start of over...', id: '2', image: 'https://ej2.syncfusion.com/demos/src/listview/images/2.png', timeStamp: 'Syncfusion Blog - October 18, 2017' },
    { Name: 'The Syncfusion Global License: Your Questions, Answered ', content: 'Syncfusion recently hosted a webinar to cover the ins and outs of the Syncfusion global...', id: '4', image: 'https://ej2.syncfusion.com/demos/src/listview/images/3.png', timeStamp: 'Syncfusion Blog - October 18, 2017' },
    { Name: 'Know: What is Coming from Microsoft this Fall ', content: 'On October 17, Microsoft will release its Fall Creators Update for the Windows 10 platform...', id: '5', image: 'https://ej2.syncfusion.com/demos/src/listview/images/6.png', timeStamp: 'Syncfusion Blog - October 17, 2017' }
];
let wintemplate: string;
if (Browser.isDevice) {
    document.getElementById('List').style.width = '350px';
    wintemplate = mob_template;
}
else {
    wintemplate = template;
}

// Initialize the ListView control
let listObj: ListView = new ListView({

    //Set the defined data to the dataSource property
    dataSource: dataSource,

    //Map the appropriate columns to the fields property
    fields: { text: 'Name', },

    //Set customized template
    template: wintemplate,

    //Set header title
    headerTitle: 'Syncfusion Blog',

    //Set the showHeader to true to show the header title
    showHeader: true

});

//Render the initialized ListView control
listObj.appendTo('#List');



