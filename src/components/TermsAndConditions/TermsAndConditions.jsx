import React from 'react';
import { Link } from "react-router-dom";

function TermsAndConditions (props) {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div>
                <h1 className="text-5xl font-bold">Terms and Conditions</h1>
                <div className="my-5">
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Payment</h2>
                        <p className="text-xl">Full room payment must be made upon check-in. Payment can be made via credit card or cash. </p>
                    </div>
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Additional Charges</h2>
                        <p className="text-xl">Additional charges may apply should other services be required such as grooming, training or medical attention. These charges will be communicated to the pet owner and must be paid before the pet checks out.</p>
                    </div>
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Reservation</h2>
                        <p className="text-xl">The hotel reserves the right to reject any reservation at any time without prior notice.</p>
                    </div>
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Communication</h2>
                        <p className="text-xl">Any communication related to the reservation, such as confirmation, cancellation or any issues, will be sent to the owner's registered email address.</p>
                    </div>
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Check-in and Check-out</h2>
                        <p className="text-xl">Check-in time is after 1pm. Check-out time is strictly by 12 noon. If you require a late check-out, please inform the reception during check-in or anytime during your pet's stay. Additional charges may apply for late check-out.</p>
                    </div>
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Updates to Owner</h2>
                        <p className="text-xl">Periodic updates with photos and videos of the pet's stay will be provided daily; however, there is no fixed timing for these updates.</p>
                    </div>
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Health and Vaccinations</h2>
                        <p className="text-xl">All pets must be up-to-date with their vaccinations and should be in good health at the time of check-in. The hotel reserves the right to refuse a pet with any medical condition or without proper vaccination records.</p>
                    </div>    
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Liability</h2>
                        <p className="text-xl">The hotel is not responsible for any illness, injury or loss of property of the pet or the owner during the stay.</p>
                    </div>    
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Privacy Policy</h2>
                        <p className="text-xl">The hotel respects the privacy of the pet owner and will only collect and use their personal information as needed to facilitate the reservation and stay of their pet.</p>
                    </div>      
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Right of Refusal</h2>
                        <p className="text-xl">The hotel reserves the right to refuse service to any pet or owner who poses a risk to the health or safety of other pets or staff.</p>
                    </div>            
                    <div className="my-3">
                        <h2 className="py-2 text-2xl font-bold">Cancellation Policy</h2>
                        <p className="text-xl">The cancellation policy is subject to the hotel's discretion and can vary based on the season and demand. The pet owner will be notified of the cancellation policy during the reservation process.</p>
                    </div>                      
                </div>
                <Link to={`/rooms`}><button className="btn btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">Explore pawfect Room</button></Link>

            </div>
        </div>
        </div>
    );
}

export default TermsAndConditions ;