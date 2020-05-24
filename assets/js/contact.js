---
---

var submitted=false;
var checked = false;

var verifyCallback = function(response) {
   $('#submit').removeAttr('disabled');
};

var onloadCallback = function() {
  grecaptcha.render('captcha', {
    'sitekey' : '6LftpPsUAAAAAHnFvHwn64ye_QxB2y0KeDVJL8Cq',
    'callback' : verifyCallback,
    'theme' : 'light'
  });
};

function alertAndRedirect() {
  alert("Your message was sent.");
  window.location.href='{{ site.homepage }}';
}