---
layout: post
title: Integrate pager component with listview in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Integrate pager component with listview in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Integrate pager component with listview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Integrate pager component with listview in ##Platform_Name## Listview control

The first and foremost step is to obtain the `Pager` component from `Grid`. Install the ej2-grid package using the following command.

```
npm install @syncfusion/ej2-grids --save
```

Import the Pager to the ListView sample which has been created.

```
import { Pager } from "@syncfusion/ej2-grids";
```

The [`totalRecordsCount`](https://ej2.syncfusion.com/documentation/api/pager/#totalrecordscount) property of Pager must be specified whenever using this particular component. By using [`pageSize`](https://ej2.syncfusion.com/documentation/api/pager/#pagesize) property, the number of list items to be displayed is made available. The [`pageCount`](https://ej2.syncfusion.com/documentation/api/pager/#pagecount) property allows the user to specify the visibility of the page numbers accordingly. Since the paging sample in the upcoming code snippet uses these three properties, the explanation provided here were minimal and to the point. For further API concerns in Pager component, [click here](https://ej2.syncfusion.com/documentation/api/pager/).

With the help of the `query` property of ListView, the user can specify the number of records to be displayed in the current page.

The [`query`](../../api/list-view/#query) property helps in splitting the entire datasource based on our convenience. In the sample provided below, when clicking the next button in pager, it fetches the datasource based on page size and current page of Pager component.

```ts
 click: function () {
        listObj.query= new Query().range((pager.currentPage - 1) * pager.pageSize, (pager.currentPage * pager.pageSize));
    }
```

Note: When `pageSize` isn't mentioned, it defaults to 12 records per page.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/paging-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/paging-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/paging-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/paging-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/paging-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/paging-cs1" %}
{% endif %}
