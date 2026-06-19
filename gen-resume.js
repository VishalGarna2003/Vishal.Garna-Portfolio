const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, AlignmentType, BorderStyle, WidthType, HeadingLevel } = require('docx');
const fs = require('fs');

const accentColor = "4A5D6A";
const darkText = "1F2937";
const mutedText = "4B5563";
const noBorder = { style: BorderStyle.NIL, size: 0, color: "FFFFFF" };

function noBorders() {
  return { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
}

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Calibri", size: 22, color: darkText }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, color: accentColor, font: "Calibri" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 26, bold: true, color: accentColor, font: "Calibri" },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    children: [
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [new TextRun({ text: "VISHAL SAINI", bold: true, size: 44, color: accentColor, font: "Calibri" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 120 },
        children: [new TextRun({ text: "Backend & AI Systems Engineer", size: 24, color: mutedText, font: "Calibri" })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [
          new TextRun({ text: "Jaipur, Rajasthan, India", size: 20, color: mutedText, font: "Calibri" }),
          new TextRun({ text: "  |  ", size: 20, color: mutedText, font: "Calibri" }),
          new TextRun({ text: "+91 7340479570", size: 20, color: mutedText, font: "Calibri" }),
          new TextRun({ text: "  |  ", size: 20, color: mutedText, font: "Calibri" }),
          new TextRun({ text: "vishalgarna5@gmail.com", size: 20, color: mutedText, font: "Calibri" }),
        ]
      }),
      new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: accentColor, space: 1 } },
        spacing: { after: 200 },
        children: []
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "PROFESSIONAL SUMMARY" })] }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Software Engineer focused on backend systems and AI integrations, passionate about building products that move the needle. Designs and ships scalable healthcare, AI-powered and multi-tenant applications using Node.js, Express.js, MongoDB, Redis and RabbitMQ. Built EMR systems, AI-assisted diagnostic pipelines, semantic search platforms and speech-to-text analytics workflows using Gemini AI, OpenAI Whisper and Qdrant.", size: 21, color: darkText, font: "Calibri" })]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "EXPERIENCE" })] }),

      new Table({
        width: { size: 10080, type: WidthType.DXA },
        columnWidths: [5040, 5040],
        borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder },
        rows: [
          new TableRow({
            children: [
              new TableCell({ borders: noBorders(), width: { size: 5040, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Software Engineer", bold: true, size: 22, color: darkText, font: "Calibri" })] })] }),
              new TableCell({ borders: noBorders(), width: { size: 5040, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Aug 2025 - Present", size: 21, color: mutedText, font: "Calibri" })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: noBorders(), width: { size: 5040, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "ICA (Impetus Consulting Associates) Pvt. Ltd.", italic: true, size: 21, color: mutedText, font: "Calibri" })] })] }),
              new TableCell({ borders: noBorders(), width: { size: 5040, type: WidthType.DXA }, children: [new Paragraph({ children: [] })] }),
            ]
          }),
        ]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "Building scalable healthcare and AI-driven backend applications. Developing a multi-tenant Patient Management System with Gemini AI pipelines, secure data handling and role-based access.", size: 21, color: darkText, font: "Calibri" })]
      }),

      new Table({
        width: { size: 10080, type: WidthType.DXA },
        columnWidths: [5040, 5040],
        borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder },
        rows: [
          new TableRow({
            children: [
              new TableCell({ borders: noBorders(), width: { size: 5040, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "Backend Developer", bold: true, size: 22, color: darkText, font: "Calibri" })] })] }),
              new TableCell({ borders: noBorders(), width: { size: 5040, type: WidthType.DXA }, children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Mar 2025 - Aug 2025", size: 21, color: mutedText, font: "Calibri" })] })] }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ borders: noBorders(), width: { size: 5040, type: WidthType.DXA }, children: [new Paragraph({ children: [new TextRun({ text: "PhysioPlus Healthcare Pvt. Ltd.", italic: true, size: 21, color: mutedText, font: "Calibri" })] })] }),
              new TableCell({ borders: noBorders(), width: { size: 5040, type: WidthType.DXA }, children: [new Paragraph({ children: [] })] }),
            ]
          }),
        ]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [new TextRun({ text: "Built REST APIs for healthcare workflows, designed a location-based physiotherapist recommendation engine using the Haversine formula and improved real-time appointment notifications.", size: 21, color: darkText, font: "Calibri" })]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "KEY PROJECTS" })] }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Auto Call Auditor (ACA)", bold: true, size: 21, color: darkText, font: "Calibri" }),
          new TextRun({ text: " \u2014 AI-powered call analysis platform processing customer-agent recordings with Whisper + Gemini AI to generate KPI-based performance insights.", size: 21, color: darkText, font: "Calibri" })
        ]
      }),
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Patient Management System", bold: true, size: 21, color: darkText, font: "Calibri" }),
          new TextRun({ text: " \u2014 Multi-tenant PMS with Gemini AI intake analysis, Qdrant semantic record search and Redis-cached AI summaries for clinics.", size: 21, color: darkText, font: "Calibri" })
        ]
      }),
      new Paragraph({
        spacing: { after: 200 },
        children: [
          new TextRun({ text: "Location-Based Recommendation Engine", bold: true, size: 21, color: darkText, font: "Calibri" }),
          new TextRun({ text: " \u2014 Secure RBAC admin engine with spatial routing using Haversine matching to connect patients with specialized clinicians in real time.", size: 21, color: darkText, font: "Calibri" })
        ]
      }),

      new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text: "TECHNICAL SKILLS" })] }),
      new Table({
        width: { size: 10080, type: WidthType.DXA },
        columnWidths: [3360, 3360, 3360],
        borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder },
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: noBorders(), width: { size: 3360, type: WidthType.DXA }, children: [
                  new Paragraph({ children: [new TextRun({ text: "Languages & Frameworks", bold: true, size: 21, color: accentColor, font: "Calibri" })] }),
                  new Paragraph({ children: [new TextRun({ text: "Node.js, Express.js, JavaScript ES6+, React.js, Python (Flask), Java", size: 20, color: darkText, font: "Calibri" })] }),
                ]
              }),
              new TableCell({
                borders: noBorders(), width: { size: 3360, type: WidthType.DXA }, children: [
                  new Paragraph({ children: [new TextRun({ text: "AI & NLP", bold: true, size: 21, color: accentColor, font: "Calibri" })] }),
                  new Paragraph({ children: [new TextRun({ text: "Generative AI, OpenAI GPT, Whisper, Gemini AI, Prompt Engineering", size: 20, color: darkText, font: "Calibri" })] }),
                ]
              }),
              new TableCell({
                borders: noBorders(), width: { size: 3360, type: WidthType.DXA }, children: [
                  new Paragraph({ children: [new TextRun({ text: "Databases & DevOps", bold: true, size: 21, color: accentColor, font: "Calibri" })] }),
                  new Paragraph({ children: [new TextRun({ text: "MongoDB, MySQL, Qdrant, Docker, CI/CD, AWS, GCP", size: 20, color: darkText, font: "Calibri" })] }),
                ]
              }),
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                borders: noBorders(), width: { size: 3360, type: WidthType.DXA }, children: [
                  new Paragraph({ children: [new TextRun({ text: "Architecture & Infra", bold: true, size: 21, color: accentColor, font: "Calibri" })] }),
                  new Paragraph({ children: [new TextRun({ text: "Multi-tenant Systems, REST APIs, RBAC, Microservices, RabbitMQ, Redis", size: 20, color: darkText, font: "Calibri" })] }),
                ]
              }),
              new TableCell({ borders: noBorders(), width: { size: 3360, type: WidthType.DXA }, children: [] }),
              new TableCell({ borders: noBorders(), width: { size: 3360, type: WidthType.DXA }, children: [] }),
            ]
          }),
        ]
      }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync('/mnt/documents/Vishal_Saini_Resume.docx', buffer);
  console.log('Resume generated successfully!');
});
