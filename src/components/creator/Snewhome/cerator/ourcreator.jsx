import React from 'react'
import "../../../styles/creator/Snewhome/cerator/ourcreator.css"
import first from "../../../../assets/Newhome/creator/1.png"
import second from "../../../../assets/Newhome/creator/2.png"
import third from "../../../../assets/Newhome/creator/3.png"
import fourth from "../../../../assets/Newhome/creator/4.png"
import fifth from "../../../../assets/Newhome/creator/5.png"
import six from "../../../../assets/Newhome/creator/6.png"
import seven from "../../../../assets/Newhome/creator/7.png"
import eight from "../../../../assets/Newhome/creator/8.png"



function Ourcreator() {
    return (
        <>
            <div className='ourcreator_main_div' >
                <div className='ourcreator_left_div' >

                    <Leftourcraor />
                </div>
                <div className='ourcreator_right_div' >
                    <Rightourcraor />
                </div>
            </div>
        </>
    )
}

export default Ourcreator

function Leftourcraor() {
    return (
        <>
            <div className='leftourcraor_main_div' >
                <div className='leftourcraor_top_heading_section' >
                    <div className='leftourcraor_top_heading' >Our professional Creators</div>
                    <div className='leftourcraor_top_description' >Collaborate with creators who can truly make a difference for your brand.</div>
                </div>
                <div className='leftourcraor_bottom_section' >
                    <div className='leftourcraor_bottom_div_top_section' >
                        <div className='leftourcraor_bottom_div' >
                            <div className='leftourcraor_bottom_div_number' >150+</div>
                            <div className='leftourcraor_bottom_div_title' >campaigns</div>
                        </div>
                        <div className='leftourcraor_bottom_div' >
                            <div className='leftourcraor_bottom_div_number' >10,000+</div>
                            <div className='leftourcraor_bottom_div_title' > Influencers </div>
                        </div>
                    </div>
                    <div className='leftourcraor_bottom_div_top_section' >

                        <div className='leftourcraor_bottom_div' >
                            <div className='leftourcraor_bottom_div_number' >100 million+</div>
                            <div className='leftourcraor_bottom_div_title' > views </div>
                        </div>
                    </div>
                </div>
                <div className='leftourcraor_button_section' >
                    <div className='leftourcraor_button' >GET IN TOUCH</div>
                </div>
            </div>
        </>
    )
}

function Rightourcraor() {
    return (
        <>
            <div className='rightourcraor_main_div' >
                {/* left */}
                <div className='rightourcraor_left_div' >
                    <div className='rightourcraor_left_div_image' >
                        <img src={first} alt="Influencer plateform" className='influencerplatform_first_img' />
                    </div>
                    <div className='rightourcraor_left_div_image' >
                        <img src={second} alt="Influencer plateform" className='influencerplatform_first_img' />
                    </div>
                </div>
                {/* center */}
                <div className='rightourcraor_left_div' >
                    <div className='rightourcraor_left_div_image' >
                        <img src={third} alt="Influencer plateform" className='influencerplatform_first_img' />
                    </div>
                    <div className='rightourcraor_left_div_image' >
                        <img src={fourth} alt="Influencer plateform" className='influencerplatform_first_img' />
                    </div>

                    <div className='rightourcraor_left_div_image' >
                        <img src={fifth} alt="Influencer plateform" className='influencerplatform_first_img' />
                    </div>
                </div>
                {/* right */}
                <div className='rightourcraor_left_div' >
                    <div className='rightourcraor_left_div_image' >
                        <img src={six} alt="Influencer plateform" className='influencerplatform_first_img' />
                    </div>
                    <div className='rightourcraor_left_div_image' >
                        <img src={seven} alt="Influencer plateform" className='influencerplatform_first_img' />
                    </div>
                    <div className='rightourcraor_left_div_image' >
                        <img src={eight} alt="Influencer plateform" className='influencerplatform_first_img' />
                    </div>
                </div>
            </div>
        </>
    )
}