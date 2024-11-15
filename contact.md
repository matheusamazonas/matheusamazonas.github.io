---
layout: no-navigation
title: Contact
tagline: Contact
---

If you would like to contact me regarding Lazy Squirrel Labs, check the contact info on the [studio's webpage](https://lslabs.dev/#contact).

Otherwise, you can either send me an email at [{{site.author.email}}](mailto:{{site.author.email}}) or check my social media profiles using the badges below.

<div>
{% for item in site.social-links %}
<a href="{{ item.link }}" target="blank"> <img src="assets/images/footer/{{item.id}}.png" width="21px" height="21px" alt="{{ item.alt }}" class="social-image"> </a>
{% endfor %}
</div>