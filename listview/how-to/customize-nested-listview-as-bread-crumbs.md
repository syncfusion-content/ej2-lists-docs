---
layout: post
title: Customize nested listview as bread crumbs in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Customize nested listview as bread crumbs in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize nested listview as bread crumbs 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize nested listview as bread crumbs in ##Platform_Name## Listview control

ListView header can be customized using [headerTemplate](https://ej2.syncfusion.com/documentation/api/list-view/#headertemplate) property. Here We customized the header of nested ListView as BreadCrumbs with headerTemplate property . i.e while navigating to child data of a list item, the header data is customized with the selected data path. For example, the header of nested ListView is Continent. While selecting a list item(Asia) then the header will be customized as Continent>Asia.

* This customization achieved while front and back navigations of list items with `actionComplete` event of ListView.
* On actionComplete we append the selected text in header element.
* And in back navigation, we removed the last appended span from header template

And also we can able to navigate the desired child level by clicking list items appended in the customized header. For example, let consider header of nested ListView is `Continent>Asia>India`. If we want to navigate to Continent level of ListView, then we can click the Continent in Header

N> In each navigation we have calculated the appended span tag length in `calculateLevelForElements` method to update header.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/bread-crumbs-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/bread-crumbs-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/bread-crumbs-cs1" %}
{% endif %}
