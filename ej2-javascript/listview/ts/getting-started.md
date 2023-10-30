---
layout: post
title: Getting started with ##Platform_Name## Listview control | Syncfusion
description:  Checkout and learn about Getting started with ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more details.
platform: ej2-javascript
control: Getting started 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in ##Platform_Name## Listview control

This section briefly explains how to create **ListView** component and configure its available functionalities in TypeScript using the Essential JS 2 [quickstart](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-) seed repository.

> This application is integrated with the `webpack.config.js` configuration and uses the latest version of the [webpack-cli](https://webpack.js.org/api/cli/#commands). It requires node `v14.15.0` or higher. For more information about webpack and its features, refer to the [webpack documentation](https://webpack.js.org/guides/getting-started/).

## Dependencies

Install the below required dependent packages to render the ListView control.

```javascript
|-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
```

## Set up development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion JavaScript (Essential JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack-).

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack- ej2-quickstart

{% endhighlight %}
{% endtabs %}

After cloning the application in the `ej2-quickstart` folder, run the following command line to navigate to the `ej2-quickstart` folder.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-quickstart

{% endhighlight %}
{% endtabs %}

## Add Syncfusion JavaScript packages

Syncfusion JavaScript (Essential JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. You can install all Syncfusion JavaScript (Essential JS 2) controls in a single [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package or individual packages for each control.

The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the `~/package.json` file. Use the following command to install the dependent npm packages from the command prompt.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion CSS styles

To render the ListView component, need to import lists and its dependent component’s styles as given below in the `~/src/styles/styles.css` file, as shown below: 

{% tabs %}
{% highlight css tabtitle="style.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";

{% endhighlight %}
{% endtabs %}

## Add ListView to the project

Add the HTML `<div>` element for ListView control to your `index.html`.

`[src/index.html]`

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">

    <head>
        <title>Essential JS 2</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="description" content="Essential JS 2" />
        <meta name="author" content="Syncfusion" />
        <link rel="shortcut icon" href="resources/favicon.ico" />
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    </head>

    <body>
        <div id="container">
            <!--element which is going to render-->
            <div id='element'></div>
        </div>
    </body>

</html>

{% endhighlight %}
{% endtabs %}

Import the ListView control into your `app.ts` and append it to the `#element`.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { ListView } from '@syncfusion/ej2-lists';

//Initialize ListView control
let listviewInstance: ListView = new ListView();

//Render initialized ListView
listviewInstance.appendTo("#element");

{% endhighlight %}
{% endtabs %}

## Bind data source

Populate the data in ListView by using the dataSource property. Here, an array of JSON values are passed to the ListView control.

`[src/app/app.ts]`

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { ListView } from '@syncfusion/ej2-lists';

//define the array of JSON
let arts: { [key: string]: string }[] = [
    { text: 'Artwork', id: '01' },
    { text: 'Abstract', id: '02' },
    { text: 'Modern Painting', id: '03' },
    { text: 'Ceramics', id: '04' },
    { text: 'Animation Art', id: '05' },
    { text: 'Oil Painting', id: '06' }];

//Initialize ListView control
let listviewInstance: ListView = new ListView({
    //set the data to datasource property
    dataSource: arts
});

//Render initialized ListView
listviewInstance.appendTo("#element");

{% endhighlight %}
{% endtabs %}

## Run the application

Use the `npm run start` command to run the application in the browser.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run start

{% endhighlight %}
{% endtabs %}

The following example shows a basic ListView.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/getting-started-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/getting-started-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/listview/getting-started-cs1" %}

## See Also

[Data Binding Types](./data-binding/)

[ListView customization](./customizing-templates/)

[Virtualization](./virtualization/)