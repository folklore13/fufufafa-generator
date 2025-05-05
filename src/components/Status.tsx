import { useState } from "react"

export default function Status(){
    const [status, setStatus] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi explicabo fugit quia corrupti laboriosam dolore repellat libero incidunt voluptatem velit non sed, inventore, debitis, consequuntur sint necessitatibus saepe labore ipsam!");

    const handleStatusChange = (event: any) => {
        setStatus(event.target.value);
    }

    return(
        <div className="mb-5">
            <p className="text-lg text-black text-left mt-2.5">{status}</p>

            <div className="mt-3">
                <input className="border-1 border-gray-300 rounded-2xl p-1 w-full text-black text-center" type="text" name="status" id="status" placeholder="Input your text here" onChange={handleStatusChange}/>
            </div>
        </div>
    )
}