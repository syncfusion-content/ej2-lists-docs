var listData = [];

listData = [
    { name: 'Nancy', icon: 'N', id: '0', },
    { name: 'Andrew', icon: 'A', id: '1' },
    { name: 'Janet', icon: 'J', id: '2' },
    { name: 'Margaret', imgUrl: '//ej2.syncfusion.com/demos/src/listview/images/margaret.png', id: '3' },
    { name: 'Steven', icon: 'S', id: '4' },
    { name: 'Laura', imgUrl: '//ej2.syncfusion.com/demos/src/listview/images/laura.png', id: '5' },
    { name: 'Robert', icon: 'R', id: '6' },
    { name: 'Michael', icon: 'M', id: '7' },
    { name: 'Albert', imgUrl: '//ej2.syncfusion.com/demos/src/listview/images/albert.png', id: '8' },
    { name: 'Nolan', icon: 'N', id: '9' }
]
for (var i = 10; i <= 1010; i++) {
    var index = parseInt((Math.random() * 10).toString());
    listData.push({ name: listData[index].name, icon: listData[index].icon, imgUrl: listData[index].imgUrl, id: i.toString() });
}
var template = function (data) {
    var showIcon = data.imgUrl ? 'hideUI' : 'showUI';
    var showImg = data.imgUrl ? 'showUI' : 'hideUI';
    var imgUrl = data.imgUrl || '';
    var result = '<div class="e-list-wrapper e-list-avatar">' +
    '<span class="e-avatar e-avatar-circle ' + data.icon + ' ' + showIcon + '">' + data.icon + '</span>' +
    '<img class="e-avatar e-avatar-circle ' + showImg + '" src="' + imgUrl + '" />' +
    '<span class="e-list-content">' + data.name + '</span>' +
    '</div>';
    return result;
};
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

    //Set defined customized css class
    cssClass: 'e-list-template',

    //Set defined customized template
    template: template
});

listObj.appendTo('#ui-list');