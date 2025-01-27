import React from 'react'
import "../../styles/creator/Snewhome/Topbanner.css"
import Banner1 from "../../../assets/Newhome/Banner1.png";
import TixteenIcon from "../../../assets/tixteen_icon.png"

function Topbanner() {
  return (
    <>
    <div className='new_home_top_banner'>
        <img src={Banner1} alt="" className='new_home_top_banner_img' />
      <div className='tixteen_icon_new_div' >
      <img src={TixteenIcon} alt="" className='tixteen_icon_new_S' />
      </div>
      <div className='tixteen_join_infu_button_div' >
      <button className='tixteen_join_infu_button' >Join as Influencer</button>
      </div>
    </div>
    </>
  )
}

export default Topbanner