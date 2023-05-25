


import { ListView, SelectedItem } from '@syncfusion/ej2-lists';
import { Button } from '@syncfusion/ej2-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
enableRipple(true);
//Define an array of JSON data
let firstListData: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },

];

let secondListData: { [key: string]: Object }[] = [
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
];


// Initialize the ListView control
let listObj1: ListView = new ListView({

    //Set the defined data to the dataSource property
    dataSource: firstListData.slice(),

    //Map the appropriate columns to the fields property
    fields: { text: 'text', id: 'id' },
    sortOrder: 'Ascending',
    select: onFirstListSelect

});

//Render the initialized ListView control
listObj1.appendTo('#list-1');

let listObj2: ListView = new ListView({

    //Set the defined data to the dataSource property
    dataSource: secondListData.slice(),

    //Map the appropriate columns to the fields property
    fields: { text: 'text', id: 'id' },
    sortOrder: 'Ascending',
    select: onSeconListSelect

});

//Render the initialized ListView control
listObj2.appendTo('#list-2');

let btnobj1: Button = new Button();
btnobj1.appendTo('#firstBtn');
let btnobj2: Button = new Button({
    disabled: true
});
btnobj2.appendTo('#secondBtn');
let btnobj3: Button = new Button({
    disabled: true
});
btnobj3.appendTo('#thirdBtn');
let btnobj4: Button = new Button();
btnobj4.appendTo('#fourthBtn');


//Here, all list items are moved to the second list on clicking move all button
btnobj1.element.addEventListener('click', () => {
    listObj2.dataSource = Array.prototype.concat.call(listObj1.dataSource, listObj2.dataSource);
    listObj2.dataBind();
    updateFirstListData();
    listObj1.removeMultipleItems(Array.prototype.slice.call(listObj1.element.querySelectorAll('.e-list-item')));
    firstListData = firstListData.concat(listObj1.dataSource as { [key: string]: Object }[]);
    secondListData = (listObj2.dataSource as { [key: string]: Object }[]).slice();
    btnobj1.disabled = true;
    onFirstKeyUp();
    setButtonState();
});

//Here, the selected list items are moved to the second list on clicking move button
btnobj2.element.addEventListener('click', () => {
    let selectedItem: SelectedItem = listObj1.getSelectedItems() as SelectedItem;
    listObj2.dataSource = Array.prototype.concat.call(listObj2.dataSource, selectedItem.data);
    listObj2.dataBind();
    updateFirstListData();
    listObj1.removeItem(selectedItem.item);
    firstListData = firstListData.concat(listObj1.dataSource as { [key: string]: Object }[]);
    secondListData = (listObj2.dataSource as { [key: string]: Object }[]).slice();
    onFirstKeyUp();
    btnobj2.disabled = true;
    setButtonState();
});

//Here, the selected list items are moved to the first list on clicking move button
btnobj3.element.addEventListener('click', () => {
    let selectedItem: SelectedItem = listObj2.getSelectedItems() as SelectedItem;
    listObj1.dataSource = Array.prototype.concat.call(listObj1.dataSource, selectedItem.data);
    listObj1.dataBind();
    updateSecondListData();
    listObj2.removeItem(selectedItem.item);
    secondListData = secondListData.concat(listObj2.dataSource as { [key: string]: Object }[]);
    firstListData = (listObj1.dataSource as { [key: string]: Object }[]).slice();
    onSecondKeyUp();
    btnobj3.disabled = true;
    setButtonState();

});

//Here, all list items are moved to the first list on clicking move all button
btnobj4.element.addEventListener('click', () => {
    listObj1.dataSource = Array.prototype.concat.call(listObj1.dataSource, listObj2.dataSource);
    listObj1.dataBind();
    updateSecondListData();
    listObj2.removeMultipleItems(Array.prototype.slice.call(listObj2.element.querySelectorAll('.e-list-item')));
    secondListData = secondListData.concat(listObj2.dataSource as { [key: string]: Object }[]);
    firstListData = (listObj1.dataSource as { [key: string]: Object }[]).slice();
    onSecondKeyUp();
    setButtonState();

});

//Here, the ListView data source is updated to the first list
function updateFirstListData() {
    Array.prototype.forEach.call(listObj1.element.querySelectorAll('.e-list-item'), (list: HTMLLIElement) => {
        firstListData.forEach((data, index) => {
            if (list.innerText.trim() === data.text) {
                firstListData.splice(index, 1)
            }
        });
    });
    (document.getElementById("firstInput") as HTMLInputElement).value = '';
    let ds: { [key: string]: Object }[] = [];
    firstListData.forEach((data) => {
        ds.push(data);
    })
    firstListData = ds;

}

//Here, the ListView dataSource is updated for the second list
function updateSecondListData() {
    Array.prototype.forEach.call(listObj2.element.querySelectorAll('.e-list-item'), (list: HTMLLIElement) => {
        secondListData.forEach((data, index) => {
            if (list.innerText.trim() === data.text) {
                secondListData.splice(index, 1)
            }
        });

    });
    (document.getElementById("secondInput") as HTMLInputElement).value = '';
    let ds: { [key: string]: Object }[] = [];
    secondListData.forEach((data) => {
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
    let value: string = (document.getElementById("firstInput") as HTMLInputElement).value;
    var data: Object[] = new DataManager(firstListData).executeLocal(new Query().where('text', 'startswith', value, true));
    if (!value) {
        listObj1.dataSource = firstListData.slice();
    } else {
        listObj1.dataSource = data as { [key: string]: Object }[];
    }
    listObj1.dataBind();

}
document.getElementById('secondInput').addEventListener('keyup', onSecondKeyUp);
//Here, filtering is handled using the dataManager for the second list
function onSecondKeyUp() {
    let value: string = (document.getElementById("secondInput") as HTMLInputElement).value;
    var data: Object[] = new DataManager(secondListData).executeLocal(new Query().where('text', 'startswith', value, true));
    if (!value) {
        listObj2.dataSource = secondListData.slice();
    } else {
        listObj2.dataSource = data as { [key: string]: Object }[];
    }
    listObj2.dataBind();
}

//Here, the state of the button is changed
function setButtonState() {
    if ((listObj1.dataSource as { [key: string]: Object }[]).length) {
        btnobj1.disabled = false;
    } else {
        btnobj1.disabled = true;
        btnobj2.disabled = true;
    }

    if ((listObj2.dataSource as { [key: string]: Object }[]).length) {
        btnobj4.disabled = false;
    } else {
        btnobj4.disabled = true;
        btnobj3.disabled = true;
    }

}



