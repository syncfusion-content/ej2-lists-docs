


import { TreeView, DragAndDropEventArgs } from '@syncfusion/ej2-navigations';

let data: { [key: string]: Object }[] = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02' },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
    { text: 'SSC Ultimate Aero', id: 'list-04' },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
];
let treeViewInstance: TreeView = new TreeView({
    fields: { dataSource: data, id: 'id', text: 'text' },
    allowDragAndDrop: true,
    nodeDragging: onDragStop,
    nodeDragStop: onDragStop

});

treeViewInstance.appendTo('#element');

function onDragStop(args: DragAndDropEventArgs) {
    //Block the Child Drop operation in TreeView
   let  draggingItem: HTMLCollection = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}



