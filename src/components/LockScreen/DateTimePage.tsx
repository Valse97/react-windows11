import React, { useEffect, useState } from "react";
import Moment from 'moment';
interface DateTimePageProps {
    handleSuccess: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function DateTimePage(props:DateTimePageProps) {

    const [date, setDate] = useState<Date>();

    useEffect(() => {
        window.addEventListener('keypress', e => {
            if (e.code === 'Space' || e.code === 'Enter') {
                //let a : (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void = e;
                //props.handleSuccess(a) //MouseEvent<HTMLDivElement, MouseEvent>
            }
        });
        setInterval(() => { setDate(new Date()); },30000);
    }, []);

    return ( <div className={"lock-screen-datetime"} onClick={props.handleSuccess} >
        <div className="time-container">
        {Moment(date).format('HH:mm')}
        </div>
        <div className="date-container">
        {Moment(date).format('dddd, DD MMMM')}
        </div>
    </div> );
}

export default DateTimePage;