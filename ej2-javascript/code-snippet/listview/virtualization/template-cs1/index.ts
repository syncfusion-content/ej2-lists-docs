


import { ListView, Virtualization } from '@syncfusion/ej2-lists';

ListView.Inject(Virtualization);

let listData: { [key: string]: string | object }[] = [];
listData = [
    { name: 'Nancy', icon: 'N', id: '0', },
    { name: 'Andrew', icon: 'A', id: '1' },
    { name: 'Janet', icon: 'J', id: '2' },
    { name: 'Margaret', imgUrl: './margaret.png', id: '3' },
    { name: 'Steven', icon: 'S', id: '4' },
    { name: 'Laura', imgUrl: './laura.png', id: '5' },
    { name: 'Robert', icon: 'R', id: '6' },
    { name: 'Michael', icon: 'M', id: '7' },
    { name: 'Albert', imgUrl: './albert.png', id: '8' },
    { name: 'Nolan', icon: 'N', id: '9' }
];

for (let i: number = 10; i <= 1010; i++) {
    let index: number = parseInt((Math.random() * 10).toString());
    listData.push({ name: listData[index].name, icon: listData[index].icon, imgUrl: listData[index].imgUrl, id: i.toString() });
}

var template: Function = (data: any) => {
    var result = `<div class="e-list-wrapper e-list-avatar" >`+
    `<span class="e-avatar e-avatar-circle ${data.icon} ${data.imgUrl ? 'hideUI' : 'showUI'  }">${data.icon}</span> <img class="e-avatar e-avatar-circle ${data.imgUrl ? 'showUI' : 'hideUI' }" ` +
    `src="${data.imgUrl ?  data.imgUrl : ' ' }" />` +
    `<span class="e-list-content">${data.name}</span></div>`;
    return result;
};

let listObj: ListView = new ListView({

    //Set defined data to dataSource property.
    dataSource: listData,

    //enable UI virtualization
    enableVirtualization: true,

    //Set height
    height: 500,

    //Set header title
    headerTitle: 'Contacts',

    //Set true to show header title
    showHeader: true,

    //Set defined customized template
    template:  template

});

listObj.appendTo('#ui-list');

 

