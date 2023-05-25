---
layout: post
title: Virtualization in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Virtualization in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Virtualization 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Virtualization in ##Platform_Name## Listview control

UI virtualization loads only viewable list items in a view port, which will improve the ListView performance while loading a large number of data.

## Module injection

To use UI virtualization, you should import `virtualization` module from the `ej2-lists` package and inject it using `ListView.Inject()`
method as shown in the following code snippet.

```ts

import { ListView, Virtualization } from '@syncfusion/ej2-lists';

ListView.Inject(Virtualization);

```

## Getting started

UI virtualization can be enabled in the ListView by setting the [`enableVirtualization`](../api/list-view#enablevirtualization) property to true.

It has two types of scrollers as follows:

**Window scroll**: This scroller is used in the ListView by default.

**Container scroll**: This scroller is used, when the height property of the ListView is set.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/virtualization/flat-list-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/flat-list-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/virtualization/flat-list-cs1" %}
{% endif %}

You can use the `template` property to customize list items in UI virtualization.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/virtualization/template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/virtualization/template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/virtualization/template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/virtualization/template-cs1" %}
{% endif %}

## Conditional rendering

The following conditional rendering support is provided for the template and groupTemplate.

| Name | Syntax |
| --- | --- | --- |
| conditional class | `<div class="${ $id % 2 === 0 ? 'even-list' : 'odd-list'}"></div>`  |
| conditional attribute | `<div id="${ $id % 2 === 0 ? 'even-list' : 'odd-list'}"></div>`  |
| conditional text content | `<div>${ $id % 2 === 0 ? 'even-list' : 'odd-list'}</div>`  |

In the following sample, the light blue is applied for the even list and light coral is applied for the odd list based on the conditional class.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/virtualization/conditional-ui-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/virtualization/conditional-ui-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/virtualization/conditional-ui-cs1" %}
{% endif %}