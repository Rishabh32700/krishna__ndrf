import React, {useState} from 'react'

import './UserDashboard.css'

import Navbar from '../../components/navbar/Navbar'
import New__Cases from './user__dashboard__components/New__Cases'
import Case__reported from './user__dashboard__components/Case__reported'



const UserDashboard = () => {

    const [isPreview, setIsPreview] = useState(true);

    return (
        <>
            <div className="user__dashboard">
                <div className="user__dashboard__container">
                    <div className="user__dashboard__header">
                        <Navbar />
                        <div className="user__dashboard__subheader">
                            <div className="user__dashboard__subheader__left">
                                <span className='user__dashboard__heading' > <i> User Dashboard </i> </span>
                            </div>
                            <div className="user__dashboard__subheader__right">
                                <span className="claim__rewards">Claim your rewards</span>
                                <span className="connect__metamask">Connect via MetaMask</span>
                            </div>
                        </div>
                    </div>
                    <div className="user__details">
                        <div className="user__details__container">
                            <div className="profile__pic">
                                <div className="pic">

                                </div>
                                <div className="change__user__profile__pic">
                                    <span className="change__pic">Change ProfilePicture</span>
                                </div>
                                <div className="edit__user__profile">
                                    <span className="edit__profile">Edit Profile</span>
                                </div>
                            </div>
                            <div className="user__detail">
                                <div className="user__info">
                                    <span className="key name">Name : </span>
                                    <span className="value">Kamal</span>
                                </div>
                                <div className="user__info">
                                    <span className="key gender">Gender : </span>
                                    <span className="value">Male</span>
                                </div>
                                <div className="user__info">
                                    <span className="key dob">Date of Birth : </span>
                                    <span className="value">10.02.1978</span>
                                </div>
                                <div className="user__info">
                                    <span className="key accnt__id">Account ID : </span>
                                    <span className="value">12k329ox</span>
                                </div>
                                <div className="user__info">
                                    <span className="key email">Email : </span>
                                    <span className="value">kamal@example.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="case">
                        <div className="case__navlinks">
                            <span className="case__reported" onClick={() => setIsPreview(true)}>Case Reported</span>
                            <span className="create__new__cases" onClick={() => setIsPreview(false)}>Create New Cases</span>
                        </div>
                        <div className="case__conatiner">
                        {isPreview ? <Case__reported /> : <New__Cases />}
                        </div>
                    </div>
                    {isPreview ? <button>View all</button> : ''}
                    
                </div>
            </div>
        </>
    )
}

export default UserDashboard