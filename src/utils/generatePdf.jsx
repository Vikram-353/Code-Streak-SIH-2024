import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const logoBase64 =
  "data:image/png;base64,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";

const generatePdf = (pins) => {
  const docDefinition = {
    content: [
      {
        style: "header",
        table: {
          widths: ["auto", "*"],
          body: [
            [
              {
                image: logoBase64,
                width: 50,
                margin: [0, 5, 0, 5],
              },
              {
                text: "Mines Manager",
                alignment: "center",
                fontSize: 22,
                color: "#ffffff",
                bold: true,
                margin: [0, 15, 0, 15],
              },
            ],
          ],
        },
        layout: {
          fillColor: "#2C3E50",
          hLineWidth: () => 0,
          vLineWidth: () => 0,
        },
      },

      {
        text: "Shift Handover Report",
        style: "title",
        margin: [0, 20, 0, 10],
      },

      {
        text: "Coal Mining Operations Overview",
        style: "subheader",
      },

      {
        text: `Coal mining is the process of extracting coal from the ground.
               It is a crucial part of the energy industry, providing fuel
               for electricity generation and other industrial processes.
               The operations involved in coal mining require careful planning,
               safety measures, and environmental considerations to minimize impact
               on surrounding ecosystems.`,
        style: "bodyText",
      },

      ...pins.map((pin) => ({
        style: "pinSection",
        table: {
          widths: ["*"],
          body: [
            [
              {
                text: [
                  { text: `Type: ${pin.type}\n`, bold: true },
                  { text: `Title: ${pin.title}\n` },
                  { text: `Description: ${pin.description}\n` },
                  { text: `Date: ${pin.date}\n` },
                  { text: `Time: ${pin.time}\n` },
                ],
                margin: [0, 5, 0, 5],
              },
            ],
          ],
        },
        layout: {
          fillColor: "#ECF0F1",
          paddingLeft: () => 10,
          paddingRight: () => 10,
          paddingTop: () => 5,
          paddingBottom: () => 5,
        },
      })),
    ],

    styles: {
      header: {
        margin: [0, 0, 0, 10],
      },
      title: {
        fontSize: 18,
        bold: true,
        color: "#2980B9",
        decoration: "underline",
        margin: [0, 20, 0, 10],
      },
      subheader: {
        fontSize: 16,
        bold: true,
        color: "#27AE60",
        margin: [0, 10, 0, 5],
      },
      bodyText: {
        fontSize: 12,
        margin: [0, 5, 0, 5],
        color: "#34495E",
        alignment: "justify",
        margin: [0, 10, 0, 10],
      },
      pinSection: {
        margin: [0, 5, 0, 5],
        border: [false, true, false, true],
        borderColor: "#BDC3C7",
        fillColor: "#ECF0F1",
      },
    },
  };

  pdfMake.createPdf(docDefinition).download("shift-handover-report.pdf");
};

export default generatePdf;
