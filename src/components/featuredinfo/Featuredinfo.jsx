import React from 'react'
import "./featuredinfo.css"
import {MailOutline, Phone, MoreVert, KeyboardArrowDown } from '@mui/icons-material';

export default function Featuredinfo() {
    return (
        <div className="featured">

            <div className="featuredInfoLeft">
                 <ul className="featuredLeftList">  
                   <li className="featuredLeftListItem">
                    <img src="./images/image4.png" className="featuredImg" alt=""/>
                    <div className="featuredInfoLeftUser">
                    <span className="featureUserName">Tommy K. Stafford</span>   
                    <span className="featureUserNumber">44400025222</span>
                    <span className="featuredUserLastSeen">Last seen on july 28,2021 3:16 PM</span>
                    </div>
                  </li>
                </ul>
            </div>


            <div className="featuredInfoRight">

                <div className="featuredInfoRightCards">

                    <div className="card1">
                    
                        <div className="card1LeftItem">
                            <span className="card1LeftItemEmail">Email</span>
                            
                            <span className="card1LeftItemEmailId">
                            <MailOutline className="card1Icon"/> 
                                TammyKstafford@dayrep.com
                            </span>    
                        </div>
                        <div className="card1RightItem">
                            Edit
                        </div>

                    </div>



                            <div className="card2">

                                <div className="card2LeftItem">
                                <span className="card2LeftItemAcc">Account Type</span>
                                <span className="card2LeftItemType">Platinum Account</span>    
                                </div>

                                <div className="card2RightItem">

                                    <div className="dropdown">
                                        <button className="card2Button">
                                            <MoreVert className="card2Icon"/>
                                        </button>
                                        <div className="dropdown-content">
                                            <p>Convert To Primary</p>
                                        </div>
                                    </div>
                                
                                </div>

                            </div>



                    <div className="card3">
                
                            <div className="card3LeftItem">
                        
                                <span className="card3LeftItemRedeem">Redeemable Points</span>
                                <span className="card3LeftItemRedeemPoints">250</span>
                                <span className="card3LeftItemRedeemDetails">150 Points will be expired soon</span>   
                            
                            </div>

                            <div className="card3RightItem">

                                <div className="dropdown">
                                <button className="card3Button">
                                    <MoreVert className="card3Icon"/>
                                </button>
                                <div className="dropdown-content">
                                    
                                </div>
                                </div>
                            </div>


                    </div>

                    <div className="card4">
                        
                        <div className="card4LeftItem">
                            <span className="card4LeftItemTier">Tier</span>
                            <span className="card4LeftItemMedal">
                            <img src="./images/image5.png" alt="" className="card4Img" /> 
                                Silver
                            </span>    
                        </div>

                    </div>


                    <div className="card5">

                        <div className="card5LeftItem">
                            <span className="card5LeftItemContact">Contact No</span>
                            <span className="card5LeftItemContactNumber">
                            <Phone className="card5Icon"/> 
                                607-695-2028
                            </span>    
                        </div>

                    </div>


                    <div className="card6">
                        
                    <div className="card6LeftItem">
                            <span className="card6LeftItemTierPoint">Account Status</span>
                            <span className="card6LeftItemTierCount">
                                <button className="card6Button">
                                    
                                    <span className="card6ButtonText">Active</span>
                                    <KeyboardArrowDown className="card6ButtonIcon"/>
                                </button>
                                </span>    
                        </div>

                    </div>

                    <div className="card7">
                        
                        <div className="card7LeftItem">
                            <span className="card7LeftItemTierPoint">Tier Points</span>
                            <span className="card7LeftItemTierCount">250</span>    
                        </div>

                    </div>


                    <div className="card8">

                        <div className="card8LeftItem">
                            <span className="card8LeftItemTierPoint">Affinity Group</span>
                            <span className="card8LeftItemTierCount">Senior Citizen</span>    
                        </div>

                    </div>

                </div>


            </div>

            

        </div>
    )
}
