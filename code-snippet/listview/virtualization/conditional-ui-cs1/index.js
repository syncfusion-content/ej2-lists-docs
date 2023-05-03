var listData = [];

listData = [
    { text: 'Nancy', id: '0', },
    { text: 'Andrew', id: '1' },
    { text: 'Janet', id: '2' },
    { text: 'Margaret', id: '3' },
    { text: 'Steven', id: '4' },
    { text: 'Laura', id: '5' },
    { text: 'Robert', id: '6' },
    { text: 'Michael', id: '7' },
    { text: 'Albert', id: '8' },
    { text: 'Nolan', id: '9' }
];

for (var i = 10; i <= 1010; i++) {
    var index = parseInt((Math.random() * 10).toString());
    listData.push({ text: listData[index].text, id: i.toString() });
}

var listObj = new ej.lists.ListView({

    //Set defined data to dataSource property.
    dataSource: listData,

    //enable UI virtualization
    enableVirtualization: true,

    //Set height
    height: 500,

    //Set defined customized template
    template: '<div id="list-container" class="${ $id % 2 === 0 ? \'even-list\' : \'odd-list\' }" > ${text} </div>'
});

listObj.appendTo('#ui-list');


