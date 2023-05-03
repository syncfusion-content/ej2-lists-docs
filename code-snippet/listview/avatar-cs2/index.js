 var template = '<div class="e-list-wrapper e-list-multi-line e-list-avatar">' +
    '${if(avatar!=="")}' +
    '<span class="e-avatar e-avatar-circle">${avatar}</span>' +
    '${else}' +
    '<span class="${pic} e-avatar e-avatar-circle"> </span>' +
    '${/if}' +
    '<span class="e-list-item-header">${text}</span>' +
    '<span class="e-list-content">${contact}</span>' +
    '</div>';

    //Define an array of JSON data
    var dataSource = [
        {
            text: "Jenifer",
            contact: "(206) 555-985774",
            id: "1",
            avatar: "",
            pic: "pic01"
        },
        { text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: "" },
        {
            text: "Isabella",
            contact: "(206) 555-8122",
            id: "4",
            avatar: "",
            pic: "pic02"
        },
        {
            text: "William ",
            contact: "(206) 555-9482",
            id: "5",
            avatar: "W",
            pic: ""
        },
        {
            text: "Jacob",
            contact: "(71) 555-4848",
            id: "6",
            avatar: "",
            pic: "pic04"
        },
        { text: "Matthew", contact: "(71) 555-7773", id: "7", avatar: "M", pic: "" },
        {
            text: "Oliver",
            contact: "(71) 555-5598",
            id: "8",
            avatar: "",
            pic: "pic03"
        },
        {
            text: "Charlotte",
            contact: "(206) 555-1189",
            id: "9",
            avatar: "C",
            pic: ""
        }
    ];
    // Initialize ListView component
    var listObj = new ej.lists.ListView({
        //Set defined data to dataSource property
        dataSource: dataSource,
        //Map the appropriate columns to fields property
        fields: { text: "text" },
        cssClass: 'e-list-template',
        //set width of ListView
        width: "350px",
        //enable ListView header
        showHeader: true,
        //set header title
        headerTitle: "Contacts",
        //Set customized template
        template: template,
        sortOrder: "Ascending"
    });
    //Render initialized ListView component
    listObj.appendTo("#List");

