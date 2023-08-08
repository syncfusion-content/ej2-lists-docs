---
layout: post
title: Dynamic hierarchical listview in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Dynamic hierarchical listview in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dynamic hierarchical listview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic hierarchical listview in ##Platform_Name## Listview control

To dynamic hierarchical listview, push the new list item data into the existing [`dataSource`](../../api/list-view/#datasource) using the [`select`](../../api/list-view/#select) event.

Refer to the following steps to load list item into the child list:

1. Initially, render the ListView with the required data source.

2. Bind the [`select`](../../api/list-view/#select) event that triggers selecting list item in the ListView control. By using the select event, you can push the new list item to the child list of the data source on specifying its item index. Item index can be obtained from the
[`SelectEventArgs`](../../api/list-view/selectEventArgs/) of the select event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/child-list-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/child-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/child-list-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/child-list-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/child-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/child-list-cs1" %}
{% endif %}
