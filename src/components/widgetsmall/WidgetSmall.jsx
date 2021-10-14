import React from 'react'
import './widgetsmall.css'
import { Person, MoreVert, KeyboardArrowDown, LocationOn, PhoneIphone, 
    Cake, DateRange, AirplanemodeActive, Transgender, 
    House, LaptopMac, Badge } from '@mui/icons-material';

export default function WidgetSmall() {
    return (
            <div className="widgetsmall">

             <span className="widgetSmTitle">About Member</span>

                            <div className="widgetSmBox1">
                        
                                <div className="widgetSmBox1Content">

                                    <div className="widgetSmBox1ContentLeft">

                                        <div className="widgetBox1Left">
                                        <span className="box1text1">Loyalty Cards</span>
                                        <div className="box2IconText">

                                        <span className="box1text2">
                                        <Badge className="box1Icon1"/>
                                        1111258689
                                        </span>

                                        </div>
                                        </div>

                                    </div>

                                    <div className="widgetBox1Right">
                                        <div className="dropdown">

                                        <button className="widgetBox1Button1">
                                        <MoreVert className="box1Icon2"/>
                                        </button>

                                        <div className="dropdown-content">
                                        <p></p>
                                        </div>

                                        </div>    
                                        <span className="box1text4">Create Embossed</span>
                                        <div className="dropdown">

                                        <button className="widgetBox1Button2">Active
                                        <KeyboardArrowDown className="box1Icon2"/>
                                        </button>

                                        <div className="dropdown-content">
                                            <p></p>
                                        </div>

                                    </div>
                                
                                </div>

                       
                            </div>
                       




                       <div className="widgetbox5bottom">
                           <button className="widgetBox5ButtonDown">
                               <span className="widgetbox5bottomText">See 3 more</span> 
                               <KeyboardArrowDown className="box5Icon3"/>
                           </button>
                        </div>

             </div>




                <div className="widgetSmBox2">
                    
                    <div className="widgetSmBox2Content">
                        <div className="widgetBox2Left">
                            <span className="box2text1">Secondary Accounts</span>
                            <div className="box2IconText">

                            <span className="box2text2">
                            <Person className="box2Icon1"/>
                              David Leblanc
                            </span>

                        </div>
                        </div>

                        <div className="widgetBox2Right">
                            <div className="dropdown">
                                <button className="widgetBox2Button">
                                <MoreVert className="box2Icon2"/>
                                </button>
                                <div className="dropdown-content">
                                        <p></p>
                                </div>
                            </div>    
                                <span className="box2text4">Remove</span>
                        </div>
                    </div>

                    <div className="widgetbox2bottom">
                        <button className="widgetBox2ButtonDown">
                            <span className="widgetbox2bottomText">See 3 more</span> 
                            <KeyboardArrowDown className="box2Icon3"/>
                        </button>
                    </div>
                </div>





                <div className="widgetSmBox3">
                <span className="widgetSmBox3Title">Tags</span>
                    <div className="widgetSmBox3Content">
                       <div className="widgetSmBox3ContentSection1">
                            <button className="box3button">Frequent Customer</button>
                            <button className="box3button">Family</button>
                       </div>
                       <div className="widgetSmBox3ContentSection2">

                       <button className="box3button">Honor</button>
                       <span className="box3text1">Add</span>
                       </div>


                       
                    </div>
                    
                    <div className="widgetbox3bottom">
                        <button className="widgetBox3ButtonDown">
                            <span className="widgetbox3bottomText">See 3 more</span> 
                            <KeyboardArrowDown className="box3Icon3"/>
                        </button>
                     </div>



                </div>




            <div className="widgetSmBox4">
            <span className="widgetSmBox4Title">Customer Portal</span>

                        <div className="widgetSmBox4Content">
                                <div className="widgetSmBox4ContentSection">
                                    <div className="box4ggg">
                                        <div className="box5ListIconggg">
                                        <LaptopMac className="box5ListIcon"/>
                                        </div>
                                        <div>
                                        <span className="box4text1">Web Portal</span>
                                        <span className="box4text2">TammyKStafford@dayrep.com</span>
                                        </div>
                                        </div>
                                    
                                    <div className="box4gggRight">
                                    <span className="box4gggRightText">Reset Password</span>
                                    </div>
                                </div>

                                <div className="box4ggg">
                                    <div className="box4ListIconggg">
                                    <PhoneIphone className="box4ListIcon"/>
                                    </div>
                                    <div>
                                    <span className="box4text1">Mobile App</span>
                                    <span className="box4text2">_</span>
                                    </div>
                                </div>
                       
                      
                       
                       
                       </div>
                       
                       <div className="widgetbox4bottom">
                           <button className="widgetBox4ButtonDown">
                               <span className="widgetbox4bottomText">See 3 more</span> 
                               <KeyboardArrowDown className="box4Icon3"/>
                           </button>
                        </div>

            </div>






            <div className="widgetSmBox5">
            <span className="widgetSmBox5Title">Customer Portal</span>

                        <div className="widgetSmBox5Content">
                        <ul className="box5List">
                           <li className="box5ListItems">
                               <div className="box5ggg">
                                    <div className="box5ListIconggg">
                                    <LocationOn className="box5ListIcon"/>
                                    </div>
                                    <div>
                                    <span className="box5text1"> Address </span>
                                    <span className="box5text2">TammyKStafford@dayrep.com</span>
                                    </div>
                                </div>
                           </li>
                           <li className="box5ListItems">
                           <div className="box5ggg">
                                    <div className="box5ListIconggg">
                                    <Transgender className="box5ListIcon"/>
                                    </div>
                                    <div>
                                    <span className="box5text1"> Gender </span>
                                    <span className="box5text2">Female</span>
                                    </div>
                                </div>
                           </li>
                           <li className="box5ListItems">
                           <div className="box5ggg">
                                    <div className="box5ListIconggg">
                                    <House className="box5ListIcon"/>
                                    </div>
                                    <div>
                                    <span className="box5text1"> Location </span>
                                    <span className="box5text2">Cameron</span>
                                    </div>
                                </div>
                           </li>
                           <li className="box5ListItems">
                           <div className="box5ggg">
                                    <div className="box5ListIconggg">
                                    <DateRange className="box5ListIcon"/>
                                    </div>
                                    <div>
                                    <span className="box5text1"> Created on </span>
                                    <span className="box5text2">July 28, 2021 3:16 PM</span>
                                    </div>
                                </div>
                           </li>
                           <li className="box5ListItems">
                           <div className="box5ggg">
                                    <div className="box5ListIconggg">
                                    <Cake className="box5ListIcon"/>
                                    </div>
                                    <div>
                                    <span className="box5text1">Date of Birth</span>
                                    <span className="box5text2">February 07, 1996</span>
                                    </div>
                                </div>
                           </li>
                           <li className="box5ListItems">
                           <div className="box5ggg">
                                    <div className="box5ListIconggg">
                                    <AirplanemodeActive className="box5ListIcon"/>
                                    </div>
                                    <div>
                                    <span className="box5text1">Caribbean Airline Number</span>
                                    <span className="box5text2">4521023654</span>
                                    </div>
                                </div>
                           </li>
                       </ul>

                       
                       </div>
                       
                       <div className="widgetbox5bottom">
                           <button className="widgetBox5ButtonDown">
                               <span className="widgetbox5bottomText">See 20 more</span> 
                               <KeyboardArrowDown className="box5Icon3"/>
                           </button>
                        </div>


            </div>

        </div>
    )
}
