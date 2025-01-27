// import React, { useEffect, useState } from 'react'
// import "../../../styles/user/creator/createdordeteils.css"
// import notification from "../../../assets/img/notification (1).png"
// import MyAccountheader from './myAccountheader'
// import { makeApi } from '../../../api/callApi.tsx'
// import MainLoader from '../../../utils/loader.jsx'
// import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
// import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx'


// function Createdordeteils() {
//     const percentage = 70
//     const location = useLocation();
//     const [userDatas, setUserData] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [newImage , setNewImage] = useState(null)

//     const handleSaveUserDetails = async () => {
//         const dataToSend = {
//             editUser: {
//                 profile_img: newImage,
//             }
//         };

//         try {
//             await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', dataToSend);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const fetchUser = async () => {
//         try {
//             const res = await makeApi('/api/my-profile', 'GET');
//             setUserData(res.data.user);
//             setIsLoading(false);
//         } catch (error) {
//             console.error(error);
//             setIsLoading(false);
//         }
//     };
//     useEffect(() => {
//         fetchUser();
//     }, [location]);

//     if (isLoading) {
//         return <div>
//             <div className='loaderbgcolor' > <MainLoader /></div>
//         </div>;
//     }
//     return (
//         <div>
//             {isLoading && <div className='loaderbgcolor' style={{ top: "0" }} > <MainLoader /></div>}
//             <MyAccountheader BackPath={'/verified/creator/home'} />

//             {/* upper section */}
//             <Link style={{ textDecoration: "none" }} to={"/verified/user/my-details"} >
//                 <div className='createdordeteils_user_uppersection ps-3' >
//                     {/* image */}
//                     <div className='image_div_influncer_profile' >
//                         <div>
//                             <img src={userDatas.profile_img} style={{ borderRadius: "50%", maxWidth: "80px", maxHeight: "80px" }} alt="" className='createdordeteils_user_image' />
//                         </div>
                        // <div className='pencil_icon_on_user_profile'>
                            // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            //     <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                            // </svg>
                        // </div>
//                     </div>
//                     {/* details */}
//                     <div className='createdordeteils_user_details' >
//                         <div className='createdordeteils_user_name bold_text text-black' >Hi, {userDatas.user_name} </div>
//                         <div className='createdordeteils_user_description bold_text text-primary' >Complete your account on here </div>
//                     </div>
                  
//                 </div>
//             </Link>
//         </div>
//     )
// }

// export default Createdordeteils


// import React, { useEffect, useState } from 'react';
// import "../../../styles/user/creator/createdordeteils.css";
// import MyAccountheader from './myAccountheader';
// import { makeApi } from '../../../api/callApi.tsx';
// import MainLoader from '../../../utils/loader.jsx';
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';

// function Createdordeteils() {
//     const location = useLocation();
//     const [userDatas, setUserData] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [newImage, setNewImage] = useState(null);
//     const [isEditingImage, setIsEditingImage] = useState(false);
//     const [uploadProgress, setUploadProgress] = useState(0);

//     const handleSaveUserDetails = async (imageUrl) => {
//         const dataToSend = {
//             editUser: {
//                 profile_img: imageUrl,
//             }
//         };

//         try {
//             await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', dataToSend);
//         } catch (error) {
//             console.error('Error:', error);
//         }
//     };

//     const fetchUser = async () => {
//         try {
//             const res = await makeApi('/api/my-profile', 'GET');
//             setUserData(res.data.user);
//             setIsLoading(false);
//         } catch (error) {
//             console.error(error);
//             setIsLoading(false);
//         }
//     };

//     const handleFileChange = async (e) => {
//         const file = e.target.files[0];
//         if (file && file.type.startsWith('image/')) {
//             try {
//                 const imageUrl = await uploadToCloudinary(file, setUploadProgress);
//                 setNewImage(imageUrl);
//                 await handleSaveUserDetails(imageUrl);
//                 setIsEditingImage(false); // Close the file input after successful upload
//             } catch (error) {
//                 console.error("Failed to upload image:", error);
//             }
//         } else {
//             console.error("Only image files are allowed.");
//         }
//     };

//     useEffect(() => {
//         fetchUser();
//     }, [location]);

//     if (isLoading) {
//         return <div><div className='loaderbgcolor'><MainLoader /></div></div>;
//     }

