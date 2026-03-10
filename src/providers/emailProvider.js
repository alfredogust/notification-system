const emailService = require("../services/emailService");

class EmailProvider {

  async send(data) {

    if (!data.recipient?.email) {
      throw new Error("Recipient email is required");
    }

    if (!data.title || !data.text) {
      throw new Error("Title and text are required for email notifications");
    }

    return emailService.sendEmail({
      to: data.recipient.email,
      subject: data.title,
      message: data.text
    });

  }

}

module.exports = new EmailProvider();