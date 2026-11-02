+++
title = "Contact"
description = "Tell me briefly what you want to improve and what is getting in the way today."
draft = false
+++

Include the goal, your current setup and any timing constraints. Please don’t send passwords, API keys or sensitive customer data.

<link rel="stylesheet" href="/css/contact-form.css">

<form class="form-grid contact-form" action="https://contact-forms.jonas-quintiens.workers.dev/submit/jo-qu" method="POST" data-success="Thanks — your message has been sent." data-error="The message could not be sent. Please try again or email me directly.">
  <label>
    Name
    <input name="name" autocomplete="name" maxlength="120" required>
  </label>
  <label>
    Email
    <input name="email" type="email" autocomplete="email" maxlength="254" required>
  </label>
  <label>
    Message
    <textarea name="message" rows="7" maxlength="5000" required></textarea>
  </label>
  <label class="contact-honeypot" aria-hidden="true">
    Company
    <input name="company" tabindex="-1" autocomplete="off">
  </label>
  <div class="cf-turnstile" data-sitekey="0x4AAAAAABfUZMRlWLiwVljr"></div>
  <button class="btn btn-primary" type="submit">Send message</button>
  <p class="contact-form-status" role="status" aria-live="polite"></p>
</form>

Prefer email? [jonas@jo-qu.com](mailto:jonas@jo-qu.com)

<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<script src="/js/contact-form.js" defer></script>
