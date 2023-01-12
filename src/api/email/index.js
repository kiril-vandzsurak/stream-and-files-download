import express from "express";
import { sendEmail } from "../../lib/email-tools.js";

const emailRouter = express.Router();

emailRouter.post("/sendMail", async (req, res, next) => {
  try {
    const { email } = req.body;
    await sendEmail(email);
    res.send();
  } catch (error) {
    next(error);
  }
});

export default emailRouter;
