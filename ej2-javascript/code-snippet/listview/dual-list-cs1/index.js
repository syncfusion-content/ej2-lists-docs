//Define an array of JSON data
var firstListData = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },

];

var secondListData = [
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
];


// Initialize the ListView component
var listObj1 = new ej.lists.ListView({

    //Set the defined data to the dataSource property
    dataSource: firstListData.slice(),

    //Map the appropriate columns to the fields property
    fields: { text: 'text', id: 'id' },
    sortOrder: 'Ascending',
    select: onFirstListSelect

});

//Render the initialized ListView component
listObj1.appendTo('#list-1');

var listObj2 = new ej.lists.ListView({

    //Set the defined data to the dataSource property
    dataSource: secondListData.slice(),

    //Map the appropriate columns to the fields property
    fields: { text: 'text', id: 'id' },
    sortOrder: 'Ascending',
    select: onSeconListSelect

});

//Render the initialized ListView component
listObj2.appendTo('#list-2');

var btnobj1 = new ej.buttons.Button();
btnobj1.appendTo('#firstBtn');

var btnobj2 = new ej.buttons.Button({
    disabled: true
});
btnobj2.appendTo('#secondBtn');

var btnobj3 = new ej.buttons.Button({
    disabled: true
});
btnobj3.appendTo('#thirdBtn');

var btnobj4 = new ej.buttons.Button();
btnobj4.appendTo('#fourthBtn');


//Here, all list items are moved to the second list on clicking move all button
btnobj1.element.addEventListener('click', function() {
    listObj2.dataSource = Array.prototype.concat.call(listObj1.dataSource, listObj2.dataSource);
    listObj2.dataBind();
    updateFirstListData();
    listObj1.removeMultipleItems(Array.prototype.slice.call(listObj1.element.querySelectorAll('.e-list-item')));
    firstListData = firstListData.concat(listObj1.dataSource);
    secondListData = listObj2.dataSource.slice();
    btnobj1.disabled = true;
    onFirstKeyUp();
    setButtonState();
});

//Here, the selected list items are moved to the second list on clicking move button
btnobj2.element.addEventListener('click', function() {
    var selectedItem = listObj1.getSelectedItems();
    listObj2.dataSource = Array.prototype.concat.call(listObj2.dataSource, selectedItem.data);
    listObj2.dataBind();
    updateFirstListData();
    listObj1.removeItem(selectedItem.item);
    firstListData = firstListData.concat(listObj1.dataSource);
    secondListData = listObj2.dataSource.slice();
    onFirstKeyUp();
    btnobj2.disabled = true;
    setButtonState();
});

//Here, the selected list items are moved to the first list on clicking move button
btnobj3.element.addEventListener('click', function() {
    var selectedItem = listObj2.getSelectedItems();
    listObj1.dataSource = Array.prototype.concat.call(listObj1.dataSource, selectedItem.data);
    listObj1.dataBind();
    updateSecondListData();
    listObj2.removeItem(selectedItem.item);
    secondListData = secondListData.concat(listObj2.dataSource);
    firstListData = listObj1.dataSource.slice();
    onSecondKeyUp();
    btnobj3.disabled = true;
    setButtonState();

});

//Here, all list items are moved to the first list on clicking move all button
btnobj4.element.addEventListener('click', function() {
    listObj1.dataSource = Array.prototype.concat.call(listObj1.dataSource, listObj2.dataSource);
    listObj1.dataBind();
    updateSecondListData();
    listObj2.removeMultipleItems(Array.prototype.slice.call(listObj2.element.querySelectorAll('.e-list-item')));
    secondListData = secondListData.concat(listObj2.dataSource);
    firstListData = listObj1.dataSource.slice();
    onSecondKeyUp();
    setButtonState();

});

//Here, the ListView data source is updated to the first list
function updateFirstListData() {
    Array.prototype.forEach.call(listObj1.element.querySelectorAll('.e-list-item'), function(list) {
        firstListData.forEach(function (data, index) {
            if (list.innerText.trim() === data.text) {
                firstListData.splice(index, 1)
            }
        });
    });
    (document.getElementById("firstInput")).value = '';
    var ds = [];
    firstListData.forEach(function (data) {
        ds.push(data);
    })
    firstListData = ds;

}

//Here, the ListView dataSource is updated for the second list
function updateSecondListData() {
    Array.prototype.forEach.call(listObj2.element.querySelectorAll('.e-list-item'), function(list) {
        secondListData.forEach(function (data, index) {
            if (list.innerText.trim() === data.text) {
                secondListData.splice(index, 1)
            }
        });

    });
    document.getElementById("secondInput").value = '';
    var ds = [];
    secondListData.forEach(function (data) {
        ds.push(data);
    })
    secondListData = ds;

}
function onFirstListSelect() {
    btnobj2.disabled = false;
}
function onSeconListSelect() {
    btnobj3.disabled = false;
}
document.getElementById('firstInput').addEventListener('keyup', onFirstKeyUp);
//Here, filtering is handled using the dataManager for the first list
function onFirstKeyUp() {
    var value = document.getElementById("firstInput").value;
    var data = new ej.data.DataManager(firstListData).executeLocal(new ej.data.Query().where('text', 'startswith', value, true));
    if (!value) {
        listObj1.dataSource = firstListData.slice();
    } else {
        listObj1.dataSource = data;
    }
    listObj1.dataBind();

}
document.getElementById('secondInput').addEventListener('keyup', onSecondKeyUp);
//Here, filtering is handled using the dataManager for the second list
function onSecondKeyUp() {
    var value = document.getElementById("secondInput").value;
    var data = new ej.data.DataManager(secondListData).executeLocal(new ej.data.Query().where('text', 'startswith', value, true));
    if (!value) {
        listObj2.dataSource = secondListData.slice();
    } else {
        listObj2.dataSource = data;
    }
    listObj2.dataBind();
}

//Here, the state of the button is changed
function setButtonState() {
    if (listObj1.dataSource.length) {
        btnobj1.disabled = false;
    } else {
        btnobj1.disabled = true;
        btnobj2.disabled = true;
    }

    if (listObj2.dataSource.length) {
        btnobj4.disabled = false;
    } else {
        btnobj4.disabled = true;
        btnobj3.disabled = true;
    }

}


