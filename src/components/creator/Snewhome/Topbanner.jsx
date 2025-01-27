import React from 'react'
import "../../styles/creator/Snewhome/Topbanner.css"
import Banner1 from "../../../assets/Newhome/Banner1.png";

function Topbanner() {
  return (
    <>
    <div className='new_home_top_banner'>
        <img src={Banner1} alt="" className='new_home_top_banner_img' />
    </div>
    </>
  )
}

export default Topbanner