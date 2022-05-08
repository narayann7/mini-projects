
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// These id's and secrets should come from .env file.
const CLIENT_ID =
  "184038764932-amin5d0ptq8v7bohisuj3udp29s0piq5.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04j50Gl-FR1pmCgYIARAAGAQSNwF-L9IrfYaW5HJmiN7S0yGTWfZqh9keEJ1z_fkrCjL827ZPkory8Hi-ZvSSDj6WQYbQWdUUu_Q";

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
      text: "Hello from gmail email using API",
      html: "<h1>Hello from gmail email using API</h1>",
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
