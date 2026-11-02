+++
title = "Contact"
description = "Vertel kort wat je wil verbeteren en waar je vandaag tegenaan loopt."
draft = false
+++

Vermeld het doel, je huidige opzet en eventuele timing. Stuur geen wachtwoorden, API-sleutels of gevoelige klantgegevens.

<link rel="stylesheet" href="/css/contact-form.css">

<form class="form-grid contact-form" action="https://contact-forms.jonas-quintiens.workers.dev/submit/jo-qu" method="POST" data-success="Bedankt — je bericht is verzonden." data-error="Het bericht kon niet worden verzonden. Probeer opnieuw of mail me rechtstreeks.">
  <label>
    Naam
    <input name="name" autocomplete="name" maxlength="120" required>
  </label>
  <label>
    E-mail
    <input name="email" type="email" autocomplete="email" maxlength="254" required>
  </label>
  <label>
    Bericht
    <textarea name="message" rows="7" maxlength="5000" required></textarea>
  </label>
  <label class="contact-honeypot" aria-hidden="true">
    Bedrijf
    <input name="company" tabindex="-1" autocomplete="off">
  </label>
  <div class="cf-turnstile" data-sitekey="0x4AAAAAABfUZMRlWLiwVljr"></div>
  <button class="btn btn-primary" type="submit">Verstuur bericht</button>
  <p class="contact-form-status" role="status" aria-live="polite"></p>
</form>

Liever e-mail? [jonas@jo-qu.com](mailto:jonas@jo-qu.com)

<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<script src="/js/contact-form.js" defer></script>
