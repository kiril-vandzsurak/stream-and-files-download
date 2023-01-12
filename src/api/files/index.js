import express from "express";
import { pipeline } from "stream";
import { getPdfRead } from "../../lib/pdf-tools.js";
import fs from "fs";
import { join } from "path";
import json2csv from "json2csv";

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

filesRouter.get("/moviesCSV", (req, res, next) => {
  try {
    res.setHeader("Content-Disposition", "attachment; filename=movies.csv");
    const source = fs.createReadStream(
      join(process.cwd(), "/src/data/movies.json")
    );
    console.log("Path::::", process.cwd());
    const transform = new json2csv.Transform({
      fields: ["title", "grade", "category"],
    });
    const destination = res;
    pipeline(source, transform, destination, (err) => {
      if (err) console.log(err);
    });
  } catch (error) {
    next(error);
  }
});

export default filesRouter;
