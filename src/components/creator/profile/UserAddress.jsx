import React from 'react'
import BackHEader from '../../headers/backeHeader'
import "../../../styles/creator/Account/PersonalInfo.css"
import { Link } from 'react-router-dom'

function UserAddress({ userDatas }) {
    return (
        <>
            <div>
                <div className='main_personal_info_div' style={{ height: "100vh" }} >
                    <div>
                    <Link to={"/verified/user/my-details"} style={{ textDecoration: "none"  , color: "black" }} >

                        <BackHEader title={"Address"} />
                        </Link>
                    </div>
                    {/* adres */}
                    <div className=' w-100 p-5 d-flex justify-content-center' >
                        <div className='w-75 d-flex flex-column gap-3' >

                            {/* heading */}
                            <div>Permanent Address</div>
                            <div style={{ color: "var(--light-gray-color)", fontSize: "14px" }} >
                                {userDatas.shipping_address}, {userDatas.ship_pin_code},  {userDatas.ship_city}, {userDatas.ship_state}, {userDatas.ship_country}
                            </div>

                        </div>

                    </div>
                    <div className='text-center' >
                    <Link to={"/verified/user/add-address"} style={{ textDecoration: "none"  , color: "black" }} >

                        <div className='btn btn-warning ' >Update Address</div>
                        </Link>
                    </div>


                </div>
            </div>
        </>
    )
}

export default UserAddress