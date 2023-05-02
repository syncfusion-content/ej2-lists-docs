//define the array of string
var data = [
    { text: 'Hennessey Venom', id: 'list-01' },
    { text: 'Bugatti Chiron', id: 'list-02', isChecked: true },
    { text: 'Bugatti Veyron Super Sport', id: 'list-03'},
    { text: 'SSC Ultimate Aero', id: 'list-04', isChecked: true  },
    { text: 'Koenigsegg CCR', id: 'list-05' },
    { text: 'McLaren F1', id: 'list-06' },
    { text: 'Aston Martin One- 77', id: 'list-07', isChecked: true },
    { text: 'Jaguar XJ220', id: 'list-08' }
];

//Initialize ListView component
var listviewInstance = new ej.lists.ListView({
    //set the data to datasource property
    dataSource: data,

    //Enable checkbox
    showCheckBox: true,
});

//Render initialized ListView
listviewInstance.appendTo("#element");

var button = new ej.buttons.Button();
button.appendTo("#btn")

document.getElementById('btn').addEventListener('click', function() {
  var selecteditem =listviewInstance.getSelectedItems();
  var data = document.getElementById('val');
  data.innerHTML ="";
  var row1= document.createElement('tr');
  var header1= document.createElement('th');
  header1.innerHTML = 'Text';
  row1.append(header1);
  var header2= document.createElement('th');
  header2.innerHTML = 'Id';
  row1.append(header2);
  document.getElementById('val').append(row1);
 for(var i=0; i< selecteditem["data"].length; i++) { 
  var row2= document.createElement('tr');
  row2.setAttribute("id", i);
  var data1 = document.createElement('td');
  data1.innerHTML = selecteditem["text"][i];
  row2.append(data1);
  var data2 = document.createElement('td');
  data2.innerHTML = selecteditem["data"][i].id;
  row2.append(data2);
  document.getElementById('val').append(row2);
}

});


