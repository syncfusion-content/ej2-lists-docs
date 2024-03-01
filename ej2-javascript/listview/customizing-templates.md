---
layout: post
title: Customizing templates in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Customizing templates in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customizing templates 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customizing templates in ##Platform_Name## Listview control

The ListView control is designed to customize list items, group title and header title. It uses Essential JS2 [Template engine](../common/template-engine/) to render the elements.

## Header template

ListView header can be customized with the help of the [`headerTemplate`](../api/list-view/#headertemplate) property.

To customize header template in your application, set your customized template string to `headerTemplate` property along with [`showHeader`](../api/list-view/#showheader) property as `true` to display the ListView header.

```ts

let listviewInstance: ListView = new ListView({
     data: listData,
     headerTemplate: '<div class="header-content"><span>Header</span></div>',
     showHeader: true
})

```

In the following example, we have rendered Listview with customized header which contains search, add and sort buttons.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/header-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/header-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/header-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/header-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/header-template-cs1" %}
{% endif %}

## Template

ListView items can be customized with the help of the [`template`](../api/list-view/#template) property.

To customize list items in your application, set your customized template string to `template` property.

```ts

let listviewInstance: ListView = new ListView({
     data: listData,
     template: '<div class="list-tem"><span>${text}</span></div>',
})

```

We provided the following built-in CSS classes to customize the list-items. Refer to the following table.

| CSS class        | Description           |
| ------------- |-------------|
| e-list-template, e-list-wrapper | These classes are used to differentiate normal and template rendering, which are mandatory for template rendering. The `e-list-template` class should be added to the root of the ListView element and `e-list-wrapper` class should be added to the template element wrapper <br/><br/> `new ListView({` <br/> `dataSource: data,` <br/> <b>`cssClass: 'e-list-template',`</b> <br/> `template: '<div class="`<b>`e-list-wrapper`</b>`"></div>'}, '#list');`
| e-list-content | This class is used to align list content and it should be added to the content element <br/><br/> `<div class="e-list-wrapper">`<br/><b>`<span class="e-list-content">ListItem</span>`</b> <br/>`</div>`|
| e-list-avatar | This class is used for avatar customization. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](../avatar/getting-started) classes <br/><br/> `<div class="e-list-wrapper`<b>`e-list-avatar`</b>`">` <br/> <b>`<span class="e-avatar e-avatar-circle">MR</span>`</b><br/>`<span class="e-list-content">ListItem</span>`<br/>`</div>`|
| e-list-avatar-right | This class is used to align avatar to right side of the list item. It should be added to the template element wrapper. After adding it, we can customize our element with [Avatar](../avatar/getting-started) classes <br/><br/> `<div class="e-list-wrapper`<b>`e-list-avatar-right`</b>`">` <br/> `<span class="e-list-content">ListItem</span>`<br/><b>`<span class="e-avatar e-avatar-circle">MR</span>`</b><br/> `</div>`|
| e-list-badge | This class is used for badge customization .It should be added to the template element wrapper. After adding it, we can customize our element with [Badge](../badge/getting-started) classes <br/><br/> `<div class="e-list-wrapper`<b>`e-list-badge`</b>`">` <br/> `<span class="e-list-content">ListItem</span>`<br/><b>`<span class="e-badge e-badge-primary">MR</span>`</b><br/> `</div>`|
| e-list-multi-line | This class is used for multi-line customization. It should be added to the template element wrapper. After adding it, we can customize List item's header and description <br/><br/>`<div class="e-list-wrapper`<b>`e-list-multi-line`</b>`">` <br/> `<span class="e-list-content">ListItem</span>`<br/>`</div>`|
| e-list-item-header |This class is used to align a list header and it should be added to the header element along with the multi-line class <br/><br/> `<div class="e-list-wrapper`<b>`e-list-multi-line`</b>`">`<br/> <b>`<span class="e-list-item-header">ListItem Header</span>`</b><br/> `<span class="e-list-content">ListItem</span>`<br/>`</div>`|

In the following example, we have customized list items with built-in CSS classes.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/avatar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/avatar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/avatar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/avatar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/avatar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/avatar-cs1" %}
{% endif %}

## Group template

ListView group header can be customized with the help of the [`groupTemplate`](../api/list-view/#grouptemplate) property.

To customize the group template in your application, set your customized template string to `groupTemplate` property.

```ts

let listviewInstance: ListView = new ListView({
     data: listData,
     groupTemplate: '<div class="group-header"><span>${items[0].category}</span></div>',
})

```

In the following example, we have grouped Listview based on the category. The category of each list item should be mapped with [`groupBy`](../api/list-view/fieldSettingsModel/#groupby) field of the data. We have also displayed grouped list items count in the group list header.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/item-count-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/item-count-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/item-count-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/item-count-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/item-count-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/item-count-cs1" %}
{% endif %}

> We can also render other EJ2 controls in ListView templates by rendering that controls on [`actionComplete`](../api/list-view/#actioncomplete) event. Refer to the below code snippet.

```ts

let listviewInstance: ListView = new ListView({
     data: listData,
     template: '<div><span>${text}</span><button id="delete"></button></div>',
     actionComplete: () => {
         new Button({iconCss: 'e-icons e-delete-icon' cssClass: 'e-small e-round', isPrimary: true }, '#delete')
     }
})

```