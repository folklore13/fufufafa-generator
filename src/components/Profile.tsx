import Fufufafa from '../assets/fufufafa.jpg';
import { useEffect, useState } from "react";

function useDateTimeNow() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, [now]);

    return now;
}

export default function Profile(){
    const now = useDateTimeNow();

    const formattedDate = `${String(now.getDate()).padStart(2, '0')}-${String(
        now.getMonth() + 1
    ).padStart(2, '0')}-${now.getFullYear()}`;
    
    const formattedTime = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });
    return(
        <div className="flex items-center gap-x-4">
            <div>
                <img className="rounded-full" width={40} src={Fufufafa} alt="Fufufafa's Profile" />
            </div>
            <div className="flex flex-col text-left">
                <div className="flex items-center gap-x-2">
                    <p className="text-lg text-black">fufufafa</p>
                    <div className='flex items-center gap-x-0.5'>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-500'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-500'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-500'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-400'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-400'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-400'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-300'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-300'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-200'></div>
                        <div className='w-1.5 h-2.5 rounded-full bg-green-200'></div>
                    </div>
                </div>
                <p className="text-lg text-gray-300">KASKUS Addict | {formattedDate} {formattedTime}</p>
            </div>
        </div>
    );
}