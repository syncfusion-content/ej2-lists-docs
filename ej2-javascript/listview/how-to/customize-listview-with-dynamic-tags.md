---
layout: post
title: Customize listview with dynamic tags in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Customize listview with dynamic tags in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Customize listview with dynamic tags 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Customize listview with dynamic tags in ##Platform_Name## Listview control

You can customize the ListView items using the [`template`](../../api/list-view/#template) property. Here, the dynamic tags are added and removed in the list item from another ListView. Refer to the following steps to achieve this.

* Render the ListView with data source, and add button element with each list item of ListView on [`actionComplete`](../../api/list-view/#actioncompldiaete) event. Refer to the following code sample of actionComplete event.

```ts

// The actionComplete event for first ListView to add the button

function addButton() {
    let buttonObj: { [key: string]: Object } = { obj: Button, prop: { iconCss: 'e-icons e-add-icon', cssClass: 'e-small e-round' } };
    let ele: HTMLCollection = document.getElementsByClassName("e-but");
    for (let i: number = 0; i < ele.length; i++) {
        buttonObj.obj = new Button(buttonObj.prop);
        (buttonObj.obj as Button).appendTo(ele[i] as HTMLElement);
    }
}

```

* Initialize dynamic ListView with required property that holds the tags of parent ListView, and bind the [`select`](../../api/list-view/#select) event (triggers when the list item is selected), in which you can get and add the selected item value as tags into parent
ListView. Refer to the following code sample.

```ts

//Select the event that is is rendered inside dialog for ListView
function addTag(e: SelectEventArgs) {
    let listTag: HTMLSpanElement = document.createElement('span');
    listTag.className = 'advanced-option';
    let labelElem: HTMLSpanElement = document.createElement('span');
    labelElem.className = 'label';
    let deleteElem: HTMLSpanElement = document.createElement('span');
    deleteElem.className = 'delete';
    deleteElem.onclick = removeTag;
    labelElem.innerHTML = e.text;
    listTag.appendChild(labelElem);
    listTag.appendChild(deleteElem);
    let tag: HTMLSpanElement = document.createElement('span');
    tag.className = 'advanced-option-list';
    tag.appendChild(listTag);
    listviewInstance.element.querySelector('.e-active').appendChild(tag);
}

```

* Render the dialog control with empty content and append the created dynamic ListView object to the dialog on [`created`](../../api/dialog/#created) event.

* Bind the click event for button icon (+) to update the ListView data source with tags, and open the dialog with this dynamic ListView. Refer to the following code sample.

```ts

//Method to hide/show the dialog and update the ListView data source
function renderDialog(id: string): void {
    if (document.getElementsByClassName('e-popup-open').length != 0) {
        dialog.hide();
    }
    else {
        listObj.dataSource = datasource[id];
        listObj.dataBind();
        dialog.show();
    }

}

```

* Bind the click event with added dynamic tags to remove it. Refer to the following code sample.

```ts

//Method to remove the list item
function removeTag() {
    this.parentNode.parentNode.remove();
}

```

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/tags-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/tags-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/tags-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/tags-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/tags-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/tags-cs1" %}
{% endif %}
