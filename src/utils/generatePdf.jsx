// src/utils/generatePdf.js
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generatePdf = (pins) => {
  const docDefinition = {
    content: [
      { text: "Shift Handover Report", style: "header" },
      ...pins.map((pin) => ({
        text: [
          { text: `Type: ${pin.type}\n`, bold: true },
          { text: `Title: ${pin.title}\n` },
          { text: `Description: ${pin.description}\n` },
          { text: `Date: ${pin.date}\n` },
          { text: `Time: ${pin.time}\n` },
          { text: "\n" },
        ],
      })),
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 10],
      },
    },
  };

  pdfMake.createPdf(docDefinition).download("shift-handover-report.pdf");
};

export default generatePdf;
