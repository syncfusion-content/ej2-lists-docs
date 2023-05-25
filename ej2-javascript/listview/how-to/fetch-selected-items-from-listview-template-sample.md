---
layout: post
title: Fetch selected items from listview template sample in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Fetch selected items from listview template sample in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Fetch selected items from listview template sample 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Fetch selected items from listview template sample in ##Platform_Name## Listview control

Single or multiple items can be selected by users in the ListView control.

By default, dataSource id and text is mapped in default rendering of listview, since it returns the selected item data properly. But in the custom template, dataSource and the corresponding mapping (text, id, elements rendered inside li element) will vary as per the application requirement.

So, we need to map id attribute to listview items using [fields](../../api/list-view#fields) of [dataSource](../../api/list-view#datasource) to get the selected item data properly while working with custom templates. Refer to the below code snippet for template sample.

```ts

// Initialize ListView control
 let listObj: ListView = new ListView({

    //Set defined data to dataSource property
    dataSource: dataSource,

    //Map the appropriate columns to fields property
    fields: { text: 'Name', id:'Name'},

    //Set customized template
    template: template,

    enableRtl: true,

    //ListView Select event
    select: onSelect

});

//Render initialized ListView control
listObj.appendTo('#listview');


```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/listview-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/listview-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/listview-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/listview-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/listview-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/listview-template-cs1" %}
{% endif %}
