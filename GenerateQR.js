import React, { useState }from 'react';
import QRCode from 'qrcode.react';
function QRApp() {
 
    const [inputText, setInputText] = useState('');
    const [qrCodeText, setQRCodeText] = useState('');
   
    // generate QR code
    const generateQRCode = () => {
      setQRCodeText(inputText);
    }
   
    // download QR code
    const downloadQRCode = () => {
      const qrCodeURL = document.getElementById('qrCodeEl')
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      console.log(qrCodeURL)
      let aEl = document.createElement("a");
      aEl.href = qrCodeURL;
      aEl.download = "QR_Code.png";
      document.body.appendChild(aEl);
      aEl.click();
      document.body.removeChild(aEl);
    }
   
    return (
      <div className="App">
        <h3>Generate and download a QR code image</h3>
        <div className="qr-input">
        // Creating the data

          <input
            type="button"
            value="Generate"
            onClick={generateQRCode}
          />
        </div>
        <QRCode
          id="qrCodeEl"
          size={150}
          value="HelloTest"
        />
        <br />
        <input
          type="button"
          className="download-btn"
          value="Download"
          onClick={downloadQRCode}
        />
      </div>
    );
  }
   
  export default QRApp;