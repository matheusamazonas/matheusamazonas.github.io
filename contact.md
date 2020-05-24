---
layout: contact
title: Contact
description: Contact
---

You can either [send me an email](mailto:{{ site.author.email }}) or use the form below to contact me. Additionally, you can check my social media profiles using the badges on the menu above.
{: .text-justify}

<form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSd0lJ-zLQWgloEF2uprhcq3wyC_VAZdcUOnKPZIjtL5GL8WaQ/formResponse?" target="hidden_iframe" onsubmit="submitted=true;">
    <input type="text" name="entry.1618971472" id="entry.1618971472" placeholder="Your name" class="contact-input" required>
  <br>
    <input type="email" name="entry.533857662" id="entry.533857662" placeholder="Your email" class="contact-input" required>
  <br>
    <input type="text" name="entry.2103130039" id="entry.2103130039" placeholder="Subject" class="contact-input" required>
  <br>
    <textarea name="message" name="entry.372610863" id="entry.372610863" placeholder="Message" class="contact-message" required></textarea>
  <div id ="captcha"></div>
  <br>
  <input type="submit" id="submit" value="Submit"  disabled="disabled">
</form>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) { alertAndRedirect() }"></iframe>