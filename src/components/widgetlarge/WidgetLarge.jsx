import React from 'react'
import './widgetlarge.css'
import {  KeyboardArrowDown, OfflineBoltOutlined, 
    CalendarTodayOutlined, NotStartedOutlined, ShareLocationRounded, BusinessCenter, DirectionsRun, FavoriteBorder, HourglassBottom} from '@mui/icons-material';


export default function WidgetLarge() {
    return (
        <div className="widgetlarge">
            
            <div className="widgetLargeNav">
            
                <a className="activelink" href="#">
                   Overview</a>
                <a href="#">Activity Log</a>
                <a href="#">Points</a>
                <a href="#">Rewards</a>
                <a href="#">Notes</a>
                
            </div>
            
           <div className="widgetLargeMain">

                    <div className="widgetLargeLeft">


                    
                        <div className="widgetLargeBox1">

                            <div className="widgetLargeBox1Item1">

                            <span className="box1Item1">
                                <OfflineBoltOutlined className="box1Item1Icon1"/>
                                Claim Reward
                                </span>
                            <span className="box1Item1text2">
                            <CalendarTodayOutlined className="box1Item1Icon2"/>
                            2020-10-07 2.52 pm
                            </span>

                            </div>

                            <div className="widgetLargeBox1Item">

                            <span className="box1Item2">Reward Name</span>
                            <span className="box1Item2text2">Water Resistent Bag</span>

                            </div>

                            <div className="widgetLargeBox1Item">

                            <span className="box1Item3">Redeemed Points</span>
                            <span className="box1Item3text2">10</span>

                            </div>

                            <div className="widgetLargeBox1Item">

                            <span className="box1Item4">Voucher Code</span>
                            <span className="box1Item4text2">VZ125</span>

                            </div>

                            <div className="widgeLargeBoxBottom">
                                <button className="widgeLargeBoxBottomButton">

                                <span className="widgeLargeBoxBottomText">See 3 more</span> 
                                <KeyboardArrowDown className="widgeLargeBoxBottomIcon"/>
                                
                                </button>
                            </div>

                        </div>





                    <div className="widgetLargeBox1">
                    <div className="widgetLargeBox1Item1">

                    <span className="box1Item1">
                    <NotStartedOutlined className="box1Item1Icon1"/>
                        Redeem Reward
                        </span>
                            <span className="box1Item1text2">
                            <CalendarTodayOutlined className="box1Item1Icon2"/>
                                2020-10-07 2.52 pm
                            </span>

                                    </div>

                            <div className="widgetLargeBox1Item">

                        <span className="box1Item2">Reward Name</span>
                                        <span className="box1Item2text2">Water Resistent Bag</span>

                                </div>

                                            <div className="widgetLargeBox1Item">

                                <span className="box1Item3">Redeemed Points</span>
                                <span className="box1Item3text2">10</span>

                                    </div>

                            <div className="widgetLargeBox1Item">

<span className="box1Item4">Voucher Code</span>
<span className="box1Item4text2">VZ125</span>

</div>

<div className="widgeLargeBoxBottom">
    <button className="widgeLargeBoxBottomButton">

    <span className="widgeLargeBoxBottomText">See 3 more</span> 
    <KeyboardArrowDown className="widgeLargeBoxBottomIcon"/>
    
    </button>
</div>  
                    </div>





                    <div className="widgetLargeBox1">
                    <div className="widgetLargeBox1Item1">

<span className="box1Item1">
    <ShareLocationRounded className="box1Item1Icon1"/>
    Collect Points
    </span>
<span className="box1Item1text2">
<CalendarTodayOutlined className="box1Item1Icon2"/>
2020-10-07 2.52 pm
</span>

</div>

<div className="widgetLargeBox1Item">

<span className="box1Item2">Collected Points</span>
<span className="box1Item2text2">10</span>

</div>

<div className="widgetLargeBox1Item">

<span className="box1Item3">Total Points</span>
<span className="box1Item3text2">160</span>

</div>

<div className="widgetLargeBox1Item">

<span className="box1Item4">Total Tier Points</span>
<span className="box1Item4text2">250</span>

</div>

<div className="widgeLargeBoxBottom">
    <button className="widgeLargeBoxBottomButton">

    <span className="widgeLargeBoxBottomText">See 3 more</span> 
    <KeyboardArrowDown className="widgeLargeBoxBottomIcon"/>
    
    </button>
</div>
                    </div>


            </div>








            <div className="widgetLargeRight">
                   <div className="widgetLargeRightContent">





                        <div className="widgetLargeRightbox4">

                            <div className="RightBoxItems1">
                                <span className="RightBoxItemsText">Performance Matrices</span>
                                <span className="RightBoxItemsText2part1">
                                
                                </span>
                           </div>
                           <div className="RightBoxItems">
                                <span className="RightBoxItemsText1">
                                    <FavoriteBorder className="RightBoxIcon"/>
                                    Customer Lifetime Value</span>
                                <span className="RightBoxItemsText2">$153.86</span>
                               
                           </div>
                           <div className="RightBoxItems">
                                <span className="RightBoxItemsText1">
                                <DirectionsRun className="RightBoxIcon"/>
                                Risk of Churn
                                </span>
                                <span className="RightBoxItemsText2">11.09%</span>
                               
                           </div>
                           

                         
                        </div>







                       <div className="widgetLargeRightbox4">
                       
                       <div className="RightBoxItems1">
                                <span className="RightBoxItemsText">Member Insights</span>
                                <span className="RightBoxItemsText2part1">
                                <CalendarTodayOutlined className="RightBoxIcon"/>
                                    7 Days
                                    <KeyboardArrowDown className="RightBoxIcon"/>
                                    </span>
                           </div>
                           <div className="RightBoxItems">
                                <span className="RightBoxItemsText1">
                                    <BusinessCenter className="RightBoxIcon"/>
                                    Average Basket Size</span>
                                <span className="RightBoxItemsText2">$153.86</span>
                               
                           </div>
                           <div className="RightBoxItems">
                                <span className="RightBoxItemsText1">
                                <HourglassBottom className="RightBoxIcon"/>
                                Average Number of Visits
                                </span>
                                <span className="RightBoxItemsText2">11.09%</span>
                               
                           </div>
                           <div className="RightBoxItems">
                                <span className="RightBoxItemsText1">
                                <BusinessCenter className="RightBoxIcon"/>
                                Total Basket Size
                                </span>
                                <span className="RightBoxItemsText2">11.09%</span>
                           </div>

                       </div>









                       <div className="widgetLargeRightbox6">

                            <div className="RightLastBoxItems1">
                                <span className="RightLastBoxItemsText">
                                    Unlock Rewards
                                </span>
                                
                            </div>

                            <div className="RightLastBoxItems">

                                <span className="RightLastBoxItemsText1">
                                    <img src="./images/image6.png" alt="" className="RightLastBoxImg"/>
                                    Coffee Mug
                                </span>

                                <span className="RightLastBoxItemsText2">
                                    50 Points
                                </span>

                            </div>

                            <div className="RightLastBoxItems">

                                <span className="RightLastBoxItemsText1">
                                <img src="./images/image6.png" alt="" className="RightLastBoxImg"/>
                                    Coffee Mug
                                </span>

                                <span className="RightLastBoxItemsText2">
                                    50 Points
                                </span>
                               
                            </div>

                            <div className="RightLastBoxItems">

                                <span className="RightLastBoxItemsText1">
                                <img src="./images/image6.png" alt="" className="RightLastBoxImg"/>
                                Coffee Mug
                                </span>

                                <span className="RightLastBoxItemsText2">
                                    50 Points
                                </span>
                            </div>

                       </div>

                   </div>
           </div>











           </div>
        </div>
    )
}
