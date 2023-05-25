---
layout: post
title: Listview with hyper link navigation in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Listview with hyper link navigation in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Listview with hyper link navigation 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Listview with hyper link navigation in ##Platform_Name## Listview control

We can use `anchor` tag along with `href` attribute in our ListView [`template`](../../api/list-view#template) property for navigation.

```ts

let anchor_template: string = "<a target='_blank' href='${url}'>${name}</a>";

```

In the below sample, we have rendered `ListView` with search engines URL.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/navigation-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/navigation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/navigation-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/navigation-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/navigation-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/navigation-cs1" %}
{% endif %}
