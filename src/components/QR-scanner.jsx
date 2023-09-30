import { Html5QrcodeScanner } from "html5-qrcode";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

const QRScanner = ({setData}) => {

      function onScanSuccess(decodedText, decodedResult) {
        setData(decodedText)
      }
      
      function onScanFailure(error) {
        console.warn(`Code scan error = ${error}`);
      }
      useEffect(()=>{
        let html5QrcodeScanner = new Html5QrcodeScanner(
            "reader",
            { fps: 10,  },
             false);
          html5QrcodeScanner.render(onScanSuccess, onScanFailure);
      },[])
      
  return <div id="reader" ></div>;
};
export default QRScanner;
