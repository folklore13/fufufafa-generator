import { useState } from "react"

export default function Status(){
    const [status, setStatus] = useState("Input your text here");

    const handleStatusChange = (event: any) => {
        setStatus(event.target.value);
    }

    return(
        <>
            <p className="text-lg text-black text-left mt-2.5">{status}</p>

            <div className="mt-3">
                <input className="border-1 border-gray-300 rounded-2xl p-1 w-full text-black text-center" type="text" name="status" id="status" placeholder="Input your text here" onChange={handleStatusChange}/>
            </div>
        </>
    )
}