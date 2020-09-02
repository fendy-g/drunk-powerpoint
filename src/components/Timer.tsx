import React, {useEffect, useState} from 'react';

export const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState(0);
    const [timeString, setTimeString] = useState('');
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset(){
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        function dateString(){
            const date = new Date(seconds*1000);
            return `${date.toLocaleTimeString([], {second: '2-digit', minute: '2-digit'})}`;
        }

        const interval = setInterval(() => {
            if (isActive){
                setSeconds(seconds => seconds + 1);
            }
            setTimeString(dateString())
        }, 1000);
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    

    return (
       <div>
            <div>{timeString}</div>
            <button onClick={toggle}>
                STAP
            </button>
        </div>
    );
}