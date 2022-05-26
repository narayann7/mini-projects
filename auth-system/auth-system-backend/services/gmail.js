const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// These id's and secrets should come from .env file.
const CLIENT_ID =
  "184038764932-amin5d0ptq8v7bohisuj3udp29s0piq5.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//046_CqZ7yq7zSCgYIARAAGAQSNwF-L9IrT0mtZ7y28j1v3aay2s0TIM-LlhbgQ35So0DIR3cFLkoxGCWIhEA5XvlLgse1W9ocIe0";

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
      to: "laxminarayanreddy432@gmail.com",
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
