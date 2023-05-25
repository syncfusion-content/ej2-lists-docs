//Define customized template
var template = '<div><span class="templatetext">${Name} </span> <span class="designationstyle"><button id ="${Id}" class="e-but"></button></span></div>';
var data = [{ "Id": "Brooke", "Name": "Brooke" },
    { "Id": "Claire", "Name": "Claire" },
    { "Id": "Erik", "Name": "Erik" },
    { "Id": "Grace", "Name": "Grace" },
    { "Id": "Jacob", "Name": "Jacob" }];
var listviewInstance = new ej.lists.ListView({
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
//Render the initialized ListView component
listviewInstance.appendTo('#templatelist');
//actionComplete event for the first ListView
function addButton(args) {
    var buttonObj = { obj: ej.buttons.Button, prop: { iconCss: 'e-icons e-add-icon', cssClass: 'e-small e-round' } };
    var ele = document.getElementsByClassName("e-but");
    for (var i_1 = 0; i_1 < ele.length; i_1++) {
        buttonObj.obj = new ej.buttons.Button(buttonObj.prop);
        buttonObj.obj.appendTo(ele[i_1]);
    }
}
//The click event for rendered button
for (var i = 0; i < data.length; i++) {
    document.getElementById(data[i].Id).addEventListener("click", function (e) {
        renderDialog(e.currentTarget.id);
    });
}
var brookeTag = [{ "id": "list11", "Name": "Discover Music" },
    { "id": "list12", "Name": "Sales and Events" },
    { "id": "list13", "Name": "Categories" },
    { "id": "list14", "Name": "MP3 Albums" },
    { "id": "list15", "Name": "More in Music" },
];
var claireTag = [{ "id": "list21", "Name": "Songs" },
    { "id": "list22", "Name": "Bestselling Albums" },
    { "id": "list23", "Name": "New Releases" },
    { "id": "list24", "Name": "Bestselling Songs" },
];
var erikTag = [{ "id": "list31", "Name": "Artwork" },
    { "id": "list32", "Name": "Abstract" },
    { "id": "list33", "Name": "Acrylic Mediums" },
    { "id": "list34", "Name": "Creative Acrylic" },
    { "id": "list35", "Name": "Canvas Art" }
];
var graceTag = [{ "id": "list41", "Name": "Rock" },
    { "id": "list42", "Name": "Gospel" },
    { "id": "list43", "Name": "Latin Music" },
    { "id": "list44", "Name": "Jazz" },
];
var jacobTag = [{ "id": "list51", "Name": "100 Albums - $5 Each" },
    { "id": "list52", "Name": "Hip-Hop and R&B Sale" },
    { "id": "list53", "Name": "CD Deals" }
];
var datasource = { "Brooke": brookeTag, "Claire": claireTag, "Erik": erikTag, "Grace": graceTag, "Jacob": jacobTag };
//Initialize the ListView that is needed to append inside the dialog
var listObj = new ej.lists.ListView({
    showHeader: true,
    headerTitle: 'Favorite',
    width: '200px',
    dataSource: datasource.Brooke,
    fields: { text: 'Name' },
    select: addTag
});
//Initialize the dialog component
var dialog = new ej.popups.Dialog({
    width: '200px',
    content: '<div id="list"></div>',
    animationSettings: { effect: 'None' },
    visible: false,
    created: createList,
    showCloseIcon: true,
    position: { X: document.querySelector('.e-add-icon').getBoundingClientRect().left + 50, Y: document.querySelector('.e-add-icon').getBoundingClientRect().top - 5 }
});
//Render the initialized dialog component
dialog.appendTo('#dialog');
//Method to hide/show the dialog and update the ListView data source
function renderDialog(id) {
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
function createList(e) {
    var listElem = document.getElementById('dialog').querySelector("#list");
    listObj.appendTo(listElem);
}
//Select event for ListView that is rendered inside the dialog
function addTag(e) {
    var listTag = document.createElement('span');
    listTag.className = 'advanced-option';
    var labelElem = document.createElement('span');
    labelElem.className = 'label';
    var deleteElem = document.createElement('span');
    deleteElem.className = 'delete';
    deleteElem.onclick = removeTag;
    labelElem.innerHTML = e.text;
    listTag.appendChild(labelElem);
    listTag.appendChild(deleteElem);
    var tag = document.createElement('span');
    tag.className = 'advanced-option-list';
    tag.appendChild(listTag);
    listviewInstance.element.querySelector('.e-active').appendChild(tag);
}
//Method to remove the list item
function removeTag() {
    this.parentNode.parentNode.remove();
}

