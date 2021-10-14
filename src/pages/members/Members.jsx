import React from 'react'
import Featuredinfo from '../../components/featuredinfo/Featuredinfo'
import WidgetLarge from '../../components/widgetlarge/WidgetLarge'
import WidgetSmall from '../../components/widgetsmall/WidgetSmall'




import './members.css'

export default function Members() {
    return (
        <div className="members">
            <Featuredinfo/>
            <div className="membersWidget">
            <WidgetSmall/>
            <WidgetLarge/>
            </div>
        </div>
    )
}
