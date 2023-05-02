


import { ListView, SelectEventArgs } from '@syncfusion/ej2-lists';
import { Button } from '@syncfusion/ej2-buttons';
import { Dialog } from '@syncfusion/ej2-popups';
import { enableRipple, MouseEventArgs } from '@syncfusion/ej2-base';
enableRipple(false);

//Define customized template
let template: string = '<div><span class="templatetext">${Name} </span> <span class="designationstyle"><button id ="${Id}" class="e-but"></button></span></div>';
let data: { [key: string]: Object }[] = [{ "Id": "Brooke", "Name": "Brooke" },
{ "Id": "Claire", "Name": "Claire" },
{ "Id": "Erik", "Name": "Erik" },
{ "Id": "Grace", "Name": "Grace" },
{ "Id": "Jacob", "Name": "Jacob" }];

let listviewInstance: ListView = new ListView({
    //Set defined data to the dataSource property
    dataSource: data,

    //Set defined customized template
    template: template,

    //Set the fields property
    fields: { text: 'Name' },

    //Set the width to the ListView
    width: 350,

    //Bind the event to customize the ListView
    actionComplete: addButton

});

//Render the initialized ListView control
listviewInstance.appendTo('#templatelist');
//actionComplete event for the first ListView
function addButton() {
    let buttonObj: { [key: string]: Object } = { obj: Button, prop: { iconCss: 'e-icons e-add-icon', cssClass: 'e-small e-round' } };
    let ele: HTMLCollection = document.getElementsByClassName("e-but");
    for (let i: number = 0; i < ele.length; i++) {
        buttonObj.obj = new Button(buttonObj.prop);
        (buttonObj.obj as Button).appendTo(ele[i] as HTMLElement);
    }
}

//The click event for rendered button
for (let i: number = 0; i < data.length; i++) {
    document.getElementById(data[i].Id as string).addEventListener("click", (e: MouseEventArgs) => {
        renderDialog((e.currentTarget as HTMLElement).id);
    });
}

let brookeTag: { [key: string]: Object }[] = [{ "id": "list11", "Name": "Discover Music" },
{ "id": "list12", "Name": "Sales and Events" },
{ "id": "list13", "Name": "Categories" },
{ "id": "list14", "Name": "MP3 Albums" },
{ "id": "list15", "Name": "More in Music" },
];
let claireTag: { [key: string]: Object }[] = [{ "id": "list21", "Name": "Songs" },
{ "id": "list22", "Name": "Bestselling Albums" },
{ "id": "list23", "Name": "New Releases" },
{ "id": "list24", "Name": "Bestselling Songs" },
];
let erikTag: { [key: string]: Object }[] = [{ "id": "list31", "Name": "Artwork" },
{ "id": "list32", "Name": "Abstract" },
{ "id": "list33", "Name": "Acrylic Mediums" },
{ "id": "list34", "Name": "Creative Acrylic" },
{ "id": "list35", "Name": "Canvas Art" }
];
let graceTag: { [key: string]: Object }[] = [{ "id": "list41", "Name": "Rock" },
{ "id": "list42", "Name": "Gospel" },
{ "id": "list43", "Name": "Latin Music" },
{ "id": "list44", "Name": "Jazz" },
];
let jacobTag: { [key: string]: Object }[] = [{ "id": "list51", "Name": "100 Albums - $5 Each" },
{ "id": "list52", "Name": "Hip-Hop and R&B Sale" },
{ "id": "list53", "Name": "CD Deals" }
];
let datasource: { [key: string]: { [key: string]: Object }[] } = { "Brooke": brookeTag, "Claire": claireTag, "Erik": erikTag, "Grace": graceTag, "Jacob": jacobTag };

//Initialize the ListView that is needed to append inside the dialog
let listObj: ListView = new ListView({
    showHeader: true,
    headerTitle: 'Favorite',
    width: '200px',
    dataSource: datasource.Brooke,
    fields: { text: 'Name' },
    select: addTag
});

//Initialize the dialog control
let dialog: Dialog = new Dialog({
    width: '200px',
    content: '<div id="list"></div>',
    animationSettings: { effect: 'None' },
    visible: false,
    created: createList,
    showCloseIcon: true,
    position: { X: document.querySelector('.e-add-icon').getBoundingClientRect().left + 50, Y: document.querySelector('.e-add-icon').getBoundingClientRect().top - 5 }
});
//Render the initialized dialog control
dialog.appendTo('#dialog');

//Method to hide/show the dialog and update the ListView data source
function renderDialog(id: string): void {
    if (document.getElementsByClassName('e-popup-open').length != 0) {
        dialog.hide();
    }
    else {
        listObj.dataSource = datasource[id];
        listObj.dataBind();
        dialog.show();
    }

}

//Created event for dialog
function createList() {
    let listElem: any = document.getElementById('dialog').querySelector("#list");
    listObj.appendTo(listElem);
}

//Select event for ListView that is rendered inside the dialog
function addTag(e: SelectEventArgs) {
    let listTag: HTMLSpanElement = document.createElement('span');
    listTag.className = 'advanced-option';
    let labelElem: HTMLSpanElement = document.createElement('span');
    labelElem.className = 'label';
    let deleteElem: HTMLSpanElement = document.createElement('span');
    deleteElem.className = 'delete';
    deleteElem.onclick = removeTag;
    labelElem.innerHTML = e.text;
    listTag.appendChild(labelElem);
    listTag.appendChild(deleteElem);
    let tag: HTMLSpanElement = document.createElement('span');
    tag.className = 'advanced-option-list';
    tag.appendChild(listTag);
    listviewInstance.element.querySelector('.e-active').appendChild(tag);
}

//Method to remove the list item
function removeTag() {
    this.parentNode.parentNode.remove();
};



