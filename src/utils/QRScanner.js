// import React, { useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const QRScanner = ({ onScanSuccess }) => {
//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       "reader",
//       {
//         fps: 10,
//         qrbox: { width: 250, height: 250 }
//       },
//       false
//     );

//     scanner.render(
//       (decodedText) => {
//         console.log("Scanned:", decodedText);
//         onScanSuccess(decodedText);
//         scanner.clear(); // stop after scan
//       },
//       (error) => {
//         // ignore scan errors
//       }
//     );

//     return () => {
//       scanner.clear().catch(() => {});
//     };
//   }, []);

//   return <div id="reader" style={{ width: "300px" }} />;
// };

// export default QRScanner;

// QRScanner.jsx
import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QRScanner = ({ onScan, active }) => {
  const scannerRef = useRef(null);
  const isRunningRef = useRef(false);

  // ✅ UNIQUE ID per render
  const readerId = useRef(`reader-${Date.now()}`);

  useEffect(() => {
    if (!active) return;

    const scanner = new Html5Qrcode(readerId.current);
    scannerRef.current = scanner;

    scanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      async (decodedText) => {
        if (!isRunningRef.current) return;

        isRunningRef.current = false;

        onScan(decodedText);

        try {
          await scanner.stop();
        } catch (e) {
          console.log("Already stopped");
        }
      }
    );

    isRunningRef.current = true;

    return () => {
      if (isRunningRef.current && scannerRef.current) {
        scannerRef.current
          .stop()
          .catch(() => console.log("Cleanup stop skipped"));
        isRunningRef.current = false;
      }
    };
  }, [active]);

  // ✅ USE SAME ID HERE
  return <div id={readerId.current} style={{ width: "100%" }} />;
};

export default QRScanner;