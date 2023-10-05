import { useRef } from "react";
import QRGenerator from "../../components/QR-Generator";
import { toPng } from "html-to-image";
import { useParams } from "react-router";

const AdminMyQR = () => {
    const {appId}=useParams()
    const elementRef = useRef(null);


  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `App_${appId}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div ref={elementRef} className="sm:max-w-md m-auto flex items-center bg-black rounded-xl px-5">
        <h1 className="text-2xl py-5 text-white ">Scan to Shop with shop Name</h1>
        <QRGenerator value={"Working fine"} />
      </div>
      <div className="max-w-md m-auto">
        <button onClick={htmlToImageConvert} className="bg-green-600 py-2.5 px-2 rounded-md text-white font-bold mt-10 w-full"> Print </button>
      </div>
    </div>
  );
};
export default AdminMyQR;