//     return (
//         <div>
//             {isLoading && <div className='loaderbgcolor' style={{ top: "0" }}><MainLoader /></div>}
//             <MyAccountheader BackPath={'/verified/creator/home'} />

//             {/* Upper section */}
//             <Link style={{ textDecoration: "none" }} to={"/verified/user/my-details"}>
//                 <div className='createdordeteils_user_uppersection ps-3'>
//                     {/* Image */}
//                     <div className='image_div_influncer_profile'>
//                         <div>
//                             <img src={newImage || userDatas.profile_img} 
//                                  style={{ borderRadius: "50%", maxWidth: "80px", maxHeight: "80px" }} 
//                                  alt="" className='createdordeteils_user_image' />
//                         </div>
//                         {/* <div className='pencil_icon_on_user_profile' onClick={() => setIsEditingImage(true)}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
//                                 <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
//                             </svg>
//                         </div> */}
//                         <input
//     type="file"
//     className='pencil_icon_on_user_profile'
//     accept="image/*"
//     onChange={handleFileChange}
//     style={{
//         width: '16px',
//         height: '16px',
//         opacity: 0,  // Hides the input visually
//         position: 'absolute',  // Keeps it in the same place
//         cursor: 'pointer'
//     }}
// />

//                         {isEditingImage && (
//                             <input 
//                                 type="file" 
//                                 accept="image/*" 
//                                 onChange={handleFileChange} 
//                                 style={{ display: 'block', marginTop: '10px' }}
//                             />
//                         )}
//                     </div>
//                     {/* Details */}
//                     <div className='createdordeteils_user_details'>
//                         <div className='createdordeteils_user_name bold_text text-black'>Hi, {userDatas.user_name}</div>
//                         <div className='createdordeteils_user_description bold_text text-primary'>Complete your account here</div>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// }

// export default Createdordeteils;










// import React, { useEffect, useState, useRef } from 'react';
// import "../../../styles/user/creator/createdordeteils.css";
// import notification from "../../../assets/img/notification (1).png";
// import MyAccountheader from './myAccountheader';
// import { Link } from 'react-router-dom'

// import { makeApi } from '../../../api/callApi.tsx';
// import MainLoader from '../../../utils/loader.jsx';
// import { useLocation } from 'react-router-dom';
// import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';

// function Createdordeteils() {
//     const location = useLocation();
//     const [userDatas, setUserData] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [newImage, setNewImage] = useState(null);
//     const inputFileRef = useRef(null);
//     const [showUploadPopup, setShowUploadPopup] = useState(false);

//     const handleSaveUserDetails = async (imageUrl) => {
//         const dataToSend = {
//             editUser: {
//                 profile_img: imageUrl,
//             }
//         };
        
//         setIsLoading(true);
//         try {
//             await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', dataToSend);
//             setShowUploadPopup(false);
//         } catch (error) {
//             console.error('Error:', error);
//         }finally{
//             setIsLoading(false);
//             fetchUser()
//         }
//     };

//     const fetchUser = async () => {
//         try {
//             const res = await makeApi('/api/my-profile', 'GET');
//             setUserData(res.data.user);
//             setIsLoading(false);
//         } catch (error) {
//             console.error(error);
//             setIsLoading(false);
//         }
//     };

//     const handleImageClick = () => {
//         setShowUploadPopup(true);
//     };

//     const handleFileChange = async (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             try {
//                 const imageUrl = await uploadToCloudinary(file);
//                 setNewImage(imageUrl);
//                 handleSaveUserDetails(imageUrl);
//                 setShowUploadPopup(false);
//             } catch (error) {
//                 console.error('Error uploading image:', error);
//             }
//         }
//     };

//     const handleClosePopup = () => {
//         setShowUploadPopup(false);
//     };

//     useEffect(() => {
//         fetchUser();
//     }, [location]);

//     // if (isLoading) {
//     //     return <div>
//     //         <div className='loaderbgcolor' style={{zIndex: 9999999999}} ><MainLoader /></div>
//     //     </div>;
//     // }

//     return (
//         <div>
//             {isLoading && <div className='loaderbgcolor' style={{ top: "0" }}><MainLoader /></div>}
//             <MyAccountheader BackPath={'/verified/creator/home'} />

