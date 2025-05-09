# ydp_apps_script_mail_merge

# 📬 YDP Mentorship Program – Automated Welcome Emails

This Google Apps Script project automates the onboarding communication process for new mentees in the **Young Data Professionals (YDP) Mentorship Program**. It reads mentee information from a Google Sheet and sends personalized HTML emails, including an onboarding message, session details, program hub links, and a policy document attachment.

## 🔧 Features

- Automatically sends personalized welcome emails to each mentee.
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

![Mentee Sheet Format](https://github.com/yourusername/ydp-mentorship-welcome/blob/main/assets/sheet-screenshot.png)

> Replace the image link above with your actual GitHub image path.

## 📂 Project Structure

