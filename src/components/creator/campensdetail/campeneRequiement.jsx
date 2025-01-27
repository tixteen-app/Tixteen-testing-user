
import React, { useEffect, useState } from 'react';
import instaIcon from "../../../assets/creator/campens/campeninsta.png";
import FacebookIcon from "../../../assets/creator/campens/campenfacebbokk.png";
import YoutubeIcon from "../../../assets/creator/campens/campenyoutube.png";
import "../../../styles/creator/campainDetsils/campeneRequiement.css";
import { makeApi } from '../../../api/callApi.tsx';

const platformDetails = {
    I: { icon: instaIcon, label: 'Followers', required: '5K' },
    F: { icon: FacebookIcon, label: 'Likes', required: '20K' },
    Y: { icon: YoutubeIcon, label: 'Likes', required: '20K' }
};

function CampeneRequiement({ campaignID }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await makeApi(`/V1/required-follower/campaign/${campaignID}`, "GET");
            await setData(response?.data?.data);
        };
        fetchData();
    }, [campaignID]);

    return (
        <div className='campain_requement_main_div'>
            <div className='bold_text main_requiemnt_text'>Requirement</div>
            <div className='campain_requement_social_media'>
                {data && data?.length > 0 && data[0]?.platforms?.map((platform) => {
                    const details = platformDetails[platform];
                    return (
                        <div key={platform} className='campain_requement_social_media_items'>
                            <div>
                                <img src={details?.icon} alt={platform} className='campain_requement_Icon' />
                            </div>
                            <div>
                                <div className='campain_requiemnt_number'>{details?.required}</div>
                                <div className='campain_requement_social_media_items_items'>{details?.label}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CampeneRequiement;
