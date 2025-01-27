import React from 'react'
import "../../../styles/creator/Snewhome/Preferred.css"

function Preferred() {
  return (
    <div>
      <PreferredText />
    </div>
  )
}

export default Preferred


function PreferredText() {
  return (
    <div className='perferred_text_main_parent_div'>
      <div className='perferred_text_main_div' >
        <div className='perferred_text_title' >Preferred by Industry Leaders</div>
        <div className='perferred_text_description' >Grown over 90 brands from scratch to reach 10 lakhs in monthly revenue</div>
        <div className='perferred_text_description'> <b style={{ fontWeight: 'bold'}} > &</b> Assisted more than 70 brands in boosting sales through growth hacking and influencer marketing.</div>
      </div>
    </div>
  )
}