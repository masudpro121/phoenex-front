require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const verifySid = process.env.VERIFY_TOKEN;
const client = require("twilio")(accountSid, authToken);

export default function handler(req, res) {
  const { phone, otp } = JSON.parse(req.body);
  if (phone) {
    client.verify.v2
      .services(verifySid)
      .verificationChecks.create({ to: phone, code: otp })
      .then((verification) => {
        res.send({status:verification.status})
      })
  } else {
    res.send({ status: "something wrong" });
  }
}
