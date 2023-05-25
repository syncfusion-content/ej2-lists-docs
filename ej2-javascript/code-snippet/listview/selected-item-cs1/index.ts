


import { ListView, SelectedCollection } from '@syncfusion/ej2-lists';
import { Button } from '@syncfusion/ej2-buttons';
//define the array of string
let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02', isChecked: true },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04', isChecked: true },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07', isChecked: true },
    { text: 'Jaguar XJ220', id: 'list-08' }
];

//Initialize the ListView control
let listviewInstance: ListView = new ListView({
    //set the data to the dataSource property
    dataSource: data,

    //Enable check box
    showCheckBox: true,
});

//Render the initialized ListView
listviewInstance.appendTo("#element");

let button: Button = new Button();
button.appendTo("#btn")

document.getElementById('btn').addEventListener('click', () => {
    let selecteditem: SelectedCollection = listviewInstance.getSelectedItems() as SelectedCollection;
    let data: HTMLElement = document.getElementById('val');
    data.innerHTML = "";
    let row1: HTMLTableRowElement = document.createElement('tr');
    let header1: HTMLTableHeaderCellElement = document.createElement('th');
    header1.innerHTML = 'Text';
    row1.appendChild(header1);
    let header2 = document.createElement('th');
    header2.innerHTML = 'Id';
    row1.appendChild(header2);
    document.getElementById('val').appendChild(row1);
    for (let i: number = 0; i < (selecteditem["data"] as { [key: string]: object }[]).length; i++) {
        let row2: HTMLTableRowElement = document.createElement('tr');
        row2.setAttribute("id", i.toString());
        let data1: HTMLElement = document.createElement('td');
        data1.innerHTML = selecteditem["text"][i];
        row2.appendChild(data1);
        let data2: HTMLElement = document.createElement('td');
        data2.innerHTML = (selecteditem["data"] as { [key: string]: object }[])[i].id.toString();
        row2.appendChild(data2);
        document.getElementById('val').appendChild(row2);
    }

});



