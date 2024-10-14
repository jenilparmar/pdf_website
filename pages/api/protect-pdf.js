import { PDFDocument } from 'pdf-lib';
import formidable from 'formidable';
import fs from 'fs/promises';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle file uploads
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), '/public/uploads'), // Directory to store uploaded files
    keepExtensions: true,  // Keep the file extension
    maxFileSize: 50 * 1024 * 1024, // 50MB file limit
  });

  try {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form data:', err);
        return res.status(500).json({ message: 'Error parsing form data' });
      }

      const { password } = fields;
      const file = files.pdfFile;

      if (!file || !password) {
        return res.status(400).json({ message: 'PDF file or password missing' });
      }

      try {
        // Read the uploaded PDF file
        const fileData = await fs.readFile(file.filepath);
        console.log('File read successfully');

        // Load the PDF with pdf-lib
        const pdfDoc = await PDFDocument.load(fileData);
        console.log('PDF loaded successfully');

        // Encrypt the PDF with the provided password
        pdfDoc.encrypt({
          ownerPassword: password,
          userPassword: password,
          permissions: {
            printing: 'highResolution',
            modifying: false,
            copying: false,
          },
        });

        // Save the encrypted PDF
        const protectedPdfBytes = await pdfDoc.save();
        console.log('PDF encrypted and saved successfully');

        // Return the protected PDF as a downloadable file
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=protected.pdf');
        return res.send(Buffer.from(protectedPdfBytes));
      } catch (error) {
        console.error('Error protecting PDF:', error);
        return res.status(500).json({ message: 'Failed to protect the PDF' });
      }
    });
  } catch (error) {
    console.error('Error initializing form:', error);
    res.status(500).json({ message: 'Form initialization error' });
  }
}
