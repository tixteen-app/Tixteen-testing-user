import React, { useState, useEffect } from 'react';
import "../../../styles/creator/Account/PersonalInfo.css";
import BackHEader from '../../headers/backeHeader';
import { Link, useNavigate } from 'react-router-dom';
import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';
import { makeApi } from '../../../api/callApi.tsx';
import { ToastContainer, toast } from 'react-toastify';

function PersonalInfo({ userDatas }) {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [language, setLanguage] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [industry, setIndustry] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const [frontAadhar, setFrontAadhar] = useState(null);
    const [backAadhar, setBackAadhar] = useState(null);
    const [panCard, setPanCard] = useState();
    const [frontOther, setFrontOther] = useState(null);
    const [backOther, setBackOther] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [IndustryList, setIndustryList] = useState([]);
    const [filterIndustry, setFilterIndustry] = useState("");
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenlan, setIsOpenlan] = useState(false);
    const [userIdenetity , setUserIdentity] = useState();
    const [languages, setLanguages] = useState([]);
    const [filteredlangu, setFilterIan] = useState("");

    const toggleIanguanty = (industryName) => {
        let updatedFilterIndustry;
        const selectedLnguages = filteredlangu ? filteredlangu.split(',') : [];

        if (selectedLnguages.includes(industryName)) {
            updatedFilterIndustry = selectedLnguages.filter(name => name !== industryName).join(',');
        } else {
            updatedFilterIndustry = [...selectedLnguages, industryName].join(',');
        }
        setFilterIan(updatedFilterIndustry);
    };

    const toggleIndustry = (industryName) => {
        let updatedFilterIndustry;
        const selectedIndustries = filterIndustry ? filterIndustry.split(',') : [];

        if (selectedIndustries.includes(industryName)) {
            updatedFilterIndustry = selectedIndustries.filter(name => name !== industryName).join(',');
        } else {
            if (selectedIndustries.length >= 5) {
                toast.error('You cannot select more than 5 industries');
                return;
            }
            updatedFilterIndustry = [...selectedIndustries, industryName].join(',');
        }
        setFilterIndustry(updatedFilterIndustry);
    };

    const FetchIndustryList = async () => {
        setLoading(true);
        try {
            const res = await makeApi('/v1/get-all-industries', 'GET'); 
            const userPersonal = await makeApi('/api/get-identity', 'GET'); 
            const resLanguages = await makeApi('/v1/get-all-languages', 'GET');
            setLanguages(resLanguages.data.data);
            setUserIdentity(userPersonal?.data?.data);
            setPanNumber(userPersonal?.data?.data?.pan_no);
            setIndustryList(res.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleTogglelanguage = () => {
        setIsOpenlan(!isOpenlan);
    };

    useEffect(() => {
        FetchIndustryList();
    }, []);

    useEffect(() => {
        if (userDatas) {
            setFullName(userDatas.user_name || '');
            setGender(userDatas.gender || '');
            setDob(userDatas.dob || '');
            setLanguage(userDatas.language || '');
            setEmail(userDatas.email || '');
            setPhone(userDatas.mobile || '');
            setIndustry(userDatas.industry || '');
            setFilterIndustry(userDatas.industry || '');
            setFilterIan(userDatas.language || '');  // Set initial filtered language
        }
    }, [userDatas]);

    const handleSave = async () => {
        setIsLoading(true);
        try {
            const identityData = {
                influe_id: userDatas.id,
                adhar_front: frontAadhar ? await uploadToCloudinary(frontAadhar) : undefined,
                adhar_back: backAadhar ? await uploadToCloudinary(backAadhar) : undefined,
                pan_no: panNumber,
                pan: panCard ? await uploadToCloudinary(panCard) : undefined,
                // other_proof1: frontOther ? await uploadToCloudinary(frontOther) : undefined,
                // other_proof2: backOther ? await uploadToCloudinary(backOther) : undefined,
            };

            // Remove undefined values
            Object.keys(identityData).forEach(key => identityData[key] === undefined && delete identityData[key]);

            if (Object.keys(identityData).length > 1) { // Ensure at least influe_id and one other field is present
                const response = await makeApi('/api/create-update-identity', 'POST', identityData);
                toast.success('Identity details saved successfully');
            }

            const userDataToSend = {
                editUser: {
                    user_name: fullName,
                    gender,
                    dob,
                    language : filteredlangu ,
                    email,
                    mobile: phone,
                    industry: filterIndustry,
                }
            };

            // Make the API request to update user details
            const response = await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', userDataToSend);
            toast.success('User details updated successfully');
            navigate('/verified/user/my-details');
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to save details');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div>
                <Link to={"/verified/user/my-details"} style={{ textDecoration: "none", color: "black" }}>
                    <BackHEader title={"Personal Information"} />
                </Link>
            </div>
            <div className='main_personal_info_div' style={{ paddingBottom: "50px" }}>
                <div className='main_influencer_data'>
                    {/* Influencer ID */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Influencer ID</div>
                        <div className='influncer_item_second_div'>
                            {userDatas ? `TX${fullName.charAt(0).toUpperCase()}-${userDatas.id}` : 'Loading...'}
                        </div>

                    </div>
                    {/* Full Name */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Full Name</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Gender */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Gender</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Date of Birth */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Date of Birth</div>
                        <div className='influncer_item_second_div'>
                            {/* <input
                                type="text"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            /> */}
                            <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className='influncer_item_second_input'
        style={{ border: "1px solid var(--light-gray-color)" }}
    />
                        </div>
                    </div>
                    {/* Language */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Language</div>
                        {/* <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div> */}
                        <div className="accordion-container">
                        <div className="">
                            <div className='industy_accordion'>
                                <div className='industy_accordion-header' onClick={handleTogglelanguage}>
                                    <h6>Language</h6>
                                    <span className={`industy_accordion-icon ${isOpenlan ? 'open' : ''}`}>
                                        {isOpenlan ? '-' : '+'}
                                    </span>
                                </div>
                                {isOpenlan && (
                                    <div className='industy_filter_checkbox_parent_div'>
                                        {languages.map((industry) => (
                                            <div key={industry.language} className='d-flex align-items-center industy_dropdown_checkbox_items'>
                                                <div className='w-25'>
                                                    <input
                                                        type="checkbox"
                                                        id={industry.language}
                                                        value={industry.language}
                                                        checked={filteredlangu.split(',').includes(industry.language)}
                                                        onChange={() => toggleIanguanty(industry.language)}
                                                        style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                                    />
                                                </div>
                                                <div className='w-100'>
                                                    <label htmlFor={industry.language}>{industry.language}</label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Email */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Email</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Phone */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Phone</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    {/* Industry */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Industry</div>
                        {/* <div className='influncer_item_second_div'> */}
                        {/* </div> */}
                        <div className="accordion-container influncer_item_second_div">
                            {/* <input
                                type="text"
                                value={industry}
                                onChange={(e) => setIndustry(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                                disabled
                            /> */}
                            <div className="">
                                <div className='industy_accordion' style={{ maxWidth: "75%" }} >
                                    <div className='industy_accordion-header align-items-center' style={{ cursor: "pointer", padding: "2px", gap: "15px", width: "100%" }} onClick={handleToggle}>
                                        <div>Industry Filter</div>
                                        <div className={`industy_accordion-icon ${isOpen ? 'open' : ''}`}>
                                            {isOpen ? '-' : '+'}
                                        </div>
                                    </div>
                                    {isOpen && (
                                        <div className='industy_filter_checkbox_parent_div'>
                                            {IndustryList.map((industry) => (
                                                <div key={industry.name} className='d-flex align-items-center industy_dropdown_checkbox_items'>
                                                    <div className='w-25'>
                                                        <input
                                                            type="checkbox"
                                                            id={industry.name}
                                                            value={industry.name}
                                                            checked={filterIndustry.split(',').includes(industry.name)}
                                                            onChange={() => toggleIndustry(industry.name)}
                                                            style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                                        />
                                                    </div>
                                                    <div className='w-100'>
                                                        <label htmlFor={industry.name}>{industry.name}</label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Aadhar Card */}
                <div className='addhar_card_heading'>Aadhar Card</div>
                <div className='main_influencer_data'>
                    {/* Front Side Image */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Front Side</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="file"
                                onChange={(e) => setFrontAadhar(e.target.files[0])}
                                className='influncer_item_second_input form-control-file'
                                style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
                            />
                            <img src={userIdenetity?.adhar_front} alt="frontAadhar" className='influncer_idemtity_images' />
                        </div>
                    </div>
                    {/* Back Side Image */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>Back Side</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="file"
                                onChange={(e) => setBackAadhar(e.target.files[0])}
                                className='influncer_item_second_input form-control-file'
                                style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
                            />
                            <img src={userIdenetity?.adhar_back} alt="frontAadhar" className='influncer_idemtity_images' />

                        </div>
                    </div>
                </div>
                {/* PAN Card */}
                <div className='addhar_card_heading'>PAN Card</div>
                <div className='main_influencer_data'>
                    {/* PAN Number */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>PAN Number</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="text"
                                value={panNumber}
                                onChange={(e) => setPanNumber(e.target.value)}
                                className='influncer_item_second_input'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />

                        </div>
                    </div>
                    {/* PAN Card Image */}
                    <div className='main_influencer_items'>
                        <div className='influncer_item_first_div'>PAN Card</div>
                        <div className='influncer_item_second_div'>
                            <input
                                type="file"
                                    
                                onChange={(e) => setPanCard(e.target.files[0])}
                                className='influncer_item_second_input form-control-file'
                                style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
                            />
                            <img src={userIdenetity?.pan} alt="frontAadhar" className='influncer_idemtity_images' />
                        </div>
                    </div>
                </div>
              
                {/* Save Button */}
                <div className='btn btn-warning w-100' onClick={handleSave} disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Details'}
                </div>
            </div>
            <ToastContainer style={{ maxWidth: '300px' }} autoClose={1000} />

        </div>
    );
}

export default PersonalInfo;

// import React, { useState, useEffect } from 'react';
// import "../../../styles/creator/Account/PersonalInfo.css";
// import BackHEader from '../../headers/backeHeader';
// import { Link, useNavigate } from 'react-router-dom';
// import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';
// import { makeApi } from '../../../api/callApi.tsx';
// import { ToastContainer, toast } from 'react-toastify';

// function PersonalInfo({ userDatas }) {
//     const navigate = useNavigate();
//     const [fullName, setFullName] = useState('');
//     const [gender, setGender] = useState('');
//     const [dob, setDob] = useState('');
//     const [language, setLanguage] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [industry, setIndustry] = useState('');
//     const [panNumber, setPanNumber] = useState('');
//     const [frontAadhar, setFrontAadhar] = useState(null);
//     const [backAadhar, setBackAadhar] = useState(null);
//     const [panCard, setPanCard] = useState();
//     const [frontOther, setFrontOther] = useState(null);
//     const [backOther, setBackOther] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [IndustryList, setIndustryList] = useState([]);
//     const [filterIndustry, setFilterIndustry] = useState("");
//     const [loading, setLoading] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const [isOpenlan, setIsOpenlantoster] = useState(false);
//     const [userIdenetity , setUserIdentity] = useState();
//     const [languages, setLanguages] = useState([]);
//     const [filteredlangu, setFilterIan] = useState();


    
//     const toggleIanguanty = (industryName) => {
//         let updatedFilterIndustry;
//         const selectedLnguages = filteredlangu ? filteredlangu.split(',') : [];

//         if (selectedLnguages.includes(industryName)) {
//             updatedFilterIndustry = selectedLnguages.filter(name => name !== industryName).join(',');
//         } else {
//             updatedFilterIndustry = [...selectedLnguages, industryName].join(',');
//         }
//         setFilterIan(updatedFilterIndustry);
//     };
//     const toggleIndustry = (industryName) => {
//         let updatedFilterIndustry;
//         const selectedIndustries = filterIndustry ? filterIndustry.split(',') : [];

//         if (selectedIndustries.includes(industryName)) {
//             updatedFilterIndustry = selectedIndustries.filter(name => name !== industryName).join(',');
//         } else {
//             if (selectedIndustries.length >= 5) {
//                 toast.error('You cannot select more than 5 industries');
//                 return;
//             }
//             updatedFilterIndustry = [...selectedIndustries, industryName].join(',');
//         }
//         setFilterIndustry(updatedFilterIndustry);
//     };



//     const FetchIndustryList = async () => {
//         setLoading(true);
//         try {
//             const res = await makeApi('/v1/get-all-industries', 'GET'); 
//             const userPersonal = await makeApi('/api/get-identity', 'GET'); 
//             const resLanguages = await makeApi('/v1/get-all-languages', 'GET');
//             setLanguages(resLanguages.data.data);
//             setUserIdentity(userPersonal?.data?.data);
//             setPanNumber(userPersonal?.data?.data?.pan_no);
//             setIndustryList(res.data.data);
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     };

    
//     const handleToggle = () => {
//         setIsOpen(!isOpen);
//     };
//     const handleTogglelanguage = () => {
//         setIsOpenlantoster(!isOpenlan);
//     };

//     useEffect(() => {
//         FetchIndustryList();
//     }, []);

//     useEffect(() => {
//         if (userDatas) {
//             setFullName(userDatas.user_name || '');
//             setGender(userDatas.gender || '');
//             setDob(userDatas.dob || '');
//             setLanguage(userDatas.language || '');
//             setEmail(userDatas.email || '');
//             setPhone(userDatas.mobile || '');
//             setIndustry(userDatas.industry || '');
//             setFilterIndustry(userDatas.industry || '');  // Set initial filterIndustry
//         }
//     }, [userDatas]);
    // const handleSave = async () => {
    //     setIsLoading(true);
    //     try {
    //         const identityData = {
    //             influe_id: userDatas.id,
    //             adhar_front: frontAadhar ? await uploadToCloudinary(frontAadhar) : undefined,
    //             adhar_back: backAadhar ? await uploadToCloudinary(backAadhar) : undefined,
    //             pan_no: panNumber,
    //             pan: panCard ? await uploadToCloudinary(panCard) : undefined,
    //             // other_proof1: frontOther ? await uploadToCloudinary(frontOther) : undefined,
    //             // other_proof2: backOther ? await uploadToCloudinary(backOther) : undefined,
    //         };

    //         // Remove undefined values
    //         Object.keys(identityData).forEach(key => identityData[key] === undefined && delete identityData[key]);

    //         if (Object.keys(identityData).length > 1) { // Ensure at least influe_id and one other field is present
    //             const response = await makeApi('/api/create-update-identity', 'POST', identityData);
    //             toast.success('Identity details saved successfully');
    //         }

    //         const userDataToSend = {
    //             editUser: {
    //                 user_name: fullName,
    //                 gender,
    //                 dob,
    //                 language : filteredlangu ,
    //                 email,
    //                 mobile: phone,
    //                 industry: filterIndustry,
    //             }
    //         };

    //         // Make the API request to update user details
    //         const response = await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', userDataToSend);
    //         toast.success('User details updated successfully');
    //         navigate('/verified/user/my-details');
    //     } catch (error) {
    //         console.error('Error:', error);
    //         toast.error('Failed to save details');
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };

//     return (
//         <div>
//             <div>
//                 <Link to={"/verified/user/my-details"} style={{ textDecoration: "none", color: "black" }}>
//                     <BackHEader title={"Personal Information"} />
//                 </Link>
//             </div>
//             <div className='main_personal_info_div' style={{ paddingBottom: "50px" }}>
//                 <div className='main_influencer_data'>
//                     {/* Influencer ID */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Influencer ID</div>
//                         <div className='influncer_item_second_div'>
//                             {userDatas ? `TX${fullName.charAt(0).toUpperCase()}-${userDatas.id}` : 'Loading...'}
//                         </div>

//                     </div>
//                     {/* Full Name */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Full Name</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={fullName}
//                                 onChange={(e) => setFullName(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Gender */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Gender</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={gender}
//                                 onChange={(e) => setGender(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Date of Birth */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Date of Birth</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={dob}
//                                 onChange={(e) => setDob(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Language */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Language</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={language}
//                                 onChange={(e) => setLanguage(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                         <div className="accordion-container">
//                         <div className="">
//                             <div className='industy_accordion'>
//                                 <div className='industy_accordion-header' onClick={handleTogglelanguage}>
//                                     <h6>Language</h6>
//                                     <span className={`industy_accordion-icon ${isOpenlan ? 'open' : ''}`}>
//                                         {isOpenlan ? '-' : '+'}
//                                     </span>
//                                 </div>
//                                 {isOpenlan && (
//                                     <div className='industy_filter_checkbox_parent_div'>
//                                         {languages.map((industry) => (
//                                             <div key={industry.language} className='d-flex align-items-center industy_dropdown_checkbox_items'>
//                                                 <div className='w-25'>
//                                                     <input
//                                                         type="checkbox"
//                                                         id={industry.language}
//                                                         value={industry.language}
//                                                         checked={filteredlangu.split(',').includes(industry.language)}
//                                                         onChange={() => toggleIanguanty(industry.language)}
//                                                         style={{ width: "20px", height: "20px", cursor: "pointer" }}
//                                                     />
//                                                 </div>
//                                                 <div className='w-100'>
//                                                     <label htmlFor={industry.language}>{industry.language}</label>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                     {/* Email */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Email</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Phone */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Phone</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={phone}
//                                 onChange={(e) => setPhone(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />
//                         </div>
//                     </div>
//                     {/* Industry */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Industry</div>
//                         {/* <div className='influncer_item_second_div'> */}
//                         {/* </div> */}
//                         <div className="accordion-container influncer_item_second_div">
//                             {/* <input
//                                 type="text"
//                                 value={industry}
//                                 onChange={(e) => setIndustry(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                                 disabled
//                             /> */}
//                             <div className="">
//                                 <div className='industy_accordion' style={{ maxWidth: "75%" }} >
//                                     <div className='industy_accordion-header align-items-center' style={{ cursor: "pointer", padding: "2px", gap: "15px", width: "100%" }} onClick={handleToggle}>
//                                         <div>Industry Filter</div>
//                                         <div className={`industy_accordion-icon ${isOpen ? 'open' : ''}`}>
//                                             {isOpen ? '-' : '+'}
//                                         </div>
//                                     </div>
//                                     {isOpen && (
//                                         <div className='industy_filter_checkbox_parent_div'>
//                                             {IndustryList.map((industry) => (
//                                                 <div key={industry.name} className='d-flex align-items-center industy_dropdown_checkbox_items'>
//                                                     <div className='w-25'>
//                                                         <input
//                                                             type="checkbox"
//                                                             id={industry.name}
//                                                             value={industry.name}
//                                                             checked={filterIndustry.split(',').includes(industry.name)}
//                                                             onChange={() => toggleIndustry(industry.name)}
//                                                             style={{ width: "20px", height: "20px", cursor: "pointer" }}
//                                                         />
//                                                     </div>
//                                                     <div className='w-100'>
//                                                         <label htmlFor={industry.name}>{industry.name}</label>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 {/* Aadhar Card */}
//                 <div className='addhar_card_heading'>Aadhar Card</div>
//                 <div className='main_influencer_data'>
//                     {/* Front Side Image */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Front Side</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="file"
//                                 onChange={(e) => setFrontAadhar(e.target.files[0])}
//                                 className='influncer_item_second_input form-control-file'
//                                 style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
//                             />
//                             <img src={userIdenetity?.adhar_front} alt="frontAadhar" className='influncer_idemtity_images' />
//                         </div>
//                     </div>
//                     {/* Back Side Image */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>Back Side</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="file"
//                                 onChange={(e) => setBackAadhar(e.target.files[0])}
//                                 className='influncer_item_second_input form-control-file'
//                                 style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
//                             />
//                             <img src={userIdenetity?.adhar_back} alt="frontAadhar" className='influncer_idemtity_images' />

//                         </div>
//                     </div>
//                 </div>
//                 {/* PAN Card */}
//                 <div className='addhar_card_heading'>PAN Card</div>
//                 <div className='main_influencer_data'>
//                     {/* PAN Number */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>PAN Number</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="text"
//                                 value={panNumber}
//                                 onChange={(e) => setPanNumber(e.target.value)}
//                                 className='influncer_item_second_input'
//                                 style={{ border: "1px solid var(--light-gray-color)" }}
//                             />

//                         </div>
//                     </div>
//                     {/* PAN Card Image */}
//                     <div className='main_influencer_items'>
//                         <div className='influncer_item_first_div'>PAN Card</div>
//                         <div className='influncer_item_second_div'>
//                             <input
//                                 type="file"
                                    
//                                 onChange={(e) => setPanCard(e.target.files[0])}
//                                 className='influncer_item_second_input form-control-file'
//                                 style={{ border: "1px solid var(--light-gray-color)", width: "100%" }}
//                             />
//                             <img src={userIdenetity?.pan} alt="frontAadhar" className='influncer_idemtity_images' />
//                         </div>
//                     </div>
//                 </div>
              
//                 {/* Save Button */}
//                 <div className='btn btn-warning w-100' onClick={handleSave} disabled={isLoading}>
//                     {isLoading ? 'Saving...' : 'Save Details'}
//                 </div>
//             </div>
//             <ToastContainer style={{ maxWidth: '300px' }} autoClose={1000} />

//         </div>
//     );
// }

// export default PersonalInfo;

