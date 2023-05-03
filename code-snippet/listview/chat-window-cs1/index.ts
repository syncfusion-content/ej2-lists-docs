

import { ListView } from "@syncfusion/ej2-lists";
import { Button } from "@syncfusion/ej2-buttons";

let template: any =
  '<div class="settings">' +
  '${if(chat!=="receiver")}' +
  '<div id="content">' +
  '<div class="name">${text}</div>' +
  '<div id="info">${contact}</div></div>' +
  '${if(avatar!=="")}' +
  '<div id="image"><span class="e-avatar img1 e-avatar-circle">${avatar}</span></div>' +
  "${else}" +
  '<div id="image"><span class="${pic} img1 e-avatar e-avatar-circle"> </span></div>' +
  "${/if}" +
  '${else}'+
 '${if(avatar!=="")}' +
  '<div id="image2"><span class="e-avatar img2 e-avatar-circle">${avatar}</span></div>' +
  "${else}" +
  '<div id="image2"><span class="${pic} img2 e-avatar e-avatar-circle"> </span></div>' +
  "${/if}" +
  '<div id="content1">' +
  '<div class="name1">${text}</div>' +
  '<div id="info1">${contact}</div>' +
  "</div>"+
  '${/if}'+
  "</div>";

//Define an array of JSON data
let dataSource: any = [
  {
    text: "Jenifer",
    contact: "Hi",
    id: "1",
    avatar: "",
    pic: "pic01", chat: "sender"
  },
  { text: "Amenda", contact: "Hello", id: "2", avatar: "A", pic: "", chat: "receiver" },
  {
    text: "Jenifer",
    contact: "What Knid of application going to launch",
    id: "4",
    avatar: "",
    pic: "pic02",chat: "sender"
  },
  {
    text: "Amenda ",
    contact: "A knid of Emergency broadcast App",
    id: "5",
    avatar: "A",
    pic: "", chat: "receiver"
  },
  {
    text: "Jacob",
    contact: "Can you please elaborate",
    id: "6",
    avatar: "",
    pic: "pic04",chat: "sender"
  },
];

// Initialize the ListView component
let listObj: ListView = new ListView({
  //Set the defined data to the dataSource property
  dataSource: dataSource,
  //Map the appropriate columns to the fields property
  fields: { text: "Name" },
  //Set the width of the ListView
  width: "350px",
  //Enable the header of the ListView
  showHeader: true,
  //Set the header title
  headerTitle: "Chat",
  //Set the customized template
  template: template,
});

//Render the initialized ListView component
listObj.appendTo("#List");

let button: Button = new Button();

// Render initialized button.
button.appendTo('#btn');

document.getElementById('btn').addEventListener('click', (e) => {
  let value = (document.getElementById('name') as HTMLElement).value;
  listObj.addItem([{ text: "Amenda", contact: value, id: "2", avatar: "A", pic: "", chat: "receiver" }]);
   (document.getElementById('name') as HTMLElement).value = "";
});



