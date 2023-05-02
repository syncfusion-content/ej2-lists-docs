---
layout: post
title: Dynamic templates in listview based on device in ##Platform_Name## Listview control | Syncfusion
description: Learn here all about Dynamic templates in listview based on device in Syncfusion ##Platform_Name## Listview control of Syncfusion Essential JS 2 and more.
platform: ej2-javascript
control: Dynamic templates in listview based on device 
publishingplatform: ##Platform_Name##
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic templates in listview based on device in ##Platform_Name## Listview control

The Syncfusion Essential JS2 controls are desktop and mobile-friendly. So, you can use Syncfusion controls in both modes. The control templates are not always fixed. Applications may need to load various templates depending upon the device.

## Integration

In the ListView control, template support is being used. In some cases, the control wrapper is always responsive across all devices, but the template contents are dynamically changed with unspecified (sample side) dimensions. CSS customization is also needed in sample-side to align template content responsively in both mobile and desktop modes. Here, two templates have been loaded for mobile and desktop modes. To check the device mode, a browser module has been imported from the ej2-base package.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/listview/dynamic-template-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/dynamic-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/listview/dynamic-template-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/listview/dynamic-template-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/listview/dynamic-template-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/listview/dynamic-template-cs1" %}
{% endif %}
