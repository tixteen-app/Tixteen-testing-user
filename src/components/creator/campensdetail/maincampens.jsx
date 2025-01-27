import React, { useEffect, useState } from 'react'
import CampenBanner from './campenBanner'
import CampeneRequiement from './campeneRequiement'
import CampenAcrrdien from './campenAcrrdien'
import DeteilsHeader from '../../headers/deteilsHeader'
import { useParams } from 'react-router-dom'
import { makeApi } from '../../../api/callApi.tsx'
function Maincampens() {
const { id } = useParams();
  const  [campaignData, setCampaignData] = useState(null);
const [campaignId, setCampaignId] = useState("74202312258");
  useEffect(() => {
    const fetchData = async () => {
      const response = await makeApi(`/V1/campaigns/${id}`, "GET");
      await setCampaignData(response?.data?.data);
      await setCampaignId(response?.data?.data?.campaign_no);
    };
    fetchData();
  }, [id]);

  return (
    <div className='main_all_page_default_padding' >
      <DeteilsHeader BackPath={'/verified/creator/home'} title={campaignData?.campaign_name} />
      <CampenBanner CampenBanner={campaignData?.banner} />
      <CampeneRequiement campaignID={campaignId}  /> 
      <CampenAcrrdien campaignData={campaignData} />
    </div>
  )
}

export default Maincampens