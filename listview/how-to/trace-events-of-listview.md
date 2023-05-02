---
layout: post
title: Trace events of listview in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Trace events of listview in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Trace events of listview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Trace events of listview in ##Platform_Name## Listview control

The ListView control triggers events based on its actions. The events can be used as extension points to perform
custom operations. Refer to the following steps to trace the ListView events:

1. Render the ListView with [dataSource](../../api/list-view#datasource), and bind the [`actionBegin`](../../api/list-view#actionbegin),
[`actionComplete`](../../api/list-view#actioncomplete), and [`select`](../../api/list-view#select) events.

2. Perform custom operations in actionBegin, actionComplete, and select events.

3. Provide event log details for actionBegin and actionComplete events, and they will be displayed in the event trace panel when the ListView action starts and the dataSource bound successfully.

4. Get the selected item details from the [`SelectEventArgs`](../../api/list-view/selectEventArgs) in the select event, and display the selected list item text in the event trace panel while selecting list items.

5. Use clear button to remove event trace information.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "page.domainurl/code-snippet/listview/events-cs1" %}
