import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";

function SendSMS() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        if (time <= 0) return;

        const myInterval = setInterval(() => {
            setTime((prev) => prev - 1)
        }, 1000);

        return () => clearInterval(myInterval);
    }, [time]);

    return (
        <>
            <Button disabled={time > 0} variant="contained" onClick={() => setTime(30)}>Start</Button>
            {time ? <Typography>נותרו {time} שניות</Typography> : null}
        </>
    );
}

export default SendSMS;
