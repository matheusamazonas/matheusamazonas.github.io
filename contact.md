---
layout: no-navigation
title: Contact
tagline: Contact
---

You can either send me an email at [{{site.author.email}}](mailto:{{site.author.email}}) or check my social media profiles using the badges below.
{: .text-justify}

<div>
{% for item in site.social-links %}
<a href="{{ item.link }}" target="blank"> <img src="assets/images/footer/{{item.id}}.png" width="21px" height="21px" class="social-image"> </a>
{% endfor %}
</div>