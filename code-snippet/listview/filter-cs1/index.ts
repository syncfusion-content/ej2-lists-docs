


import { ListView } from "@syncfusion/ej2-lists";
import { enableRipple } from "@syncfusion/ej2-base";
import { DataManager, Query } from "@syncfusion/ej2-data";
enableRipple(true);
//Define an array of JSON data
let listData: { [key: string]: Object }[] = [
  { text: "Hennessey Venom", id: "list-01" },
  { text: "Bugatti Chiron", id: "list-02" },
  { text: "Bugatti Veyron Super Sport", id: "list-03" },
  { text: "SSC Ultimate Aero", id: "list-04" },
  { text: "Koenigsegg CCR", id: "list-05" },
  { text: "McLaren F1", id: "list-06" }
];

// Initialize the ListView control
let listObj: ListView = new ListView({
  //Set the defined data to the dataSource property
  dataSource: listData,
  //Map the appropriate columns to the fields property
  fields: { text: "text", id: "id" },
  //Set the sortOrder property
  sortOrder: "Ascending"
});
//Render the initialized ListView control
listObj.appendTo("#list");

document.getElementById("textbox").addEventListener("keyup", onKeyUp);
//Here, the list items are filtered using the DataManager instance for ListView
function onKeyUp() {
  let value = (document.getElementById("textbox") as HTMLInputElement).value;
  let data: Object[] = new DataManager(listData).executeLocal(
    new Query().where("text", "startswith", value, true)
  );
  if (!value) {
    listObj.dataSource = listData.slice();
  } else {
    listObj.dataSource = data as { [key: string]: Object }[];
  }
  listObj.dataBind();
}



