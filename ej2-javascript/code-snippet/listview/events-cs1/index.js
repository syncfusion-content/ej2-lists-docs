  var data = [
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
    var clear = new ej.buttons.Button();
    clear.appendTo('#clear');
    //Initialize ListView component
    var listObj = new ej.lists.ListView({
        //Set defined data to dataSource property
        dataSource: data,
        actionBegin: onActionBegin,
        actionComplete: onActionComplete,
        select: onSelect,
        width: "250"
    });
    //Render initialized ListView component
    listObj.appendTo("#listview-def");
    //Clears the event log details
    document.getElementById("clear").onclick = function () {
        document.getElementById("EventLog").innerHTML = "";
    };
    //Handler for actionBegin event trace
    function onActionBegin() {
        appendElement("<b>actionBegin </b> event is triggered<hr>");
    }
    //Handler for select event trace
    function onSelect(args) {
        appendElement(args.text + "<b>&nbsp;&nbsp;is selected</b><hr>");
    }
    //Handler for actionComplete event trace
    function onActionComplete() {
        appendElement("<b>actionComplete</b> is triggered <hr>");
    }
    //Display event log
    function appendElement(html) {
        var span = document.createElement("span");
        span.innerHTML = html;
        var log = document.getElementById("EventLog");
        log.insertBefore(span, log.firstChild);
    }

