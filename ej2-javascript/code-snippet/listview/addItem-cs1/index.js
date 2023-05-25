var data = [
        { text: "Hennessey Venom", id: "1", icon: "delete-icon" },
        { text: "Bugatti Chiron", id: "2", icon: "delete-icon" },
        { text: "Bugatti Veyron Super Sport", id: "3", icon: "delete-icon" },
        { text: "Aston Martin One- 77", id: "4", icon: "delete-icon" },
        { text: "Jaguar XJ220", id: "list-5", icon: "delete-icon" },
        { text: "McLaren P1", id: "6", icon: "delete-icon" }
    ];
    //Initialize ListView component
    var listviewInstance = new ej.lists.ListView({
        //set dataSource
        dataSource: data,
        //map the appropriate columns to fields property
        fields: { text: "text", iconCss: "icon" },
        //set the template for list items
        template: "<div class='text-content'> ${text} <span class = 'delete-icon'></span> </div>",
        //event handler to bind click event for delete icon
        actionComplete: onComplete
    });
    //Render initialized ListView
    listviewInstance.appendTo("#sample-list-flat");
    // Initialize the Button component.
    var button = new ej.buttons.Button();
    // Render initialized button.
    button.appendTo("#btn");
    //event handler to add the list item on button click
    document.getElementById("btn").onclick = function () {
        var data = {
            text: "Koenigsegg - " + (Math.random() * 1000).toFixed(0),
            id: (Math.random() * 1000).toFixed(0).toString(),
            icon: "delete-icon"
        };
        listviewInstance.addItem([data]);
        listviewInstance.dataBind();
        onComplete();
    };
    //method for actionComplete handler
    function onComplete() {
        var iconEle = document.getElementsByClassName("delete-icon");
        //event handler to bind click event for delete icon
        Array.from(iconEle).forEach(function (element) {
            element.addEventListener("click", deleteItem.bind(this));
        });
    }
    //method to delete list item
    function deleteItem(args) {
        args.stopPropagation();
        var liItem = args.target.parentElement.parentElement;
        listviewInstance.removeItem(liItem);
        onComplete();
    }

