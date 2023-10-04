import { Link, NavLink, Outlet } from "react-router-dom";
import QRScanner from "../components/QR-scanner";
import { useEffect, useState } from "react";
import QRGenerator from "../components/QR-Generator";
import PageNotFound from "./Error";

const Home = () => {
  const [QrScanResult, setQRScanResult] = useState("");
  const [isValidQR, setIsValidQR] = useState(true);

  useEffect(()=>{

  },[])  

  return (
    <>
        <button onClick={()=>setIsValidQR(!isValidQR)} >validToggel</button>

      <div className="mt-20 m-auto max-w-sm ">
        <QRScanner setData={setQRScanResult} />
       </div>

       {isValidQR &&
            <div className="grid justify-items-stretch mt-10">
                <NavLink
                    to={"/ns/app"}
                    className="justify-self-center rounded-full sm:w-96 text-center bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Open <span aria-hidden="true">&rarr;</span>
                </NavLink>
            </div>
        }

        <PageNotFound />

    </>
  );
};
export default Home;
