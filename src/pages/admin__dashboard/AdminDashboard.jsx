import React from 'react'

import './adminDashboard.css'

import Navbar from '../../components/navbar/Navbar'

const AdminDashboard = () => {
    return (
        <>
            <div className="admin__dashboard">
                <div className="admin__dashboard__container">
                    <div className="user__dashboard__header">
                        <Navbar />
                        <div className="user__dashboard__subheader">
                            <div className="user__dashboard__subheader__left">
                                <span className='user__dashboard__heading' > <i> Dashboard </i> </span>
                            </div>
                            <div className="user__dashboard__subheader__right">
                                <span className="claim__rewards">Create Case</span>
                            </div>
                        </div>
                    </div>
                    <div className="admin__left">
                        <div className="admin__cases__pannel">
                            <div className="admin__cases__pannel__header">
                                <div className="ongoing">

                                </div>
                                <div className="completed">

                                </div>
                            </div>
                            <div className="admin__case__container">

                            </div>
                        </div>
                    </div>
                    <div className="admin__right">
                        <div className="admin__right__upper">

                        </div>
                        <div className="admin__right__lower">

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminDashboard