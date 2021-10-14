import React from 'react'
import './topbar.css'
import {   KeyboardArrowDown, ManageAccounts } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Members</span>
                </div>

                <div className="topRight">
                    
                    <div className="dropdown">
                        <button className="topbarButton">
                        <ManageAccounts className="topbarUsersettingIcon"/>
                            <span className="topbarButtonText">User Setting</span>
                            <KeyboardArrowDown className="topbarDropdownIcon"/>
                        </button>
                        <div className="dropdown-content">
                            <p>User Profile</p>
                            <p>User Account</p>
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}
