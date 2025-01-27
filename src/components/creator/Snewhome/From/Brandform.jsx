import React from 'react'
import "../../../styles/creator/Snewhome/From/Brandform.css"
function Brandform() {
    return (
        <div className='main_brandform_div' >
            {/* Top */}
            <div className='main_brandform_div_top' >
                <div className='main_brandform_div_top_title' >Let’s make your brand the next big thing!</div>
                <div className='main_brandform_div_top_description'>Ready to amplify your brand's reach? Connect with us today! Whether you’re looking to collaborate with top influencers or explore creative campaign strategies, we’re here to help.</div>
            </div>
            {/* bottom form */}
            <div className='main_brandform_div_bottom' >
                <div className='main_brandform_div_bottom_input_div' >
                    <input type="text" placeholder='Full Name' className='main_brandform_div_bottom_input' />
                </div>
                <div className='main_brandform_div_bottom_input_div' >
                    <input type="text" placeholder='Company Email Address' className='main_brandform_div_bottom_input' />
                </div>
                <div className='main_brandform_div_bottom_input_div' >
                    <input type="text" placeholder='Contact Number' className='main_brandform_div_bottom_input' />
                </div>
                <div className='main_brandform_div_bottom_input_div' >
                    <input type="text" placeholder='Industry Type' className='main_brandform_div_bottom_input' />
                </div>
                <div className='main_brandform_div_bottom_input_div' >
                    <button className='main_brandform_div_bottom_input_button' >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Brandform