var ascClass = 'e-sort-icon-ascending';
var desClass = 'e-sort-icon-descending';

//define the array of JSON
var fruitsdata = [
    { text: 'Date', id: '1', imgUrl: './dates.jpg' },
    { text: 'Fig', id: '2', imgUrl: './fig.jpg' },
    { text: 'Apple', id: '3', imgUrl: './apple.png' },
    { text: 'Apricot', id: '4', imgUrl: './apricot.jpg' },
    { text: 'Grape', id: '5', imgUrl: './grape.jpg' },
    { text: 'Strawberry', id: '6', imgUrl: './strawberry.jpg' },
    { text: 'Pineapple', id: '7', imgUrl: './pineapple.jpg' },
    { text: 'Melon', id: '8', imgUrl: './melon.jpg' },
    { text: 'Lemon', id: '9', imgUrl: './lemon.jpg' },
    { text: 'Cherry', id: '10', imgUrl: './cherry.jpg' },
];

//Initialize ListView component
var listViewInstance = new ej.lists.ListView({

    //set the data to datasource property
    dataSource: fruitsdata.slice(),

    //set the template for list items
    template: '<div class="fruits"><div class="first"><img id="listImage" src="${imgUrl}" alt="fruit" /><button class="delete e-control e-btn e-small e-round e-delete-btn e-primary e-icon-btn" data-ripple="true"><span class="e-btn-icon e-icons delete-icon"></span></button></div><div class="fruitName">${text}</div></div>',

    //set sortOrder for list items
    sortOrder: 'Ascending',
    actionComplete: function() {
        wireEvents();
    }

});

//Render initialized ListView
listViewInstance.appendTo('#element');

var dialogObj = new ej.popups.Dialog({
    header: 'Add fruit',
    content: '<div id="listDialog"><div class="input_name"><label for="name">Fruit Name: </label><input id="name" class="e-input" type="text" placeholder="Enter fruit name"/></div><div><label for="imgurl">Fruit Image: </label><input id="imgurl" class="e-input" type="text" placeholder="Enter image url"/></div></div>',
    showCloseIcon: true,
    buttons: [{
        click: dlgButtonClick,
        buttonModel: { content: 'Add', isPrimary: true }
    }],
    width: '300px',
    visible: false
});

dialogObj.appendTo('#dialog');

function addItem() {
    document.getElementById("name").value = "";
    document.getElementById("imgurl").value = "";
    dialogObj.show()
}

function wireEvents() {
    Array.prototype.forEach.call(document.getElementsByClassName('e-delete-btn'), function(ele) {
        ele.addEventListener('click', onDeleteBtnClick);
    });
    document.getElementById("add").addEventListener('click', addItem);
    document.getElementById("sort").addEventListener('click', sortItems);
    document.getElementById("search").addEventListener("keyup", onKeyUp);
}

//Here we are removing list item
function onDeleteBtnClick(e) {
    e.stopPropagation();
    var li = ej.base.closest(e.currentTarget, '.e-list-item');
    var data = listViewInstance.findItem(li);
    listViewInstance.removeItem(data);
    new ej.data.DataManager(fruitsdata).remove('id', { id: data["id"] })
}

//Here we are adding list item
function dlgButtonClick() {
    var name = (document.getElementById("name")).value;
    var url = (document.getElementById("imgurl")).value;
    var id = Math.random() * 10000;
    listViewInstance.addItem([{ text: name, id: id, imgUrl: url }]);
    fruitsdata.push({ text: name, id: id, imgUrl: url });
    listViewInstance.getLiFromObjOrElement({ id: id }).getElementsByClassName('e-delete-btn')[0].addEventListener('click', onDeleteBtnClick);
    dialogObj.hide();
}

//Here we are sorting list item
function sortItems() {
    var ele = document.getElementById("sort").firstElementChild;
    var des = ele.classList.contains(desClass) ? true : false;
    if (des) {
        ele.classList.remove(desClass);
        ele.classList.add(ascClass);
        listViewInstance.sortOrder = 'Ascending'
    } else {
        ele.classList.remove(ascClass);
        ele.classList.add(desClass);
        listViewInstance.sortOrder = 'Descending'
    }
    listViewInstance.dataBind();
    wireEvents();
}

//Here, the list items are filtered using the DataManager instance.
function onKeyUp(e) {
    var value = (document.getElementById("search")).value;
    var data = new ej.data.DataManager(fruitsdata).executeLocal(
        new ej.data.Query().where("text", "startswith", value, true)
    );
    if (!value) {
        listViewInstance.dataSource = fruitsdata.slice();
    } else {
        listViewInstance.dataSource = data;
        listViewInstance.dataBind();
    }
}

