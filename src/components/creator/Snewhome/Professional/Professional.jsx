import React from 'react'
import "../../../styles/creator/Snewhome/Professional/Professional.css"
function Professional() {
    return (
        <>
            <div className='main_professional_parent_div' >
                <div className='main_professional_top_div' >
                    <div className='main_professional_top_div_title'>Our Professional Marketing Team</div>
                    <div className='main_professional_top_div_description' >Now you can relax without the hassle of coordinating between your social media agency and your influencer marketing agency.</div>
                </div>
                {/* bottom */}
                <div className='main_professional_bottom_div' >
                    <div className='main_professional_bottom_div_cart'>
                        <div className='main_professional_bottom_div_cart_number'>12+</div>
                        <div className='main_professional_bottom_div_cart_title' >Influencer managers</div>
                    </div>
                    <div className='main_professional_bottom_div_cart'>
                        <div className='main_professional_bottom_div_cart_number'>6+</div>
                        <div className='main_professional_bottom_div_cart_title'>Campaign strategist</div>
                    </div>
                    <div className='main_professional_bottom_div_cart'>
                        <div className='main_professional_bottom_div_cart_number'>5+</div>
                        <div className='main_professional_bottom_div_cart_title'>Content writters</div>
                    </div>
                    <div className='main_professional_bottom_div_cart'>
                        <div className='main_professional_bottom_div_cart_number'>4+</div>
                        <div className='main_professional_bottom_div_cart_title'>Graphic designers</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Professional