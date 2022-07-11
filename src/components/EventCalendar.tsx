import React, {FC} from 'react';
import {Calendar} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatData} from '../utils/data'

interface EventCalendarProps {
    events: IEvent[];
}



const EventCalendar: FC<EventCalendarProps> = (props) => {
 
    function dateCellRender(value: Moment) {
        const formatedDate = formatData(value.toDate());
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div key={index}>{ev.description}</div>
                )}
            </div>
        );
    }

    return (
        <Calendar
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;