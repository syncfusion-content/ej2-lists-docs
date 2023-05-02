//define the array of string
var arts = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];
//Initialize ListView component
var listviewInstance = new ej.lists.ListView({
    //set the data to datasource property
    dataSource: arts
});
//Render initialized ListView
listviewInstance.appendTo("#element");

