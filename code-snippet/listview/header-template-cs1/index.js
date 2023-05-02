var fruitsdata = [
    { text: 'Date', id: '1', imgUrl: './dates.jpg' },
    { text: 'Fig', id: '2', imgUrl: './fig.jpg' },
    { text: 'Apple', id: '3', imgUrl: './apple.png' },
    { text: 'Apricot', id: '4', imgUrl: './apricot.jpg' },
    { text: 'Grape', id: '5', imgUrl: './grape.jpg' },
    { text: 'Strawberry', id: '6', imgUrl: './strawberry.jpg' },
    { text: 'Pineapple', id: '7', imgUrl: './pineapple.jpg' },
    { text: 'Melon', id: '8', imgUrl: './melon.jpg' },
    { text: 'Lemon', id: '9', imgUrl: './lemon.jpg' },
    { text: 'Cherry', id: '10', imgUrl: './cherry.jpg' },
];

var listViewInstance = new ej.lists.ListView({
    dataSource: fruitsdata,
    headerTemplate: '<div class="headerContainer"><span class="fruitHeader">Fruits</span><button id="search"></button><button id="add"></button><button id="sort"></button></div>',
    showHeader: true,
    actionComplete: renderHeaderButtons
});

listViewInstance.appendTo('#element');

function renderHeaderButtons() {
    ['search', 'sort', 'add'].forEach((item) => {
        new ej.buttons.Button({ iconCss: `e-icons e-${item}-icon`, cssClass: 'e-small e-round', isPrimary: true }, `#${item}`)
    });
}

