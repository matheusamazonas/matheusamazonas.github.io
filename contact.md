---
layout: contact
title: Contact
description: Contact
---

<form name="gform" id="gform" enctype="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSd0lJ-zLQWgloEF2uprhcq3wyC_VAZdcUOnKPZIjtL5GL8WaQ/formResponse?" target="hidden_iframe" onsubmit="submitted=true;">

  <label required="required">
    Name:
    <input type="text" name="entry.1618971472" id="entry.1618971472">
  </label>
  <br>
  <label required="required">
    Email:
    <input type="email" name="entry.533857662" id="entry.533857662">
  </label>
  <br>
  <label required="required">
    Subject:
    <input type="text" name="entry.2103130039" id="entry.2103130039">
  </label>
  <br>
  <label required="required">
    Message:
    <textarea name="message" name="entry.372610863" id="entry.372610863"></textarea>
  </label>
  <!-- <div class="g-recaptcha" data-sitekey="6LftpPsUAAAAAHnFvHwn64ye_QxB2y0KeDVJL8Cq"></div> -->
  <input type="submit" value="Submit">
</form>

<script>
function alertAndRedirect() {
  alert("Your message was sent.");
  window.location.href='{{ site.homepage }}';
}
</script>

<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) { alertAndRedirect() }"></iframe>