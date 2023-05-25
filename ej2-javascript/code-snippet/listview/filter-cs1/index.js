
//Define an array of JSON data
var listData = [
    { text: "Hennessey Venom", id: "list-01" },
    { text: "Bugatti Chiron", id: "list-02" },
    { text: "Bugatti Veyron Super Sport", id: "list-03" },
    { text: "SSC Ultimate Aero", id: "list-04" },
    { text: "Koenigsegg CCR", id: "list-05" },
    { text: "McLaren F1", id: "list-06" }
];
// Initialize ListView component
var listObj = new ej.lists.ListView({
    //Set defined data to dataSource property
    dataSource: listData,
    //Map the appropriate columns to fields property
    fields: { text: "text", id: "id" },
    //Set sortOrder property
    sortOrder: "Ascending"
});
//Render initialized ListView component
listObj.appendTo("#list");
document.getElementById("textbox").addEventListener("keyup", onKeyUp);
//Here we are handling filtering of list items using dataManager for ListView
function onKeyUp(e) {
    var value = document.getElementById("textbox").value;
    var data = new ej.data.DataManager(listData).executeLocal(new ej.data.Query().where("text", "startswith", value, true));
    if (!value) {
        listObj.dataSource = listData.slice();
    }
    else {
        listObj.dataSource = data;
    }
    listObj.dataBind();
}

