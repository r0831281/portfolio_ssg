+++
title = 'Internship'
+++

# My Internship at Ordolio
From January 31st to May 30th, I completed my internship at [Ordolio](https://ordolio.com), a Belgian platform that helps clubs and associations efficiently manage their operations — including memberships, events, payments, and communication. The platform is designed to streamline administrative tasks, enabling organizations to focus more on their core mission and community engagement.

During my internship, I contributed to both project-based assignments and the ongoing development of the platform. My responsibilities included implementing new features, resolving bugs, and improving various aspects of the user interface and overall user experience. I collaborated closely with the development team, took part in daily stand-ups, and participated in code reviews.

This internship provided me with valuable practical experience in a real-world development environment. I strengthened my technical skills in web development and gained insight into agile methodologies, version control (Git), and modern development tools. Additionally, I learned how to communicate effectively within a professional software team and contribute to a fast-evolving product.

## Summary

My internship focused on two main assignments:
1. **Developing a waitlist feature** for events
2. **Conducting a penetration test** on the application

Additionally, I actively participated in the development team and resolved 28 tickets related to bug fixes and new features. I worked in a Scrum environment, using tools like Jira and Git.

---

## Internship Assignments

### 🧾 Waitlist Feature

For events with limited capacity, I developed an intelligent waitlist module. This allows users to register when an event is full and automatically invites them as spots become available. Invitations are sent out using a FIFO principle with temporary access tokens.

**Key aspects:**
- Activation per event, configurable limits
- Automatic invitations with time limits
- Admin dashboard
- Integrated into the existing ticket flow

🛠 Technologies used: Django, Django Templates, Mail, Token system

📊 I conducted a comparative analysis of 4 methods (FIFO, priority, lottery, batch invites) and selected the best approach for Ordolio using a Weighted Ranking Method.

### 🔐 Penetration Test

Following the discovery of an XSS vulnerability, I performed a full pentest on the application. This test was based on OWASP Top 10 and NIST SP 800-115 and covered frontend, backend, APIs, and container security.

**Steps performed:**
- Attack surface mapping (1,393 endpoints)
- Automated and manual tests (ZAP, Burp Suite, Snyk)
- Assessment of email security (SPF, DKIM, DMARC)
- Custom scripts for URL extraction and header validation

🛠 Tools used: OWASP ZAP, Burp Suite, Snyk, Docker, Python & Bash (custom scripts)

📌 Results led to concrete improvements: input validation, more secure headers, and recommendations for annual pentests.

---

## Daily Operations and Extra Contributions

Besides my main assignments, I resolved 26 Jira tickets, ranging from UX improvements to new features and bug fixes.

###  Examples of Resolved Tickets
- **OV-1488:** Unlimited number of tickets configurable
- **OV-1487:** Login prompt for member tickets
- **OV-1486:** 'Copy link' button on event page
- **OV-1259:** Attachments added to emails
- **OV-1495:** Visual feedback for low member counts

These tickets improved the user experience and gave me insight into maintaining a large codebase.

---

## Workflow and Teamwork

I worked according to the **Scrum methodology**, using Jira for task management. Each feature or bug was tracked through clear steps: from *To Do* to *In Progress*, *Tech Review*, *Test*, *Release*, and finally *Done*.

Each contribution was linked to an OV number in Git, ensuring the workflow remained well-documented and traceable.

---

## Reflection

My internship at Ordolio was intensive and educational. I learned to:
- Analyze and design technical features based on business needs
- Detect and remediate security risks in an existing codebase
- Collaborate in a team and develop in an agile environment

I look back on a successful internship in which I not only refined my technical skills but also grew in professional collaboration and responsibility.

---

## Verified Documents

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1.5rem;">
  <a href="/files/PVA.pdf" download style="flex: 1 1 55%; text-align: center; background: #007acc; color: #fff; padding: 1.2em 0; border-radius: 8px; font-size: 1.2em; text-decoration: none; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: background 0.2s;">
    📄 Plan of Approach
  </a>
  <a href="/files/Onderzoek.pdf" download style="flex: 1 1 55%; text-align: center; background: #007acc; color: #fff; padding: 1.2em 0; border-radius: 8px; font-size: 1.2em; text-decoration: none; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: background 0.2s;">
    📄 Waitlist Functionality Research
  </a>
  <a href="/files/Realisatiedocument__Jonas_Quintiens.pdf" download style="flex: 1 1 55%; text-align: center; background: #007acc; color: #fff; padding: 1.2em 0; border-radius: 8px; font-size: 1.2em; text-decoration: none; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: background 0.2s;">
    📄 Realization Document
  </a>
    <a href="/files/Reflectie_Jonas_Quintiens.pdf" download style="flex: 1 1 55%; text-align: center; background: #007acc; color: #fff; padding: 1.2em 0; border-radius: 8px; font-size: 1.2em; text-decoration: none; font-weight: bold; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: background 0.2s;">
    📄 Reflection Document
  </a>
</div>





