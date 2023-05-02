var listData = [];

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
]
for (var i = 10; i <= 1010; i++) {
    var index = parseInt((Math.random() * 10).toString());
    listData.push({ name: listData[index].name, icon: listData[index].icon, imgUrl: listData[index].imgUrl, id: i.toString() });
}

var listObj = new ej.lists.ListView({

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
    template: '<div class="list-container"><div id="icon" class="${$imgUrl ? \'img\' : $icon }"><span class="${$imgUrl ? \'hideUI\' : \'showUI\' }"> ${icon}</span> <img class="${$imgUrl ? \'showUI\' : \'hideUI\' }" width = 45 height = 45 src="${$imgUrl ?  $imgUrl : \' \' }" /></div><div class="name">${name}</div></div>'

});

listObj.appendTo('#ui-list');

