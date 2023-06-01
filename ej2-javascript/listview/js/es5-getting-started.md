---
layout: post
title: Es5 getting started with ##Platform_Name## Listview control | Syncfusion
description:  Checkout and learn about Es5 getting started with ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Es5 getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Es5 getting started in ##Platform_Name## Listview control

The Essential JS 2 for JavaScript (global script) is an ES5 formatted pure JavaScript framework which can be directly used in latest web browsers.

## control Initialization

The Essential JS 2 JavaScript controls can be initialized by using either of the following ways.

* Using local script and style references in a HTML page.
* Using CDN link for script and style reference.

### Using local script and style references in a HTML page

**Step 1:** Create an app folder `myapp` for Essential JS 2 JavaScript controls.

**Step 2:** You can get the global scripts and styles from the [Essential Studio JavaScript (Essential JS 2)](https://www.syncfusion.com/downloads/essential-js2) build installed location.

**Syntax:**
> Script: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `**(installed location)**/Syncfusion/Essential Studio/{RELEASE_VERSION}/Essential JS 2/{PACKAGE_NAME}/styles/material.css`

**Example:**

> Script: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.17/Essential JS 2/ej2-lists/dist/global/ej2-lists.min.js`
>
> Styles: `C:/Program Files (x86)/Syncfusion/Essential Studio/15.4.17/Essential JS 2/ej2-lists/styles/material.css`

**Step 3:** Create a folder `myapp/resources` and copy/paste the global scripts and styles from the above installed location to `myapp/resources` location.

**Step 4:** Create a HTML page (index.html) in `myapp` location and add the Essentials JS 2 script and style references.

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <link href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 List's global script -->
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
       </head>
       <body>
       </body>
  </html>
```

**Step 5:** Now, add the `ListView` element and initiate the `Essential JS 2 ListView` control in the `index.html` by using following code

```html
<!DOCTYPE html>
  <html xmlns="http://www.w3.org/1999/xhtml">
       <head>
            <title>Essential JS 2</title>
            <!-- Essential JS 2 material theme -->
            <ink href="resources/material.css" rel="stylesheet" type="text/css"/>

            <!-- Essential JS 2 List's global script -->
            <script src="resources/ej2-lists.min.js" type="text/javascript"></script>
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
```

**Step 6:** Now, run the `index.html` in web browser, it will render the **Essential JS 2 ListView** control.

### Using CDN link for script and style reference

**Step 1:** Create an app folder `myapp` for the Essential JS 2 JavaScript controls.

**Step 2:** The Essential JS 2 control's global scripts and styles are already hosted in the below CDN link formats.

**Syntax:**
> Script: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/dist/global/{PACKAGE_NAME}.min.js`
>
> Styles: `https://cdn.syncfusion.com/ej2/{PACKAGE_NAME}/styles/material.css`

**Example:**
> Script: [`https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js`](https://cdn.syncfusion.com/ej2/ej2-lists/dist/global/ej2-lists.min.js)
>
> Styles: [`https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css`](https://cdn.syncfusion.com/ej2/ej2-lists/styles/material.css)

**Step 3:** Create a HTML page (index.html) in `myapp` location and add the CDN link references. Now, add the `ListView` element and initiate the `Essential JS 2 List` control in the index.html by using following code.

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/es5-getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/es5-getting-started-cs1" %}

**Step 4:** Now, run the `index.html` in web browser, it will render the `Essential JS 2 ListView` control.

> Need to refer dependency control styles and scripts as like above example. We can also use [CRG](https://crg.syncfusion.com/) to generate combined control styles.

## See Also

[Data Binding Types](./data-binding/)

[ListView customization](./customizing-templates/)

[Virtualization](./virtualization/)
