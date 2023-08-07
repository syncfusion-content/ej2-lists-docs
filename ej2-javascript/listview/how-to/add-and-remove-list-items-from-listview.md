---
layout: post
title: Add and remove list items from listview in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Add and remove list items from listview in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Add and remove list items from listview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Add and remove list items from listview in ##Platform_Name## Listview control

You can add or remove list items from the ListView control using the [`addItem`](../../api/list-view/#additem) and [`removeItem`](../../api/list-view/#removeitem) methods. Refer to the following steps to add or remove a list item.

* Render the ListView with data source, and use the [template](../../api/list-view/#template) property to append the delete icon for each list item. Also, bind the click event for the delete icon using the [actionComplete](../../api/list-view/#actioncomplete) handler.

* Render the Add Item button, and bind the click event. On the click event handler, pass data with random id to the [`addItem`](../../api/list-view/#additem) method to add a new list item on clicking the Add Item button.

* Bind the click handler to the delete icon created in step 1. Within the click event, remove the list item by passing the delete icon list item to [`removeItem`](../../api/list-view/#removeitem) method.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/addItem-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/addItem-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/addItem-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/addItem-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/addItem-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/addItem-cs1" %}
{% endif %}
