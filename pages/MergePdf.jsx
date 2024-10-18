import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

const MergePdf = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFileChange1 = (e) => {
    setFile1(e.target.files[0]);
  };

  const handleFileChange2 = (e) => {
    setFile2(e.target.files[0]);
  };

  const mergePdfs = async () => {
    if (file1 && file2) {
      try {
        // Create a new PDFDocument
        const pdfDoc = await PDFDocument.create();

        // Load the two PDFs
        const pdf1Bytes = await file1.arrayBuffer();
        const pdf2Bytes = await file2.arrayBuffer();

        const pdf1 = await PDFDocument.load(pdf1Bytes);
        const pdf2 = await PDFDocument.load(pdf2Bytes);

        // Copy pages from the first PDF
        const pages1 = await pdfDoc.copyPages(pdf1, pdf1.getPageIndices());
        pages1.forEach((page) => pdfDoc.addPage(page));

        // Copy pages from the second PDF
        const pages2 = await pdfDoc.copyPages(pdf2, pdf2.getPageIndices());
        pages2.forEach((page) => pdfDoc.addPage(page));

        // Save the merged PDF
        const mergedPdfBytes = await pdfDoc.save();

        // Create a Blob from the merged PDF and trigger download
        const blob = new Blob([mergedPdfBytes], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "merged.pdf";
        link.click();

      } catch (error) {
        console.error("Error merging PDFs:", error);
      }
    } else {
      alert("Please upload both PDF files before merging.");
    }
  };

  return (
    <div className="w-full h-screen justify-center flex flex-col">
      <div className="flex flex-col justify-center px-5 mt-10">
        {/* First PDF input */}
        <div
          className="mb-4 md:w-7/12 self-center md:py-12 border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-100 transition duration-150 w-full"
          onClick={() => document.getElementById("file-input1").click()}
        >
          <p className="text-gray-600 mb-2">
            Drop your first PDF here or click to upload
          </p>
          {file1 ? (
            <p className="text-green-600">File: {file1.name}</p>
          ) : (
            <p className="text-gray-400">No file selected</p>
          )}
          <input
            type="file"
            id="file-input1"
            accept="application/pdf"
            onChange={handleFileChange1}
            required
            className="hidden"
          />
        </div>

        {/* Second PDF input */}
        <div
          className="mb-4 md:w-7/12 self-center md:py-12 border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-100 transition duration-150 w-full"
          onClick={() => document.getElementById("file-input2").click()}
        >
          <p className="text-gray-600 mb-2">
            Drop your second PDF here or click to upload
          </p>
          {file2 ? (
            <p className="text-green-600">File: {file2.name}</p>
          ) : (
            <p className="text-gray-400">No file selected</p>
          )}
          <input
            type="file"
            id="file-input2"
            accept="application/pdf"
            onChange={handleFileChange2}
            required
            className="hidden"
          />
        </div>

        {/* Merge button */}
        <div className="flex justify-center w-full">
          <button
            className="px-7 py-3 bg-blue-500 text-white rounded-lg"
            onClick={mergePdfs}
          >
            Merge
          </button>
        </div>
      </div>
    </div>
  );
};

export default MergePdf;
