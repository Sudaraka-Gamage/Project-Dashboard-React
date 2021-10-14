import "./sidebar.css"
import React from 'react'
import {  KeyboardArrowDown, Dashboard, Notifications 
    , Groups, PieChartRounded, Animation ,CreditCard, Attractions, MonetizationOn,  StarsRounded
} from '@mui/icons-material';

export default function Sidebar() {

    return (
       <div className="sidebar">

            
              <div className="sidebarWrapper">

                     <div className="sidebarMenu">
                 
                   <ul className="sidebarList">

                      <li className="sidebarListItem">
                         <img src="./images/image1.png" alt="" className="sidebarAdminImg" />
                      <h3 className="sidebarTitle">Admin Flow</h3>
                      </li>

                     <li className="sidebarListItem">

                     <div class="dropdown">
                            <button className="sidebarButton">

                            <img src="./images/image2.png" alt="" className="sidebarButtonImg" />
                            <span className="sidebarButtonText">Sri Lanka</span>
                            <KeyboardArrowDown className="sidebarDropdownIcon"/>
                            
                            </button>
                            <div class="dropdown-content">
                                <img src="./images/image2.png" alt="" className="sidebarButtonImg" />
                                <span className="sidebarButtonText">Sri Lanka</span> 
                             </div>
                        </div>
                     </li>

                     <li className="sidebarListItem">
                            <Dashboard className="sidebarIcon"/>
                            Dashboard
                     </li>

                     <li className="sidebarListItem active">
                            <Groups className="sidebarIcon"/>
                            Members
                     </li>

                     <li className="sidebarListItem">
                            <Animation className="sidebarIcon"/>
                            Points
                     </li>

                     <li className="sidebarListItem">
                            <Attractions className="sidebarIcon"/>
                            Rewards
                     </li>

                     <li className="sidebarListItem">
                            <CreditCard className="sidebarIcon"/>
                            Cards
                     </li>

                     <li className="sidebarListItem">
                            <StarsRounded className="sidebarIcon"/>
                            Tiers
                     </li>

                     <li className="sidebarListItem">
                            <MonetizationOn className="sidebarIcon"/>
                            Transactions
                     </li>

                     <li className="sidebarListItem">
                            <Notifications className="sidebarIcon"/>
                            Notifications
                     </li>

                     <li className="sidebarListItem">
                            <PieChartRounded className="sidebarIcon"/>
                            Analytics
                     </li>

                 </ul>
 
                     </div>

                            <div class="dropdown">
                                <button className="sidebarButton2">

                                   <img src="./images/image2.jpg" alt="" className="sidebarButtonImg" />
                                   <span className="sidebarButtonText">
                                          Carmelo Gardner
                                   </span>
                                   <KeyboardArrowDown className="sidebarDropdownIcon"/>

                                   </button>
                                   <div class="dropdown-content">
                                          <span></span>
                                   </div>
                            </div>

              </div>

       </div>
    )
}
