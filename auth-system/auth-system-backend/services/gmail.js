const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// These id's and secrets should come from .env file.
const CLIENT_ID =
  "184038764932-amin5d0ptq8v7bohisuj3udp29s0piq5.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04dE2tC_jXzEDCgYIARAAGAQSNwF-L9IrqdIpHfF0ZSYq8dw7VvrDoWrar5wQ7tHMaQlCKJi3FHghFsi5ClSrgRd95c2l36Qtyoo";
  // 4/0AX4XfWgWBCAgQs011LNKz9YkWLYXJTY_qgCOr-Lls4JufDrqnTgaCSIoR36mQkwWdPZERw
  // 4/0AX4XfWivbT1zVdJTguZcfvWm-nmaOpkHOoU2OwheZmgicGTUXDP7qpguDYYDlMrTY0PDCA
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "codeunique7@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "codeunique7@gmail.com",
      to: "unweg@hi2.in",
      subject: "Hello from gmail using API",
      text: "your Otp is : 156905",
      html: "<h1>your Otp is : 12345</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("Email sent...", result))
  .catch((error) => console.log(error.message));
