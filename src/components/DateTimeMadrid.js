import React, { useEffect, useState } from 'react'
// const e = React.createElement;


function DateTimeMadrid() {
    const [DateTimeMadridState, setDateTimeMadridState] = useState()

    useEffect(() => {
        setInterval(() => {

              const dateTimeFormat = new Intl.DateTimeFormat("es-ES", {
                dateStyle: "full",
                timeStyle: "full",
                // calendar: "gregory",
                // numberingSystem: "latn",
                // day: "numeric",
                // month: "numeric",
                // year: "numeric",
                // hour: 'numeric',
                // minute: 'numeric',
                // second: 'numeric',
                timeZone: "Europe/Madrid"
              });
              const dateMadrid = dateTimeFormat.format(new Date());
            setDateTimeMadridState(dateMadrid);
        }, 1000);
        
    }, []);
    
    
    
    return (
        <div>
            {DateTimeMadridState}
        </div>
    )
}

export default DateTimeMadrid
