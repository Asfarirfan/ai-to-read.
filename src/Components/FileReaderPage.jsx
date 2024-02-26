import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const FileReaderPage = () => {
  const [fileContent, setFileContent] = useState(null);
  const [pdfText, setPdfText] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = async (e) => {
        const pdfData = e.target.result;
        setFileContent(pdfData); // Set file content to be rendered
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
        const tempText = [];
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item) => item.str).join(" ");
          tempText.push(pageText);
        }
        setPdfText(tempText.join(" "));
        setNumPages(pdf.numPages);
      };
      fileReader.readAsArrayBuffer(file);
    }
  };

  const nextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, numPages));
  };

  const prevPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  const handleSpeech = () => {
    if ("speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(pdfText);

      synth.cancel(); // Cancel any ongoing speech
      synth.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in your browser.");
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="fullscreen-container">
      <div className="fullscreen-header">
        <h2>Upload and View PDF</h2>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button onClick={handleSpeech} disabled={!pdfText}>
          Read Aloud
        </button>
      </div>
      {fileContent && (
        <div className="fullscreen-pdf">
          <Document file={fileContent} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <div className="pagination">
            <button onClick={prevPage} disabled={pageNumber === 1}>
              Previous
            </button>
            <p>
              Page {pageNumber} of {numPages}
            </p>
            <button onClick={nextPage} disabled={pageNumber === numPages}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileReaderPage;
