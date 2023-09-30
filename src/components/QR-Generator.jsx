import React from "react";
import QRCode from "react-qr-code";

const QRGenerator=({value})=>{

    return (
        <>
            <QRCode value={value} />
        </>
    )
}
export default QRGenerator;