function MentorshipWelcomeEmails_Mentees() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet2'); // sheet name
    const data = sheet.getDataRange().getValues();
    
    const fileId = "YOUR_FILE_ID_HERE";
    const attachmentFile = DriveApp.getFileById(fileId);
    const PolicyAgreementForm = "https://example.com/your-form-link";
    const YDPWeb = "https://yourorganization.com";
    const programHubLink = "https://example.com/program-hub";
    const meetingLink = "https://meet.google.com/your-meeting-link";
    const onboardingDetails = `
  &#128197; <b>Date:</b> Wednesday, April 9<br>  
  &#128339; <b>Time:</b> 6:00 – 7:00 PM (Africa/Lagos)<br>  
  &#128205; <b>Google Meet:</b> <a href="${meetingLink}">${meetingLink}</a>
  `;
  
    const subject = "You’re In! Welcome to the YDP Mentorship Program";
  
    for (let i = 1; i < data.length; i++) { // start from 1 to skip header
      const email = data[i][1];
      const firstName = data[i][2];
      const lastName = data[i][3];
      const emailSentStatus = data[i][4];
  
      const htmlBody = `
        <div style="font-family: Arial, sans-serif; font-size: 16px;">
          <p><strong>Dear ${firstName}</strong>,</p>
  
          <p>We’re excited to let you know that you’ve been successfully selected to participate in the <strong>Young Data Professionals (YDP) Mentorship Program</strong>! &#129395;</p>
  
          <p>After reviewing your application, we’ve carefully matched you with a mentor who aligns with your goals and learning needs. We believe this mentorship will be a valuable step in your journey as you grow and thrive in the data space.</p>
  
          <hr>
  
          <h3>&#9989; Before We Begin...</h3>
          <p>Please take a few moments to review the following resources:</p>
          <p>&#128216; <a href="${programHubLink}" target="_blank">YDP Mentorship Program Hub</a> – Your one-stop destination for everything you need to know about the program, including schedules, expectations, and FAQs.</p>
          <p>&#128196; <strong>Program Policy Document (attached)</strong> – This outlines important guidelines around participation, communication, professional conduct (including anti-harassment), and how we may use shared photos for program promotion.</p>
          <p>You are required to <strong>agree <a href="${PolicyAgreementForm}" target="_blank">HERE</a> to the policy document</strong> before continuing with the program.</p>
  
          <hr>
  
          <h3>&#127891; Onboarding Session</h3>
          <p>We’ll be kicking things off with a virtual onboarding session to walk you through what to expect, how to get the most out of your mentorship, and to answer any questions you might have.</p>
          <p>${onboardingDetails}</p>
  
          <p>&#128204; <i>Note: Mentor contact details will be shared after the onboarding session</i>.</p>
  
          <p>We’re thrilled to have you on board and can’t wait to see the growth, connections, and confidence you’ll gain over the next few months!</p>
  
          <p>If you have any questions before the session, just reply to this email — we're here for you.</p>
  
          <p><strong>Warm regards</strong>,<br>
          Ayooluwa Joseph<br>
          For the Mentoring Program Team<br>
          <a href="${YDPWeb}" target="_blank">Young Data Professionals</a></p>
        </div>
      `;
  
      //GmailApp.sendEmail(email, subject, '', { htmlBody: htmlBody });
  
      if (emailSentStatus === "Sent") {
        Logger.log(`Skipping ${email} – already sent`);
        continue; // skip this row
      }
  
      MailApp.sendEmail({
        to:email,
        subject: subject,
        htmlBody: htmlBody,
        attachments: [attachmentFile.getAs(MimeType.PDF)]
      })
      
      // Update the 'Email Sent' column to indicate the email has been sent to the mentee
      sheet.getRange(i + 1, 5).setValue('Sent');
  
      Logger.log(`Email sent to ${email}`);
    }
  }
  
  function onOpen() {
    const ui = SpreadsheetApp.getUi();
    ui.createMenu('YDP Mentorship')
      .addItem('Send Mentee Welcome Emails', 'MentorshipWelcomeEmails_Mentees')
      .addToUi();
  }
  