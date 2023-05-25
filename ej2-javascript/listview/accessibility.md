---
layout: post
title: Accessibility in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Accessibility in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Accessibility 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in ##Platform_Name## Listview control

## Keyboard interaction

The following key shortcuts are used to access the ListView control without any interruption.

| Keyboard shortcuts | Actions |
|------------|-------------------|
| <kbd>Arrow Up</kbd> | Move to the previous list item. |
| <kbd>Arrow Down</kbd> | Move to the next list item. |
| <kbd>Select</kbd> | Select the targeted list from the whole list. |
| <kbd>Back</kbd> | Get back to the previous lists if it is in nested list. |

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/accessibility-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/accessibility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/accessibility-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/accessibility-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/accessibility-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/accessibility-cs1" %}
{% endif %}

## ARIA attributes

The following ARIA attributes are applicable for ListView control based on its state.

| Properties | Functionality |
| ------------ | ----------------------- |
| aria-selected | It indicates the selected list from the whole list. |
| aria-level | It defines the hierarchical structure of a list item. |
