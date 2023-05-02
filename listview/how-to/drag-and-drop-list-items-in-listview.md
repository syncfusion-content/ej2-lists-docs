---
layout: post
title: Drag and drop list items in listview in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Drag and drop list items in listview in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Drag and drop list items in listview 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Drag and drop list items in listview in ##Platform_Name## Listview control

In ListView control, we don't have drag and drop support. But we can achieve this requirement using [`TreeView`](https://ej2.syncfusion.com/documentation/treeview/getting-started/) control with ListView appearance.

Drag and Drop in TreeView control was enabled by setting [`allowDragAndDrop`](../../api/treeview#allowdraganddrop) to `true`.

```ts

let treeViewInstance: TreeView = new TreeView({

    fields: { dataSource: data, id: 'id', text: 'text' },
    allowDragAndDrop: true

});

```

The TreeView control is used to represent hierarchical data in a tree like structure. So, list items in TreeView can be dropped to child of target element. we can prevent this behaviour by cancelling the [`nodeDragStop`](../../api/treeview#nodedragstop) and [`nodeDragging`](../../api/treeview#nodedragging) events.

```ts

let treeViewInstance: TreeView = new TreeView({
    fields: { dataSource: data, id: 'id', text: 'text' },
    allowDragAndDrop: true,
    nodeDragging: onDragStop,
    nodeDragStop: onDragStop

});

function onDragStop(args: DragAndDropEventArgs) {
    //Block the Child Drop operation in TreeView
   let  draggingItem: HTMLCollection = document.getElementsByClassName("e-drop-in");
    if (draggingItem.length == 1) {
        draggingItem[0].classList.add('e-no-drop');
        args.cancel = true;
    }
}

```

In the below sample, we have rendered draggable list items.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/reorder-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/reorder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/reorder-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/reorder-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/reorder-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/reorder-cs1" %}
{% endif %}
