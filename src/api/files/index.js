import express from "express";
import { pipeline } from "stream";
import { getPdfRead } from "../../lib/pdf-tools.js";

const filesRouter = express.Router();

filesRouter.get("/pdf", (req, res, next) => {
  res.setHeader("Content-Disposition", "attachment; filename=myFile.pdf");
  const source = getPdfRead([
    {
      text: "This is a header, using header style",
    },
  ]);
  const destination = res;
  pipeline(source, destination, (err) => {
    if (err) console.log(err);
  });
});

export default filesRouter;
