import React from 'react'
import DasboardImg from "../../../../assets/Newhome/sadsadsad 1.png"
import "../../../styles/creator/Snewhome/Ads/Mainads.css"
function Mainads() {
    return (
        <>
            <div className='Mainads_main_div' >
                {/* top */}
                <div className='Mainads_top_div' >
                    <div className='Mainads_top_div_left' >
                        {/* titel */}
                        <div className='Mainads_top_div_titel' >Ditch Outdated Ads. Step Into the Future.</div>
                        <div className='Mainads_top_div_descption_text' >Let us craft high-performing ads that deliver results <br/> beyond expectations.</div>
                    </div>
                </div>
                {/* bottom */}
                <div className='Mainads_bottom_div' >
                    <div className='Mainads_bottom_div_left' >
                        <div className='mainads_bottom_text_div' > <span className='mainads_span' > 60%</span> Boost in Conversions</div>
                        <div className='mainads_bottom_text_div'> <span className='mainads_span' > 50%</span>  Increase in Engagement</div>
                        <div className='mainads_bottom_text_div'> <span className='mainads_span' > 7X</span>  Return on Ad Spend (ROAS)</div>
                        <div className='mainads_bottom_text_div'> <span className='mainads_span' > 35%</span>  Reduction in Cost Per Acquisition (CPA)</div>
                    </div>
                    <div className='Mainads_bottom_div_right' >
                        <img src={DasboardImg} alt="" className='daboard_image' />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Mainads