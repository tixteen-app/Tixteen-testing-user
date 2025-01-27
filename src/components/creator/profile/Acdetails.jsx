
import React, { useState, useEffect } from 'react';
import BackHEader from '../../headers/backeHeader';
import { Link, useNavigate } from 'react-router-dom';
import { makeApi } from '../../../api/callApi.tsx'; 
import axios from 'axios'; 
import { ToastContainer, toast } from 'react-toastify';
import MainLoader from '../../../utils/loader.jsx';


function Acdetails({ userDatas }) {
    const navigate = useNavigate();

    const [age, setAge] = useState('');
    const [date, setDate] = useState(userDatas.dob);
    const [industry, setIndustry] = useState(userDatas.industry);
    const [username, setUsername] = useState();
    const [followersCount, setFollowersCount] = useState("");
    const [instadata,setInstadata]= useState([]);
    const [loading, setLoading] = useState(false);
    const [validInstagram, setValidInstagram] = useState(true);

    useEffect(() => {
        if (userDatas.dob) {
            const calculateAge = (dob) => {
                const birthDate = new Date(dob);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDifference = today.getMonth() - birthDate.getMonth();
                if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            };
            setAge(calculateAge(userDatas.dob));
        }
    }, [userDatas]);

    const fetchFacebookFollowers = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://graph.facebook.com/17841401994416697?fields=business_discovery.username(${username}){followers_count}&access_token=EAAHHE4tDdh0BOwVBvGoCFLmoTyF8EryeXnI1wxHxiwHAkVwJiV5SQCfwbNypvaQqE74rvdCKwmeU5gYiVbjUbdh8dBWtjz7oS3Tc0yEIerUBYfYTnbzWWQdmRtF2uwcfbe1VlzJCsZB82dwCLqDm2xaNuC7ZBzojZBgeF1CuDHvlDsL60N8lKDW`);
            const followersCount = response.data.business_discovery.followers_count;
            // const response = await axios.get(`https://backend.mixerno.space/instagram/test/${username}`);
            // const followersCount = response.data.user.followerCount;

            
            if (followersCount < 500) {
                toast.error('Instagram followers must be at least 500 to proceed.');
                setValidInstagram(false);
            }else{
                setFollowersCount(followersCount);
                const dataToSend = {
                    link: `https://www.instagram.com/${username}`,
                    follower :followersCount
                };
        
                try {
                    await makeApi('/api/update-my-social-media', 'PUT', dataToSend);
                    toast.success('Social media details updated successfully.');
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        } catch (error) {
            console.error('Error fetching followers:', error);
            toast.error('Invalid Instagram username');

            toast.error(error)
            setValidInstagram(false);

        } finally {
            setLoading(false);
        }
    };

    const handleSaveUserDetails = async () => {
        const dataToSend = {
            dob: date,
            industry,
            username
        }; 

        try {
            await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', dataToSend);
            navigate('/verified/user/my-details');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSaveSocialMedia = async () => {
        await fetchFacebookFollowers()
        // if (!validInstagram) {
        //     toast.error('Please ensure Instagram follower count is valid.');
        //     return;
        // }
    };


    const socialMedia = async () => {
        try {
            const response = await makeApi('/api/get-my-social-media', "GET");
            const fullLink = response.data.data[0].link;
            const username = fullLink.split('/').pop();
            setUsername(username);
            // setFollowersCount(response.data.data[0].follower);
            setInstadata(response.data.data[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        socialMedia();
    }, []);



    return (
        <div>
            {loading && <div className='loaderbgcolor' ><MainLoader /></div>}
            <ToastContainer position='top-center' />
            <div className='main_personal_info_div' style={{ height: "100vh" }}>
                <div>
                    <Link to={"/verified/user/my-details"} style={{ textDecoration: "none", color: "black" }}>
                        <BackHEader title={"Account Details"} />
                    </Link>
                </div>
                <div className='main_influencer_data'>
                    <div>
                        <div>Enter Your Age</div>
                        <div className='mt-1'>
                            <input
                                type="text"
                                value={age}
                                readOnly
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>

                        {/* Calendar */}
                        <div className='mt-3'>
                            <input
                                type="date"
                                // value={date}
                                value={date || userDatas.dob}
                                onChange={(e) => setDate(e.target.value)}
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* <div>Industry</div>
                    <div className='mt-1'>
                        <input
                            type="text"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            className='influncer_item_second_input w-100 p-2'
                            style={{ border: "1px solid var(--light-gray-color)" }}
                        />
                    </div> */}
                </div>

                <div className='addhar_card_heading'>
                    Primary Account
                </div>
                <div className='main_influencer_data'>
                    <div>
                        <div className='mt-1 d-flex primary_account_div'>
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                            </div>
                            <div className='w-100'>
                             
                                <input
                                    type="text"
                                    style={{ border: "none", background: "transparent" }}
                                    className='simple_input_filed'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>{instadata.follower}</div>
                        </div>
                        <small>Add Username Only</small>
                    </div>
                </div>
                <div className='w-100 text-center'>
                    <div className='btn btn-warning w-75 mt-4' onClick={handleSaveUserDetails}>
                        Update Age
                    </div>
                    <div className='btn btn-success w-75 mt-4' onClick={handleSaveSocialMedia}>
                        Update Social Media
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Acdetails;
