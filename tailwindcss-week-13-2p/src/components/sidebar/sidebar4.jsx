import { useState } from "react";

export const Sidebar4 =() =>{
    const [open , setOpen] = useState(true)

    return <div>
        <div className="flex">
            <div className={`${open ? "w-72" :"w-16"} h-screen transition-all duration-300`}>
                <div className={`h-full bg-grey-50 ${open ? "p-4" : "p-2"}`}>
                    <button onClick={()=>{setOpen(e => !e)}} className="">
                        Close
                    </button>
                    {
                        
                    }
                </div>

            </div>
        </div>
    </div>
}