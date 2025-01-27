import React from 'react'
import first from "../../../../assets/Newhome/13 (1).png"
import second from "../../../../assets/Newhome/14 (1).png"
import third from "../../../../assets/Newhome/15 (1).png"
import fourth from "../../../../assets/Newhome/16 (1).png"
import "../../../styles/creator/Snewhome/offer/Mainoffer.css"
function Mainoffer() {
    const data = [
        {
            title: "Social Media Management:",
            description: "Tixteen, a top social media influencer agency, specializes in creating tailored social media strategies that truly connect with your audience. We take charge of your brand’s online presence to boost visibility, engagement, and growth. With our knowledge in influencer partnerships, we guarantee significant impact across all platforms.",
            image:second
        },
        {
            title: "Instagram & YouTube Influencer Campaign:",
            description: "Tixteen focuses on running effective influencer campaigns on Instagram and YouTube that enhance brand visibility and engagement. Our team meticulously chooses leading influencers that resonate with your brand to produce genuine and captivating content. From planning to implementation, we guarantee that your campaign delivers tangible results and engages your desired audience.",
            image:  first
        },
        {
            title: "Fb, Instagram, Google Ads:",
            description: "Tixteen, a leading influencer marketing agency, utilizes Facebook, Instagram, and Google Ads to enhance your brand’s reach and visibility. Our focused advertising strategies guarantee that your campaigns engage the right audience, boosting both engagement and conversions. By merging influencer marketing with effective ad placements, we optimize your brand's presence across various platforms.",
            image: third
        },
        {
            title: "Product Review Campaign:",
            description: "Tixteen specializes in crafting powerful product review campaigns that foster trust and credibility for your brand. We partner with leading influencers to deliver genuine, in-depth reviews that connect with your target audience. Our strategic method guarantees that your product gets the visibility and acknowledgment it truly deserves.",
            image: fourth
        }
    ]
    return (
        <>
            <div className='main_offer_parent_div' >
                <div className='main_offer_parent_div_title' >We offer expert services in influencer marketing</div>
                <div className='main_offer_parent_div_child_div' >
                    {
                        data.map((item) => {
                            return (
                                <div>
                                    <Offercard title={item.title} description={item.description} image={item.image} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Mainoffer

function Offercard({ title, description, image }) {
    return (
        <div className="offer_card">
            <div className='offer_card_image_div' >
            <img src={image} alt="" className='offer_card_image' />
            </div>
            <div className='offer_card_details_div' >
            <div className="offer_card_title">{title}</div>
            <div className="offer_card_description">{description}</div>
            </div>
        </div>
    )
}