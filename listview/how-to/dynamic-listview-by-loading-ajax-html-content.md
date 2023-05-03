---
layout: post
title: Dynamic listview by loading ajax html content in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Dynamic listview by loading ajax html content in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dynamic listview by loading ajax html content 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic listview by loading ajax html content in ##Platform_Name## Listview control

We can set external `HTML` page content as [`template`](../../api/list-view#template) for our `ListView` control by making use of `AJAX` call.

```ts

let template: string;
let ajax: Ajax = new Ajax('./template.html', 'GET', false);
ajax.onSuccess = (e: string)=>{
    template = e;
}

ajax.send();

```

In the below sample, we have rendered smartphone settings template from external `HTML` file.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/ajax-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/ajax-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/ajax-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/ajax-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/ajax-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/ajax-cs1" %}
{% endif %}
