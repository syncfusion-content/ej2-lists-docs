---
layout: post
title: Create mobile contact layout from listview in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Create mobile contact layout from listview in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Create mobile contact layout from listview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Create mobile contact layout from listview in ##Platform_Name## Listview control

You can customize the ListView using the [template](../../api/list-view/#template) property. Refer to the following steps to customize ListView as mobile contact view with our `ej2-avatar`.

* Render the ListView with [dataSource](../../api/list-view/#datasource) that has avatar data. You can set avatar data as either text or class names. Refer to the following codes.

```ts

let dataSource: { [key: string]: Object }[] = [
  {
    text: "Jenifer", contact: "(206) 555-985774", id: "1", avatar: "", pic: "pic01"
  },
  {
    text: "Amenda", contact: "(206) 555-3412", id: "2", avatar: "A", pic: ""
  }
];

```

* Set `avatar` classes in ListView template to customize contact icon. In the following codes, medium size avatar has been set using the class name `e-avatar e-avatar-circle` from data source.

```ts

  template: '<div class="e-list-wrapper e-list-multi-line e-list-avatar">' +
    '${if(avatar!=="")}' +
    '<span class="e-avatar e-avatar-circle">${avatar}</span>' +
    '${else}' +
    '<span class="${pic} e-avatar e-avatar-circle"> </span>' +
    '${/if}' +
    '<span class="e-list-item-header">${text}</span>' +
    '<span class="e-list-content">${contact}</span>' +
    '</div>';

```

> Avatars can be set in different sizes in avatar classes. To know more about avatar classes, refer to [Avatar](https://ej2.syncfusion.com/demos/#/material/avatar/default.html).

* Sort the contact names using the [`sortOder`](../../api/list-view/#sortorder) property of ListView.

* Enable the [`showHeader`](../../api/list-view/#showheader) property, and set the [`headerTitle`](../../api/list-view/#headertitle) as `Contacts`.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/avatar-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/avatar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/avatar-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/avatar-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/avatar-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/avatar-cs2" %}
{% endif %}
