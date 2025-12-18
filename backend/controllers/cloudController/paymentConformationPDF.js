import fs from "fs";
import path from "path";

export const storeConfortmationPDF = async (pdfBuffer, fileName) => {
  try {
    if (!pdfBuffer) {
      throw new Error("PDF buffer is required");
    }

    const folderPath = path.join(process.cwd(), "uploads", "confirmation-pdfs");

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, `${fileName}.pdf`);

    fs.writeFileSync(filePath, pdfBuffer);

    return filePath;

  } catch (error) {
    console.error("PDF Store Error:", error);
    throw error;
  }
};
