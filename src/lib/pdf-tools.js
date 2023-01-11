import PdfPrinter from "pdfmake";

export const getPdfRead = (info) => {
  const fonts = {
    Roboto: {
      normal: "Helvetica",
    },
  };

  const printer = new PdfPrinter(fonts);

  const docDefinition = {
    content: [
      {
        text: "I was a salesman 6 months ago, and now I am a professional web developer",
        style: "header",
        alignment: "center",
      },
    ],
    styles: {
      header: {
        fontSize: 18,
      },
    },
  };

  const pdfReadableStream = printer.createPdfKitDocument(docDefinition);
  pdfReadableStream.end();

  return pdfReadableStream;
};
