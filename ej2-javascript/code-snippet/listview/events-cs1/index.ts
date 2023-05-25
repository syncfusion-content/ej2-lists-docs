


import { ListView, SelectEventArgs } from "@syncfusion/ej2-lists";
import { Button } from "@syncfusion/ej2-buttons";

//Define an array of JSON data
let data: { [key: string]: Object }[] = [
  { text: "Hennessey Venom", id: "list-01" },
  { text: "Bugatti Chiron", id: "list-02" },
  { text: "Bugatti Veyron Super Sport", id: "list-03" },
  { text: "SSC Ultimate Aero", id: "list-04" },
  { text: "Koenigsegg CCR", id: "list-05" },
  { text: "McLaren F1", id: "list-06" },
  { text: "Aston Martin One- 77", id: "list-07" },
  { text: "Jaguar XJ220", id: "list-08" },
  { text: "McLaren P1", id: "list-09" },
  { text: "Ferrari LaFerrari", id: "list-10" }
];
let clear: Button = new Button();
clear.appendTo('#clear');

//Initialize the ListView control
let listObj: ListView = new ListView({
  //Set the defined data to the dataSource property
  dataSource: data,
  actionBegin: onActionBegin,
  actionComplete: onActionComplete,
  select: onSelect,
  width:"250"
});
//Render the initialized ListView control
listObj.appendTo("#listview-def");

//Clears the event log details
document.getElementById("clear").onclick = () => {
  document.getElementById("EventLog").innerHTML = "";
};
//Handler for actionBegin event trace
function onActionBegin(): void {
  appendElement("<b>actionBegin </b> event is triggered<hr>");
}
//Handler for select event trace
function onSelect(args: SelectEventArgs): void {
  appendElement(args.text + "<b>&nbsp;&nbsp;is selected</b><hr>");
}
//Handler for actionComplete event trace
function onActionComplete(): void {
  appendElement("<b>actionComplete</b> is triggered <hr>");
}

//Display event log
function appendElement(html: string): void {
  let span: HTMLElement = document.createElement("span");
  span.innerHTML = html;
  let log: HTMLElement = document.getElementById("EventLog");
  log.insertBefore(span, log.firstChild);
}



