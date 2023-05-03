

<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
    <script src="https://cdn.syncfusion.com/ej2/syncfusion-helper.js"></script>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="https://cdn.syncfusion.com/ej2/ej2-base/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css" rel="stylesheet" type="text/css"/>
            <link href="https://cdn.syncfusion.com/ej2/ej2-buttons/styles/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 List's global script -->
            <script src="//cdn.syncfusion.com/ej2/dist/ej2.min.js" type="text/javascript"></script>
       </head>
       <body>
           <!-- Add the HTML <div> element  -->
            <div id='element'></div>
            <script>
                //define the array of string
                var arts = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];
                // Initialize Essential JS 2 JavaScript ListView control
                var listviewInstance = new ej.lists.ListView({
                    //set the data to datasource property
                    dataSource: arts
                });
                //Render initialized ListView
                listviewInstance.appendTo("#element");
            </script>
       </body>
  </html>