//             <Link style={{ textDecoration: "none" }} to={"/verified/user/my-details"}>
//                 <div className='createdordeteils_user_uppersection ps-3'>
//                     <div className='image_div_influncer_profile'>
//                     <div className='pencil_icon_on_user_profile' onClick={handleImageClick}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
//                                 <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
//                             </svg>
//                         </div>
//                         <div >
//                             <img src={userDatas.profile_img} alt="" className='createdordeteils_user_image' />
//                         </div>
//                     </div>
//                     <div className='createdordeteils_user_details'>
//                         <div className='createdordeteils_user_name bold_text text-black'>Hi, {userDatas.user_name}</div>
//                         <div className='createdordeteils_user_description bold_text text-primary'>Complete your account on here</div>
//                     </div>
//                 </div>
//             </Link>

//             {showUploadPopup && (
//                 <div className="upload_popup_overlay" onClick={handleClosePopup}>
//                     <div className="upload_popup_content" onClick={(e) => e.stopPropagation()}>
//                         <h3>Upload Profile Image</h3>
//                         <input
//                             type="file"
//                             ref={inputFileRef}
//                             accept="image/*"
//                             onChange={handleFileChange}
//                             className="upload_input_field"
//                         />
//                         <button className="upload_close_btn" onClick={handleClosePopup}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Createdordeteils;




import React, { useEffect, useState, useRef } from 'react';
import "../../../styles/user/creator/createdordeteils.css";
import notification from "../../../assets/img/notification (1).png";
import MyAccountheader from './myAccountheader';
import { makeApi } from '../../../api/callApi.tsx';
import MainLoader from '../../../utils/loader.jsx';
import { useLocation } from 'react-router-dom';
import uploadToCloudinary from '../../../utils/cloudinaryUpload.jsx';
import { Link } from 'react-router-dom'


function Createdordeteils() {
    const location = useLocation();
    const [userDatas, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [newImage, setNewImage] = useState(null);
    const inputFileRef = useRef(null);
    const [showUploadPopup, setShowUploadPopup] = useState(false);

    const handleSaveUserDetails = async (imageUrl) => {
        const dataToSend = {
            editUser: {
                profile_img: imageUrl,
            }
        };

        try {
            await makeApi(`/api/update-user/${userDatas._id}`, 'PUT', dataToSend);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchUser = async () => {
        try {
            const res = await makeApi('/api/my-profile', 'GET');
            setUserData(res.data.user);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    };

    const handleImageClick = () => {
        setShowUploadPopup(true);
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                const imageUrl = await uploadToCloudinary(file);
                setNewImage(imageUrl);
                handleSaveUserDetails(imageUrl);
                setShowUploadPopup(false);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const handleClosePopup = () => {
        setShowUploadPopup(false);
    };

    useEffect(() => {
        fetchUser();
    }, [location]);

    if (isLoading) {
        return <div>
            <div className='loaderbgcolor'><MainLoader /></div>
        </div>;
    }

    return (
        <div>
            {isLoading && <div className='loaderbgcolor' style={{ top: "0" }}><MainLoader /></div>}
            <MyAccountheader BackPath={'/verified/creator/home'} />

            <Link style={{ textDecoration: "none" }} to={"/verified/user/my-details"}>
                <div className='createdordeteils_user_uppersection ps-3'>
                    <div className='image_div_influncer_profile'>
                        <div onClick={handleImageClick}>
                        <div className='pencil_icon_on_user_profile' onClick={handleImageClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                            </svg>
                         </div>
                            <img src={userDatas.profile_img} alt="" className='createdordeteils_user_image' />
                        </div>
                    </div>
                    <div className='createdordeteils_user_details'>
                        <div className='createdordeteils_user_name bold_text text-black'>Hi, {userDatas.user_name}</div>
                        <div className='createdordeteils_user_description bold_text text-primary'>Complete your account on here</div>
                    </div>
                </div>
            </Link>

            {showUploadPopup && (
                <div className="upload_popup_overlay" onClick={handleClosePopup}>
                    <div className="upload_popup_content" onClick={(e) => e.stopPropagation()}>
                        <h3>Upload Profile Image</h3>
                        <input
                            type="file"
                            ref={inputFileRef}
                            accept="image/*"
                            onChange={handleFileChange}
                            className="upload_input_field"
                        />
                        <button className="upload_close_btn" onClick={handleClosePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Createdordeteils;
