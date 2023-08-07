---
layout: post
title: Filter and search list items using listview in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Filter and search list items using listview in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Filter and search list items using listview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Filter and search list items using listview in ##Platform_Name## Listview control

The filtered data can be displayed in the ListView control depending upon on user inputs using the [`DataManager`](../../data/getting-started/). Refer to the following steps to render the ListView with filtered data.

* Render a textbox to get input for filtering data.

* Render ListView with [`dataSource`](../../api/list-view/#datasource), and set the [`sortOrder`](../../api/list-view/#sortorder) property.

* Bind the `keyup` event for textbox to perform filtering operation. To filter list data, pass the list data source to the `DataManager`, manipulate the data using the [`executeLocal`](../../api/data/dataManager/#executelocal) method, and then update filtered data as ListView dataSource.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/filter-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/filter-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/filter-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/filter-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/filter-cs1" %}
{% endif %}

> In this demo, data has been filtered with starting character of the list items. You can also filter list items with ending character by passing the `endswith` in [where](../../api/data/query/#where) clause instead of `startswith`.
