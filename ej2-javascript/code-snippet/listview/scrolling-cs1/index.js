var data = [
    { text: "Hi Guys, Good morning! \uD83D\uDE0A, I'm very delighted to share with you the news that our team is going to launch a new mobile application", id: 'list-01', templateHeight: '90px', positionClass: 'right' },
    { text: "Oh! That's great \uD83D\uDE42", id: 'list-02', templateHeight: '70px', positionClass: 'left' },
    { text: 'That is a good news \uD83D\uDE00', id: 'list-03', templateHeight: '80px', positionClass: 'right' },
    { text: 'What kind of application we are gonna launch? \uD83E\uDD14', id: 'list-04', templateHeight: '50px', positionClass: 'left' },
    { text: 'A kind of "Emergency Broadcast App" ', id: 'list-05', templateHeight: '100px', positionClass: 'right' },
    { text: 'Who will be the client users for our applications? ', id: 'list-06', templateHeight: '110px', positionClass: 'left' },
];
function loadTemplate(data) {
    var containerClass = data.positionClass === 'right' ? "justify-content: flex-end" : '';
    return '<div style="display: flex; ' + containerClass + ';" class="e-list-wrapper e-list-multi-line">' +
        '<span style="display: block; white-space: normal;max-width: 80%; padding: 10px;background-color: #e0e0e0;border-radius: 10px;word-wrap: break-word;" class="e-list-item-header">' + data.text + '</span>' +
        '</div>';
}
;
var listObj_1 = new index_1.ListView({
    dataSource: data,
    scroll: onListScrolled,
    height: 500,
    width: 400,
    template: loadTemplate,
    cssClass: 'e-list-template',
});
listObj_1.appendTo('#list-scrolling-down');
var textDisplay = [{ text: 'Is currently the only way to invite someone through 0365? Just wondering down the road how organization would want to handle that with freelancers, like being able to just invite someone to teams without it impacting how many people have official access \uD83D\uDE14', id: '01' },
    { text: 'Yes, however, that feature of inviting someone from outside your organization is planned - expected closer to GA next year \uD83D\uDC4D', id: '02' },
    { text: 'I guess we should switch things over to hear for a while. How long does the trial last? \uD83E\uDD14', id: '03' },
    { text: 'I think the trial is 30 days. \uD83D\uDE03', id: '04' },
    { text: 'Only 0365 only members of your organization. They said that they are listening to customer feedback and hinted that guest users would be brought in down the road \uD83D\uDE09', id: '05' },
    { text: 'Cool thanks! \uD83D\uDC4C', id: '06' }];
var positionClassArray = ['right', 'left'];
var positionDisplayIndex = 0;
function onListScrolled(args) {
    var newData = [];
    if (args.scrollDirection === "Bottom") {
        if (Array.isArray(listObj_1.dataSource) && listObj_1.dataSource.length === 16) {
            return;
        }
        if (args.distanceY < 100) {
            for (var i = 1; i <= 5; i++) {
                var newId = getUniqueID();
                newData.push({ text: textDisplay[i].text, id: newId, positionClass: positionClassArray[positionDisplayIndex] });
                positionDisplayIndex = positionDisplay(positionDisplayIndex);
            }
            listObj_1.addItem(newData);
        }
    }
}
function positionDisplay(positionDisplayIndex) {
    if (positionDisplayIndex === 0) {
        return 1;
    }
    else {
        return 0;
    }
}
function getUniqueID() {
    var timestamp = new Date().getTime();
    var random = Math.floor(Math.random() * 1000);
    return timestamp + "-" + random;
}