

import React, { useState, useEffect } from 'react';
import BackHEader from '../../headers/backeHeader';
import { Link, useNavigate } from 'react-router-dom';
import { makeApi } from '../../../api/callApi.tsx';

function Bankinginfo() {
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [linkedPhoneNumber, setLinkedPhoneNumber] = useState('');
    const [swiftCode, setSwiftCode] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [bankId, setBankId] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch existing bank details
        const fetchBankDetails = async () => {
            try {
                const response = await makeApi('/api/get-my-bank-details', 'GET');
                if (response.data.success && response.data.bank) {
                    const bankDetails = response.data.bank;
                    setBankName(bankDetails.bankname || '');
                    setAccountNumber(bankDetails.accountnumber || '');
                    setIfscCode(bankDetails.ifsccode || '');
                    setLinkedPhoneNumber(bankDetails.phone || '');
                    setSwiftCode(bankDetails.swiftcode || '');
                    setBankId(bankDetails._id || '');
                    setIsEditing(true);
                }
            } catch (error) {
                console.error('Error fetching bank details:', error);
            }
        };

        fetchBankDetails();
    }, []);

    const handleSave = async () => {
        const data = {
            bankname: bankName,
            accountnumber: accountNumber,
            ifsccode: ifscCode,
            phone: linkedPhoneNumber,
            swiftcode: swiftCode,
        };

        try {
            const endpoint = isEditing
                ? `/api/update-bank-details/${bankId}`
                : '/api/add-bank-details';

            const method = isEditing ? 'PUT' : 'POST';
            const response = await makeApi(endpoint, method, data);

            if (response.data.success) {
                console.log('Success:', response.data);
                navigate('/verified/user/my-details');
            }
        } catch (error) {
            console.error('Error saving bank details:', error);
        }
    };

    return (
        <div>
            <div className='main_personal_info_div' style={{ height: "100vh" }}>
                <div>
                    <Link to={"/verified/user/my-details"} style={{ textDecoration: "none", color: "black" }}>
                        <BackHEader title={"Payment Details"} />
                    </Link>
                </div>
                <div className='main_influencer_data'>
                    <div>
                        <div>Bank Name</div>
                        <div className='mt-1'>
                            <input
                                type="text"
                                value={bankName}
                                onChange={(e) => setBankName(e.target.value)}
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div>Bank Account</div>
                        <div className='mt-1'>
                            <input
                                type="text"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div>IFSC Code</div>
                        <div className='mt-1'>
                            <input
                                type="text"
                                value={ifscCode}
                                onChange={(e) => setIfscCode(e.target.value)}
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div>Linked Phone Number</div>
                        <div className='mt-1'>
                            <input
                                type="text"
                                value={linkedPhoneNumber}
                                onChange={(e) => setLinkedPhoneNumber(e.target.value)}
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    <div>
                        <div>SWIFT Code</div>
                        <div className='mt-1'>
                            <input
                                type="text"
                                value={swiftCode}
                                onChange={(e) => setSwiftCode(e.target.value)}
                                className='influncer_item_second_input w-100 p-2'
                                style={{ border: "1px solid var(--light-gray-color)" }}
                            />
                        </div>
                    </div>
                    <div className='w-100 text-center mt-4'>
                        <div className='btn btn-warning w-75' onClick={handleSave}>
                            Save Details
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bankinginfo;
