var data = [
    { name: 'Network & Internet', id: '0', description: 'Wi-Fi, mobile, data usage, hotspot' },
    { name: 'Connected devices', id: '1', description: 'Bluetooth, cast, NFC' },
    { name: 'Battery', id: '2', description: '18% -4h 12m left' },
    { name: 'Display', id: '3', description: 'Wallpaper, sleep, font size' },
    { name: 'Sound', id: '4', description: 'Volume, vibration, Do Not Disturb' },
    { name: 'Storage', id: '5', description: '52% used - 15.48 GB free' }
];

var template;
var ajax = new ej.base.Ajax('./template.html', 'GET', true);
ajax.send().then();
ajax.onSuccess = function(e){ 
    template = e;
    listfunction();
}

function listfunction(){
    listViewInstance.template = template;
    listViewInstance.refresh();
}


ajax.onFailure = function(reason){
    console.log(reason);
}
var listViewInstance = new ej.lists.ListView({
    dataSource: data,
    headerTitle: 'Settings',
    showHeader: true,
    template: template,
    fields: {text:'name', id: 'id'}
});

listViewInstance.appendTo('#element');

