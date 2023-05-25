---
layout: post
title: Display items count in group header in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Display items count in group header in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Display items count in group header 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Display items count in group header in ##Platform_Name## Listview control

The ListView control supports wrapping list items into a group based on the category. The category of each list item can be mapped with groupBy field of the data source. You can display grouped list items count in the list-header using the group header template. Refer to the following code sample to display grouped list item count.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/item-count-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/item-count-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/item-count-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/item-count-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/item-count-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/item-count-cs2" %}
{% endif %}
