# 📬 YDP Mentorship Program – Automated Welcome Emails

This Google Apps Script project automates the onboarding communication process for new mentees in the **Young Data Professionals (YDP) Mentorship Program**. It reads mentee information from a Google Sheet and sends personalized HTML emails, including an onboarding message, session details, program hub links, and a policy document attachment.

## 🔧 Features

- Sends personalized welcome emails to each mentee with a click of a button.
- Includes session details, onboarding links, and embedded call-to-actions.
- Attaches a program policy PDF from Google Drive.
- Tracks email status to avoid duplicates.
- Accessible via a custom spreadsheet menu item.

## 📈 Impact

- Reduced manual onboarding time by over 80%.
- Eliminated email duplication with smart tracking.
- Enhanced mentee experience with timely and consistent communication.

## 🗂 Google Sheet Format

The script reads data from `Sheet2`. The expected structure of the sheet:

| Email           | First Name | Last Name | Email Sent |
|-----------------|------------|-----------|-------------|
| user@example.com | Sarah      | Doe       | Sent        |

> ✅ The "Email Sent" column is updated automatically after each successful email.

## 🖼 Screenshot

![Mentee Sheet Format](https://github.com/Jay-1853/ydp_apps_script_mail_merge/blob/main/data_structure.png)


