---
layout: post
title: Scrolling of listview in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Scrolling of listview in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Listview Scrolling 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in ##Platform_Name## Listview control

Scrolling is a technique that allows you to load more items as the user scrolls through a list, providing a seamless and dynamic user experience.

Render the ListView with [dataSource](../../api/list-view/#datasource), and bind the [`scroll`](../../api/list-view/#scroll) event. Within the scroll event, you can access information such as the scroll direction, event name, and scroll bar height through the distanceY parameter.

In the given example, new data is seamlessly added while scrolling. The application dynamically generates new item elements based on the data and appends them to the existing list. This process occurs without requiring a full page reload, providing a smooth and continuous user experience.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/scrolling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/scrolling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/scrolling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/scrolling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/scrolling-cs1" %}
{% endif %}
