import React from 'react'
import banner1 from "../../../assets/creator/banner1.png";
import Bannerfist from "../../../assets/creator/campens/white mony image.jpg";


function CampenBanner(CampenBanner) {
  return (
    <div>
      {CampenBanner.CampenBanner ? (
        <img src={CampenBanner.CampenBanner} alt="" style={{width:"100%" , borderRadius:"10px", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.25)" }} />
      ):
      <img src={Bannerfist} alt="" style={{width:"100%" , borderRadius:"10px", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.25)" }} />
      }
    </div>
  )
}

export default CampenBanner 