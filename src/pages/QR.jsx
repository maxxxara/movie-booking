import React from 'react'
import QRCode from 'react-qr-code'

const QR = () => {
  let token = window.location.pathname.split("/").pop()
  return (
    <div className='container'>
      <div className=' flex justify-center items-center'>
        <div className='w-1/4 md:w-2/4 sm:w-full'>
          <QRCode value={'localhost:3000/ticket/' + token} 
          size={56}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          viewBox={`0 0 256 256`}
          />
        </div>
      </div>
    </div>
  )
}

export default QR