import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendWaitlistNotification(userEmail: string) {
  const msg = {
    to: 'andrew@junk-work.com',
    from: 'andrew@junk-work.com', // Must be a verified sender
    subject: 'New Waitlist Signup!',
    text: `A new user has joined the waitlist!\nEmail: ${userEmail}`,
    html: `
      <h2>New Waitlist Signup!</h2>
      <p>A new user has joined the Junkworks waitlist.</p>
      <p><strong>Email:</strong> ${userEmail}</p>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send notification email');
  }
}
